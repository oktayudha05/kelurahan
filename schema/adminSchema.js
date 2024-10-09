import mongoose, { Schema } from "mongoose";

const adminSchema = new Schema({
  nama: { type: String, required: true },
  jabatan: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const Admin = mongoose.models.Admin || mongoose.model("Admin", adminSchema);

export default Admin;
