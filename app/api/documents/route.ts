import dbConnect from "@/libs/mongodb";
import Pdf from "@/schema/pdfSchema";

export async function GET() {
  console.log("koneksi ke database");
  await dbConnect();
  console.log("koneksi berhasil");

  try {
    console.log("mencari pdfs");
    const pdfs = await Pdf.find({}, "name jenis_document no_document _id");
    console.log("pdfs ditemukan");
    return new Response(JSON.stringify(pdfs), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response("Gagal memuat daftar PDF", { status: 500 });
  }
}
