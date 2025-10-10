import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    alert("✅ Thanks! I’ll get back to you shortly.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
          Let’s Connect
        </h2>
        <form onSubmit={onSubmit} className="grid gap-4 text-left">
          <input className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950" placeholder="Name" name="name" value={form.name} onChange={onChange} required />
          <input className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950" placeholder="Email" name="email" type="email" value={form.email} onChange={onChange} required />
          <input className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950" placeholder="Subject" name="subject" value={form.subject} onChange={onChange} required />
          <textarea className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 min-h-[120px]" placeholder="Message" name="message" value={form.message} onChange={onChange} required />
          <button className="w-full py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold">Send Message</button>
        </form>

         <p className="mt-8 text-gray-600 dark:text-gray-300">
          <a href="mailto:Krishna141100@gmail.com" className="text-blue-500 hover:underline">
            Krishna141100@gmail.com
          </a>
       </p>
      </div>
    </section>
  );
}

