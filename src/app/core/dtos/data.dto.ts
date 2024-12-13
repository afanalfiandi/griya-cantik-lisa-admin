export interface BannerDTO {
  bannerID: Number;
  img: string;
}

export interface CustomerDTO {
  customerID: Number;
  firstName: string;
  lastName: string;
  username: string;
  img: string;
}

export interface PaymentMethodDTO {
  paymentMethodID: Number;
  paymentMethodName: string;
  value: string;
  payment_type: string;
  img: string;
}

export interface PaymentStatusDTO {
  paymentStatusID: Number;
  paymentStatusName: string;
  description: string;
}

export interface ServiceDTO {
  serviceID: Number;
}

export interface ServiceCategoryDTO {
  serviceCategoryID: Number;
  serviceCategoryName: string;
  img: string;
}

export interface SpecialistDTO {
  specialistID: Number;
  specialistName: string;
  img: string;
}

export interface SlotDTO {
  slotID: Number;
  time: string;
  slot: Number;
}

export interface TransactionDTO {
  transactionNumber: string;
}

export interface TransactionStatusDTO {
  transactionStatusID: Number;
  transactionStatus: string;
}
