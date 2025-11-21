import Category from "@/models/categoryModels";

export const createCategoryService = async (data: { name: string; description?: string }) => {
  const { name, description } = data;

  if (!name) throw new Error("Category name is required");

  const exists = await Category.findOne({ name });
  if (exists) throw new Error("Category already exists");

  const newCategory = await Category.create({ name, description });

  return newCategory;
};

export const getAllCategoriesService = async () => {
  const categories = await Category.find().sort({ createdAt: -1 });
  return categories;
};

export const getCategoryService = async (id: string) => {
  const category = await Category.findById(id);
  if (!category) throw new Error("Category not found");
  return category;
};

export const updateCategoryService = async (id: string, data: { name?: string; description?: string }) => {
  const category = await Category.findById(id);
  if (!category) throw new Error("Category not found");

  category.name = data.name || category.name;
  category.description = data.description || category.description;

  await category.save();
  return category;
};

export const deleteCategoryService = async (id: string) => {
  const category = await Category.findByIdAndDelete(id);
  if (!category) throw new Error("Category not found");
  return true;
};
