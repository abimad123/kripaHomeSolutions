export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  mrp: number;
  offerPrice?: number;
  image: string;
  rating: number;
  description: string;
  features: string[];
}

export interface Category {
  id: string;
  name: string;
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface Video {
  id: string;
  title: string;
  expert: string;
  thumbnail: string;
  duration: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}