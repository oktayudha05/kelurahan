export function formatTanggal(tanggal: string | Date) {
  const bulanNama = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const tanggalObj = new Date(tanggal);
  const hari = tanggalObj.getDate();
  const bulan = bulanNama[tanggalObj.getMonth()];
  const tahun = tanggalObj.getFullYear();

  return `${hari} ${bulan} ${tahun}`;
}
