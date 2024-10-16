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
  lahir: string,
  warganegara: string,
  nik: string,
  pekerjaan: string,
  alamat: string,
  rt: string,
  tanggal: string,
  noReg: string,
  agama: string,
  perkawinan: string,
  keperluan: string,
  ketLain: string,
  namaPetugas: string,
  buktiDiri: string
) => {
  const { PDFDocument, rgb } = PDFLib;
  const domain = process.env.URL;
  const url = `${domain}/assets/SuratPengantar-fil.pdf`;
  const existingPdfBytes = await fetch(url).then((res) => res.arrayBuffer());

  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  const form = pdfDoc.getForm();

  try {
    form.getTextField("nomor").setText(noDocument);
    form.getTextField("nama").setText(namaLengkap);
    form.getTextField("jk").setText(jenisKelamin);
    form.getTextField("ttl").setText(lahir);
    form.getTextField("warganegara").setText(warganegara);
    form.getTextField("agama").setText(agama);
    form.getTextField("pekerjaan").setText(pekerjaan);
    form.getTextField("kawin").setText(perkawinan);
    form.getTextField("tinggal").setText(alamat);
    form.getTextField("bukti_diri").setText(buktiDiri);
    form.getTextField("keperluan").setText(keperluan);
    form.getTextField("ketLain").setText(ketLain);
    form.getTextField("berlaku").setText("1 Bulan sejak surat dikeluarkan");
    form.getTextField("tanggal").setText(tanggal);
    form.getTextField("no_reg").setText(noReg);
    form.getTextField("tanggal_surat").setText(tanggal);
    form.getTextField("nama_pemohon").setText(namaLengkap);
    form.getTextField("nama_camat").setText(namaPetugas);
  } catch (error) {
    console.error("Error filling PDF fields:", error);
    throw new Error("Error filling PDF fields");
  }

  const pdfBytes = await pdfDoc.save();
  return pdfBytes;
};

export async function handleSubmit(formData: FormData): Promise<Uint8Array> {
  const tanggal = formatTanggal(new Date());
  const jenisDocument = toTitleCase("surat pengantar");
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
  const noReg = formData.get("no_reg") as string;
  const keperluan = toTitleCase(formData.get("keperluan") as string);
  const ketLain = toTitleCase(formData.get("keterangan_lain") as string);
  const buktiDiri = toTitleCase(formData.get("bukti_diri") as string);

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
    lahir,
    warganegara,
    nik,
    pekerjaan,
    alamat,
    rt,
    tanggal,
    noReg,
    agama,
    perkawinan,
    keperluan,
    ketLain,
    namaPetugas,
    buktiDiri
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
