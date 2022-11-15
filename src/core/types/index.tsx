export interface CompanyStatistic {
  growth: "up" | "down";
  company: string;
  value: number;
  points: number[];
}

export interface Balance {
  name: string;
  TL: number;
  EURO: number;
  USD: number;
}

export interface Progress {
  name: "TL" | "EURO" | "USD";
  value: number;
}

export interface CreditCard {
  name: string;
  number: string;
  owner: string;
  expirationMonth: string;
  expirationYear: string;
  CV: number;
  debt: number;
  creditAvailable: number;
  cutOffDate: string;
}

export interface SendTo {
  name: string;
  surname: string;
}

export interface Payment {
  name: string;
  date: string;
  description: string;
  amount: number;
}

export interface Transaction {
  name: string;
  date: string;
  amount: number;
  growth: "up" | "down";
}

export interface FetchedData {
  balances: Balance[];
  progresses: Progress[];
  creditCards: CreditCard[];
  sendTo: SendTo[];
  payments: Payment[];
  transactions: Transaction[];
  companyStatistics: CompanyStatistic[];
}
