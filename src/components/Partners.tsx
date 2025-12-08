import Image from "next/image";
import { Building, ShieldCheck, BadgeCheck } from "lucide-react";

const awards = [
  { id: 1, name: "고객만족대상", year: "2024", image: "/award-1.jpg" },
  { id: 2, name: "브랜드파워 1위", year: "2024", image: "/award-2.jpg" },
  { id: 3, name: "서비스품질 우수", year: "2023", image: "/award-3.jpg" },
];

const certifications = [
  { id: 1, name: "금융감독원 등록", icon: ShieldCheck },
  { id: 2, name: "개인정보보호 인증", icon: BadgeCheck },
  { id: 3, name: "정보보안 인증", icon: ShieldCheck },
];

const partners = [
  "삼성화재",
  "DB손해보험",
  "현대해상",
  "KB손해보험",
  "메리츠화재",
  "한화손해보험",
];

export default function Partners() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            신뢰할 수 있는 보상청
          </h2>
          <p className="text-lg text-gray-600">
            검증된 파트너사와 함께 안전한 보험 서비스를 제공합니다
          </p>
        </div>

        {/* Awards */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-gray-900 text-center mb-8">
            수상 경력
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {awards.map((award) => (
              <div
                key={award.id}
                className="flex flex-col items-center text-center bg-gradient-to-b from-gray-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative w-56 h-56 mb-4 overflow-hidden rounded-xl">
                  <Image
                    src={award.image}
                    alt={award.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="font-semibold text-gray-900 text-lg">{award.name}</p>
                <p className="text-sm text-gray-500">{award.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-gray-900 text-center mb-8">
            인증 마크
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {certifications.map((cert) => {
              const Icon = cert.icon;
              return (
                <div
                  key={cert.id}
                  className="flex items-center gap-3 bg-gray-100 px-6 py-4 rounded-xl"
                >
                  <Icon className="w-6 h-6 text-green-600" />
                  <span className="font-medium text-gray-700">{cert.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Partners */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 text-center mb-8">
            제휴 보험사
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-gray-100 px-6 py-3 rounded-lg"
              >
                <Building className="w-5 h-5 text-gray-500" />
                <span className="font-medium text-gray-700">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
