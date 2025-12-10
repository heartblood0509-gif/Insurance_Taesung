import { Phone, Clock, CheckCircle, MessageCircle } from "lucide-react";

export default function ConsultationForm() {
  const phoneNumber = "010-5482-4285";

  return (
    <section id="consultation" className="py-20 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            지금 바로 상담받으세요
          </h2>
          <p className="text-lg text-gray-600">
            전화 한 통이면 숨은 보험금을 찾아드립니다
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-[0_10px_60px_-15px_rgba(0,0,0,0.2)] border border-gray-100">
          {/* 전화 연결 CTA */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-10 h-10 text-blue-600" />
            </div>
            <p className="text-gray-600 mb-2">상담 전화번호</p>
            <p className="text-3xl font-bold text-gray-900 mb-6">{phoneNumber}</p>

            {/* 전화 연결 버튼 */}
            <a
              href={`tel:${phoneNumber.replace(/-/g, "")}`}
              className="w-full flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl"
            >
              <Phone className="w-6 h-6" />
              지금 바로 상담하기
            </a>
          </div>

          {/* 구분선 */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-4 text-sm text-gray-500">또는</span>
            </div>
          </div>

          {/* 카카오톡 상담 (옵션) */}
          <a
            href="#"
            className="w-full flex items-center justify-center gap-3 bg-[#FEE500] hover:bg-[#FDD835] text-gray-900 py-4 px-6 rounded-xl font-bold text-lg transition-all"
          >
            <MessageCircle className="w-6 h-6" />
            카카오톡으로 상담하기
          </a>

          {/* 상담 안내 */}
          <div className="mt-8 space-y-3">
            <div className="flex items-center gap-3 text-gray-600">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span>상담료 무료, 부담 없이 문의하세요</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span>숨은 보험금 무료 진단</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span>보험료 절감 맞춤 컨설팅</span>
            </div>
          </div>
        </div>

        {/* 상담 가능 시간 */}
        <div className="flex items-center justify-center gap-2 mt-6 text-gray-500">
          <Clock className="w-4 h-4" />
          <p className="text-sm">
            상담 가능 시간: 평일 09:00 - 18:00 (주말/공휴일 휴무)
          </p>
        </div>
      </div>
    </section>
  );
}
