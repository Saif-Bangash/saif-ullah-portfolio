import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaTimes,
} from "react-icons/fa";

// EmailJS Credentials Configuration
const SERVICE_ID = "service_ane2vpf";
const TEMPLATE_ID = "template_x9ss713";
const PUBLIC_KEY = "M3TsBOqJVXV_77jVU";
const MY_EMAIL = "saifbangash480@gmail.com";

const ContactSection = () => {
  const formRef = useRef();
  const modalFormRef = useRef();

  const [loading, setLoading] = useState(false);
  const [modalLoading, setModalLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });
  const [modalStatusMessage, setModalStatusMessage] = useState({
    type: "",
    text: "",
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [modalFormData, setModalFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(PUBLIC_KEY);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleModalChange = (e) => {
    setModalFormData({ ...modalFormData, [e.target.name]: e.target.value });
  };

  // Main Form Submission Function
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage({ type: "", text: "" });

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_email: MY_EMAIL,
      message: formData.message,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY).then(
      () => {
        setLoading(false);
        setStatusMessage({
          type: "success",
          text: "Message successfully sent! I will respond shortly.",
        });
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatusMessage({ type: "", text: "" }), 5000);
      },
      (error) => {
        setLoading(false);
        setStatusMessage({
          type: "error",
          text: `Failed to send. Please try again later.`,
        });
        console.error("EmailJS Error:", error);
      },
    );
  };

  // Modal Form Submission Function
  const handleModalSubmit = (e) => {
    e.preventDefault();
    setModalLoading(true);
    setModalStatusMessage({ type: "", text: "" });

    const templateParams = {
      from_name: modalFormData.name,
      from_email: modalFormData.email,
      to_email: MY_EMAIL,
      message: modalFormData.message,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY).then(
      () => {
        setModalLoading(false);
        setModalStatusMessage({
          type: "success",
          text: "Email successfully sent! I will respond shortly.",
        });
        setModalFormData({ name: "", email: "", message: "" });

        setTimeout(() => {
          setIsModalOpen(false);
          setModalStatusMessage({ type: "", text: "" });
        }, 2000);
      },
      (error) => {
        setModalLoading(false);
        setModalStatusMessage({
          type: "error",
          text: `Failed to send email. Please try again.`,
        });
        console.error("EmailJS Modal Error:", error);
      },
    );
  };

  return (
    <div className="bg-white dark:bg-[#0a0118] transition-colors duration-500 min-h-screen">
      {/* 1. Contact Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-25 md:pb-16 border-b border-gray-100 dark:border-white/10 overflow-hidden">
        {/* Glow Background Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-100 bg-[#D9A93E]/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#D9A93E] font-bold uppercase tracking-[0.3em] text-xs md:text-sm inline-block"
          >
            Get In Touch
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mt-4 leading-tight"
          >
            Let’s Build Something <br className="hidden md:block" />
            <span className="font-serif italic text-[#D9A93E]">
              Great Together
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-xl mx-auto mt-6 text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            Have a project in mind? Whether you need a modern Web Development
            solution, a custom WordPress website, or an SEO strategy to grow
            your online visibility, I'd love to hear about your goals and help
            turn your ideas into results.
          </motion.p>
        </div>
      </section>

      {/* 2. Contact Information & Form Section */} 
      <section
        id="contact"
        className="w-full bg-[#F9FAFB] dark:bg-[#0a0118] py-16 md:py-12 transition-colors duration-500"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-16 items-start">
            {/* Left Side: Contact Info Cards */}
            <div className="lg:col-span-1 space-y-4 md:space-y-6">
              {/* Phone Card */}
              <div className="bg-white dark:bg-white/5 p-6 rounded-2xl md:rounded-3xl border border-gray-100 dark:border-white/10 group hover:border-[#D9A93E]/40 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gray-50 dark:bg-black/20 text-[#D9A93E] text-xl group-hover:bg-[#D9A93E] group-hover:text-white transition-all shadow-sm">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1">
                      Call Me
                    </p>
                    <a
                      href="tel:+923326767615"
                      className="text-gray-900 dark:text-white font-bold text-sm sm:text-base hover:text-[#D9A93E] transition-colors"
                    >
                      +92 332 6767 615
                    </a>
                  </div>
                </div>
              </div>

              {/* Email Card (Triggers Modal) */}
              <div
                onClick={() => setIsModalOpen(true)}
                className="bg-white dark:bg-white/5 p-6 rounded-2xl md:rounded-3xl border border-gray-100 dark:border-white/10 group hover:border-[#D9A93E]/40 hover:shadow-lg transition-all duration-300 cursor-pointer relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-[#D9A93E]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex items-center gap-5 relative z-10">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gray-50 dark:bg-black/20 text-[#D9A93E] text-xl group-hover:bg-[#D9A93E] group-hover:text-white transition-all shadow-sm">
                    <FaEnvelope />
                  </div>
                  <div className="min-w-0">
                    <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1">
                      Email Me (Click)
                    </p>
                    <span className="text-gray-900 dark:text-white font-bold text-sm sm:text-base truncate block group-hover:text-[#D9A93E] transition-colors">
                      {MY_EMAIL}
                    </span>
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div className="bg-white dark:bg-white/5 p-6 rounded-2xl md:rounded-3xl border border-gray-100 dark:border-white/10 group hover:border-[#D9A93E]/40 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gray-50 dark:bg-black/20 text-[#D9A93E] text-xl group-hover:bg-[#D9A93E] group-hover:text-white transition-all shadow-sm">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1">
                      Based In
                    </p>
                    <p className="text-gray-900 dark:text-white font-bold text-sm sm:text-base">
                      Islamabad, Pakistan
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Main Contact Form */}
            <div className="lg:col-span-2 w-full">
              <div className="bg-white dark:bg-[#12072B] p-8 sm:p-10 rounded-4xl shadow-xl border border-gray-100 dark:border-white/10">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                   Contact Form
                </h3>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  {/* Form Status Message Alert */}
                  {statusMessage.text && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-4 rounded-xl text-sm font-medium flex items-center gap-3 ${
                        statusMessage.type === "success"
                          ? "bg-green-50 text-green-700 border border-green-200 dark:bg-green-500/10 dark:border-green-500/30 dark:text-green-400"
                          : "bg-red-50 text-red-700 border border-red-200 dark:bg-red-500/10 dark:border-red-500/30 dark:text-red-400"
                      }`}
                    >
                      {statusMessage.text}
                    </motion.div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="your name"
                        className="w-full px-5 py-4 bg-gray-50 dark:bg-white/5 border border-transparent dark:border-white/10 rounded-xl focus:border-[#D9A93E] focus:ring-1 focus:ring-[#D9A93E] outline-none transition-all dark:text-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="w-full px-5 py-4 bg-gray-50 dark:bg-white/5 border border-transparent dark:border-white/10 rounded-xl focus:border-[#D9A93E] focus:ring-1 focus:ring-[#D9A93E] outline-none transition-all dark:text-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Message *
                    </label>
                    <textarea
                      rows="5"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell me about your project....."
                      className="w-full px-5 py-4 bg-gray-50 dark:bg-white/5 border border-transparent dark:border-white/10 rounded-xl focus:border-[#D9A93E] focus:ring-1 focus:ring-[#D9A93E] outline-none transition-all resize-none dark:text-white"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto bg-[#D9A93E] hover:bg-[#c29432] text-white font-bold px-10 py-4 rounded-xl flex items-center justify-center gap-3 transition-all hover:shadow-lg hover:shadow-[#D9A93E]/30 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? "Sending Message..." : "Submit Message"}
                    {!loading && <FaPaperPlane className="text-sm" />}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Modal Form (Opens when Email Card is clicked) */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Content Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-white dark:bg-[#12072B] p-8 rounded-4xl shadow-2xl z-10 border border-gray-100 dark:border-white/10"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 w-8 h-8 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center text-gray-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/20 transition-all"
              >
                <FaTimes />
              </button>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Quick Email
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                  Send a direct email to {MY_EMAIL}
                </p>
              </div>

              {/* Modal Status Message */}
              {modalStatusMessage.text && (
                <div
                  className={`p-3 rounded-xl text-sm font-medium mb-5 ${
                    modalStatusMessage.type === "success"
                      ? "bg-green-50 text-green-700"
                      : "bg-red-50 text-red-700"
                  }`}
                >
                  {modalStatusMessage.text}
                </div>
              )}

              <form
                ref={modalFormRef}
                onSubmit={handleModalSubmit}
                className="space-y-4"
              >
                <div>
                  <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 block mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={modalFormData.name}
                    onChange={handleModalChange}
                    required
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 rounded-xl text-sm border border-transparent dark:border-white/10 outline-none focus:border-[#D9A93E] transition-all dark:text-white"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 block mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={modalFormData.email}
                    onChange={handleModalChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 rounded-xl text-sm border border-transparent dark:border-white/10 outline-none focus:border-[#D9A93E] transition-all dark:text-white"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 block mb-1">
                    Message
                  </label>
                  <textarea
                    rows="3"
                    name="message"
                    value={modalFormData.message}
                    onChange={handleModalChange}
                    required
                    placeholder="Tell me about your project...."
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 rounded-xl text-sm border border-transparent dark:border-white/10 outline-none focus:border-[#D9A93E] resize-none transition-all dark:text-white"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={modalLoading}
                  className="w-full bg-[#D9A93E] hover:bg-[#c29432] text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md mt-2 disabled:opacity-70"
                >
                  {modalLoading ? "Sending..." : "Send Project Inquiry"}
                  {!modalLoading && <FaPaperPlane className="text-xs" />}
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactSection;
