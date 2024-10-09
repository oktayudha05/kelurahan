import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen justify-center items-center">
        <h1 className="absolute top-8 left-0 right-0 text-2xl md:text-4xl font-bold text-white mb-8 text-center shadow-md">
          Sistem Automatisasi Dokumen Desa Madusari
        </h1>

        <div className="relative w-full max-w-md">
          <div className="absolute inset-0 flex flex-col justify-center items-center space-y-4">
            <Link
              href="/form-domisili"
              className="w-4/5 md:w-96 py-3 font-bold text-center text-black bg-indigo-50 rounded-full shadow-md"
            >
              Surat Keterangan Domisili
            </Link>
            <Link
              href="/form-pengantar"
              className="w-4/5 md:w-96 py-3 font-bold text-center text-black bg-indigo-50 rounded-full shadow-md"
            >
              Surat Pengantar
            </Link>
            <Link
              href="/form-kepolisian"
              className="w-4/5 md:w-96 py-3 font-bold text-center text-black bg-indigo-50 rounded-full shadow-md"
            >
              Surat Pengantar Catatan Kepolisian
            </Link>
            <Link
              href="/form-usaha"
              className="w-4/5 md:w-96 py-3 font-bold text-center text-black bg-indigo-50 rounded-full shadow-md"
            >
              Surat Keterangan Usaha
            </Link>
            <Link
              href="/form-sktm"
              className="w-4/5 md:w-96 py-3 font-bold text-center text-black bg-indigo-50 rounded-full shadow-md"
            >
              Surat Keterangan Tidak Mampu
            </Link>
            <Link
              href="/document"
              className="w-4/5 md:w-96 py-3 font-bold text-center text-black bg-indigo-50 rounded-full shadow-md"
            >
              Lihat Dokumen
            </Link>
          </div>
        </div>

        <footer className="absolute bottom-4 text-center text-white">
          <p>Dinas Kelurahan Desa Madusari</p>
        </footer>
      </div>
    </>
  );
}
