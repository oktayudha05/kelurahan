export default function InputPetugas() {
  return (
    <>
      <div className="mb-4">
        <label
          htmlFor="nama_petugas"
          className="block text-sm font-medium text-gray-700"
        >
          Nama Petugas
        </label>
        <input
          type="text"
          name="nama_petugas"
          id="nama_petugas"
          className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Nama Petugas"
          required
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="jabatan"
          className="block text-sm font-medium text-gray-700"
        >
          Jabatan
        </label>
        <input
          type="text"
          name="jabatan"
          id="jabatan"
          className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="jabatan"
          required
        />
      </div>
    </>
  );
}
