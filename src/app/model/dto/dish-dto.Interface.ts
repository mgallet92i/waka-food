import { DishCategory } from "../enum/dish-category";

export interface DishDtoInterface {
  label: string;
  category: DishCategory
  price: number;
  description: string;
  img: string
}
