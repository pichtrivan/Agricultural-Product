import mongoose from "mongoose";
import dotenv from "dotenv";
import { RoleModel } from "../models/roleModels"; // adjust path if needed

dotenv.config();

async function seedCustomerRole() {
  try {
    const mongoURI = process.env.MONGODB_URI;
    if (!mongoURI) throw new Error("MONGODB_URI missing in .env");

    await mongoose.connect(mongoURI);
    console.log("✅ MongoDB connected");

    const roleName = "customer"; // lowercase
    const description = "Can view products and place orders";

    const exists = await RoleModel.findOne({ name: roleName });
    if (!exists) {
      await RoleModel.create({ name: roleName, description });
      console.log(`✅ Role '${roleName}' seeded successfully`);
    } else {
      console.log(`ℹ️ Role '${roleName}' already exists. Skipping seeding.`);
    }

    console.log("✅ Customer role seeding completed!");
  } catch (err) {
    console.error("❌ Seeding error:", err);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
}

seedCustomerRole();


// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import { RoleModel } from "../models/roleModels"; // adjust path if needed

// dotenv.config();

// async function seedFarmerRole() {
//   try {
//     const mongoURI = process.env.MONGODB_URI;
//     if (!mongoURI) throw new Error("MONGODB_URI missing in .env");

//     await mongoose.connect(mongoURI);
//     console.log("✅ MongoDB connected");

//     const roleName = "farmer"; // lowercase
//     const description = "Local farmer role";

//     const exists = await RoleModel.findOne({ name: roleName });
//     if (!exists) {
//       await RoleModel.create({ name: roleName, description });
//       console.log(`✅ Role '${roleName}' seeded successfully`);
//     } else {
//       console.log(`ℹ️ Role '${roleName}' already exists. Skipping seeding.`);
//     }

//     console.log("✅ farmer role seeding completed!");
//   } catch (err) {
//     console.error("❌ Seeding error:", err);
//   } finally {
//     await mongoose.disconnect();
//     process.exit(0);
//   }
// }

// seedFarmerRole();
