export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col pt-16 overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/taesung-video.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Spacer to push content down */}
      <div className="flex-grow"></div>

      {/* Content at bottom */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-56">
        <div className="text-center">
          {/* Main Copy */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight [text-shadow:_0_4px_12px_rgba(0,0,0,0.5),_0_2px_4px_rgba(0,0,0,0.3)]">
            지난 5년, 보험료는 꼬박꼬박 내셨죠?
            <br />
            <span className="text-blue-400 [text-shadow:_0_4px_12px_rgba(0,0,0,0.5),_0_2px_4px_rgba(59,130,246,0.3)]">그런데 왜 돌려받은 보험금은 &apos;0원&apos;입니까?</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto drop-shadow mb-8">
            남들은 다 챙겨 받는 &apos;숨은 보험금&apos;, 당신만 모르고 보험사에 기부하고 계십니다.
            <br />
            밑 빠진 독에 물 붓기, 이제 제가 멈추게 해드립니다.
          </p>

          <a
            href="#consultation"
            className="inline-block bg-white/20 backdrop-blur-md hover:bg-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all border border-white/40 shadow-lg hover:shadow-xl"
          >
            숨은 보험금 찾기
          </a>
        </div>
      </div>
    </section>
  );
}
