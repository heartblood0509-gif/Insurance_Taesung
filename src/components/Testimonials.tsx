"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "김○○",
    age: "40대",
    product: "실손보험",
    rating: 5,
    content:
      "병원비 걱정 없이 치료받을 수 있어서 정말 좋습니다. 청구도 간편하고 입금도 빨라요. 상담사분도 친절하게 설명해주셔서 이해하기 쉬웠습니다.",
  },
  {
    id: 2,
    name: "이○○",
    age: "30대",
    product: "암보험",
    rating: 5,
    content:
      "가족력이 있어서 암보험을 찾고 있었는데, 합리적인 가격에 좋은 보장을 받을 수 있었습니다. 든든한 보장에 마음이 놓입니다.",
  },
  {
    id: 3,
    name: "박○○",
    age: "50대",
    product: "연금보험",
    rating: 5,
    content:
      "노후 준비를 위해 연금보험에 가입했어요. 세제 혜택도 받고, 안정적인 노후를 준비할 수 있게 되어 만족합니다.",
  },
  {
    id: 4,
    name: "최○○",
    age: "35대",
    product: "건강보험",
    rating: 4,
    content:
      "건강검진에서 이상이 발견되었을 때 보험 덕분에 부담 없이 추가 검사를 받을 수 있었습니다. 미리 준비하길 잘했다고 생각해요.",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            고객 후기
          </h2>
          <p className="text-lg text-gray-600">
            실제 가입 고객님들의 생생한 후기
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-lg p-6 relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-blue-100" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 text-sm mb-6 line-clamp-4">
                {testimonial.content}
              </p>

              {/* Author */}
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">
                  {testimonial.age} · {testimonial.product}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="bg-white rounded-2xl shadow-lg p-6 relative">
            <Quote className="absolute top-4 right-4 w-8 h-8 text-blue-100" />

            {/* Rating */}
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < testimonials[currentIndex].rating
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>

            {/* Content */}
            <p className="text-gray-600 mb-6">
              {testimonials[currentIndex].content}
            </p>

            {/* Author */}
            <div className="border-t pt-4">
              <p className="font-semibold text-gray-900">
                {testimonials[currentIndex].name}
              </p>
              <p className="text-sm text-gray-500">
                {testimonials[currentIndex].age} ·{" "}
                {testimonials[currentIndex].product}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={prevSlide}
              className="p-2 bg-white rounded-full shadow hover:bg-gray-100 transition-colors"
              aria-label="이전"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                  }`}
                  aria-label={`슬라이드 ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="p-2 bg-white rounded-full shadow hover:bg-gray-100 transition-colors"
              aria-label="다음"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
