"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-5xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-emerald-600">
            Portfolio
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6">
            <Link
              href="/"
              className="text-gray-600 hover:text-emerald-600 transition-colors"
            >
              Trang chủ
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-emerald-600 transition-colors"
            >
              Giới thiệu
            </Link>
            <Link
              href="/blog"
              className="text-gray-600 hover:text-emerald-600 transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/projects"
              className="text-gray-600 hover:text-emerald-600 transition-colors"
            >
              Dự án
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-emerald-600 transition-colors"
            >
              Liên hệ
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5"
          >
            <span
              className={`w-6 h-0.5 bg-gray-600 transition-all ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-gray-600 transition-all ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-gray-600 transition-all ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col gap-3 mt-4 pt-4 border-t">
            <Link
              href="/"
              className="text-gray-600 hover:text-emerald-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Trang chủ
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-emerald-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Giới thiệu
            </Link>
            <Link
              href="/blog"
              className="text-gray-600 hover:text-emerald-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/projects"
              className="text-gray-600 hover:text-emerald-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Dự án
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-emerald-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Liên hệ
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
