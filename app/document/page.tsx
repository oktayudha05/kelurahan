"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import HomeButton from "@/components/HomeButton";
import LogoutButton from "@/components/LogoutButton";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

export default function Document() {
  interface PdfDocument {
    _id: string;
    jenis_document: string;
    name: string;
  }

  const [pdfs, setPdfs] = useState<PdfDocument[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchPdfDocuments = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/documents`, {
        method: "GET",
        headers: {
          "Cache-Control": "no-cache",
        },
      });
      // const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/documents`);
      const data = await res.json();
      setPdfs(data);
    } catch (error) {
      console.error("Error fetching documents:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPdfDocuments();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="absolute top-8 left-0 right-0 text-2xl md:text-4xl font-bold text-white mb-4 text-center shadow-md">
        Sistem Automatisasi Dokumen Desa Madusari
      </h1>

      <div className="relative bg-white bg-opacity-80 justify-center items-center shadow-lg rounded-lg px-4 my-4 py-4 max-w-lg w-full lg:mx-8">
        <div className="flex justify-between items-center">
          <HomeButton />
          <LogoutButton />
        </div>
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold mb-6 text-center text-gray-800 pt-2 flex-1">
            Daftar Dokumen
          </h1>
          <button
            className="ml-4 p-2 bg-blue-500 text-white text-end rounded-full shadow hover:bg-blue-600"
            onClick={fetchPdfDocuments}
            aria-label="Refresh"
            title="Refresh"
          >
            <ArrowPathIcon className="h-3 w-3" />
          </button>
        </div>
        {loading ? (
          <div className="flex justify-center items-center h-96">
            <p className="text-lg font-semibold text-gray-600">Loading...</p>
          </div>
        ) : (
          <div className="overflow-y-auto max-h-96">
            <table className="min-w-full table-auto">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-2 text-left text-gray-600">
                    Jenis Dokumen
                  </th>
                  <th className="px-4 py-2 text-left text-gray-600">
                    Nama Pemilik
                  </th>
                  <th className="px-4 py-2 text-left text-gray-600">Unduh</th>
                </tr>
              </thead>
              <tbody>
                {pdfs.map((pdf) => (
                  <tr className="border-b border-gray-300" key={pdf._id}>
                    <td className="px-4 py-2">{pdf.jenis_document}</td>
                    <td className="px-4 py-2">{pdf.name}</td>
                    <td className="px-4 py-2">
                      <Link
                        href={`/api/download/${pdf._id}`}
                        className="w-full bg-blue-600 text-white py-1 px-2 rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Download
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
