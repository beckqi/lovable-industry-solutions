import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import productFlat from "@/assets/product-flat.png";
import productModel from "@/assets/product-model.png";
import heroAbstractBg from "@/assets/hero-abstract-bg.jpg";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Handle slider drag
  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  };
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-background">
      {/* Main content - centered like Cohere */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-start px-6 pt-32 md:pt-40 lg:pt-48">
        {/* Main headline - Cohere style elegant serif */}
        <h1
          className={`text-center mb-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal text-foreground tracking-tight leading-[1.1]" style={{ fontFamily: "'Times New Roman', 'Noto Serif SC', serif" }}>
            Your next breakthrough,
          </span>
          <span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground tracking-tight leading-[1.1] mt-2" style={{ fontFamily: "'Times New Roman', 'Noto Serif SC', serif" }}>
            powered by AI
          </span>
        </h1>

        {/* Subtitle - Cohere style */}
        <p
          className={`text-center text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed mb-10 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          为品牌提供商拍、剪辑、管理全链路 AIGC 解决方案 — 让您的工作更智能
        </p>

        {/* CTA Buttons - Cohere style */}
        <div
          className={`flex flex-col sm:flex-row items-center gap-4 mb-20 transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Button
            size="lg"
            className="bg-foreground hover:bg-foreground/90 text-background text-base font-medium px-8 py-6 rounded-full"
          >
            预约演示
          </Button>
          <button className="text-foreground text-base font-medium underline underline-offset-4 decoration-foreground/40 hover:decoration-foreground transition-all">
            了解产品
          </button>
        </div>

        {/* Image cards - Cohere style grid */}
        <div
          className={`w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-4 px-4 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Large left card - Abstract gradient with floating UI */}
          <div className="lg:col-span-8 relative rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-auto lg:min-h-[480px]">
            {/* Cohere-style gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-200 via-pink-100 to-amber-100" />

            {/* Floating UI Card */}
            <div className="absolute bottom-8 left-8 right-8 md:right-auto md:max-w-sm">
              <div className="bg-foreground/95 backdrop-blur-xl rounded-2xl p-5 text-background shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-background/20 flex items-center justify-center text-lg font-semibold">
                    E
                  </div>
                  <span className="text-lg font-medium">ECGPT 电商大模型</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  {["文件", "数据", "图片"].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-background/10 rounded-full text-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                      {item}
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-3 bg-background/10 rounded-xl p-3">
                  <span className="text-sm opacity-80">
                    帮我生成一张模特试穿图...
                  </span>
                  <div className="ml-auto w-8 h-8 rounded-lg bg-background/20 flex items-center justify-center">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right card - Before/After comparison */}
          <div
            ref={sliderRef}
            className="lg:col-span-4 relative rounded-3xl overflow-hidden aspect-[3/4] lg:aspect-auto lg:min-h-[480px] cursor-ew-resize select-none"
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
          >
            {/* Before Image (Product Flat) */}
            <img
              src={productFlat}
              alt="产品平铺图 - Before"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* After Image (Model) with clip */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src={productModel}
                alt="AI 生成模特图 - After"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Slider Line */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-white/80 shadow-lg cursor-ew-resize z-10"
              style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
              onMouseDown={handleMouseDown}
              onTouchStart={handleMouseDown}
            >
              {/* Slider Handle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center">
                <div className="flex gap-0.5">
                  <ArrowRight className="w-3 h-3 text-foreground rotate-180" />
                  <ArrowRight className="w-3 h-3 text-foreground" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
