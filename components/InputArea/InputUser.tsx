export default function InputUser({
  showBuktiDiri = false,
  showKeteranganLain = false,
  showNoReg = false,
  showNamaLengkap = true,
  showJenisKelamin = true,
  showNamaAyah = true,
  showTempatLahir = true,
  showTanggalLahir = true,
  showAgama = true,
  showPerkawinan = true,
  showWarganegara = true,
  showKtpNik = true,
  showPekerjaan = true,
  showAlamat = true,
  showRtRw = true,
  showKeperluan = true,
  showUsaha = false,
}) {
  return (
    <>
      {showBuktiDiri && (
        <div className="mb-4">
          <label
            htmlFor="bukti_diri"
            className="block text-sm font-medium text-gray-700"
          >
            Bukti Diri
          </label>
          <select
            id="bukti_diri"
            name="bukti_diri"
            defaultValue="-"
            className="mt-1 text-gray-500 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="tidak terlampir">Tidak terlampir</option>
            <option value="terlampir">Terlampir</option>
          </select>
        </div>
      )}

      {showKeteranganLain && (
        <div className="mb-4">
          <label
            htmlFor="keterangan_lain"
            className="block text-sm font-medium text-gray-700"
          >
            Keterangan Lain
          </label>
          <input
            id="keterangan_lain"
            name="keterangan_lain"
            type="text"
            className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Keterangan Lain"
          />
        </div>
      )}

      {showNoReg && (
        <div className="mb-4">
          <label
            htmlFor="no_reg"
            className="block text-sm font-medium text-gray-700"
          >
            Nomor Registrasi
          </label>
          <input
            id="no_reg"
            name="no_reg"
            type="number"
            className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Nomor Registrasi"
            style={{ appearance: "none", MozAppearance: "textfield" }}
            required
          />
        </div>
      )}
      {showKeperluan && (
        <div className="mb-4">
          <label
            htmlFor="keperluan"
            className="block text-sm font-medium text-gray-700"
          >
            Keperluan
          </label>
          <input
            id="keperluan"
            name="keperluan"
            type="text"
            className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="keperluan"
            required
          />
        </div>
      )}
      {showUsaha && (
        <div className="mb-4">
          <label
            htmlFor="usaha"
            className="block text-sm font-medium text-gray-700"
          >
            Nama Usaha
          </label>
          <input
            id="usaha"
            name="usaha"
            type="text"
            className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="usaha"
            required
          />
        </div>
      )}

      {showNamaLengkap && (
        <div className="mb-4">
          <label
            htmlFor="nama_lengkap"
            className="block text-sm font-medium text-gray-700"
          >
            Nama Lengkap
          </label>
          <input
            type="text"
            id="nama_lengkap"
            name="nama_lengkap"
            className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Nama Lengkap"
            required
          />
        </div>
      )}

      {showJenisKelamin && (
        <div className="mb-4">
          <label
            htmlFor="jenis_kelamin"
            className="block text-sm font-medium text-gray-700"
          >
            Jenis Kelamin
          </label>
          <select
            id="jenis_kelamin"
            name="jenis_kelamin"
            defaultValue="-"
            required
            className="mt-1 text-gray-500 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">--</option>
            <option value="Laki-laki">Laki-laki</option>
            <option value="Perempuan">Perempuan</option>
          </select>
        </div>
      )}

      {showNamaAyah && (
        <div className="mb-4">
          <label
            htmlFor="nama_ayah"
            className="block text-sm font-medium text-gray-700"
          >
            Nama Ayah
          </label>
          <input
            id="nama_ayah"
            name="nama_ayah"
            type="text"
            className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Nama Ayah"
            required
          />
        </div>
      )}

      {showTempatLahir && (
        <div className="grid gap-6 grid-cols-2">
          <div className="mb-4">
            <label
              htmlFor="tempat_lahir"
              className="block text-sm font-medium text-gray-700"
            >
              Tempat Lahir
            </label>
            <input
              id="tempat_lahir"
              name="tempat_lahir"
              type="text"
              className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Tempat Lahir"
              required
            />
          </div>

          {showTanggalLahir && (
            <div className="mb-4">
              <label
                htmlFor="tanggal_lahir"
                className="block text-sm font-medium text-gray-700"
              >
                Tanggal Lahir
              </label>
              <input
                id="tanggal_lahir"
                name="tanggal_lahir"
                type="date"
                required
                className="mt-1 text-gray-500 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          )}
        </div>
      )}

      {showWarganegara && (
        <div className="mb-4">
          <label
            htmlFor="warganegara"
            className="block text-sm font-medium text-gray-700"
          >
            Kewarganegaraan
          </label>
          <input
            id="warganegara"
            name="warganegara"
            type="text"
            className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Kewarganegaraan"
            required
          />
        </div>
      )}

      {showKtpNik && (
        <div className="mb-4">
          <label
            htmlFor="no_ktp_nik"
            className="block text-sm font-medium text-gray-700"
          >
            Nomor Induk Kependudukan
          </label>
          <input
            id="no_ktp_nik"
            name="no_ktp_nik"
            type="number"
            className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Nomor Induk Kependudukan"
            style={{ appearance: "none", MozAppearance: "textfield" }}
            required
          />
        </div>
      )}

      {showAgama && (
        <div className="mb-4">
          <label
            htmlFor="agama"
            className="block text-sm font-medium text-gray-700"
          >
            Agama
          </label>
          <select
            name="agama"
            id="agama"
            defaultValue="-"
            required
            className="mt-1 text-gray-500 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">--</option>
            <option value="islam">Islam</option>
            <option value="katolik">Katolik</option>
            <option value="kristen">Protestan</option>
            <option value="hindu">Hindu</option>
            <option value="budha">Budha</option>
            <option value="khonghucu">Khonghucu</option>
          </select>
        </div>
      )}

      {showPerkawinan && (
        <div className="mb-4">
          <label
            htmlFor="perkawinan"
            className="block text-sm font-medium text-gray-700"
          >
            Status Perkawinan
          </label>
          <select
            name="perkawinan"
            id="perkawinan"
            defaultValue="-"
            required
            className="mt-1 text-gray-500 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">--</option>
            <option value="kawin">Kawin</option>
            <option value="belumKawin">Belum Kawin</option>
          </select>
        </div>
      )}

      {showPekerjaan && (
        <div className="mb-4">
          <label
            htmlFor="pekerjaan"
            className="block text-sm font-medium text-gray-700"
          >
            Pekerjaan
          </label>
          <input
            id="pekerjaan"
            name="pekerjaan"
            type="text"
            className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Pekerjaan"
            required
          />
        </div>
      )}

      {showAlamat && (
        <div className="mb-4">
          <label
            htmlFor="alamat"
            className="block text-sm font-medium text-gray-700"
          >
            Alamat
          </label>
          <input
            id="alamat"
            name="alamat"
            type="text"
            className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Alamat (Tanpa RT/RW)"
            required
          />
        </div>
      )}

      {showRtRw && (
        <div className="grid gap-6 mb-6 grid-cols-2">
          <div>
            <label
              htmlFor="rt"
              className="block text-sm font-medium text-gray-700"
            >
              RT
            </label>
            <input
              id="rt"
              name="rt"
              type="number"
              className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="RT"
              style={{ appearance: "none", MozAppearance: "textfield" }}
              required
            />
          </div>
          <div>
            <label
              htmlFor="rw"
              className="block text-sm font-medium text-gray-700"
            >
              RW
            </label>
            <input
              id="rw"
              name="rw"
              type="number"
              className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="RW"
              style={{ appearance: "none", MozAppearance: "textfield" }}
              required
            />
          </div>
        </div>
      )}
    </>
  );
}
