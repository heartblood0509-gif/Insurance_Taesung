import { Clock, Users, AlertTriangle, ArrowRight, User, Calendar } from "lucide-react";

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            죄송합니다.<br />
            <span className="text-blue-600">하루 선착순 딱 3분만 분석해 드립니다.</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            한 달 70건이 넘어가면 상담창을 닫습니다.<br />
            대충 상담해서 건수만 올리고 싶지 않습니다.<br />
            한 분 한 분, 제대로 된 돈을 찾아드리기 위함이니 양해 부탁드립니다.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* 메인 CTA 카드 */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-5 gap-0">
              {/* 왼쪽: 프로필 영역 */}
              <div className="md:col-span-2 bg-gradient-to-br from-blue-600 to-blue-700 p-8 flex flex-col items-center justify-center text-white">
                {/* 프로필 placeholder */}
                <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mb-4 border-4 border-white/30">
                  <User className="w-16 h-16 text-white/80" />
                </div>
                <h3 className="text-xl font-bold mb-1">보상청 전문 상담사</h3>
                <p className="text-blue-200 text-sm mb-4">숨은 보험금 발굴 전문가</p>

                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>300+ 상담</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>5년 경력</span>
                  </div>
                </div>
              </div>

              {/* 오른쪽: CTA 영역 */}
              <div className="md:col-span-3 p-8">
                {/* 마감 임박 뱃지 */}
                <div className="flex items-center gap-2 mb-6">
                  <span className="inline-flex items-center gap-1 bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                    <AlertTriangle className="w-4 h-4" />
                    이번 달 마감 임박
                  </span>
                  <span className="text-gray-500 text-sm">잔여 상담: 3/70건</span>
                </div>

                {/* 클로징 문구 */}
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <p className="text-gray-700 leading-relaxed">
                    망설이는 이 순간에도 보험료는 나가고 있습니다.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-2">
                    보험은 아프지 않은 <span className="font-bold text-blue-600">&apos;오늘&apos;</span>이 가장 쌉니다.
                  </p>
                  <p className="text-gray-900 font-bold text-lg mt-2">
                    내일은 너무 늦습니다.
                  </p>
                </div>

                {/* 제공 서비스 */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">숨은 보험금 무료 진단</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">보험료 절감 분석 리포트</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">맞춤형 보장 리모델링 제안</span>
                  </div>
                </div>

                {/* CTA 버튼 */}
                <a
                  href="#consultation"
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 px-6 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl"
                >
                  내 숨은 돈 찾고 무료 진단받기
                  <ArrowRight className="w-5 h-5" />
                </a>

                <p className="text-center text-sm text-gray-500 mt-4">
                  * 상담 신청 후 24시간 내 연락드립니다
                </p>
              </div>
            </div>
          </div>

          {/* 하단 긴박감 요소 */}
          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-4 text-center shadow-md">
              <Calendar className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">12월</p>
              <p className="text-xs text-gray-500">상담 마감 예정</p>
            </div>
            <div className="bg-white rounded-xl p-4 text-center shadow-md">
              <Users className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">3명</p>
              <p className="text-xs text-gray-500">오늘 잔여 상담</p>
            </div>
            <div className="bg-white rounded-xl p-4 text-center shadow-md">
              <Clock className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">24h</p>
              <p className="text-xs text-gray-500">내 연락 보장</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
