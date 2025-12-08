"use client";

import { useState, useEffect } from "react";
import { Menu, X, Shield } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Hero 섹션 높이(100vh)를 기준으로 스크롤 감지
      setIsScrolled(window.scrollY > window.innerHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "보험상품", href: "#products" },
    { name: "보험료 계산", href: "#calculator" },
    { name: "고객센터", href: "#support" },
    { name: "회사소개", href: "#about" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-md"
          : "bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-lg shadow-black/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Shield
              className={`w-8 h-8 transition-colors duration-300 ${
                isScrolled ? "text-blue-600" : "text-white"
              }`}
            />
            <span
              className={`text-xl font-bold transition-colors duration-300 ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            >
              보상청
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`transition-colors duration-300 font-medium ${
                  isScrolled
                    ? "text-gray-600 hover:text-blue-600"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#consultation"
              className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                isScrolled
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm"
              }`}
            >
              무료 상담 신청
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 transition-colors duration-300 ${
              isScrolled ? "text-gray-900" : "text-white"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="메뉴 열기"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className={`md:hidden py-4 border-t ${
              isScrolled ? "border-gray-200" : "border-white/20"
            }`}
          >
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`block py-3 transition-colors ${
                  isScrolled
                    ? "text-gray-600 hover:text-blue-600"
                    : "text-white/90 hover:text-white"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#consultation"
              className={`block mt-4 px-6 py-2.5 rounded-full font-semibold text-center transition-all ${
                isScrolled
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-white/20 hover:bg-white/30 text-white border border-white/30"
              }`}
              onClick={() => setIsOpen(false)}
            >
              무료 상담 신청
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
