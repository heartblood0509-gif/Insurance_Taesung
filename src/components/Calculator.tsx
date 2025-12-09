"use client";

import { TrendingDown, TrendingUp, ArrowRight, Wallet, Shield } from "lucide-react";

export default function Calculator() {
  return (
    <section id="calculator" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            마술이 아닙니다.<br className="hidden md:block" />
            월 보험료는 줄이고, 보장은 2배로 늘려드립니다.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            아낀 돈으로 맛있는 거 사 드세요.<br />
            나가는 돈보다 &apos;들어오는 돈&apos;이 많아야 진짜 보험입니다.
          </p>
        </div>

        {/* Before / After 비교 */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Before */}
            <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl shadow-lg border-2 border-red-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <TrendingDown className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <span className="text-sm text-red-500 font-semibold">BEFORE</span>
                  <h3 className="text-xl font-bold text-gray-900">기존 보험</h3>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center py-3 border-b border-red-100">
                  <span className="text-gray-600">월 보험료</span>
                  <span className="text-2xl font-bold text-red-500">15만원</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-red-100">
                  <span className="text-gray-600">실제 보장 범위</span>
                  <span className="text-lg font-semibold text-gray-400">40%</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-red-100">
                  <span className="text-gray-600">숨은 보험금</span>
                  <span className="text-lg font-semibold text-gray-400">모름</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-600">5년간 낸 보험료</span>
                  <span className="text-xl font-bold text-red-500">900만원</span>
                </div>
              </div>

              <div className="bg-red-100 rounded-xl p-4 text-center">
                <p className="text-red-600 font-medium">돌려받은 보험금</p>
                <p className="text-3xl font-bold text-red-500">0원</p>
              </div>
            </div>

            {/* After */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg border-2 border-blue-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <span className="text-sm text-blue-600 font-semibold">AFTER</span>
                  <h3 className="text-xl font-bold text-gray-900">보상청 리모델링</h3>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center py-3 border-b border-blue-100">
                  <span className="text-gray-600">월 보험료</span>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-blue-600">8만원</span>
                    <span className="ml-2 text-sm text-green-500 font-semibold">-47%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-blue-100">
                  <span className="text-gray-600">실제 보장 범위</span>
                  <div className="text-right">
                    <span className="text-lg font-semibold text-blue-600">95%</span>
                    <span className="ml-2 text-sm text-green-500 font-semibold">+55%p</span>
                  </div>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-blue-100">
                  <span className="text-gray-600">숨은 보험금 발굴</span>
                  <span className="text-lg font-semibold text-blue-600">완료</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-600">5년간 절약 금액</span>
                  <span className="text-xl font-bold text-green-500">420만원</span>
                </div>
              </div>

              <div className="bg-blue-100 rounded-xl p-4 text-center">
                <p className="text-blue-600 font-medium">찾아드린 숨은 보험금</p>
                <p className="text-3xl font-bold text-blue-600">평균 127만원</p>
              </div>
            </div>
          </div>

          {/* 하단 강조 박스 */}
          <div className="mt-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 md:p-8 text-white text-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="flex items-center gap-3">
                <Wallet className="w-8 h-8" />
                <div className="text-left">
                  <p className="text-blue-200 text-sm">월 절약 금액</p>
                  <p className="text-2xl font-bold">7만원</p>
                </div>
              </div>
              <ArrowRight className="w-6 h-6 hidden md:block" />
              <div className="flex items-center gap-3">
                <Shield className="w-8 h-8" />
                <div className="text-left">
                  <p className="text-blue-200 text-sm">보장 범위 증가</p>
                  <p className="text-2xl font-bold">2배 이상</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
