import HomeButton from "@/components/HomeButton";
import NoDocument from "@/components/InputArea/NoDocument";
import InputUser from "@/components/InputArea/InputUser";

export default function FormDomisili() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="relative bg-white bg-opacity-80 justify-center items-center shadow-lg rounded-lg px-4 my-4 py-4 max-w-lg w-full lg:mx-8">
        <HomeButton />
        <h1 className="text-2xl font-semibold text-center mb-6 text-gray-800 pt-2">
          Surat Keterangan Domisili
        </h1>

        <form action="" method="post">
          <NoDocument />
          <InputUser showPerkawinan={false} />
        </form>
      </div>
    </div>
  );
}
