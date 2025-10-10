import React from "react";

export default function Certifications() {
  const certs = [
    "Microsoft Certified: Azure AI Fundamentals",
    "Generative AI with LLMs (Coursera)",
    "Full Stack Development — IBM",
    "AWS Generative AI — AWS Educate",
  ];

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
          Certifications
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certs.map((c) => (
            <div key={c} className="p-5 border border-gray-200 dark:border-gray-800 rounded-xl bg-gray-50 dark:bg-gray-900">
              <p className="text-sm text-gray-800 dark:text-gray-200 font-medium">{c}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

