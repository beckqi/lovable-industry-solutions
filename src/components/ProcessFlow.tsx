import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

// Import process icons
import processProduct from "@/assets/process-product.png";
import processAiImage from "@/assets/process-ai-image.png";
import processAiVideo from "@/assets/process-ai-video.png";
import processDistribute from "@/assets/process-distribute.png";

const steps = [
  {
    icon: processProduct,
    label: "产品原图",
    desc: "上传商品白底图",
  },
  {
    icon: processAiImage,
    label: "AI 图片生成",
    desc: "一键生成模特场景图",
  },
  {
    icon: processAiVideo,
    label: "AI 视频生成",
    desc: "自动剪辑营销短视频",
  },
  {
    icon: processDistribute,
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
                <div className="mb-6">
                  <img src={step.icon} alt={step.label} className="w-20 h-20 object-contain" />
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
