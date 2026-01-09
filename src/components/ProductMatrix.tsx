import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import yishanghuoBg from "@/assets/yishanghuo-bg.mp4";
import iclipBg from "@/assets/iclip-bg.mov";
// Custom geometric line art icons for products
const IconPhotoMagic = () => <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="0.8" className="w-full h-full">
    <rect x="15" y="25" width="90" height="70" rx="4" />
    <rect x="25" y="35" width="70" height="50" rx="2" />
    <circle cx="50" cy="55" r="15" />
    <circle cx="50" cy="55" r="8" />
    <circle cx="50" cy="55" r="3" fill="currentColor" />
    <polygon points="75,50 90,70 60,70" strokeLinejoin="round" />
    <circle cx="80" cy="45" r="5" />
  </svg>;
const IconYiShangHuo = () => null;
const IconICut = () => <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="0.8" className="w-full h-full">
    <circle cx="35" cy="85" r="15" />
    <circle cx="85" cy="85" r="15" />
    <circle cx="35" cy="85" r="6" />
    <circle cx="85" cy="85" r="6" />
    <line x1="35" y1="70" x2="60" y2="25" />
    <line x1="85" y1="70" x2="60" y2="25" />
    <line x1="45" y1="52" x2="75" y2="52" />
    <polygon points="60,20 55,30 65,30" fill="currentColor" />
  </svg>;
const IconIClip = () => {};
const IconFactory = () => <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="0.8" className="w-full h-full">
    <rect x="15" y="50" width="35" height="55" rx="2" />
    <rect x="55" y="35" width="50" height="70" rx="2" />
    <rect x="20" y="20" width="25" height="30" rx="1" />
    <rect x="65" y="50" width="12" height="18" rx="1" />
    <rect x="83" y="50" width="12" height="18" rx="1" />
    <rect x="65" y="75" width="12" height="18" rx="1" />
    <rect x="83" y="75" width="12" height="18" rx="1" />
    <ellipse cx="32.5" cy="20" rx="6" ry="10" />
    <path d="M32.5 10 Q38 5 32.5 0" strokeWidth="0.6" />
  </svg>;
const products = [{
  id: "photomagic",
  Icon: IconPhotoMagic,
  stat: "10x",
  name: "PhotoMagic",
  subtitle: "AI商拍工具",
  description: "一键换脸换背景、极速生成商品场景图，轻松打造专业级电商主图"
}, {
  id: "yishanghuo",
  Icon: IconYiShangHuo,
  stat: "5000+",
  name: "易尚货",
  subtitle: "智能选品平台",
  description: "AI驱动的电商选品与趋势分析平台，精准洞察市场机会",
  bgGradient: "linear-gradient(45deg, #eff0f4, #f1f0f5)"
}, {
  id: "iclip",
  Icon: IconIClip,
  stat: "1000+",
  name: "iClip 易视频",
  subtitle: "批量剪辑平台",
  description: "AI驱动的视频批量生产与分发工具，规模化内容产出"
}, {
  id: "factory",
  Icon: IconFactory,
  stat: "24h",
  name: "内容工厂",
  subtitle: "代制作服务",
  description: "专业团队+AI能力的内容代运营服务，全托管式解决方案"
}];
const ProductMatrix = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  useEffect(() => {
    if (!isHovering) return;
    const handleWheel = (e: WheelEvent) => {
      // Prevent rapid scrolling during animation
      if (isAnimating) {
        e.preventDefault();
        return;
      }
      const direction = e.deltaY > 0 ? 1 : -1;
      const newIndex = activeIndex + direction;

      // Allow normal scroll if at boundaries
      if (newIndex < 0 || newIndex >= products.length) return;
      e.preventDefault();
      setIsAnimating(true);
      setActiveIndex(newIndex);

      // Reset animation lock after transition
      setTimeout(() => setIsAnimating(false), 1000);
    };
    window.addEventListener("wheel", handleWheel, {
      passive: false
    });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [activeIndex, isAnimating, isHovering]);
  const activeProduct = products[activeIndex];
  const goToPrev = () => {
    if (isAnimating || activeIndex === 0) return;
    setIsAnimating(true);
    setActiveIndex(activeIndex - 1);
    setTimeout(() => setIsAnimating(false), 1000);
  };
  const goToNext = () => {
    if (isAnimating || activeIndex === products.length - 1) return;
    setIsAnimating(true);
    setActiveIndex(activeIndex + 1);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  // Background sequence
  const currentBg = activeProduct.bgGradient || (activeIndex % 2 === 0 ? "#FFFFFF" : "#F7F8F9");
  const isGradient = !!activeProduct.bgGradient;
  return <div ref={containerRef} className="relative h-[70vh]" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
      <div className="h-full overflow-hidden">
        {/* Background with animated transition */}
        <motion.div className="absolute inset-0" animate={{
        backgroundColor: isGradient ? "transparent" : currentBg
      }} style={isGradient ? {
        background: currentBg
      } : undefined} transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }} />

        {/* Main Content */}
        <div className="relative h-full flex items-center overflow-hidden">
          {/* Video Background for YiShangHuo */}
          <AnimatePresence>
            {activeProduct.id === "yishanghuo" && <motion.video key="yishanghuo-video" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} exit={{
            opacity: 0
          }} transition={{
            duration: 0.8
          }} autoPlay loop muted playsInline className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-auto object-cover rounded-lg z-10" src={yishanghuoBg} />}
          </AnimatePresence>
          {/* Video Background for iClip */}
          <AnimatePresence>
            {activeProduct.id === "iclip" && <motion.video key="iclip-video" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} exit={{
            opacity: 0
          }} transition={{
            duration: 0.8
          }} autoPlay loop muted playsInline className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-auto object-cover rounded-lg z-10" src={iclipBg} />}
          </AnimatePresence>
          <div className="container mx-auto px-8 lg:px-16 relative z-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left - Large Icon */}
              <div className="relative flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div key={activeIndex + "-icon"} initial={{
                  opacity: 0,
                  scale: 0.9
                }} animate={{
                  opacity: 1,
                  scale: 1
                }} exit={{
                  opacity: 0,
                  scale: 0.9
                }} transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1]
                }} className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 text-slate-600">
                    <activeProduct.Icon />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right - Typography */}
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.div key={activeIndex + "-text"} initial={{
                  opacity: 0,
                  x: 40
                }} animate={{
                  opacity: 1,
                  x: 0
                }} exit={{
                  opacity: 0,
                  x: -40
                }} transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1]
                }}>
                    {/* Giant Stat */}
                    <div className="text-6xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tighter text-slate-800">
                      {activeProduct.stat}
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mt-4 mb-2">
                      {activeProduct.name}
                    </h2>

                    {/* Subtitle */}
                    <p className="text-base md:text-lg text-slate-600 mb-4">
                      {activeProduct.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-sm md:text-base text-slate-500 max-w-md leading-relaxed">
                      {activeProduct.description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute bottom-8 left-8 flex items-center gap-3">
          <button onClick={goToPrev} disabled={activeIndex === 0} className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center text-slate-500 hover:border-slate-500 hover:text-slate-700 transition-colors disabled:opacity-30 disabled:cursor-not-allowed">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={goToNext} disabled={activeIndex === products.length - 1} className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center text-slate-500 hover:border-slate-500 hover:text-slate-700 transition-colors disabled:opacity-30 disabled:cursor-not-allowed">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Bottom Right Indicator */}
        <div className="absolute bottom-8 right-8 text-right">
          <p className="text-xs text-slate-400 uppercase tracking-widest mb-1">
            产品矩阵
          </p>
          <p className="text-sm text-slate-500">
            {String(activeIndex + 1).padStart(2, "0")} / {String(products.length).padStart(2, "0")}
          </p>
        </div>
      </div>
    </div>;
};
export default ProductMatrix;