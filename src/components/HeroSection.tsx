import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.png";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Dark overlay 45% opacity */}
      <div className="absolute inset-0 bg-black/45" />
      {/* Main content - centered like Cohere */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6">
        {/* Main headline - Cohere style elegant serif */}
        <h1
          className={`text-center mb-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal text-white tracking-tight leading-[1.1]" style={{ fontFamily: "'Times New Roman', 'Noto Serif SC', serif" }}>
            AI重新定义
          </span>
          <span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white tracking-tight leading-[1.1] mt-2" style={{ fontFamily: "'Times New Roman', 'Noto Serif SC', serif" }}>
            产品生产力
          </span>
        </h1>

        {/* Subtitle - Cohere style */}
        <p
          className={`text-center text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed mb-10 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          为品牌提供商拍、剪辑、管理全链路 AIGC 解决方案 — 让您的工作更智能
        </p>

        {/* CTA Buttons - Cohere style */}
        <div
          className={`flex flex-col sm:flex-row items-center gap-4 transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Button
            size="lg"
            className="bg-white hover:bg-white/90 text-black text-base font-medium px-8 py-6 rounded-full"
          >
            预约演示
          </Button>
          <button className="text-white text-base font-medium underline underline-offset-4 decoration-white/40 hover:decoration-white transition-all">
            了解产品
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
