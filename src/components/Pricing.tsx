import { Check, Star } from "lucide-react";

const plans = [
  {
    id: 1,
    name: "기본형",
    price: "29,900",
    description: "필수 보장만 담은 실속 플랜",
    features: [
      "입원 의료비 보장",
      "수술비 보장",
      "암 진단비 1천만원",
      "24시간 상담 서비스",
    ],
    notIncluded: ["통원 의료비", "고액 진단비", "실손 약제비"],
    popular: false,
    color: "gray",
  },
  {
    id: 2,
    name: "표준형",
    price: "49,900",
    description: "가장 많이 선택하는 인기 플랜",
    features: [
      "입원/통원 의료비 보장",
      "수술비 보장",
      "암 진단비 3천만원",
      "뇌/심장 진단비",
      "24시간 상담 서비스",
      "건강검진 할인",
    ],
    notIncluded: ["고액 진단비", "해외 의료비"],
    popular: true,
    color: "blue",
  },
  {
    id: 3,
    name: "프리미엄형",
    price: "79,900",
    description: "최고 수준의 종합 보장 플랜",
    features: [
      "입원/통원 의료비 전액 보장",
      "수술비 보장 (무제한)",
      "암 진단비 1억원",
      "뇌/심장 진단비",
      "희귀질환 특약",
      "24시간 프리미엄 상담",
      "건강검진 무료",
      "해외 의료비 보장",
    ],
    notIncluded: [],
    popular: false,
    color: "purple",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            보험 플랜 비교
          </h2>
          <p className="text-lg text-gray-600">
            고객님에게 맞는 플랜을 선택하세요
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden ${
                plan.popular ? "ring-2 ring-blue-500 scale-105" : ""
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-blue-500 text-white text-sm font-semibold py-2 text-center flex items-center justify-center gap-2">
                  <Star className="w-4 h-4 fill-white" />
                  가장 인기 있는 플랜
                </div>
              )}

              <div className={`p-8 ${plan.popular ? "pt-14" : ""}`}>
                {/* Plan Name */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-500 text-sm mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-500">원/월</span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                  {plan.notIncluded.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-gray-400"
                    >
                      <span className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                        -
                      </span>
                      <span className="text-sm line-through">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                  }`}
                >
                  이 플랜 선택하기
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-sm text-gray-500 mt-8">
          * 표시된 가격은 30세 기준이며, 나이와 건강 상태에 따라 달라질 수 있습니다
        </p>
      </div>
    </section>
  );
}
