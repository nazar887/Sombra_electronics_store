export interface Product {
  id: string;
  name: string;
  price: number;
  type: string;
  customerRating: number;
  image: string;
  description?: string;
  reviews?: Review[];
}

export interface Review {
  user: string;
  comment: string;
  rating: number;
}
