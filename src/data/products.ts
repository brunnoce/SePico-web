import {prod1, prod2, prod3, prod4, prod5} from "../assets/index"

export interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const products: Product[] = [
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