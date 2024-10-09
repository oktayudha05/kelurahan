export default function NoDocument() {
  return (
    <div className="mb-4">
      <label
        htmlFor="no_document"
        className="block text-sm font-medium text-gray-700"
      >
        Nomor Dokumen
      </label>
      <input
        type="number"
        name="no_document"
        id="no_document"
        className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        placeholder="Nomor Dokumen"
        style={{ appearance: "none", MozAppearance: "textfield" }}
        required
      />
    </div>
  );
}
