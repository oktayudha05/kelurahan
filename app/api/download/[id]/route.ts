import dbConnect from "@/libs/mongodb";
import Pdf from "@/schema/pdfSchema";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  await dbConnect();

  try {
    const pdfDocument = await Pdf.findById(id);

    if (!pdfDocument) {
      return new Response("PDF not found", { status: 404 });
    }

    // header file PDF
    const response = new Response(pdfDocument.pdfData, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${pdfDocument.jenis_document}_${pdfDocument.name}.pdf"`,
      },
    });

    return response;
  } catch (error) {
    console.error(error);
    return new Response("Gagal mengunduh PDF", { status: 500 });
  }
}
