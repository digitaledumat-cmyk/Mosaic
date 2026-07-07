"use client";

import { useState } from "react";
import { WHATSAPP_NUMBER } from "@/lib/constants";

type ContactFormProps = {
  labels: {
    name: string;
    email: string;
    subject: string;
    message: string;
    submit: string;
    subjects: Record<string, string>;
  };
};

export default function ContactForm({ labels }: ContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("abonnement");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Bonjour Mozaic.ma,\n\nNom : ${name}\nEmail : ${email}\nSujet : ${labels.subjects[subject]}\n\n${message}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
  };

  const inputClass =
    "w-full rounded-xl border border-white/15 bg-ma-green-dark px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-ma-red focus:outline-none focus:ring-1 focus:ring-ma-red";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs font-semibold text-white/80">
            {labels.name}
          </label>
          <input id="name" required value={name} onChange={(e) => setName(e.target.value)} className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs font-semibold text-white/80">
            {labels.email}
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
          />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="mb-1.5 block text-xs font-semibold text-white/80">
          {labels.subject}
        </label>
        <select
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className={inputClass}
        >
          {Object.entries(labels.subjects).map(([key, label]) => (
            <option key={key} value={key} className="bg-ma-green-dark">
              {label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs font-semibold text-white/80">
          {labels.message}
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={inputClass}
        />
      </div>
      <button type="submit" className="btn-whatsapp w-full sm:w-auto">
        {labels.submit}
      </button>
    </form>
  );
}
