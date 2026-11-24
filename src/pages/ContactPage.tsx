import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  FileCheck2,
} from "lucide-react";

export function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!form.name || !form.email || !form.message) {
      setError("Please fill in your name, email, and message.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setSent(true);
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-neutral-950 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-neutral-950 to-neutral-950" />
        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-primary-600/20 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-extrabold text-white sm:text-5xl animate-fade-in-up">
            Get in Touch
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-neutral-300 animate-fade-in-up">
            Have a question about a course, an enrollment, or a partnership? We
            are here to help. Reach out and we will respond within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <div>
              <h2 className="font-display text-2xl font-bold text-neutral-900">
                Contact Information
              </h2>
              <p className="mt-3 text-neutral-600">
                Prefer to reach us directly? Here is how.
              </p>

              <div className="mt-8 space-y-5">
                {[
                  {
                    icon: <Mail className="h-5 w-5" />,
                    label: "Email",
                    value: "shwetakumari7091688484@gmail.com",
                    sub: "We reply within 24 hours",
                  },
                  {
                    icon: <Phone className="h-5 w-5" />,
                    label: "Phone",
                    value: "+91 77650 62154",
                    sub: "Monday–Saturday, 9am–6pm IST",
                  },
                  {
                    icon: <MapPin className="h-5 w-5" />,
                    label: "Office",
                    value: "Flat 76, Shweta Kumari, Narhi, Dulhin Bazar",
                    sub: "Patna, Bihar 801102",
                  },
                  {
                    icon: <Clock className="h-5 w-5" />,
                    label: "Support Hours",
                    value: "Monday–Saturday, 9am–6pm IST",
                    sub: "Online support for learners",
                  },
                  {
                    icon: <FileCheck2 className="h-5 w-5" />,
                    label: "Udyam Registration",
                    value: "UDYAM-BR-26-0260505",
                    sub: "Gayan X Academy · Micro enterprise",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-5"
                  >
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary-600 text-white">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                        {item.label}
                      </div>
                      <div className="mt-1 font-semibold text-neutral-900">
                        {item.value}
                      </div>
                      <div className="text-sm text-neutral-500">{item.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-success-100">
                    <CheckCircle2 className="h-8 w-8 text-success-600" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-bold text-neutral-900">
                    Message Sent!
                  </h3>
                  <p className="mt-3 text-neutral-600">
                    Thank you for reaching out. We will get back to you within 24
                    hours at the email you provided.
                  </p>
                  <button
                    onClick={() => {
                      setSent(false);
                      setForm({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="mt-6 rounded-xl border border-neutral-200 px-6 py-3 text-sm font-semibold text-neutral-700 hover:bg-neutral-50"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="font-display text-2xl font-bold text-neutral-900">
                    Send Us a Message
                  </h2>
                  <p className="mt-2 text-sm text-neutral-600">
                    Fill out the form below and we will be in touch shortly.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                    <div>
                      <label className="block text-sm font-semibold text-neutral-700">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        className="mt-2 w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm text-neutral-900 outline-none transition-colors focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
                        placeholder="Jane Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-neutral-700">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        className="mt-2 w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm text-neutral-900 outline-none transition-colors focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
                        placeholder="jane@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-neutral-700">
                        Subject
                      </label>
                      <input
                        type="text"
                        value={form.subject}
                        onChange={(e) =>
                          setForm({ ...form, subject: e.target.value })
                        }
                        className="mt-2 w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm text-neutral-900 outline-none transition-colors focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
                        placeholder="Question about a course"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-neutral-700">
                        Message
                      </label>
                      <textarea
                        rows={5}
                        value={form.message}
                        onChange={(e) =>
                          setForm({ ...form, message: e.target.value })
                        }
                        className="mt-2 w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm text-neutral-900 outline-none transition-colors focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
                        placeholder="Tell us how we can help..."
                      />
                    </div>

                    {error && (
                      <div className="rounded-lg bg-error-50 px-4 py-3 text-sm text-error-600">
                        {error}
                      </div>
                    )}

                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary-600 py-3.5 font-bold text-white transition-all hover:bg-primary-700 hover:shadow-lg"
                    >
                      Send Message
                      <Send className="h-4 w-4" />
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
