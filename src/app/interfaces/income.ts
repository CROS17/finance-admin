export interface Income {
  id?: number;
  user_id?: number;
  type_payment_id: number;
  description: string;
  amount: number;
  date_income_payment: Date;
}
