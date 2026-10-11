"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { Mail, MapPin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // Check if EmailJS is configured
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      // If EmailJS is not configured, use mailto fallback
      if (!serviceId || !templateId || !publicKey || 
          serviceId === "service_xxxxxxx" || 
          templateId === "template_xxxxxxx" || 
          publicKey === "your_public_key") {
        
        // Create mailto link with form data
        const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
        const body = encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        );
        const mailtoLink = `mailto:parambrar862@gmail.com?subject=${subject}&body=${body}`;
        
        // Open default email client
        window.location.href = mailtoLink;
        
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 3000);
        return;
      }

      // Initialize EmailJS if configured
      emailjs.init(publicKey);

      // Send email via EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "parambrar862@gmail.com",
        }
      );

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Section id="contact" title="Let&apos;s Work Together" className="bg-white/5">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-6 gradient-text">Get In Touch</h3>
          <p className="text-black/80 text-lg mb-8 leading-relaxed">
            I&apos;m always interested in new opportunities and exciting projects. Let&apos;s discuss how
            we can work together!
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#e2e8f0] rounded-full shadow-[5px_5px_12px_rgba(163,177,198,0.55),-5px_-5px_12px_rgba(255,255,255,0.95)] flex items-center justify-center border border-white/60">
                <Mail className="text-slate-800" size={20} />
              </div>
              <div>
                <div className="text-sm text-slate-500 font-medium">Email</div>
                <a
                  href="mailto:parambrar862@gmail.com"
                  className="text-slate-800 font-semibold hover:text-black transition-colors"
                >
                  parambrar862@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#e2e8f0] rounded-full shadow-[5px_5px_12px_rgba(163,177,198,0.55),-5px_-5px_12px_rgba(255,255,255,0.95)] flex items-center justify-center border border-white/60">
                <MapPin className="text-slate-800" size={20} />
              </div>
              <div>
                <div className="text-sm text-slate-500 font-medium">Location</div>
                <div className="text-slate-800 font-semibold">Available for Remote Work</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Card>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3.5 bg-[#e2e8f0] rounded-full text-slate-800 placeholder:text-slate-500 shadow-[inset_3px_3px_6px_rgba(163,177,198,0.6),inset_-3px_-3px_6px_rgba(255,255,255,0.95)] border border-white/40 focus:outline-none focus:shadow-[inset_4px_4px_8px_rgba(163,177,198,0.7),inset_-4px_-4px_8px_rgba(255,255,255,1)] transition-all font-medium text-sm"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3.5 bg-[#e2e8f0] rounded-full text-slate-800 placeholder:text-slate-500 shadow-[inset_3px_3px_6px_rgba(163,177,198,0.6),inset_-3px_-3px_6px_rgba(255,255,255,0.95)] border border-white/40 focus:outline-none focus:shadow-[inset_4px_4px_8px_rgba(163,177,198,0.7),inset_-4px_-4px_8px_rgba(255,255,255,1)] transition-all font-medium text-sm"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-5 py-4 bg-[#e2e8f0] rounded-3xl text-slate-800 placeholder:text-slate-500 shadow-[inset_3px_3px_6px_rgba(163,177,198,0.6),inset_-3px_-3px_6px_rgba(255,255,255,0.95)] border border-white/40 focus:outline-none focus:shadow-[inset_4px_4px_8px_rgba(163,177,198,0.7),inset_-4px_-4px_8px_rgba(255,255,255,1)] transition-all resize-none font-medium text-sm"
                />
              </div>

              <Button
                type="submit"
                variant="secondary"
                size="lg"
                className="w-full py-4 tracking-wider font-bold"
                disabled={status === "sending"}
              >
                {status === "sending" ? (
                  "Sending..."
                ) : status === "success" ? (
                  "Sent Successfully! ✓"
                ) : status === "error" ? (
                  "Error Sending ✗"
                ) : (
                  <>
                    <Send size={18} className="inline mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}
