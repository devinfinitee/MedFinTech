# PalmPay Integration for MEDFINTECH CONFERENCE 2026

This document outlines the PalmPay payment integration implemented for the MEDFINTECH Conference website.

## Overview

The website now supports PalmPay payment processing for:
- Conference ticket purchases (Student, General, VIP)
- Hotel accommodation bookings
- Registration payments

## Files Added/Modified

### API Endpoints
- `api/init-palmpay.ts` - Initializes PalmPay payments
- `api/verify-palmpay.ts` - Verifies payment status

### Client-side Integration  
- `client/src/lib/palmpay.ts` - PalmPay service utility class
- `client/src/pages/PaymentSuccess.tsx` - Payment confirmation page

### Updated Pages
- `client/src/pages/Registration.tsx` - Added PalmPay payment for registration
- `client/src/pages/Ticketing.tsx` - Added PalmPay payment buttons for tickets
- `client/src/pages/Accommodation.tsx` - Added PalmPay payment for hotel bookings
- `client/src/App.tsx` - Added payment success route

## Environment Variables

Required environment variables in `.env`:
```
PALMPAY_MERCHANT_ID=your_merchant_id
PALMPAY_API_KEY=your_api_key  
PALMPAY_SECRET_KEY=your_secret_key
```

## Payment Flow

1. User selects service (ticket/accommodation)
2. Enters details via form or prompts
3. System calls `PalmPayService.initializePayment()`
4. User redirected to PalmPay payment page
5. After payment, user redirected to success page
6. System verifies payment status via API

## Pricing Configuration

Ticket prices (in Naira):
- Student Pass: ₦10,000
- General Admission: ₦20,000  
- VIP Access: ₦35,000

Hotel rates per night:
- BON Hotel Ogbomoso: ₦25,000
- Heritage Hotel & Suites: ₦18,000
- De Metro Hotel: ₦15,000

## Security Considerations

- API keys stored securely in environment variables
- Payment verification on server-side
- Transaction references generated with timestamp + random
- Customer data validated before payment processing

## Testing

To test the integration:
1. Set up PalmPay sandbox credentials
2. Use test payment amounts
3. Verify successful redirection and confirmation
4. Check payment verification workflow

## Support

For PalmPay integration issues:
- Check PalmPay merchant dashboard
- Verify API credentials and environment setup
- Review server logs for payment errors
- Contact PalmPay support for API-specific issues