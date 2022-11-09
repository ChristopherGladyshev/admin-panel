export interface IProduct {
  title: string,
  description: string,
  product_text: string,
  prise: number,
  // author: { type: Schema.Types.ObjectId, ref: 'User' },
  // category: { type: Schema.Types.ObjectId, ref: 'Category' },
  // subcategory: {  },
  price: string,
  date_of_creation: string,
  images: string[],
  number_of_goods: number,
}