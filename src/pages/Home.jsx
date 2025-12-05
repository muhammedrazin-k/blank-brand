import React, { useEffect, useState, useRef } from "react";
import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";

// ================== REVEAL HOOK ==================
const useReveal = () => {
  const ref = useRef();
  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("show");
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
  }, []);
  return ref;
};

const Home = () => {
  const WHATSAPP = "9645636873";

  // ================= HERO BACKGROUND CAROUSEL =================
  const heroImages = [
    "/card-image-3.avif",
    "/card-image-4.avif",
    "/card-image-1.avif",
    "/card-image-2.avif",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setCurrent((prev) => (prev + 1) % heroImages.length),
      3500
    );
    return () => clearInterval(id);
  }, []);

  const tshirts = [
    {
      id: 1,
      name: "Classic Black Tee",
      img: "/dress-1.jpeg",
    },
    {
      id: 2,
      name: "Minimal White Tee",
      img: "/dress-4.jpeg",
    },
    {
      id: 3,
      name: "Oversized Grey Tee",
      img: "/dress-3.jpeg",
    },
    {
      id: 4,
      name: "Streetwear Beige Tee",
      img: "/dress-6.jpeg",
    },
    {
      id: 5,
      name: "Jet Black Premium Tee",
      img: "dress-9.jpeg",
    },
    {
      id: 6,
      name: "Cream Relaxed Fit Tee",
      img: "https://images.unsplash.com/photo-1523381294911-8d3cead13475",
    },
  ];
  return (
    <div className="bg-black text-white font-sans">
      {/* ================================= HERO SECTION ================================= */}
      <section
        className="relative h-screen flex items-center justify-start px-10"
        style={{
          backgroundImage: `url(${heroImages[current]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 1s ease-in-out",
        }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-transparent"></div>

        <div className="relative z-10 max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 animate-fadeUp">
            Minimal. Clean. Premium.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 animate-fadeUpSlow">
            “Essentials designed with intention — inspired by global brands.”
          </p>

          <a
            href={`https://wa.me/${WHATSAPP}?text=Hi! I want to shop your t-shirts.`}
            className="inline-flex items-center gap-3 mt-8 bg-white text-black px-8 py-3 rounded-xl font-semibold shadow-lg hover:bg-gray-200 transition"
          >
            <FaWhatsapp size={22} />
            Shop on WhatsApp
          </a>
        </div>
      </section>

      {/* ================================= ABOUT SECTION ================================= */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">About BLANK</h2>

        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
          BLANK is a modern essentials brand inspired by global fashion labels
          like H&M, Uniqlo, Allen Solly, and Zara.
          <br /> <br />
          We focus on timeless silhouettes, premium fabrics, natural tones, and
          clean minimal aesthetics. Our mission is to create everyday pieces
          that make you feel confident, comfortable, and effortlessly stylish.
        </p>
      </section>

      {/* ================================= CINEMATIC PRODUCT SECTION ================================= */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Essentials Collection
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          {tshirts.map((t) => (
            <RevealCard key={t.id} p={t} number={WHATSAPP} />
          ))}
        </div>
      </section>

      {/* FIXED WHATSAPP BUTTON */}
      <a
        href={`https://wa.me/${WHATSAPP}?text=Hi! I want to shop BLANK t-shirts.`}
        className="fixed bottom-6 right-6 bg-emerald-500 p-4 rounded-full shadow-xl text-black hover:bg-emerald-400 transition-transform hover:-translate-y-1"
      >
        <FaWhatsapp size={28} />
      </a>

      {/* ================================= FOOTER ================================= */}
      <footer className="bg-[#0c0c0c] py-16 px-6">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <h3 className="text-xl font-semibold">
            BLANK — Premium Men's Clothing
          </h3>

          <p className="text-gray-400 text-sm">
            Designed with purpose. Crafted for comfort. Inspired by global
            fashion standards.
          </p>

          <div className="flex justify-center gap-6 text-gray-300 mt-4">
            <a href={`https://wa.me/${WHATSAPP}`} className="hover:text-white">
              <FaWhatsapp size={22} />
            </a>

            <a href="mailto:hello@blank.com" className="hover:text-white">
              <FaEnvelope size={22} />
            </a>

            <a href="https://instagram.com" className="hover:text-white">
              <FaInstagram size={22} />
            </a>
          </div>

          <p className="text-gray-500 text-xs mt-6">
            © {new Date().getFullYear()} BLANK. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

/* ===================== Reveal Card Component ===================== */
const RevealCard = ({ p, number }) => {
  const ref = useReveal();

  return (
    <div
      ref={ref}
      className="reveal opacity-0 translate-y-10 scale-[0.97] transition-all duration-[1.2s] ease-out"
    >
      <div className="overflow-hidden rounded-2xl shadow-xl">
        <img
          src={p.img}
          alt={p.name}
          className="w-full h-96 object-cover transition-transform duration-1200 hover:scale-110"
        />
      </div>

      <h3 className="text-xl font-semibold mt-4">{p.name}</h3>

      <a
        href={`https://wa.me/${number}?text=Hi! I'm interested in ${p.name}`}
        className="inline-block mt-2 text-emerald-400 hover:text-emerald-300 text-sm"
      >
        Order via WhatsApp →
      </a>
    </div>
  );
};

export default Home;
