import type { VercelRequest, VercelResponse } from "@vercel/node";

// Serverless function to verify a Paystack payment
// Expects GET request with query parameter: reference

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { reference } = req.query;
  const secretKey = process.env.PAYSTACK_SECRET_KEY;

  if (!secretKey) {
    return res.status(500).json({ error: "Paystack secret key not configured" });
  }

  if (!reference) {
    return res.status(400).json({ error: "Payment reference is required" });
  }

  try {
    const paystackRes = await fetch(
      `https://api.paystack.co/transaction/verify/${encodeURIComponent(reference as string)}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${secretKey}`,
        },
      }
    );

    const data = await paystackRes.json();

    if (!paystackRes.ok || !data.status) {
      console.error("Paystack verify error", data);
      return res.status(502).json({ error: "Failed to verify payment" });
    }

    return res.status(200).json({
      status: data.data?.status,
      verified: data.data?.status === "success",
      amount: data.data?.amount / 100, // convert back from kobo
      reference: data.data?.reference,
      customer: data.data?.customer,
      metadata: data.data?.metadata,
    });
  } catch (error) {
    console.error("Paystack verify error", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
