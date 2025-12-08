import { Heart, Shield, Activity, PiggyBank, ArrowRight } from "lucide-react";

const products = [
  {
    id: 1,
    name: "실손보험",
    icon: Heart,
    description: "실제 의료비의 최대 90%까지 보장",
    features: ["입원/통원 의료비", "약제비 보장", "MRI/CT 검사비"],
    price: "월 35,000원부터",
    color: "blue",
  },
  {
    id: 2,
    name: "암보험",
    icon: Shield,
    description: "암 진단 시 최대 1억원 일시금 보장",
    features: ["암 진단비", "수술/입원비", "항암치료비"],
    price: "월 25,000원부터",
    color: "purple",
  },
  {
    id: 3,
    name: "건강보험",
    icon: Activity,
    description: "질병/상해에 대한 종합적인 보장",
    features: ["성인병 보장", "수술비 보장", "입원일당"],
    price: "월 45,000원부터",
    color: "green",
  },
  {
    id: 4,
    name: "연금보험",
    icon: PiggyBank,
    description: "안정적인 노후를 위한 연금 설계",
    features: ["비과세 혜택", "안정적 수익", "종신연금 가능"],
    price: "월 80,000원부터",
    color: "orange",
  },
];

const colorClasses: Record<string, { bg: string; icon: string; button: string }> = {
  blue: {
    bg: "bg-blue-50",
    icon: "text-blue-600",
    button: "bg-blue-600 hover:bg-blue-700",
  },
  purple: {
    bg: "bg-purple-50",
    icon: "text-purple-600",
    button: "bg-purple-600 hover:bg-purple-700",
  },
  green: {
    bg: "bg-green-50",
    icon: "text-green-600",
    button: "bg-green-600 hover:bg-green-700",
  },
  orange: {
    bg: "bg-orange-50",
    icon: "text-orange-600",
    button: "bg-orange-600 hover:bg-orange-700",
  },
};

export default function ProductCards() {
  return (
    <section id="products" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            주요 보험 상품
          </h2>
          <p className="text-lg text-gray-600">
            고객님에게 맞는 최적의 보험 상품을 찾아보세요
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => {
            const Icon = product.icon;
            const colors = colorClasses[product.color];

            return (
              <div
                key={product.id}
                className="bg-white hover:bg-gray-50 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.05] transition-all duration-300 p-6 flex flex-col"
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center mb-4`}
                >
                  <Icon className={`w-7 h-7 ${colors.icon}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">{product.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-6 flex-grow">
                  {product.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <p className="text-lg font-bold text-gray-900 mb-4">
                  {product.price}
                </p>

                {/* CTA Button */}
                <button
                  className={`flex items-center justify-center gap-2 ${colors.button} text-white py-3 rounded-lg font-medium transition-colors`}
                >
                  자세히 보기
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
