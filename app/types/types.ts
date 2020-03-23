export interface IPurchases {
    merchant_id: number,
    amount: string
}

export interface IUserStats {
    merchantId: number,
    userSpent: number,
    generalAverage: number,
    percentile: number
}
