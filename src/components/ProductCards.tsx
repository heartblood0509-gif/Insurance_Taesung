import { FileText, Award, TrendingUp, CheckCircle } from "lucide-react";
import Image from "next/image";

const stats = [
  { value: "600만원", label: "치아보험 없이 임플란트 보상", icon: Award },
  { value: "수백 건", label: "보상 청구 성공 사례", icon: FileText },
  { value: "98%", label: "청구 성공률", icon: TrendingUp },
  { value: "127만원", label: "평균 숨은 보험금 발굴", icon: CheckCircle },
];

export default function ProductCards() {
  return (
    <section id="products" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            치아보험 없으면 임플란트 보장 못 받는다구요?<br className="hidden md:block" />
            <span className="text-blue-600">제 고객님은 600만 원 받으셨는데요?</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 왼쪽: 지급 내역서 스타일 */}
          <div className="space-y-6">
            {/* 가상의 지급 내역서 카드 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">보험금 지급 내역서</p>
                  <p className="font-semibold text-gray-900">실손의료비 + 진단비</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-dashed border-gray-200">
                  <span className="text-gray-600">청구 항목</span>
                  <span className="font-medium text-gray-900">임플란트 시술비</span>
                </div>
                <div className="flex justify-between py-2 border-b border-dashed border-gray-200">
                  <span className="text-gray-600">보험사 최초 안내</span>
                  <span className="font-medium text-red-500 line-through">지급 불가</span>
                </div>
                <div className="flex justify-between py-2 border-b border-dashed border-gray-200">
                  <span className="text-gray-600">보상청 청구 후</span>
                  <span className="font-bold text-blue-600">6,000,000원</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">지급 상태</span>
                  <span className="inline-flex items-center gap-1 text-green-600 font-semibold">
                    <CheckCircle className="w-4 h-4" />
                    지급 완료
                  </span>
                </div>
              </div>
            </div>

            {/* 서류 더미 아이콘 영역 */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-100">
              <div className="flex items-start gap-4">
                <div className="flex -space-x-2">
                  <div className="w-12 h-16 bg-white rounded shadow-md border border-gray-200 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-gray-400" />
                  </div>
                  <div className="w-12 h-16 bg-white rounded shadow-md border border-gray-200 flex items-center justify-center translate-y-1">
                    <FileText className="w-6 h-6 text-gray-400" />
                  </div>
                  <div className="w-12 h-16 bg-white rounded shadow-md border border-gray-200 flex items-center justify-center translate-y-2">
                    <FileText className="w-6 h-6 text-blue-500" />
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">수백 건의 청구 데이터</p>
                  <p className="text-sm text-gray-600">
                    매년 축적되는 보상 청구 노하우가<br />
                    고객님의 숨은 돈을 찾아드립니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 오른쪽: 본문 텍스트 */}
          <div className="space-y-6">
            <div className="prose prose-lg">
              <p className="text-gray-600 text-lg leading-relaxed">
                남들은 안 된다고 포기할 때, 저는 받아냈습니다.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                보험사가 가장 무서워하는 설계사는 약관을 외우는 사람이 아니라,{" "}
                <span className="font-bold text-gray-900 bg-yellow-100 px-1">
                  &apos;청구를 미친 듯이 해본 사람&apos;
                </span>
                입니다.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                수백 건의 보상 청구 데이터와 노하우,<br />
                이것이 제 실력의 증거입니다.
              </p>
            </div>

            {/* 통계 그리드 */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-xl font-bold text-gray-900">{stat.value}</p>
                        <p className="text-xs text-gray-500">{stat.label}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
