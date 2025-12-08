import { MessageCircle, UserCheck, FileText, CheckCircle } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "온라인 상담 신청",
    duration: "1분",
    description: "간단한 정보 입력으로 상담을 신청하세요",
    icon: MessageCircle,
  },
  {
    id: 2,
    title: "전문 상담사 배정",
    duration: "당일",
    description: "고객님의 조건에 맞는 전문가가 배정됩니다",
    icon: UserCheck,
  },
  {
    id: 3,
    title: "맞춤 설계 제안",
    duration: "1-2일",
    description: "최적의 보장 플랜을 설계해 드립니다",
    icon: FileText,
  },
  {
    id: 4,
    title: "계약 및 보장 시작",
    duration: "즉시",
    description: "계약 완료 즉시 보장이 시작됩니다",
    icon: CheckCircle,
  },
];

export default function Timeline() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            간편한 가입 프로세스
          </h2>
          <p className="text-lg text-blue-100">
            복잡한 절차 없이 빠르게 보장을 시작하세요
          </p>
        </div>

        <div className="relative">
          {/* Desktop Timeline Line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-1 bg-blue-400/30">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 animate-pulse"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.id} className="relative">
                  {/* Step Number */}
                  <div className="flex flex-col items-center">
                    <div className="relative z-10 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg mb-6">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <span className="inline-block bg-blue-500/50 text-white text-sm px-3 py-1 rounded-full mb-3">
                        {step.duration}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-blue-100 text-sm">{step.description}</p>
                    </div>
                  </div>

                  {/* Mobile Arrow */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center my-4">
                      <div className="w-0.5 h-8 bg-blue-400/50"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#consultation"
            className="inline-block bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-full font-semibold transition-colors shadow-lg"
          >
            지금 바로 시작하기
          </a>
        </div>
      </div>
    </section>
  );
}
