import "./App.css";

import logo from "./assets/Chai_Culture_Logo_Edited.jpg";
import cardamomImg from "./assets/CA4A3172_6bf78315-6c77-4e0f-9120.png";
import masalaImg from "./assets/homemade-indian-sweet-chai.png";
import gingerImg from "./assets/ginger-tea-with-honey-and-lemon.png";

function App() {
  const teas = [
    {
      img: cardamomImg,
      name: "Royal Cardamom Bloom",
      desc: "A fragrant infusion where green cardamom opens slowly, releasing warmth and calm.",
      price: "$48",
    },
    {
      img: masalaImg,
      name: "Masala Heritage Fusion",
      desc: "A balanced masala blend inspired by royal kitchens and evening rituals.",
      price: "$48",
    },
    {
      img: gingerImg,
      name: "Zesty Ginger Elixir",
      desc: "A bold yet refined ginger-forward tea with a clean, lingering finish.",
      price: "$48",
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--cream)]">

      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl border-b border-black/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <img
              src={logo}
              alt="Chai Culture Logo"
              className="h-16 w-auto object-contain"
            />
            <nav className="flex gap-10">
              {["Home", "Shop", "About", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm tracking-wider transition-colors duration-500 hover:text-[var(--gold)]"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="hero" className="pt-40 pb-32 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h1
            className="mb-8 text-6xl lg:text-8xl"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Brew the Royal <br /> Tradition
          </h1>

          <p
            className="mx-auto max-w-2xl mb-12 text-lg lg:text-xl leading-relaxed opacity-80"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            A curated collection of heritage chai blends, crafted with reverence
            for artisan traditions and timeless Indian craftsmanship.
          </p>

          <div className="inline-flex">
            <div
              className="px-6 py-3 border"
              style={{ borderColor: "var(--gold)" }}
            >
              <span
                className="text-[11px] tracking-[0.2em] uppercase"
                style={{ color: "var(--gold)", fontFamily: "var(--font-sans)" }}
              >
                Archive Opening Soon
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white h-px"></div>

      {/* Tea Cards */}
      <section id="teaCard" className="py-32">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">
            <h2
              className="text-5xl mb-6"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              The Royal Collection
            </h2>
            <p
              className="max-w-2xl mx-auto text-lg opacity-80"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Three signature blends, each inspired by heritage rituals and
              crafted with quiet precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
            {teas.map((tea) => (
              <div
                key={tea.name}
                className="rounded-2xl shadow-xl overflow-hidden transition-shadow duration-500 hover:shadow-2xl"
              >
                <div className="overflow-hidden">
                  <img
                    src={tea.img}
                    alt={tea.name}
                    className="h-72 w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <div className="p-6 text-center">
                  <h3
                    className="text-2xl mb-4"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {tea.name}
                  </h3>

                  <p className="text-sm leading-relaxed opacity-75 mb-6">
                    {tea.desc}
                  </p>

                  <span className="tracking-wider text-sm block text-left">
                    {tea.price}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <div className="bg-white h-px"></div>

      {/* Footer */}
      <footer className="bg-[var(--cream)] text-center py-12 border-t border-black/10">
        <h2
          className="text-3xl tracking-wide"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Chai Culture
        </h2>

        <nav className="flex items-center justify-center gap-8 my-8">
          {["Privacy", "Terms", "Heritage", "Press"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs tracking-[0.12em] uppercase transition-opacity duration-300 opacity-70 hover:opacity-100"
              style={{ fontFamily: "var(--font-sans)", color: "var(--cocoa)" }}
            >
              {item}
            </a>
          ))}
        </nav>

        <p
          className="text-sm opacity-75"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          © 2024 Chai Culture. All rights reserved.
        </p>
      </footer>

    </div>
  );
}

export default App;
