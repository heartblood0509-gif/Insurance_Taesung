import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "보상청 - 숨은 보험금 찾기 | 평균 127만원 환급",
  description:
    "지난 5년, 보험료는 꼬박꼬박 내셨죠? 그런데 왜 돌려받은 보험금은 0원입니까? 남들은 다 챙겨 받는 숨은 보험금, 당신만 모르고 보험사에 기부하고 계십니다.",
  keywords: "보험, 숨은보험금, 보험금환급, 실손보험, 암보험, 건강보험, 보험료절감",
  openGraph: {
    title: "보상청 - 숨은 보험금 찾기",
    description: "지난 5년 보험료는 꼬박꼬박 냈는데, 돌려받은 보험금은 0원? 평균 127만원의 숨은 보험금을 찾아드립니다.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "보상청 - 숨은 보험금 찾기",
      },
    ],
    type: "website",
    siteName: "보상청",
  },
  twitter: {
    card: "summary_large_image",
    title: "보상청 - 숨은 보험금 찾기",
    description: "지난 5년 보험료는 꼬박꼬박 냈는데, 돌려받은 보험금은 0원? 평균 127만원의 숨은 보험금을 찾아드립니다.",
    images: ["/og-image.jpg"],
  },
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
