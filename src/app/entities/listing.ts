import { SpecialPrices } from "./special-prices";

export interface Listing {
    id: string;
    ownerId: string;
    name: string;
    slug: string;
    description: string;
    adults: number;
    children: number;
    isPetsAllowed: boolean;
    basePrice: number;
    cleaningFee: number;
    imageUrl: string;
    weeklyDiscount: number;
    monthlyDiscount: number;
    SpecialPrices?: SpecialPrices[];
}
