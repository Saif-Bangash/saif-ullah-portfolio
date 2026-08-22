import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

const ContactSection = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage({ type: "", text: "" });

    const SERVICE_ID = "service_ane2vpf";
    const TEMPLATE_ID = "template_q8s65or";
    const PUBLIC_KEY = "M3TsBOqJVXV_77jVU";

    // Direct object pass karne se EmailJS variables clean receive hotey hain
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      name: formData.name,       // Fallback agar template me {{name}} ho
      email: formData.email,     // Fallback agar template me {{email}} ho
      message: formData.message,
      to_name: "Saif Ullah",
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(
        () => {
          setLoading(false);
          setStatusMessage({
            type: "success",
            text: "Message successfully sent! I will respond shortly.",
          });
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          setStatusMessage({
            type: "error",
            text: "Failed to send email. Please try again later.",
          });
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-10 lg:py-25 bg-gray-50 dark:bg-[#0a0118] transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#5C4DFF] dark:text-purple-400 font-bold uppercase tracking-[0.2em] text-xs md:text-sm"
          >
            Get In Touch
          </motion.span>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mt-4 leading-tight">
            Let's Talk About{" "}
            <span className="text-[#5C4DFF] dark:text-purple-400 font-serif italic">
              Projects
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-start">
          <div className="lg:col-span-1 space-y-4 md:space-y-6">
            {[
              {
                icon: <FaPhoneAlt />,
                label: "Call Me",
                value: "+92 332 6767 615",
                href: "tel:+923326767615",
              },
              {
                icon: <FaEnvelope />,
                label: "Email Me",
                value: "saifbangash480@gmail.com",
                href: "mailto:saifbangash480@gmail.com",
              },
              {
                icon: <FaMapMarkerAlt />,
                label: "Location",
                value: "Islamabad, Pakistan",
                href: null,
              },
            ].map((info, index) => (
              <div
                key={index}
                className="bg-white dark:bg-white/5 p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-white/10 group hover:border-[#5C4DFF]/50 transition-all"
              >
                <div className="flex items-center gap-4 md:gap-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center bg-gray-50 dark:bg-white/5 text-[#5C4DFF] dark:text-purple-400 text-lg md:text-xl group-hover:bg-[#5C4DFF] group-hover:text-white transition-all">
                    {info.icon}
                  </div>

                  <div className="flex-1">
                    <p className="text-gray-400 text-[10px] md:text-xs font-medium uppercase tracking-wider">
                      {info.label}
                    </p>

                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-gray-800 dark:text-gray-200 font-bold text-base md:text-sm hover:text-[#5C4DFF] dark:hover:text-purple-400 break-all transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-800 dark:text-gray-200 font-bold text-base md:text-sm">
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-2">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-white dark:bg-white/5 p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-xl shadow-purple-100/20 dark:shadow-none border border-gray-50 dark:border-white/10 space-y-6"
            >
              {statusMessage.text && (
                <div
                  className={`p-4 rounded-2xl text-sm font-medium ${
                    statusMessage.type === "success"
                      ? "bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300 border border-green-200 dark:border-green-800"
                      : "bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-300 border border-red-200 dark:border-red-800"
                  }`}
                >
                  {statusMessage.text}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs md:text-sm font-bold text-gray-700 dark:text-gray-300 ml-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Edward Norton"
                    className="w-full px-5 py-4 bg-gray-50 dark:bg-white/5 dark:text-white border-none rounded-2xl focus:ring-2 focus:ring-[#5C4DFF] outline-none transition-all placeholder:text-gray-400"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs md:text-sm font-bold text-gray-700 dark:text-gray-300 ml-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="example@mail.com"
                    className="w-full px-5 py-4 bg-gray-50 dark:bg-white/5 dark:text-white border-none rounded-2xl focus:ring-2 focus:ring-[#5C4DFF] outline-none transition-all placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs md:text-sm font-bold text-gray-700 dark:text-gray-300 ml-2">
                  Message
                </label>
                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Write your message here..."
                  className="w-full px-5 py-4 bg-gray-50 dark:bg-white/5 dark:text-white border-none rounded-2xl focus:ring-2 focus:ring-[#5C4DFF] outline-none transition-all resize-none placeholder:text-gray-400"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full md:w-auto bg-[#5C4DFF] hover:bg-[#4A3DDF] text-white font-bold px-10 py-4 md:py-5 rounded-2xl flex items-center justify-center gap-3 transition-all hover:shadow-lg active:scale-95 disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
                <FaPaperPlane className="text-sm" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;