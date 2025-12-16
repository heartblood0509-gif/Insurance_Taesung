"use client";

import { useState } from "react";
import { MessageCircle, X, Send, Phone } from "lucide-react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "안녕하세요! 보상청입니다. 무엇을 도와드릴까요?",
    },
  ]);
  const [input, setInput] = useState("");

  const quickReplies = [
    { text: "숨은 보험금 찾기", action: "hidden" },
    { text: "보험료 절감 상담", action: "save" },
    { text: "어떤 보험사 상품을 취급하나요?", action: "companies" },
    { text: "전화 상담 신청", action: "call" },
  ];

  const handleQuickReply = (action: string, text: string) => {
    setMessages([
      ...messages,
      { type: "user", text },
      {
        type: "bot",
        text: getBotResponse(action),
      },
    ]);
  };

  const getRandomResponse = (responses: string[]) => {
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const getBotResponse = (action: string) => {
    const responses = {
      hidden: [
        "숨은 보험금을 찾아드리겠습니다! 평균 127만원의 보험금을 찾아드리고 있어요. 전화 상담(010-5482-4285)으로 무료 진단받으세요.",
        "고객님, 받지 못한 보험금이 있을 수 있어요. 저희가 찾아드린 평균 금액이 127만원입니다. 010-5482-4285로 연락주시면 무료로 진단해드릴게요.",
        "생각보다 많은 분들이 보험금을 못 받고 계세요. 한번 확인해보시는 게 어떨까요? 평균 127만원 정도 찾아드리고 있습니다. 상담 문의: 010-5482-4285"
      ],
      save: [
        "월 보험료는 평균 47% 줄이고, 보장은 2배로 늘려드립니다. 지금 바로 상담받으시겠어요?",
        "보험료 부담 크시죠? 같은 보장인데 절반 가격으로 가능합니다. 오히려 보장은 더 좋아질 수 있어요. 상담 받아보실래요?",
        "지금 내시는 보험료, 거의 절반으로 줄일 수 있어요. 보장은 오히려 2배 더 탄탄하게 만들어드립니다. 한번 비교해보시겠어요?"
      ],
      companies: [
        "저희는 특정 보험사에 소속 안 되어 있어서, 삼성생명, 한화생명, 교보생명, DB손해보험, 현대해상, 메리츠화재 등 국내 모든 보험사 상품을 종합적으로 비교해드려요. 가격도 적정하고 보장도 탄탄한 걸로 찾아드립니다!",
        "전 보험사 상품 다 취급해요. 삼성, 한화, 교보, DB, 현대해상, 메리츠 전부 비교 분석해서 고객님께 딱 맞는 상품 찾아드리죠. 가격 대비 보장 최고인 걸로요.",
        "독립 설계사라 좋은 게, 모든 보험사를 편향 없이 비교할 수 있다는 거예요. 삼성생명부터 메리츠화재까지 전부 놓고 검토해서 가성비 좋은 상품 추천해드립니다.",
        "네, 모든 보험사 다 취급합니다! 삼성, 한화, 교보, DB, 현대해상, 메리츠 등등 국내 전 보험사 상품 종합 비교해서 고객님한테 제일 유리한 조합 찾아드려요. 가격도 보장도 만족스럽게요.",
        "특정 회사 소속 아니라서 더 좋죠. 모든 보험사 상품 다 비교 가능하거든요. 삼성생명, 한화, 교보, DB손보, 현대해상, 메리츠 전부 검토해서 가장 합리적인 가격에 최선의 보장 제공하는 상품 찾아드립니다."
      ],
      call: [
        "전화 상담을 원하시는군요! 010-5482-4285로 연락주시거나, 아래 전화 버튼을 눌러주세요.",
        "바로 상담 도와드릴게요. 010-5482-4285로 전화주시면 됩니다. 아래 버튼 누르시면 바로 연결돼요!",
        "네, 전화로 자세히 안내해드릴게요. 010-5482-4285 이 번호로 연락주세요. 하단 전화 버튼 클릭하셔도 바로 연결됩니다."
      ],
      default: [
        "감사합니다! 정확한 상담을 위해 전화 상담(010-5482-4285)을 권장드립니다. 상담사가 자세히 안내해드릴게요.",
        "더 자세한 내용은 전화로 안내해드리는 게 좋을 것 같아요. 010-5482-4285로 연락주시면 친절하게 상담해드립니다!",
        "죄송해요, 정확히 이해하지 못했네요. 전화(010-5482-4285)로 문의주시면 바로 답변드릴 수 있어요."
      ]
    };

    switch (action) {
      case "hidden":
        return getRandomResponse(responses.hidden);
      case "save":
        return getRandomResponse(responses.save);
      case "companies":
        return getRandomResponse(responses.companies);
      case "call":
        return getRandomResponse(responses.call);
      default:
        return getRandomResponse(responses.default);
    }
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userInput = input.toLowerCase();
    let botResponse = "";

    const variableResponses = {
      companies: [
        "저희는 특정 보험사에 소속 안 되어 있어서, 삼성생명, 한화생명, 교보생명, DB손해보험, 현대해상, 메리츠화재 등 국내 모든 보험사 상품을 종합적으로 비교해드려요. 가격도 적정하고 보장도 탄탄한 걸로 찾아드립니다!",
        "전 보험사 상품 다 취급해요. 삼성, 한화, 교보, DB, 현대해상, 메리츠 전부 비교 분석해서 고객님께 딱 맞는 상품 찾아드리죠. 가격 대비 보장 최고인 걸로요.",
        "독립 설계사라 좋은 게, 모든 보험사를 편향 없이 비교할 수 있다는 거예요. 삼성생명부터 메리츠화재까지 전부 놓고 검토해서 가성비 좋은 상품 추천해드립니다.",
        "네, 모든 보험사 다 취급합니다! 삼성, 한화, 교보, DB, 현대해상, 메리츠 등등 국내 전 보험사 상품 종합 비교해서 고객님한테 제일 유리한 조합 찾아드려요. 가격도 보장도 만족스럽게요.",
        "특정 회사 소속 아니라서 더 좋죠. 모든 보험사 상품 다 비교 가능하거든요. 삼성생명, 한화, 교보, DB손보, 현대해상, 메리츠 전부 검토해서 가장 합리적인 가격에 최선의 보장 제공하는 상품 찾아드립니다."
      ],
      hidden: [
        "숨은 보험금을 찾아드리겠습니다! 평균 127만원의 보험금을 찾아드리고 있어요. 전화 상담(010-5482-4285)으로 무료 진단받으세요.",
        "고객님, 받지 못한 보험금이 있을 수 있어요. 저희가 찾아드린 평균 금액이 127만원입니다. 010-5482-4285로 연락주시면 무료로 진단해드릴게요.",
        "생각보다 많은 분들이 보험금을 못 받고 계세요. 한번 확인해보시는 게 어떨까요? 평균 127만원 정도 찾아드리고 있습니다. 상담 문의: 010-5482-4285"
      ],
      save: [
        "월 보험료는 평균 47% 줄이고, 보장은 2배로 늘려드립니다. 지금 바로 상담받으시겠어요?",
        "보험료 부담 크시죠? 같은 보장인데 절반 가격으로 가능합니다. 오히려 보장은 더 좋아질 수 있어요. 상담 받아보실래요?",
        "지금 내시는 보험료, 거의 절반으로 줄일 수 있어요. 보장은 오히려 2배 더 탄탄하게 만들어드립니다. 한번 비교해보시겠어요?"
      ],
      call: [
        "전화 상담을 원하시는군요! 010-5482-4285로 연락주시거나, 아래 전화 버튼을 눌러주세요.",
        "바로 상담 도와드릴게요. 010-5482-4285로 전화주시면 됩니다. 아래 버튼 누르시면 바로 연결돼요!",
        "네, 전화로 자세히 안내해드릴게요. 010-5482-4285 이 번호로 연락주세요. 하단 전화 버튼 클릭하셔도 바로 연결됩니다."
      ],
      default: [
        "감사합니다! 정확한 상담을 위해 전화 상담(010-5482-4285)을 권장드립니다. 상담사가 자세히 안내해드릴게요.",
        "더 자세한 내용은 전화로 안내해드리는 게 좋을 것 같아요. 010-5482-4285로 연락주시면 친절하게 상담해드립니다!",
        "죄송해요, 정확히 이해하지 못했네요. 전화(010-5482-4285)로 문의주시면 바로 답변드릴 수 있어요."
      ]
    };

    // 키워드 기반 답변
    if (userInput.includes("안녕") || userInput.includes("처음") || userInput.includes("반갑") || userInput.includes("도와")) {
      const greetings = [
        "안녕하세요! 보상청입니다. 숨은 보험금 찾기, 보험료 절감, 보험사 비교 상담 도와드릴게요. 무엇이 궁금하세요?",
        "반갑습니다! 보험 관련 궁금하신 점 편하게 물어보세요. 숨은 보험금, 보험료 절감 등 뭐든 상담해드립니다!",
        "네, 안녕하세요! 보상청 상담사입니다. 보험료 절감이나 숨은 보험금 찾기 등 어떤 도움이 필요하세요?"
      ];
      botResponse = getRandomResponse(greetings);
    } else if (userInput.includes("보험사") || userInput.includes("취급") || userInput.includes("어디") || userInput.includes("회사") || userInput.includes("상품") || (userInput.includes("보험") && (userInput.includes("어떤") || userInput.includes("뭐") || userInput.includes("문의")))) {
      botResponse = getRandomResponse(variableResponses.companies);
    } else if (userInput.includes("숨은") || userInput.includes("보험금")) {
      botResponse = getRandomResponse(variableResponses.hidden);
    } else if (userInput.includes("보험료") || userInput.includes("절감") || userInput.includes("저렴")) {
      botResponse = getRandomResponse(variableResponses.save);
    } else if (userInput.includes("전화") || userInput.includes("상담")) {
      botResponse = getRandomResponse(variableResponses.call);
    } else {
      botResponse = getRandomResponse(variableResponses.default);
    }

    setMessages([
      ...messages,
      { type: "user", text: input },
      {
        type: "bot",
        text: botResponse,
      },
    ]);
    setInput("");
  };

  return (
    <>
      {/* 챗봇 버튼 */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 z-50 animate-pulse"
        >
          <MessageCircle className="w-8 h-8" />
        </button>
      )}

      {/* 챗봇 창 */}
      {isOpen && (
        <div className="fixed top-0 right-0 w-full md:w-[500px] h-screen bg-white shadow-2xl flex flex-col z-50 overflow-hidden md:border-l border-gray-200">
          {/* 헤더 */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-5 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-bold text-lg">보상청 상담봇</h3>
                <p className="text-sm text-blue-100">실시간 상담 가능</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-2 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* 메시지 영역 */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] p-4 rounded-2xl ${
                    msg.type === "user"
                      ? "bg-blue-600 text-white rounded-tr-sm"
                      : "bg-white text-gray-800 rounded-tl-sm shadow-sm"
                  }`}
                >
                  <p className="text-base leading-relaxed">{msg.text}</p>
                </div>
              </div>
            ))}

            {/* 퀵 리플라이 */}
            {messages.length <= 4 && (
              <div className="flex flex-col gap-2 pt-2">
                {quickReplies.map((reply, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleQuickReply(reply.action, reply.text)}
                    className="bg-white border border-blue-200 text-blue-600 px-5 py-3 rounded-full text-base font-medium hover:bg-blue-50 transition-colors text-left"
                  >
                    {reply.text}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 입력 영역 */}
          <div className="p-5 bg-white border-t border-gray-200">
            <div className="flex gap-2 mb-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="메시지를 입력하세요..."
                className="flex-1 px-5 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-base"
              />
              <button
                onClick={handleSend}
                className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors"
              >
                <Send className="w-6 h-6" />
              </button>
            </div>

            {/* 전화 버튼 */}
            <a
              href="tel:01054824285"
              className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-3 rounded-full text-base font-semibold transition-colors"
            >
              <Phone className="w-5 h-5" />
              지금 바로 전화 상담
            </a>
          </div>
        </div>
      )}
    </>
  );
}
