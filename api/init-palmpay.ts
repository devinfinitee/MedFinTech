import type { VercelRequest, VercelResponse } from "@vercel/node";

// Serverless function to initialize a PalmPay payment
// Expects POST body with: { amount, currency, email, phone, name, txRef, redirectUrl, itemType }

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const merchantId = process.env.PALMPAY_MERCHANT_ID;
  const apiKey = process.env.PALMPAY_API_KEY;
  const secretKey = process.env.PALMPAY_SECRET_KEY;

  if (!merchantId || !apiKey || !secretKey) {
    return res.status(500).json({ error: "PalmPay credentials not configured" });
  }

  const { amount, currency = "NGN", email, phone, name, txRef, redirectUrl, itemType } = req.body || {};

  if (!amount || !email || !name || !txRef || !redirectUrl) {
    return res.status(400).json({ error: "Missing required payment fields" });
  }

  try {
    // Generate signature for PalmPay API
    const timestamp = Date.now();
    const nonce = Math.random().toString(36).substring(7);
    
    const paymentData = {
      merchantId,
      amount: amount * 100, // PalmPay expects amount in kobo (smallest unit)
      currency,
      reference: txRef,
      callbackUrl: redirectUrl,
      returnUrl: redirectUrl,
      customer: {
        email,
        phone,
        name,
      },
      metadata: {
        itemType: itemType || "MEDFINTECH Conference Ticket",
        conferenceDate: "March 7, 2026",
        venue: "The Assembly, Ogbomoso, Oyo State",
        service: "MEDFINTECH Conference 2026"
      },
      timestamp,
      nonce,
    };

    // PalmPay API endpoint for payment initialization
    const palmPayRes = await fetch("https://api.palmpay.com/v1/payments/initialize", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": apiKey,
        "X-MERCHANT-ID": merchantId,
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify(paymentData),
    });

    const data = await palmPayRes.json();

    if (!palmPayRes.ok || data.status !== "success") {
      console.error("PalmPay init error", data);
      return res.status(502).json({ 
        error: "Failed to initialize payment",
        details: data.message || "Unknown error"
      });
    }

    return res.status(200).json({
      status: "success",
      paymentUrl: data.data?.paymentUrl,
      reference: data.data?.reference,
      palmPayResponse: data.data,
    });
  } catch (error) {
    console.error("PalmPay API error", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}