export default function EditNoteForm({ data, onChange, onSubmit, onCancel, loading }) {
  return (
    <form onSubmit={onSubmit} className="space-y-4 mt-4 bg-emerald-50 p-4 rounded-2xl">
      <input
        type="text"
        name="title"
        value={data.title}
        onChange={onChange}
        disabled={loading}
        required
        placeholder="Edit judul"
        className="w-full p-3 rounded-xl border border-gray-300 focus:ring-emerald-500 focus:outline-none"
      />

      <textarea
        name="content"
        value={data.content}
        onChange={onChange}
        disabled={loading}
        required
        rows="2"
        placeholder="Edit isi catatan"
        className="w-full p-3 rounded-xl border border-gray-300 focus:ring-emerald-500 focus:outline-none resize-none"
      />

      <div className="flex gap-3">
        <button
          type="submit"
          className="px-4 py-2 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 disabled:opacity-50"
          disabled={loading}
        >
          Simpan
        </button>
        <button
          type="button"
          className="px-4 py-2 bg-gray-300 rounded-xl hover:bg-gray-400"
          onClick={onCancel}
        >
          Batal
        </button>
      </div>
    </form>
  );
}
