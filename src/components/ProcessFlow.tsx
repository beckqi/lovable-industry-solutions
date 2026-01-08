import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

// Custom geometric line art icons
const IconProductImage = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
    <rect x="8" y="8" width="48" height="48" rx="2" />
    <rect x="16" y="16" width="32" height="32" rx="1" />
    <rect x="24" y="24" width="16" height="16" />
    <line x1="8" y1="32" x2="24" y2="32" />
    <line x1="40" y1="32" x2="56" y2="32" />
    <line x1="32" y1="8" x2="32" y2="24" />
    <line x1="32" y1="40" x2="32" y2="56" />
  </svg>
);

const IconAIImage = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
    <circle cx="32" cy="32" r="24" />
    <ellipse cx="32" cy="32" rx="24" ry="10" />
    <ellipse cx="32" cy="32" rx="10" ry="24" />
    <ellipse cx="32" cy="32" rx="16" ry="24" transform="rotate(45 32 32)" />
    <ellipse cx="32" cy="32" rx="16" ry="24" transform="rotate(-45 32 32)" />
  </svg>
);

const IconAIVideo = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
    <polygon points="32,8 56,32 32,56 8,32" />
    <polygon points="32,16 48,32 32,48 16,32" />
    <polygon points="32,24 40,32 32,40 24,32" />
    <line x1="32" y1="8" x2="32" y2="24" />
    <line x1="32" y1="40" x2="32" y2="56" />
    <line x1="8" y1="32" x2="24" y2="32" />
    <line x1="40" y1="32" x2="56" y2="32" />
  </svg>
);

const IconDistribute = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
    {/* Grid pattern */}
    {[0, 1, 2, 3, 4, 5, 6].map((i) => (
      <line key={`v${i}`} x1={8 + i * 8} y1="8" x2={8 + i * 8} y2="56" />
    ))}
    {[0, 1, 2, 3, 4, 5, 6].map((i) => (
      <line key={`h${i}`} x1="8" y1={8 + i * 8} x2="56" y2={8 + i * 8} />
    ))}
  </svg>
);

const steps = [
  {
    Icon: IconProductImage,
    label: "产品原图",
    desc: "上传商品白底图",
  },
  {
    Icon: IconAIImage,
    label: "AI 图片生成",
    desc: "一键生成模特场景图",
  },
  {
    Icon: IconAIVideo,
    label: "AI 视频生成",
    desc: "自动剪辑营销短视频",
  },
  {
    Icon: IconDistribute,
    label: "全渠道分发",
    desc: "一键发布多平台",
  },
];

const ProcessFlow = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById("process-flow");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="process-flow" className="relative py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            从产品图到全渠道分发
          </h2>
        </motion.div>

        {/* Flow Steps */}
        <div className="relative flex flex-col md:flex-row items-stretch justify-between gap-8 md:gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex-1 flex items-start"
            >
              {/* Step Card */}
              <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left px-4 group">
                {/* Icon */}
                <div className="mb-6 text-foreground">
                  <step.Icon />
                </div>

                {/* Text */}
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.label}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-[200px]">
                  {step.desc}
                </p>
              </div>

              {/* Arrow Connector */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex items-start pt-6 -mr-2 z-10">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                  >
                    <ChevronRight className="w-5 h-5 text-slate-300" />
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;
