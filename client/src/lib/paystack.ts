// Paystack payment utility for MEDFINTECH Conference 2026

export interface PaystackPaymentData {
  amount: number;
  email: string;
  phone: string;
  name: string;
  itemType: string;
  redirectUrl: string;
}

export interface PaystackResponse {
  status: string;
  paymentUrl: string;
  reference: string;
  paystackResponse: any;
}

export class PaystackService {
  private static generateReference(): string {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 10000);
    return `MEDFINTECH_${timestamp}_${random}`;
  }

  static async initializePayment(paymentData: PaystackPaymentData): Promise<PaystackResponse> {
    const txRef = this.generateReference();

    try {
      const response = await fetch('/api/init-paystack', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...paymentData,
          txRef,
          currency: 'NGN',
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Payment initialization failed');
      }

      const data = await response.json();

      return {
        status: data.status,
        paymentUrl: data.authorization_url,
        reference: txRef,
        paystackResponse: data.paystackResponse,
      };
    } catch (error) {
      console.error('Paystack initialization error:', error);
      throw error;
    }
  }

  static async verifyPayment(reference: string): Promise<any> {
    try {
      const response = await fetch(`/api/verify-paystack?reference=${reference}`);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Payment verification failed');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Paystack verification error:', error);
      throw error;
    }
  }

  static redirectToPayment(paymentUrl: string): void {
    window.location.href = paymentUrl;
  }

  // Ticket pricing configuration
  static getTicketPricing() {
    return {
      student: {
        amount: 1000,
        displayPrice: '₦1,000',
        originalPrice: null,
        discount: null,
      },
      general: {
        amount: 5000,
        displayPrice: '₦5,000',
        originalPrice: null,
        discount: null,
      },
      vip: {
        amount: 15000,
        displayPrice: '₦15,000',
        originalPrice: null,
        discount: null,
      },
    };
  }

  // Hotel pricing configuration
  static getHotelPricing() {
    return {
      'classic-room': {
        amount: 25000,
        displayPrice: '₦25,000',
        originalPrice: null,
      },
      'imperial-room': {
        amount: 28000,
        displayPrice: '₦28,000',
        originalPrice: null,
      },
      'luxury-room': {
        amount: 30000,
        displayPrice: '₦30,000',
        originalPrice: null,
      },
      'junior-suite': {
        amount: 35000,
        displayPrice: '₦35,000',
        originalPrice: null,
      },
      'ambassadorial-suite': {
        amount: 40000,
        displayPrice: '₦40,000',
        originalPrice: null,
      },
      'presidential-suite': {
        amount: 60000,
        displayPrice: '₦60,000',
        originalPrice: null,
      },
    };
  }
}

// Success page redirect URLs
export const getSuccessUrl = (type: 'ticket' | 'accommodation', itemId?: string) => {
  const baseUrl = window.location.origin;

  if (type === 'ticket') {
    return `${baseUrl}/payment-success?type=ticket&item=${itemId || 'conference'}`;
  } else if (type === 'accommodation') {
    return `${baseUrl}/payment-success?type=accommodation&item=${itemId || 'hotel'}`;
  }

  return `${baseUrl}/payment-success`;
};
