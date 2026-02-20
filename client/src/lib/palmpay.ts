// PalmPay payment utility for MEDFINTECH Conference 2026

export interface PalmPayPaymentData {
  amount: number;
  email: string;
  phone: string;
  name: string;
  itemType: string;
  redirectUrl: string;
}

export interface PalmPayResponse {
  status: string;
  paymentUrl: string;
  reference: string;
  palmPayResponse: any;
}

export class PalmPayService {
  private static generateReference(): string {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 10000);
    return `MEDFINTECH_${timestamp}_${random}`;
  }

  static async initializePayment(paymentData: PalmPayPaymentData): Promise<PalmPayResponse> {
    const txRef = this.generateReference();
    
    try {
      const response = await fetch('/api/init-palmpay', {
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
      return data;
    } catch (error) {
      console.error('PalmPay initialization error:', error);
      throw error;
    }
  }

  static async verifyPayment(reference: string): Promise<any> {
    try {
      const response = await fetch(`/api/verify-palmpay?reference=${reference}`);
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Payment verification failed');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('PalmPay verification error:', error);
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
        amount: 10000,
        displayPrice: '₦10,000',
        originalPrice: '₦15,000',
        discount: '33% off',
      },
      general: {
        amount: 20000,
        displayPrice: '₦20,000',
        originalPrice: '₦25,000',
        discount: '20% off',
      },
      vip: {
        amount: 35000,
        displayPrice: '₦35,000',
        originalPrice: null,
        discount: null,
      },
    };
  }

  // Hotel pricing configuration
  static getHotelPricing() {
    return {
      'bon-hotel': {
        amount: 25000,
        displayPrice: '₦25,000',
        originalPrice: '₦30,000',
      },
      'heritage-hotel': {
        amount: 18000,
        displayPrice: '₦18,000',
        originalPrice: '₦22,000',
      },
      'de-metro': {
        amount: 15000,
        displayPrice: '₦15,000',
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