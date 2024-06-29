import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://erfansharafi60:uIrNJz58nOkts5kE@cluster0.c4izxlf.mongodb.net/food-del"
    )
    .then(() => console.log("DB Connected"));
};
