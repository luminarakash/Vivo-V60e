import React from "react";
import { motion } from "framer-motion";

// ---------------- NAVBAR ----------------
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/70 shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <h1 className="text-2xl font-bold text-indigo-600 tracking-wide">
          vivo <span className="text-gray-800 font-normal">V60e</span>
        </h1>
        <div className="flex gap-4 items-center">
          <a href="#gallery" className="text-gray-700 hover:text-indigo-600 transition">
            Gallery
          </a>
          <a href="#specs" className="text-gray-700 hover:text-indigo-600 transition">
            Specs
          </a>
          <a href="#benefits" className="text-gray-700 hover:text-indigo-600 transition">
            Benefits
          </a>
          <a href="#contact" className="text-gray-700 hover:text-indigo-600 transition">
            Contact
          </a>
          <a
            href="#buy"
            className="px-5 py-2 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition"
          >
            Buy Now
          </a>
        </div>
      </div>
    </nav>
  );
}

// ---------------- HERO SECTION ----------------
function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 pt-28">
      <div className="absolute top-0 -right-32 w-96 h-96 bg-indigo-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-20 -left-32 w-96 h-96 bg-purple-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 grid gap-10 lg:grid-cols-2 items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight text-gray-900">
            PORTRAITS REDEFINED —{" "}
            <span className="text-indigo-600">200&nbsp;MP</span>
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Ultra-Clear Main Camera, OIS, 85mm Close-Up Portraits and AI Portrait Suite — crafted to captivate.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#buy"
              className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow hover:scale-105 hover:shadow-lg transition"
            >
              Buy Now
            </a>
            <a
              href="#gallery"
              className="px-8 py-3 border border-gray-400 rounded-full text-gray-700 hover:bg-gray-100 transition"
            >
              See Gallery
            </a>
          </div>

          <ul className="mt-8 grid grid-cols-2 gap-2 text-sm text-gray-700">
            <li>• 200 MP Ultra-Clear main camera</li>
            <li>• 6500 mAh & 90W FlashCharge</li>
            <li>• IP68 / IP69</li>
            <li>• Aura Light & AI tools</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="order-first lg:order-last"
        >
          <img
            src="https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/product/1760169120379/zip/img/wap/vivo-v60-launch.png.webp"
            alt="Phone showcase"
            className="w-full rounded-3xl shadow-2xl hover:scale-105 transition duration-700"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}

// ---------------- CAMERA SHOWCASE ----------------
function FeatureCard({ title, desc, icon }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-2xl shadow-md hover:shadow-2xl p-6 text-center transition"
    >
      {icon && (
        <img
          src={icon}
          alt={title}
          className="w-16 h-16 mx-auto mb-3 rounded-full object-cover shadow"
        />
      )}
      <h4 className="font-semibold text-lg text-gray-900">{title}</h4>
      <p className="mt-2 text-gray-600 text-sm">{desc}</p>
    </motion.div>
  );
}

function CameraShowcase() {
  const featureIcons = [
    "https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/product/1760169120379/zip/img/wap/vivo-v60e-with-200-mp-ultra-clear-main-camera.png.webp",
    "https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/product/1760169120379/zip/img/wap/festival1.png.webp",
    "https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/product/1760169120379/zip/img/wap/photo-taken-with-vivo-v60e-using-200-mp-ultra-clear-main-camera-3.png.webp",
    "https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/product/1760169120379/zip/img/pc/portrait-taken-with-vivo-v60e-using-india-exclusive-wedding-style-studio-function-1.png.webp",
  ];

  return (
    <section className="bg-gradient-to-b from-white to-indigo-50 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold text-gray-900"
        >
          Camera Highlights
        </motion.h2>
        <p className="text-gray-600 mt-2">
          Ultra-clear main lens, natural bokeh and ZEISS-inspired tones.
        </p>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "200 MP Ultra-Clear", desc: "1/1.56-inch sensor, OIS, 30x SuperZoom", icon: featureIcons[0] },
            { title: "85mm Close-Up", desc: "Portraits with natural bokeh and clarity", icon: featureIcons[1] },
            { title: "AI Suite", desc: "AI Erase, Image Expander, Photo Enhance", icon: featureIcons[2] },
            { title: "Selfie & Aura Light", desc: "50 MP Eye AF selfie with Aura Light", icon: featureIcons[3] },
          ].map((item, i) => (
            <FeatureCard key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------- GALLERY ----------------
function Gallery() {
  const imgs = [
    "https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/product/1760169120379/zip/img/wap/vivo-v60e-with-ai-four-season-portrait-1.png.webp",
    "https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/product/1760169120379/zip/img/wap/vivo-v60e-with-ai-four-season-portrait-2.png.webp",
    "https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/product/1760169120379/zip/img/wap/vivo-v60e-with-ai-four-season-portrait-5.png.webp",
    "https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/product/1760169120379/zip/img/wap/vivo-v60e-with-ai-four-season-portrait-4.png.webp",
  ];

  return (
    <section id="gallery" className="bg-gradient-to-t from-indigo-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center text-gray-900">Photo Gallery</h3>
        <div className="mt-10 grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          {imgs.map((src, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }} className="rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition">
              <img src={src} alt={`sample ${i + 1}`} className="w-full h-56 object-cover" loading="lazy" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------- BENEFITS ----------------
function Benefits() {
  const benefits = [
    { icon: "💫", title: "AI Portrait Magic", desc: "Turn every photo into art with intelligent lighting and tone balance." },
    { icon: "⚡", title: "Seamless Performance", desc: "Next-gen chipset ensures ultra-fast multitasking." },
    { icon: "✨", title: "Premium Design", desc: "Sleek design blending style with technology." },
  ];

  return (
    <section id="benefits" className="bg-gradient-to-br from-purple-50 via-white to-indigo-50 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">Why Choose Vivo V60e?</h2>
        <div className="grid gap-10 md:grid-cols-3">
          {benefits.map((b, i) => (
            <motion.div key={i} whileHover={{ y: -8 }} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
              <div className="text-5xl mb-4">{b.icon}</div>
              <h3 className="font-semibold text-lg text-gray-900">{b.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------- SPECS ----------------
function Specs() {
  return (
    <section id="specs" className="relative bg-white py-20">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">Specifications</h3>
        <div className="grid gap-10 md:grid-cols-2">
          <div className="bg-gradient-to-br from-white to-indigo-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h4 className="font-semibold text-lg mb-3">Camera</h4>
            <ul className="text-gray-700 list-disc list-inside space-y-2">
              <li>200 MP main (1/1.56") with OIS</li>
              <li>8 MP wide-angle</li>
              <li>50 MP Eye AF Selfie (Aura Light)</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-white to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h4 className="font-semibold text-lg mb-3">Performance & Battery</h4>
            <ul className="text-gray-700 list-disc list-inside space-y-2">
              <li>6500 mAh battery</li>
              <li>90 W FlashCharge</li>
              <li>IP68 / IP69 water resistance</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------- CONTACT FORM ----------------
function ContactForm() {
  return (
    <section id="contact" className="bg-indigo-50 py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
        <p className="text-gray-600 mb-10">
          Interested in Vivo V60e? Drop your details and our team will contact you soon.
        </p>

        <form className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-indigo-500 outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>
          <textarea
            rows="4"
            placeholder="Your Message..."
            className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-indigo-500 outline-none"
          ></textarea>
          <button type="submit" className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

// ---------------- MAIN EXPORT ----------------
export default function ProductPage() {
  return (
    <div className="font-sans text-gray-900 bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <CameraShowcase />
      <Gallery />
      <Benefits />
      <Specs />
      <ContactForm />
      <footer className="bg-gray-900 text-gray-400 text-center py-8 mt-12">
        © 2025 Vivo V60e — Demo Page by Akash 🚀
      </footer>
    </div>
  );
}
