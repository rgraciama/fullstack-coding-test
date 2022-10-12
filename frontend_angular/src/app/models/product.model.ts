export interface Product {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
}

export interface CreateProductDTO extends Omit<Product, 'id'> {}

export interface UpdateProductDTO extends Partial<CreateProductDTO> {}
