import mongoose from "mongoose";

export const conectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://dortizo:12345@clustedemo.n4rpq8e.mongodb.net/FaztProject?retryWrites=true&w=majority"
    );
    console.log("Conectado a la Base de Datos")
  } catch (error) {
    console.log(error);
  }
};
