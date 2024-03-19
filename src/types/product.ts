export type Product = {
  name: string;
  image: string;
  price: number;
  weight?: number;
  specialOffer?: {
    oldPrice: number;
  };
};
