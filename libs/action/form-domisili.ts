/* eslint-disable @typescript-eslint/no-unused-vars */
"use server";

import * as PDFLib from "pdf-lib";
import { formatTanggal } from "@/utils/formatTanggal";
import { toTitleCase } from "@/utils/toTitleCase";
import dbConnect from "../mongodb";
import Pdf from "@/schema/pdfSchema";
import { Buffer } from "buffer";

const fillPDF = async (
  jenisDocument: string,
  noDocument: string,
  namaLengkap: string,
  jenisKelamin: string,
  namaAyah: string,
  lahir: string,
  agama: string,
  warganegara: string,
  nik: string,
  pekerjaan: string,
  alamat: string,
  rt: string,
  tanggal: string,
  keperluan: string
) => {
  const { PDFDocument, rgb } = PDFLib;
  const domain = process.env.URL;
  const url = `${domain}/assets/domisilifil.pdf`;
  const existingPdfBytes = await fetch(url).then((res) => res.arrayBuffer());

  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  const form = pdfDoc.getForm();

  try {
    form.getTextField("no_atas").setText(noDocument);
    form.getTextField("nama_lengkap").setText(namaLengkap);
    form.getTextField("jk").setText(jenisKelamin);
    form.getTextField("bin").setText(namaAyah);
    form.getTextField("ttl").setText(lahir);
    form.getTextField("agama").setText(agama);
    form.getTextField("warganegara").setText(warganegara);
    form.getTextField("nik").setText(nik);
    form.getTextField("pekerjaan").setText(pekerjaan);
    form.getTextField("alamat").setText(alamat);
    form.getTextField("no_rt").setText(rt);
    form.getTextField("tanggal_bawah").setText(tanggal);
    form.getTextField("keperluan").setText(keperluan);
    form.getTextField("tgl_ttd").setText(tanggal);
    form.getTextField("nama_ttd").setText(namaLengkap);
  } catch (error) {
    console.error("Error filling PDF fields:", error);
    throw new Error("Error filling PDF fields");
  }

  const pdfBytes = await pdfDoc.save();
  return pdfBytes;
};

export async function handleSubmit(formData: FormData): Promise<Uint8Array> {
  const tanggal = formatTanggal(new Date());
  const jenisDocument = toTitleCase("surat keterangan domisili");
  const noDocument = formData.get("no_document") as string;
  const namaPetugas = toTitleCase(
    (formData.get("nama_petugas") as string) || "Admin"
  );
  const namaLengkap = toTitleCase(formData.get("nama_lengkap") as string);
  const jenisKelamin = toTitleCase(formData.get("jenis_kelamin") as string);
  const namaAyah = toTitleCase(formData.get("nama_ayah") as string);
  const tempatLahir = toTitleCase(formData.get("tempat_lahir") as string);
  const tanggalLahir = formData.get("tanggal_lahir") as string;
  const lahir = `${tempatLahir}, ${formatTanggal(tanggalLahir)}`;
  const agama = toTitleCase(formData.get("agama") as string);
  const perkawinan = toTitleCase(formData.get("perkawinan") as string);
  const warganegara = toTitleCase(formData.get("warganegara") as string);
  const nik = formData.get("no_ktp_nik") as string;
  const pekerjaan = toTitleCase(formData.get("pekerjaan") as string);
  const alamat = toTitleCase(formData.get("alamat") as string);
  let rt = formData.get("rt") as string;
  let rw = formData.get("rw") as string;
  const keperluan = toTitleCase(formData.get("keperluan") as string);

  if (rt.length === 1) {
    rt = `0${rt}`;
  }

  if (rw.length === 1) {
    rw = `0${rw}`;
  }

  console.log(
    `${jenisDocument} dengan nomor dokumen ${noDocument} telah dibuat oleh ${namaPetugas} pada tanggal ${tanggal}`
  );

  // Isi PDF
  const pdfBytes = await fillPDF(
    jenisDocument,
    noDocument,
    namaLengkap,
    jenisKelamin,
    namaAyah,
    lahir,
    agama,
    warganegara,
    nik,
    pekerjaan,
    alamat,
    rt,
    tanggal,
    keperluan
  );

  // Simpan PDF ke MongoDB
  await dbConnect();

  const pdfBuffer = Buffer.from(pdfBytes);
  const newPdf = new Pdf({
    name: namaLengkap,
    jenis_document: jenisDocument,
    no_document: noDocument,
    pdfData: pdfBuffer,
  });

  await newPdf.save();
  console.log(`PDF untuk ${namaLengkap} berhasil disimpan ke MongoDB`);

  return pdfBytes;
}
