// src/pages/Contact.js
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // For now just simulate send
    setSent(true);
  }

  return (
    <div className="max-w-lg">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      {sent ? (
        <div className="p-4 bg-green-100 text-green-800 rounded">Pesan berhasil dikirim. Terima kasih!</div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Nama</label>
            <input name="name" value={form.name} onChange={handleChange} className="mt-1 block w-full p-2 border rounded" required />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} className="mt-1 block w-full p-2 border rounded" required />
          </div>
          <div>
            <label className="block text-sm font-medium">Pesan</label>
            <textarea name="message" value={form.message} onChange={handleChange} className="mt-1 block w-full p-2 border rounded" rows={4} required />
          </div>
          <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded">Kirim</button>
        </form>
      )}

      <div className="mt-6 text-sm text-gray-600">
        <p>Email: <a className="text-indigo-600" href="mailto:kamu@example.com">kamu@example.com</a></p>
        <p>LinkedIn: <a className="text-indigo-600" href="https://linkedin.com/in/kamu" target="_blank" rel="noreferrer">linkedin.com/in/kamu</a></p>
      </div>
    </div>
  );
}