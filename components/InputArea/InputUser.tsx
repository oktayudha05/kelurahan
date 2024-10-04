export default function InputUser({
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
}) {
  return (
    <>
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
            className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Nama Lengkap"
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
            className="mt-1 text-gray-500 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="" disabled selected>
              Jenis Kelamin
            </option>
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
            type="text"
            className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Nama Ayah"
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
              type="text"
              className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Tempat Lahir"
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
                type="date"
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
            type="text"
            className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Kewarganegaraan"
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
            className="mt-1 text-gray-500 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="" disabled selected>
              Agama
            </option>
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
            className="mt-1 text-gray-500 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="" disabled selected>
              Status Perkawinan
            </option>
            <option value="kawin">Kawin</option>
            <option value="belumKawin">Belum Kawin</option>
          </select>
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
            type="number"
            className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Nomor Induk Kependudukan"
          />
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
            type="text"
            className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Pekerjaan"
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
            type="text"
            className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Alamat (Tanpa RT/RW)"
          />
        </div>
      )}

      {showRtRw && (
        <div className="grid gap-6 mb-6 grid-cols-2">
          <div>
            <label
              htmlFor="rt"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              RT
            </label>
            <input
              type="number"
              id="rt"
              className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="RT"
            />
          </div>
          <div>
            <label
              htmlFor="rw"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              RW
            </label>
            <input
              type="number"
              id="rw"
              className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="RW"
            />
          </div>
        </div>
      )}
    </>
  );
}
