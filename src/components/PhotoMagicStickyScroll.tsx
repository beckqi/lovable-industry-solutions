import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Check, Users, ImageIcon, TrendingUp } from "lucide-react";
import productFlat from "@/assets/product-flat.png";
import productModel from "@/assets/product-model.png";

interface Stage {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const stages: Stage[] = [
  {
    id: "model",
    icon: <Users className="w-5 h-5" />,
    title: "海量数字模特",
    description: "内置百余位跨国籍数字模特，完美匹配全球审美，告别高昂的模特与摄影棚开支。",
    features: ["亚洲 / 欧美 / 多元化模特", "可定制年龄、体型、风格", "支持品牌专属模特训练"],
  },
  {
    id: "scene",
    icon: <ImageIcon className="w-5 h-5" />,
    title: "全场景智能重绘",
    description: "自动识别商品调性，秒级生成专业影棚或外景，光影效果真实细腻。",
    features: ["100+ 预设专业场景", "智能光影匹配", "支持自定义场景上传"],
  },
  {
    id: "roi",
    icon: <TrendingUp className="w-5 h-5" />,
    title: "生产力飞跃",
    description: "从拍摄到上架，全流程效率提升，让每一分投入都产生更大回报。",
    features: ["批量处理能力", "实时预览调整", "一键导出多格式"],
  },
];

const PhotoMagicStickyScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const newIndex = Math.min(Math.floor(latest * stages.length), stages.length - 1);
    if (newIndex !== activeIndex && newIndex >= 0) {
      setActiveIndex(newIndex);
    }
  });

  const activeStage = stages[activeIndex];

  return (
    <>
      {/* Desktop: Sticky Scroll Layout */}
      <div 
        ref={containerRef} 
        className="hidden lg:block relative bg-[#F8F9FA]" 
        style={{ height: `${stages.length * 100}vh` }}
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <div className="h-full container mx-auto px-6 lg:px-12 max-w-7xl">
            <div className="h-full grid grid-cols-2 gap-16 items-center">
              {/* Left Side - Text Content with Progress Bar */}
              <div className="relative flex items-center">
                {/* Vertical Progress Bar */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 h-48 w-1 bg-slate-200 rounded-full overflow-hidden">
                  <motion.div
                    className="w-full bg-violet-500 rounded-full"
                    style={{ height: `${((activeIndex + 1) / stages.length) * 100}%` }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                  {/* Stage Dots */}
                  {stages.map((_, idx) => (
                    <div
                      key={idx}
                      className={`absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                        idx <= activeIndex
                          ? "bg-violet-500 border-violet-500"
                          : "bg-white border-slate-300"
                      }`}
                      style={{ top: `${(idx / (stages.length - 1)) * 100}%`, transform: "translate(-50%, -50%)" }}
                    />
                  ))}
                </div>

                {/* Text Content */}
                <div className="pl-10">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStage.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="space-y-6"
                    >
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 text-violet-700">
                        {activeStage.icon}
                        <span className="text-sm font-medium">
                          阶段 {activeIndex + 1} / {stages.length}
                        </span>
                      </div>

                      <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                        {activeStage.title}
                      </h2>

                      <p className="text-lg text-slate-600 leading-relaxed max-w-md">
                        {activeStage.description}
                      </p>

                      <ul className="space-y-3">
                        {activeStage.features.map((feature) => (
                          <motion.li
                            key={feature}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-3"
                          >
                            <div className="w-5 h-5 rounded-full bg-violet-100 flex items-center justify-center">
                              <Check className="w-3 h-3 text-violet-600" />
                            </div>
                            <span className="text-slate-700">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Right Side - Visual */}
              <div className="relative flex items-center justify-center">
                <div className="relative w-full max-w-lg">
                  {/* Main Visual Container */}
                  <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl shadow-slate-300/50">
                    {/* Base Layer - Product Flat */}
                    <AnimatePresence>
                      {activeIndex === 0 && (
                        <motion.div
                          key="flat"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 1.05 }}
                          transition={{ duration: 0.5 }}
                          className="absolute inset-0 bg-white"
                        >
                          <img
                            src={productFlat}
                            alt="Product flat"
                            className="w-full h-full object-cover"
                          />
                          {/* Morphing effect overlay */}
                          <motion.div
                            initial={{ clipPath: "inset(100% 0 0 0)" }}
                            animate={{ clipPath: "inset(0% 0 0 0)" }}
                            transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                            className="absolute inset-0"
                          >
                            <img
                              src={productModel}
                              alt="Model emerging"
                              className="w-full h-full object-cover"
                            />
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Scene Layer - Model with Scene */}
                    <AnimatePresence>
                      {activeIndex === 1 && (
                        <motion.div
                          key="scene"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5 }}
                          className="absolute inset-0"
                        >
                          {/* Background Scene - European Street */}
                          <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-orange-50 to-rose-100" />
                          {/* Simulated street scene effect */}
                          <div className="absolute inset-0 opacity-30">
                            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-slate-400/30 to-transparent" />
                            <div className="absolute top-10 left-5 w-20 h-32 bg-slate-300/40 rounded-sm" />
                            <div className="absolute top-5 right-8 w-16 h-40 bg-slate-300/40 rounded-sm" />
                          </div>
                          {/* Model overlay */}
                          <img
                            src={productModel}
                            alt="Model with scene"
                            className="absolute inset-0 w-full h-full object-cover mix-blend-multiply"
                          />
                          {/* Scene label */}
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="absolute bottom-6 left-6 px-4 py-2 bg-white/90 backdrop-blur rounded-full text-sm font-medium text-slate-700 shadow-lg"
                          >
                            🏛️ 欧式街头场景
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* ROI Layer - Data Overlay */}
                    <AnimatePresence>
                      {activeIndex === 2 && (
                        <motion.div
                          key="roi"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5 }}
                          className="absolute inset-0"
                        >
                          <img
                            src={productModel}
                            alt="Final result"
                            className="w-full h-full object-cover"
                          />
                          {/* Dark overlay for contrast */}
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-slate-900/30" />
                          
                          {/* Data Bubbles */}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="absolute top-8 left-6 px-4 py-3 bg-emerald-500 text-white rounded-2xl shadow-lg"
                          >
                            <div className="text-2xl font-bold">10x</div>
                            <div className="text-xs opacity-90">效率提升</div>
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="absolute top-1/3 right-6 px-4 py-3 bg-blue-500 text-white rounded-2xl shadow-lg"
                          >
                            <div className="text-2xl font-bold">90%</div>
                            <div className="text-xs opacity-90">成本降低</div>
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="absolute bottom-8 left-1/2 -translate-x-1/2 px-4 py-3 bg-violet-500 text-white rounded-2xl shadow-lg"
                          >
                            <div className="text-2xl font-bold">100%</div>
                            <div className="text-xs opacity-90">版权安全</div>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-violet-200 rounded-full blur-3xl opacity-50" />
                  <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: Vertical Layout (Fallback) */}
      <div className="lg:hidden bg-[#F8F9FA] py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-medium tracking-widest uppercase mb-3 text-violet-600">
              核心能力
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              AI 商拍全流程
            </h2>
          </div>

          <div className="space-y-8">
            {stages.map((stage, index) => (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center text-violet-600">
                    {stage.icon}
                  </div>
                  <span className="text-xs font-medium text-slate-400">0{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{stage.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{stage.description}</p>
                <ul className="space-y-2">
                  {stage.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                      <Check className="w-4 h-4 text-violet-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotoMagicStickyScroll;
