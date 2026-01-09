import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroBgVideo from "@/assets/hero-bg.mp4";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [displayedText1, setDisplayedText1] = useState("");
  const [displayedText2, setDisplayedText2] = useState("");
  const [typewriterDone, setTypewriterDone] = useState(false);
  
  const fullText1 = "AI重新定义";
  const fullText2 = "产品生产力";

  useEffect(() => {
    setIsVisible(true);
    
    // Typewriter effect for first line
    let index1 = 0;
    const timer1 = setInterval(() => {
      if (index1 <= fullText1.length) {
        setDisplayedText1(fullText1.slice(0, index1));
        index1++;
      } else {
        clearInterval(timer1);
        // Start second line after first completes
        let index2 = 0;
        const timer2 = setInterval(() => {
          if (index2 <= fullText2.length) {
            setDisplayedText2(fullText2.slice(0, index2));
            index2++;
          } else {
            clearInterval(timer2);
            setTypewriterDone(true);
          }
        }, 120);
      }
    }, 120);

    return () => clearInterval(timer1);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroBgVideo} type="video/mp4" />
      </video>
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
          <span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium text-white tracking-tight leading-[1.1]">
            <span className="font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              {displayedText1.slice(0, 2)}
            </span>
            {displayedText1.slice(2)}
            <motion.span 
              className="inline-block w-[3px] h-[0.9em] bg-white ml-1 align-middle"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
              style={{ display: displayedText2.length === fullText2.length ? 'none' : 'inline-block' }}
            />
          </span>
          <span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium text-white tracking-tight leading-[1.1] mt-2">
            {displayedText2}
          </span>
        </h1>

        {/* Subtitle - Cohere style */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={typewriterDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed mb-10"
        >
          为品牌提供商拍、剪辑、管理全链路 AIGC 解决方案 — 让您的工作更智能
        </motion.p>

        {/* CTA Buttons - Cohere style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={typewriterDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center gap-4"
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
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
