"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    age: "",
    consultationType: "",
    agreePrivacy: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 실제로는 여기서 API 호출하여 DB에 저장
    console.log("고객 상담 DB 저장:", formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="consultation" className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-12 shadow-[0_10px_60px_-15px_rgba(0,0,0,0.2)] border border-gray-100">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              상담 신청이 완료되었습니다!
            </h2>
            <p className="text-gray-600 text-lg">
              빠른 시일 내에 전문 상담사가 연락드리겠습니다.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="consultation" className="py-20 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            무료 상담 신청
          </h2>
          <p className="text-lg text-gray-600">
            전문 상담사가 맞춤 보험 설계를 도와드립니다
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-[0_10px_60px_-15px_rgba(0,0,0,0.2)] border border-gray-100">
          <div className="space-y-6">
            {/* 이름 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                이름 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="홍길동"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>

            {/* 연락처 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                연락처 <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="010-1234-5678"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>

            {/* 나이 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                나이
              </label>
              <input
                type="number"
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                placeholder="만 나이"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                min="0"
                max="100"
              />
            </div>

            {/* 상담 유형 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                상담 유형 <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: "hidden", label: "숨은 보험금 찾기" },
                  { value: "new", label: "신규 보험 가입" },
                  { value: "review", label: "보험 리모델링" },
                  { value: "claim", label: "보험금 청구" },
                ].map((type) => (
                  <button
                    key={type.value}
                    type="button"
                    onClick={() => setFormData({ ...formData, consultationType: type.value })}
                    className={`py-3 px-4 rounded-lg border-2 font-medium transition-all text-sm ${
                      formData.consultationType === type.value
                        ? "border-blue-500 bg-blue-50 text-blue-700"
                        : "border-gray-300 text-gray-600 hover:border-gray-400"
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 개인정보 동의 */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="agreePrivacy"
                required
                checked={formData.agreePrivacy}
                onChange={(e) => setFormData({ ...formData, agreePrivacy: e.target.checked })}
                className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="agreePrivacy" className="text-sm text-gray-600">
                개인정보 수집 및 이용에 동의합니다. <span className="text-red-500">*</span>
                <br />
                <span className="text-xs text-gray-400">
                  수집항목: 이름, 연락처, 나이 | 이용목적: 상담 서비스 제공
                </span>
              </label>
            </div>

            {/* 제출 버튼 */}
            <button
              type="submit"
              disabled={!formData.name || !formData.phone || !formData.consultationType || !formData.agreePrivacy}
              className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 disabled:bg-gray-400 text-white py-4 rounded-lg font-semibold text-lg transition-all"
            >
              <Send className="w-5 h-5" />
              상담 신청하기
            </button>
          </div>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          영업일 기준 24시간 이내 연락드립니다
        </p>
      </div>
    </section>
  );
}
