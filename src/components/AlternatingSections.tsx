import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Check } from "lucide-react";
import productFlat from "@/assets/product-flat.png";
import productModel from "@/assets/product-model.png";
interface Section {
  id: string;
  tag: string;
  title: string;
  titleHighlight: string;
  description: string;
  features: string[];
  cta: string;
  type: "browser" | "phone";
}
const sections: Section[] = [{
  id: "ecpro",
  tag: "AI 图片引擎",
  title: "AGI Ecpro：",
  titleHighlight: "AI 驱动的视觉创作引擎",
  description: "基于 ECGPT 多模态大模型，为电商商家提供全场景的 AI 视觉内容生成能力。",
  features: ["爆款主图生成 - 智能生成高转化商品主图", "AI 详情页设计 - 自动排版产品详情页", "营销海报与 Banner - 一键生成促销素材"],
  cta: "了解更多",
  type: "browser"
}, {
  id: "video",
  tag: "AI 视频引擎",
  title: "Infimind Video：",
  titleHighlight: "一张图片生成精美视频",
  description: "革命性的 AI 视频生成技术，让静态商品图片瞬间转化为高质量营销视频。",
  features: ["AI 视频生成 - 图片一键生成高质量视频", "AI 分镜生成 - 智能规划视频分镜脚本", "AI 视频拆解 - 自动识别并剪辑精彩片段"],
  cta: "免费试用",
  type: "phone"
}];
const AlternatingSections = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const activeSection = sections[activeIndex];
  const {
    scrollYProgress
  } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  useMotionValueEvent(scrollYProgress, "change", latest => {
    const newIndex = Math.min(Math.floor(latest * sections.length), sections.length - 1);
    if (newIndex !== activeIndex && newIndex >= 0) {
      setDirection(newIndex > activeIndex ? 1 : -1);
      setActiveIndex(newIndex);
    }
  });
  const slideVariants = {
    enter: (dir: number) => ({
      y: dir > 0 ? 60 : -60,
      opacity: 0
    }),
    center: {
      y: 0,
      opacity: 1
    },
    exit: (dir: number) => ({
      y: dir > 0 ? -60 : 60,
      opacity: 0
    })
  };
  return <div ref={containerRef} className="relative" style={{
    height: `${sections.length * 100}vh`
  }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-gradient-to-b from-background to-secondary/30">
        <div className="h-full flex flex-col">
          <div className="text-center pt-16 md:pt-24 pb-6">
            <span className="inline-block text-sm font-medium tracking-widest uppercase mb-3 text-primary">产品能力</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-primary">全场景 AI 内容创作</h2>
          </div>
          <div className="flex-1 container mx-auto px-6 lg:px-12 pb-8">
            <div className="h-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center max-w-7xl mx-auto">
              <div className="relative flex items-center justify-center order-2 lg:order-1">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div key={activeSection.id} custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{
                  duration: 0.6
                }} className="w-full">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white p-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-muted">原图</span>
                          <div className="aspect-[3/4] rounded-xl overflow-hidden border">
                            <img alt="原图" src="/lovable-uploads/c1ffa060-0393-4205-8c78-3e0b1fb776d2.png" className="w-[80%] h-[80%] object-cover mx-auto" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground">AI 生成</span>
                          <div className="aspect-[3/4] rounded-xl overflow-hidden border">
                            <img src={productModel} alt="AI生成" className="w-[80%] h-[80%] object-cover mx-auto" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="relative flex items-center order-1 lg:order-2">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div key={activeSection.id + "-text"} custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{
                  duration: 0.5
                }} className="w-full max-w-lg space-y-6">
                    <span className="inline-block text-sm font-medium tracking-widest uppercase text-primary">{activeSection.tag}</span>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight text-primary">{activeSection.title}<br />{activeSection.titleHighlight}</h3>
                    <p className="text-base md:text-lg text-muted-foreground">{activeSection.description}</p>
                    <ul className="space-y-3">
                      {activeSection.features.map((feature, i) => <li key={i} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center mt-0.5">
                            <Check className="w-3 h-3 text-primary" strokeWidth={2.5} />
                          </div>
                          <span className="text-sm md:text-base text-primary">{feature}</span>
                        </li>)}
                    </ul>
                    <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-background bg-primary hover:bg-primary/90 transition-all">{activeSection.cta}</button>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default AlternatingSections;