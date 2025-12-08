"use client";

import { useState } from "react";
import { Calculator as CalcIcon, ArrowRight } from "lucide-react";

export default function Calculator() {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [coverageType, setCoverageType] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculatePremium = () => {
    if (!age || !gender || !coverageType) return;

    const baseRates: Record<string, number> = {
      medical: 35000,
      cancer: 25000,
      health: 45000,
      pension: 80000,
    };

    const ageNum = parseInt(age);
    let premium = baseRates[coverageType] || 35000;

    // 나이에 따른 조정
    if (ageNum < 30) premium *= 0.8;
    else if (ageNum < 40) premium *= 1.0;
    else if (ageNum < 50) premium *= 1.3;
    else premium *= 1.6;

    // 성별에 따른 조정
    if (gender === "female") premium *= 0.95;

    setResult(Math.round(premium));
  };

  return (
    <section id="calculator" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            간편 보험료 계산기
          </h2>
          <p className="text-lg text-gray-600">
            30초 만에 예상 보험료를 확인해보세요
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg">
          <div className="space-y-6">
            {/* 나이 입력 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                나이
              </label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="만 나이를 입력하세요"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                min="0"
                max="100"
              />
            </div>

            {/* 성별 선택 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                성별
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setGender("male")}
                  className={`py-3 px-4 rounded-lg border-2 font-medium transition-all ${
                    gender === "male"
                      ? "border-blue-500 bg-blue-50 text-blue-700"
                      : "border-gray-300 text-gray-600 hover:border-gray-400"
                  }`}
                >
                  남성
                </button>
                <button
                  type="button"
                  onClick={() => setGender("female")}
                  className={`py-3 px-4 rounded-lg border-2 font-medium transition-all ${
                    gender === "female"
                      ? "border-blue-500 bg-blue-50 text-blue-700"
                      : "border-gray-300 text-gray-600 hover:border-gray-400"
                  }`}
                >
                  여성
                </button>
              </div>
            </div>

            {/* 보장 유형 선택 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                원하는 보장 유형
              </label>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "medical", label: "실손보험" },
                  { value: "cancer", label: "암보험" },
                  { value: "health", label: "건강보험" },
                  { value: "pension", label: "연금보험" },
                ].map((type) => (
                  <button
                    key={type.value}
                    type="button"
                    onClick={() => setCoverageType(type.value)}
                    className={`py-3 px-4 rounded-lg border-2 font-medium transition-all ${
                      coverageType === type.value
                        ? "border-blue-500 bg-blue-50 text-blue-700"
                        : "border-gray-300 text-gray-600 hover:border-gray-400"
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 계산 버튼 */}
            <button
              onClick={calculatePremium}
              disabled={!age || !gender || !coverageType}
              className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white py-4 rounded-lg font-semibold transition-all"
            >
              <CalcIcon className="w-5 h-5" />
              보험료 계산하기
            </button>

            {/* 결과 표시 */}
            {result && (
              <div className="mt-6 p-6 bg-white border-2 border-blue-200 rounded-xl text-center">
                <p className="text-gray-600 mb-2">예상 월 보험료</p>
                <p className="text-4xl font-bold text-blue-600">
                  {result.toLocaleString()}원
                </p>
                <button className="mt-4 flex items-center gap-2 mx-auto text-blue-600 hover:text-blue-700 font-medium">
                  상세 견적 받기
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
