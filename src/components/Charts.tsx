"use client";

import { useState, useEffect, useRef } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const coverageData = [
  { name: "보상청", 보장범위: 95, color: "#2563eb" },
  { name: "A사", 보장범위: 75, color: "#94A3B8" },
  { name: "B사", 보장범위: 70, color: "#94A3B8" },
  { name: "C사", 보장범위: 65, color: "#94A3B8" },
];

const ageData = [
  { age: "20대", 보험료: 25000 },
  { age: "30대", 보험료: 35000 },
  { age: "40대", 보험료: 50000 },
  { age: "50대", 보험료: 75000 },
  { age: "60대", 보험료: 100000 },
];

const satisfactionData = [
  { name: "매우만족", value: 65, color: "#2563eb" },
  { name: "만족", value: 25, color: "#60a5fa" },
  { name: "보통", value: 8, color: "#93c5fd" },
  { name: "불만족", value: 2, color: "#dbeafe" },
];

// 커스텀 툴팁 컴포넌트
const CustomBarTooltip = ({ active, payload }: { active?: boolean; payload?: Array<{ value: number; payload: { name: string } }> }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white px-4 py-2 shadow-lg rounded-lg border border-gray-200 animate-fade-in">
        <p className="font-semibold text-gray-900">{payload[0].payload.name}</p>
        <p className="text-blue-600 font-bold">{payload[0].value}%</p>
      </div>
    );
  }
  return null;
};

const CustomLineTooltip = ({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number }>; label?: string }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white px-4 py-3 shadow-lg rounded-lg border border-gray-200 transition-opacity duration-300 ease-out">
        <p className="font-semibold text-gray-900">{label}</p>
        <p className="text-blue-600 font-bold text-lg">
          {Number(payload[0].value).toLocaleString()}원
        </p>
      </div>
    );
  }
  return null;
};

const CustomPieTooltip = ({ active, payload }: { active?: boolean; payload?: Array<{ value: number; name: string }> }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white px-4 py-2 shadow-lg rounded-lg border border-gray-200">
        <p className="font-semibold text-gray-900">{payload[0].name}</p>
        <p className="text-blue-600 font-bold">{payload[0].value}%</p>
      </div>
    );
  }
  return null;
};

// 커스텀 도트 컴포넌트 (통통 튀는 효과)
const CustomDot = (props: { cx?: number; cy?: number; index?: number; isAnimating: boolean }) => {
  const { cx, cy, index = 0, isAnimating } = props;

  if (!cx || !cy) return null;

  return (
    <circle
      cx={cx}
      cy={cy}
      r={6}
      fill="#2563eb"
      stroke="#fff"
      strokeWidth={2}
      style={{
        opacity: isAnimating ? 1 : 0,
        transform: isAnimating ? 'scale(1)' : 'scale(0)',
        transformOrigin: `${cx}px ${cy}px`,
        transition: `all 0.3s ease-out ${0.2 + index * 0.15}s`,
      }}
    />
  );
};

export default function Charts() {
  const [isVisible, setIsVisible] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const [activeBarIndex, setActiveBarIndex] = useState<number | null>(null);
  const [activePieIndex, setActivePieIndex] = useState<number | null>(null);
  const [hoveredLegend, setHoveredLegend] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimationKey((prev) => prev + 1);
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            데이터로 보는 보상청
          </h2>
          <p className="text-lg text-gray-600">
            경쟁사 대비 우수한 보장과 높은 고객 만족도
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* 보장 범위 비교 */}
          <div className="bg-gray-100 rounded-2xl p-6 overflow-hidden">
            <h3 className="text-lg font-bold text-gray-900 mb-6">
              보장 범위 비교
            </h3>
            <div className="overflow-hidden">
              <ResponsiveContainer width="100%" height={250} key={`bar-${animationKey}`}>
                <BarChart data={coverageData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" domain={[0, 100]} />
                  <YAxis type="category" dataKey="name" width={80} />
                  <Tooltip content={<CustomBarTooltip />} cursor={{ fill: 'rgba(37, 99, 235, 0.1)' }} />
                  <Bar
                    dataKey="보장범위"
                    radius={[0, 4, 4, 0]}
                    isAnimationActive={isVisible}
                    animationBegin={0}
                    animationDuration={1200}
                    animationEasing="ease-out"
                    onMouseEnter={(_, index) => setActiveBarIndex(index)}
                    onMouseLeave={() => setActiveBarIndex(null)}
                  >
                    {coverageData.map((entry, index) => (
                      <Cell
                        key={`bar-cell-${index}`}
                        fill={activeBarIndex === index ? (index === 0 ? "#1d4ed8" : entry.color) : entry.color}
                        style={{
                          transition: "fill 0.2s ease-out",
                        }}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">
              * 동일 조건 기준 보장 범위 비교
            </p>
          </div>

          {/* 연령대별 보험료 */}
          <div className="bg-gray-100 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-6">
              연령대별 평균 보험료
            </h3>
            <ResponsiveContainer width="100%" height={250} key={`line-${animationKey}`}>
              <LineChart data={ageData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="age" />
                <YAxis tickFormatter={(value) => `${value / 10000}만`} />
                <Tooltip content={<CustomLineTooltip />} />
                <Line
                  type="monotone"
                  dataKey="보험료"
                  stroke="#2563eb"
                  strokeWidth={3}
                  dot={(props) => <CustomDot {...props} isAnimating={isVisible} />}
                  activeDot={{ r: 8, fill: "#1d4ed8", stroke: "#fff", strokeWidth: 2 }}
                  animationBegin={0}
                  animationDuration={1200}
                  animationEasing="ease-out"
                  strokeDasharray={isVisible ? "0" : "1000"}
                  style={{
                    strokeDashoffset: isVisible ? 0 : 1000,
                    transition: "stroke-dashoffset 1.2s ease-out",
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
            <p className="text-sm text-gray-500 mt-4 text-center">
              * 실손보험 기준 월 보험료
            </p>
          </div>

          {/* 고객 만족도 */}
          <div className="bg-gray-100 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-6">
              고객 만족도 조사
            </h3>
            <ResponsiveContainer width="100%" height={250} key={`pie-${animationKey}`}>
              <PieChart>
                <Pie
                  data={satisfactionData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={activePieIndex !== null || hoveredLegend ? 95 : 90}
                  paddingAngle={2}
                  dataKey="value"
                  animationBegin={0}
                  animationDuration={1500}
                  animationEasing="ease-out"
                  onMouseEnter={(_, index) => setActivePieIndex(index)}
                  onMouseLeave={() => setActivePieIndex(null)}
                >
                  {satisfactionData.map((entry, index) => {
                    const isActive = activePieIndex === index || hoveredLegend === entry.name;
                    return (
                      <Cell
                        key={`cell-${index}`}
                        fill={entry.color}
                        style={{
                          transform: isActive ? 'scale(1.08)' : 'scale(1)',
                          transformOrigin: 'center center',
                          transition: 'transform 0.3s ease-out, opacity 0.3s ease-out',
                          opacity: (activePieIndex !== null || hoveredLegend) && !isActive ? 0.5 : 1,
                          filter: isActive ? 'brightness(1.1)' : 'brightness(1)',
                        }}
                      />
                    );
                  })}
                </Pie>
                <Tooltip content={<CustomPieTooltip />} />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              {satisfactionData.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center gap-2 cursor-pointer transition-all duration-200 hover:scale-105"
                  onMouseEnter={() => setHoveredLegend(item.name)}
                  onMouseLeave={() => setHoveredLegend(null)}
                >
                  <span
                    className="w-3 h-3 rounded-full transition-transform duration-200"
                    style={{
                      backgroundColor: item.color,
                      transform: hoveredLegend === item.name ? 'scale(1.3)' : 'scale(1)',
                    }}
                  ></span>
                  <span
                    className="text-sm transition-colors duration-200"
                    style={{
                      color: hoveredLegend === item.name ? '#1d4ed8' : '#4b5563',
                      fontWeight: hoveredLegend === item.name ? 600 : 400,
                    }}
                  >
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
