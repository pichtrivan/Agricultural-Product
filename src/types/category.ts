export interface ICategory {
  _id?: string;          // optional because MongoDB adds it
  name: string;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
