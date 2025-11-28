import productModel from "@/models/productsModels";
import { IProduct } from "@/types/products";

// CREATE PRODUCT LOGIC
export const createProductService = async (data: Partial<IProduct>) => {
  //ពិនិត្យមើល តើ product មានរួចហើយតាម name 
  const existProduct = await productModel.findOne({ name: data.name });
  //ប្រសិនបើមាន រួចហើយ ត្រឡប់តម្លៃ null
  if (existProduct) return null; // Service only returns data or null
// ប្រសិនបើមិនមាន បង្កើត product ថ្មី
  const newProduct = await productModel.create(data);
  // ត្រឡប់តម្លៃ product ថ្មី
  return newProduct;
};

// GET ALL PRODUCTS LOGIC
//ទាញយក products ទាំងអស់ ពី database
export const getAllProductsService = async () => {
  //ទាញយក products ទាំងអស់
  const products = await productModel.find();
  return products;
};

// GET SINGLE PRODUCT LOGIC
//ទាញ product តែមួយ ដោយផ្អែកលើ id
export const getProductService = async (id: string) => {
  //ទាញ product តាម id
  const product = await productModel.findById(id);
  //ត្រឡប់តម្លៃ product ឬ null ប្រសិនបើមិនមាន
  return product; // null if not found
};

// UPDATE PRODUCT LOGIC
//ធ្វើបច្ចុប្បន្នភាព product ដោយផ្អែកលើ id និង data ថ្មី
export const updateProductService = async (id: string, data: Partial<IProduct>) => {
  //{ new: true } → ត្រឡប់ data ថ្មីក្រោយ update
  const product = await productModel.findByIdAndUpdate(id, data, { new: true });
  //ត្រឡប់តម្លៃ product ថ្មី ឬ null ប្រសិនបើមិនមាន
  return product; // null if not found
};

// DELETE PRODUCT LOGIC
//លុប product ដោយផ្អែកលើ id
export const deleteProductService = async (id: string) => {
  //លុប product តាម id
  const product = await productModel.findByIdAndDelete(id);
  //ត្រឡប់តម្លៃ product ឬ null ប្រសិនបើមិនមាន
  return product; // null if not found
};

// GET products BY Detail
export const getProductsByDetailService = async (id: string) => {
  //ទាញយក products ដែលមាន detail តាម keyword
  const products = await productModel.find({ detail: { $regex: id, $options: "id" } });
  return products;
};


