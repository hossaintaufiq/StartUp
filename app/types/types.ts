export interface Service {
    id: number;
    name: string;
    category: string;
    description?: string;
    image?: string;
    price: number;
}

export interface Category {
    id: number;
    name: string;
    icon: string;
} 