import type { VercelRequest, VercelResponse } from "@vercel/node";

// Serverless function to verify PalmPay payment status
// Expects GET request with query parameter: reference

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { reference } = req.query;
  const apiKey = process.env.PALMPAY_API_KEY;
  const merchantId = process.env.PALMPAY_MERCHANT_ID;

  if (!apiKey || !merchantId) {
    return res.status(500).json({ error: "PalmPay credentials not configured" });
  }

  if (!reference) {
    return res.status(400).json({ error: "Payment reference is required" });
  }

  try {
    const palmPayRes = await fetch(`https://api.palmpay.com/v1/payments/verify/${reference}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": apiKey,
        "X-MERCHANT-ID": merchantId,
        "Authorization": `Bearer ${apiKey}`,
      },
    });

    const data = await palmPayRes.json();

    if (!palmPayRes.ok) {
      console.error("PalmPay verify error", data);
      return res.status(502).json({ 
        error: "Failed to verify payment",
        details: data.message || "Unknown error"
      });
    }

    return res.status(200).json({
      status: data.status,
      data: data.data,
      verified: data.data?.status === "successful",
      amount: data.data?.amount,
      reference: data.data?.reference,
      customer: data.data?.customer,
      metadata: data.data?.metadata,
    });
  } catch (error) {
    console.error("PalmPay verify error", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}