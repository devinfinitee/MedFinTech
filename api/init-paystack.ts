import type { VercelRequest, VercelResponse } from "@vercel/node";

// Serverless function to initialize a Paystack payment
// Expects POST body with: { amount, currency, email, phone, name, txRef, redirectUrl, itemType }

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const secretKey = process.env.PAYSTACK_SECRET_KEY;

  if (!secretKey) {
    return res.status(500).json({ error: "Paystack secret key not configured" });
  }

  const { amount, currency = "NGN", email, phone, name, txRef, redirectUrl, itemType } = req.body || {};

  if (!amount || !email || !name || !txRef || !redirectUrl) {
    return res.status(400).json({ error: "Missing required payment fields" });
  }

  try {
    const paystackRes = await fetch("https://api.paystack.co/transaction/initialize", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${secretKey}`,
      },
      body: JSON.stringify({
        reference: txRef,
        amount: amount * 100, // Paystack expects amount in kobo
        currency,
        callback_url: redirectUrl,
        email,
        metadata: {
          phone,
          name,
          custom_fields: [
            {
              display_name: "Service",
              variable_name: "service",
              value: itemType || "MEDFINTECH Conference 2026"
            },
            {
              display_name: "Conference Date",
              variable_name: "conference_date",
              value: "7th March 2026"
            },
            {
              display_name: "Venue",
              variable_name: "venue",
              value: "The Assembly, Ogbomoso, Oyo State"
            }
          ]
        },
      }),
    });

    const data = await paystackRes.json();

    if (!paystackRes.ok || !data.status) {
      console.error("Paystack init error", data);
      return res.status(502).json({ error: "Failed to initialize payment" });
    }

    return res.status(200).json({
      status: "success",
      authorization_url: data.data?.authorization_url,
      paystackResponse: data.data,
    });
  } catch (error) {
    console.error("Paystack API error", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
