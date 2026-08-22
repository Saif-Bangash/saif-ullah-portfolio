import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaTimes,
} from "react-icons/fa";

const ContactSection = () => {
  const formRef = useRef();
  const modalFormRef = useRef();

  const [loading, setLoading] = useState(false);
  const [modalLoading, setModalLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });
  const [modalStatusMessage, setModalStatusMessage] = useState({ type: "", text: "" });

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleModalChange = (e) => {
    setModalFormData({
      ...modalFormData,
      [e.target.name]: e.target.value,
    });
  };

  const SERVICE_ID = "service_ane2vpf";
  const TEMPLATE_ID = "template_q8s65or";
  const PUBLIC_KEY = "M3TsBOqJVXV_77jVU";
  const MY_EMAIL = "saifbangash480@gmail.com";

  // Main Contact Form Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage({ type: "", text: "" });

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_email: MY_EMAIL,
      name: formData.name,
      email: formData.email,
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

  // Popup Modal Form Handler
  const handleModalSubmit = (e) => {
    e.preventDefault();
    setModalLoading(true);
    setModalStatusMessage({ type: "", text: "" });

    const templateParams = {
      from_name: modalFormData.name,
      from_email: modalFormData.email,
      to_email: MY_EMAIL,
      name: modalFormData.name,
      email: modalFormData.email,
      message: modalFormData.message,
      to_name: "Saif Ullah",
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(
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
            text: "Failed to send email. Please try again.",
          });
          console.error("EmailJS Modal Error:", error);
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

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-12 items-start">
  {/* Left Column: Info Cards */}
  <div className="lg:col-span-1 space-y-4 md:space-y-6">
    {/* Phone Card */}
    <div className="bg-white dark:bg-white/5 p-4 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-sm border border-gray-100 dark:border-white/10 group hover:border-[#5C4DFF]/50 transition-all">
      <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl shrink-0 flex items-center justify-center bg-gray-50 dark:bg-white/5 text-[#5C4DFF] dark:text-purple-400 text-base md:text-xl group-hover:bg-[#5C4DFF] group-hover:text-white transition-all">
          <FaPhoneAlt />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-gray-400 text-[10px] md:text-xs font-medium uppercase tracking-wider">
            Call Me
          </p>
          <a
            href="tel:+923326767615"
            className="text-gray-800 dark:text-gray-200 font-semibold text-sm sm:text-base md:text-sm hover:text-[#5C4DFF] dark:hover:text-purple-400 break-all transition-colors block"
          >
            +92 332 6767 615
          </a>
        </div>
      </div>
    </div>

    {/* Email Card - Triggers Popup Modal */}
    <div
      onClick={() => setIsModalOpen(true)}
      className="bg-white dark:bg-white/5 p-4 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-sm border border-gray-100 dark:border-white/10 group hover:border-[#5C4DFF]/50 transition-all cursor-pointer"
    >
      <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl shrink-0 flex items-center justify-center bg-gray-50 dark:bg-white/5 text-[#5C4DFF] dark:text-purple-400 text-base md:text-xl group-hover:bg-[#5C4DFF] group-hover:text-white transition-all">
          <FaEnvelope />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-gray-400 text-[10px] md:text-xs font-medium uppercase tracking-wider">
            Email
          </p>
          <span className="text-gray-800 dark:text-gray-200 font-semibold text-sm sm:text-base md:text-sm group-hover:text-[#5C4DFF] dark:group-hover:text-purple-400 break-all transition-colors block">
            {MY_EMAIL}
          </span>
        </div>
      </div>
    </div>

    {/* Location Card */}
    <div className="bg-white dark:bg-white/5 p-4 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-sm border border-gray-100 dark:border-white/10 group hover:border-[#5C4DFF]/50 transition-all">
      <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl shrink-0 flex items-center justify-center bg-gray-50 dark:bg-white/5 text-[#5C4DFF] dark:text-purple-400 text-base md:text-xl group-hover:bg-[#5C4DFF] group-hover:text-white transition-all">
          <FaMapMarkerAlt />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-gray-400 text-[10px] md:text-xs font-medium uppercase tracking-wider">
            Location
          </p>
          <p className="text-gray-800 dark:text-gray-200 font-semibold text-sm sm:text-base md:text-sm truncate">
            Islamabad, Pakistan
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Right Column: Main Form */}
  <div className="lg:col-span-2 w-full">
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="bg-white dark:bg-white/5 p-5 sm:p-8 md:p-10 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] shadow-xl shadow-purple-100/20 dark:shadow-none border border-gray-50 dark:border-white/10 space-y-4 sm:space-y-6"
    >
      {statusMessage.text && (
        <div
          className={`p-3.5 sm:p-4 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-medium ${
            statusMessage.type === "success"
              ? "bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300 border border-green-200 dark:border-green-800"
              : "bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-300 border border-red-200 dark:border-red-800"
          }`}
        >
          {statusMessage.text}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div className="space-y-1.5 sm:space-y-2">
          <label className="text-xs md:text-sm font-bold text-gray-700 dark:text-gray-300 ml-1 sm:ml-2">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Edward Norton"
            className="w-full px-4 sm:px-5 py-3.5 sm:py-4 bg-gray-50 dark:bg-white/5 dark:text-white border-none rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-[#5C4DFF] outline-none transition-all placeholder:text-gray-400 text-sm sm:text-base"
          />
        </div>

        <div className="space-y-1.5 sm:space-y-2">
          <label className="text-xs md:text-sm font-bold text-gray-700 dark:text-gray-300 ml-1 sm:ml-2">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="example@mail.com"
            className="w-full px-4 sm:px-5 py-3.5 sm:py-4 bg-gray-50 dark:bg-white/5 dark:text-white border-none rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-[#5C4DFF] outline-none transition-all placeholder:text-gray-400 text-sm sm:text-base"
          />
        </div>
      </div>

      <div className="space-y-1.5 sm:space-y-2">
        <label className="text-xs md:text-sm font-bold text-gray-700 dark:text-gray-300 ml-1 sm:ml-2">
          Message
        </label>
        <textarea
          rows="4"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Write your message here..."
          className="w-full px-4 sm:px-5 py-3.5 sm:py-4 bg-gray-50 dark:bg-white/5 dark:text-white border-none rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-[#5C4DFF] outline-none transition-all resize-none placeholder:text-gray-400 text-sm sm:text-base"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full md:w-auto bg-[#5C4DFF] hover:bg-[#4A3DDF] text-white font-bold px-8 sm:px-10 py-3.5 sm:py-4 md:py-5 rounded-xl sm:rounded-2xl flex items-center justify-center gap-3 transition-all hover:shadow-lg active:scale-95 disabled:opacity-50 text-sm sm:text-base"
      >
        {loading ? "Sending..." : "Send Message"}
        <FaPaperPlane className="text-xs sm:text-sm" />
      </button>
    </form>
  </div>
</div>
      </div>

      {/* Perfect Fit Email Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white dark:bg-[#12072B] p-5 sm:p-6 rounded-2xl w-full max-w-md relative border border-gray-100 dark:border-white/10 shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              {/* Top Right Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-all"
                aria-label="Close modal"
              >
                <FaTimes className="text-sm" />
              </button>

              <div className="mb-4 pr-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  Send Direct Email
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-xs mt-0.5">
                  Send a quick email to get in touch.
                </p>
              </div>

              {modalStatusMessage.text && (
                <div
                  className={`p-3 rounded-xl text-xs font-medium mb-3 ${
                    modalStatusMessage.type === "success"
                      ? "bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300 border border-green-200 dark:border-green-800"
                      : "bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-300 border border-red-200 dark:border-red-800"
                  }`}
                >
                  {modalStatusMessage.text}
                </div>
              )}

              <form ref={modalFormRef} onSubmit={handleModalSubmit} className="space-y-3">
                <div>
                  <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 block mb-1">
                    To Email
                  </label>
                  <input
                    type="email"
                    value={MY_EMAIL}
                    readOnly
                    className="w-full px-3 py-2 bg-gray-100 dark:bg-white/10 text-gray-500 dark:text-gray-400 rounded-lg text-xs border border-transparent outline-none cursor-not-allowed"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 block mb-1">
                    Your Email (From)
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={modalFormData.email}
                    onChange={handleModalChange}
                    required
                    placeholder="example@mail.com"
                    className="w-full px-3 py-2.5 bg-gray-50 dark:bg-white/5 dark:text-white rounded-lg text-xs outline-none focus:ring-2 focus:ring-[#5C4DFF] border border-gray-200 dark:border-white/10"
                  />
                </div>

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
                    placeholder="Edward Norton"
                    className="w-full px-3 py-2.5 bg-gray-50 dark:bg-white/5 dark:text-white rounded-lg text-xs outline-none focus:ring-2 focus:ring-[#5C4DFF] border border-gray-200 dark:border-white/10"
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
                    placeholder="Write your message here..."
                    className="w-full px-3 py-2.5 bg-gray-50 dark:bg-white/5 dark:text-white rounded-lg text-xs outline-none focus:ring-2 focus:ring-[#5C4DFF] resize-none border border-gray-200 dark:border-white/10"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={modalLoading}
                  className="w-full bg-[#5C4DFF] hover:bg-[#4A3DDF] text-white font-semibold py-2.5 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-50 text-xs mt-1"
                >
                  {modalLoading ? "Sending..." : "Send Email"}
                  <FaPaperPlane className="text-[10px]" />
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ContactSection;