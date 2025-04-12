// src/data/products.ts
import prod1 from "../assets/prods/prod1.webp";
import prod2 from "../assets/prods/prod2.webp";
import prod3 from "../assets/prods/prod3.webp";
import prod4 from "../assets/prods/prod4.webp";
import prod5 from "../assets/prods/prod5.webp";

export interface IProduct {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const products: IProduct[] = [
  {
    id: 1,
    title: "Picada Grande",
    description: "Para entre 4/5 personas.",
    image: prod1
  },
  {
    id: 2,
    title: "Picada Chica",
    description: "Para 2 personas.",
    image: prod2
  },
  {
    id: 3,
    title: "Picada de campo",
    description: "Con pan incluido.",
    image: prod3
  },
  {
    id: 4,
    title: "Picada Chica 2",
    description: "Para 2.",
    image: prod4
  },
  {
    id: 5,
    title: "Picada random",
    description: "De internet.",
    image: prod5
  }
];