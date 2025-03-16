export interface Product{
    id: number;
    title: string;
    writer:string;
    image: string;
    price: number;
    stock?: number;
}