"use client";

import { useState } from "react";
import { Heart, ChevronLeft, ChevronRight, MessageCircle, Gift } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "김○○님",
    amount: "127만원",
    message: "와 진짜 이게 된다고요?? 보험사에서 안 된다길래 포기했었는데ㅠㅠ 감사합니다 진짜로ㅠㅠㅠ",
    reply: "김○○님 축하드려요! 앞으로도 빠뜨리는 보험금 없이 다 챙겨드릴게요 😊",
    time: "오후 3:24",
  },
  {
    id: 2,
    name: "이○○님",
    amount: "89만원",
    message: "설계사가 다 거기서 거기라고 생각했는데... 진짜 다르네요. 친구들한테 다 소개시켜줄게요!",
    reply: "이○○님 믿어주셔서 감사합니다! 소개해주시는 분들도 꼼꼼히 챙겨드릴게요 💪",
    time: "오후 5:12",
  },
  {
    id: 3,
    name: "박○○님",
    amount: "213만원",
    message: "입원비랑 수술비 다 합쳐서 213만원이나 받았어요!! 진작 연락드릴걸 그랬어요ㅋㅋㅋ",
    reply: "박○○님 고생 많으셨어요! 건강이 최고니까 잘 챙기시고, 언제든 연락주세요 🙏",
    time: "오후 7:45",
  },
  {
    id: 4,
    name: "최○○님",
    amount: "156만원",
    message: "5년 넘게 낸 보험인데 한 번도 청구 안 했거든요. 이렇게 받을 수 있는 줄 몰랐어요. 고맙습니다!",
    reply: "최○○님 다행이에요! 앞으로는 하나도 빠뜨리지 않게 제가 알려드릴게요 ✨",
    time: "오후 2:18",
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
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            수임료 달라는 소리 안 합니다.<br className="hidden md:block" />
            <span className="text-blue-600">감사 인사면 충분합니다.</span>
          </h2>
        </div>
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <p className="text-lg text-gray-600">
            &apos;설계사가 다 거기서 거기지&apos; 의심했던 분들이, 상담 후 가장 열렬한 팬이 되셨습니다.<br />
            고객님이 받으신 보상금, 그 뒤에 따라오는 &apos;고맙다&apos;는 진심 어린 말 한마디가 제가 일하는 이유입니다.
          </p>
        </div>

        {/* Desktop Grid - 카톡 대화 스타일 */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              {/* 카톡 헤더 */}
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-3 flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-white" />
                <span className="text-white font-medium">{testimonial.name}</span>
                <span className="ml-auto text-blue-200 text-xs">{testimonial.time}</span>
              </div>

              {/* 대화 내용 */}
              <div className="p-4 space-y-3 bg-[#B2C7D9] min-h-[200px]">
                {/* 고객 메시지 (왼쪽) */}
                <div className="flex justify-start">
                  <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-2 max-w-[85%] shadow-sm">
                    <p className="text-gray-800 text-sm">{testimonial.message}</p>
                  </div>
                </div>

                {/* 받은 금액 강조 */}
                <div className="flex justify-center">
                  <div className="bg-yellow-100 rounded-full px-4 py-1.5 flex items-center gap-2">
                    <Gift className="w-4 h-4 text-yellow-600" />
                    <span className="text-yellow-700 font-bold text-sm">
                      {testimonial.amount} 수령
                    </span>
                  </div>
                </div>

                {/* 설계사 답장 (오른쪽) */}
                <div className="flex justify-end">
                  <div className="bg-[#FEE500] rounded-2xl rounded-tr-sm px-4 py-2 max-w-[85%] shadow-sm">
                    <p className="text-gray-800 text-sm">{testimonial.reply}</p>
                  </div>
                </div>
              </div>

              {/* 하단 감사 표시 */}
              <div className="bg-white px-4 py-3 border-t flex items-center justify-center gap-2">
                <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                <span className="text-sm text-gray-600">감사 메시지</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* 카톡 헤더 */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-3 flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-white" />
              <span className="text-white font-medium">{testimonials[currentIndex].name}</span>
              <span className="ml-auto text-blue-200 text-xs">{testimonials[currentIndex].time}</span>
            </div>

            {/* 대화 내용 */}
            <div className="p-4 space-y-3 bg-[#B2C7D9] min-h-[200px]">
              {/* 고객 메시지 */}
              <div className="flex justify-start">
                <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-2 max-w-[85%] shadow-sm">
                  <p className="text-gray-800 text-sm">{testimonials[currentIndex].message}</p>
                </div>
              </div>

              {/* 받은 금액 */}
              <div className="flex justify-center">
                <div className="bg-yellow-100 rounded-full px-4 py-1.5 flex items-center gap-2">
                  <Gift className="w-4 h-4 text-yellow-600" />
                  <span className="text-yellow-700 font-bold text-sm">
                    {testimonials[currentIndex].amount} 수령
                  </span>
                </div>
              </div>

              {/* 설계사 답장 */}
              <div className="flex justify-end">
                <div className="bg-[#FEE500] rounded-2xl rounded-tr-sm px-4 py-2 max-w-[85%] shadow-sm">
                  <p className="text-gray-800 text-sm">{testimonials[currentIndex].reply}</p>
                </div>
              </div>
            </div>

            {/* 하단 */}
            <div className="bg-white px-4 py-3 border-t flex items-center justify-center gap-2">
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              <span className="text-sm text-gray-600">감사 메시지</span>
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
