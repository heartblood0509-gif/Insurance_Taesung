import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "보상청 - 걱정 없는 내일을 위한 든든한 보장",
  description:
    "가족의 미래를 지키는 맞춤형 보험 설계. 실손보험, 암보험, 건강보험, 연금보험을 합리적인 가격에 제공합니다.",
  keywords: "보험, 실손보험, 암보험, 건강보험, 연금보험, 보험료 계산",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${notoSansKR.className} antialiased`}>{children}</body>
    </html>
  );
}
