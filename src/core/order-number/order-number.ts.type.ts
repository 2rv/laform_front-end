export interface OrderPurchaseType {
  id: string;
  orderNumber: string;
  createdDate: Date;
  orderStatus: number;
  email: string;
  fullName: string;
  address: string;
  phone: string;
  comment?: string;
  price: number;
  shippingPrice: number;
  promoCode?: string;
  promoCodeDiscount: number;
}
