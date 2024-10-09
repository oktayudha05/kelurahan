import mongoose, { Schema } from "mongoose";

const PdfSchema = new Schema(
  {
    name: String,
    jenis_document: String,
    no_document: String,
    pdfData: Buffer,
  },
  { collection: "kelurahan" }
);

const Pdf = mongoose.models.Pdf || mongoose.model("Pdf", PdfSchema);

export default Pdf;
