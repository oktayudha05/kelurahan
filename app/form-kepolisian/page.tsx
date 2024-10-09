"use client";
import HomeButton from "@/components/HomeButton";
import InputUser from "@/components/InputArea/InputUser";
import InputPetugas from "@/components/InputArea/InputPetugas";
import NoDocument from "@/components/InputArea/NoDocument";
import SubmitButton from "@/components/SubmitButton";
import { handleSubmit } from "@/libs/action/form-kepolisian";

export default function FormKepolisian() {
  const formSubmit = async (formData: FormData) => {
    const pdfBytes = await handleSubmit(formData);

    const blob = new Blob([new Uint8Array(pdfBytes)], {
      type: "application/pdf",
    });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `Surat Catatan Kepolisian_${
      formData.get("nama_lengkap") as string
    }.pdf`;
    link.click();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="relative bg-white bg-opacity-80 justify-center items-center shadow-lg rounded-lg px-4 my-4 py-4 max-w-lg w-full lg:mx-8">
        <HomeButton />
        <h1 className="text-2xl font-semibold text-center mb-6 text-gray-800 pt-2">
          Surat Pengantar Catatan Kepolisian
        </h1>

        <form action={formSubmit}>
          <NoDocument />
          <InputPetugas />
          <InputUser showNamaAyah={false} showNoReg={true} />
          <SubmitButton />
        </form>
      </div>
    </div>
  );
}
