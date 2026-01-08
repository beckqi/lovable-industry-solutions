import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Check, FileText, Upload, TrendingUp, Loader2 } from "lucide-react";

interface Stage {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const stages: Stage[] = [
  {
    id: "layout",
    icon: <FileText className="w-5 h-5" />,
    title: "秒级排版，智能识别",
    description: "高效图像识别算法自动解析图片属性，适配多个平台尺寸，5000+优质模板一键套用。",
    features: ["AI 智能图片解析", "多平台尺寸自适应", "5000+ 精品模板库"],
  },
  {
    id: "sync",
    icon: <Upload className="w-5 h-5" />,
    title: "跨店铺多平台极速上新",
    description: "AI自动识别商品属性，支持批量操作。平均3分钟完成设计，实现多平台一键同步录入。",
    features: ["自动属性识别录入", "支持淘宝/京东/抖音等", "批量一键上架"],
  },
  {
    id: "growth",
    icon: <TrendingUp className="w-5 h-5" />,
    title: "全链路数字化增长",
    description: "从设计到上架，全流程效率飞跃，让每一分投入都产生更大回报。",
    features: ["制作效率提升 20 倍", "上新效率提升 10 倍", "人力成本降低 30%"],
  },
];

const ECProStickyScroll = () => {
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
        className="hidden lg:block relative bg-[#001A41]" 
        style={{ height: `${stages.length * 100}vh` }}
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <div className="h-full container mx-auto px-6 lg:px-12 max-w-7xl">
            <div className="h-full grid grid-cols-2 gap-16 items-center">
              {/* Left Side - Text Content with Progress Bar */}
              <div className="relative flex items-center">
                {/* Vertical Progress Bar */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 h-48 w-1 bg-blue-900/50 rounded-full overflow-hidden">
                  <motion.div
                    className="w-full bg-cyan-400 rounded-full"
                    style={{ height: `${((activeIndex + 1) / stages.length) * 100}%` }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                  {/* Stage Dots */}
                  {stages.map((_, idx) => (
                    <div
                      key={idx}
                      className={`absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                        idx <= activeIndex
                          ? "bg-cyan-400 border-cyan-400"
                          : "bg-[#001A41] border-blue-700"
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
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/50 text-cyan-300 border border-blue-700">
                        {activeStage.icon}
                        <span className="text-sm font-medium">
                          阶段 {activeIndex + 1} / {stages.length}
                        </span>
                      </div>

                      <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                        {activeStage.title}
                      </h2>

                      <p className="text-lg text-blue-200 leading-relaxed max-w-md">
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
                            <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center">
                              <Check className="w-3 h-3 text-cyan-400" />
                            </div>
                            <span className="text-blue-100">{feature}</span>
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
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-black/30 bg-gradient-to-br from-blue-900 to-slate-900">
                    
                    {/* Stage 1: Layout Generation */}
                    <AnimatePresence>
                      {activeIndex === 0 && (
                        <motion.div
                          key="layout"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5 }}
                          className="absolute inset-0 p-6"
                        >
                          {/* Scattered images */}
                          <div className="absolute inset-0 p-4">
                            {[0, 1, 2, 3, 4].map((i) => (
                              <motion.div
                                key={i}
                                initial={{ 
                                  x: Math.random() * 200 - 100, 
                                  y: Math.random() * 150 - 75, 
                                  rotate: Math.random() * 30 - 15,
                                  opacity: 0.3
                                }}
                                animate={{ 
                                  x: 0, 
                                  y: i * 50, 
                                  rotate: 0,
                                  opacity: 1
                                }}
                                transition={{ duration: 1, delay: i * 0.2 }}
                                className="absolute w-24 h-16 bg-gradient-to-br from-slate-200 to-slate-300 rounded-lg shadow-lg"
                                style={{ left: `${20 + i * 10}%`, top: `${10 + i * 12}%` }}
                              />
                            ))}
                          </div>
                          
                          {/* Generated detail page */}
                          <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                            className="absolute right-4 bottom-4 w-40 bg-white rounded-xl shadow-2xl overflow-hidden"
                          >
                            <div className="h-6 bg-blue-600 flex items-center px-2">
                              <span className="text-[8px] text-white">详情页预览</span>
                            </div>
                            <div className="p-2 space-y-2">
                              <div className="h-12 bg-slate-100 rounded" />
                              <div className="h-3 bg-slate-200 rounded w-3/4" />
                              <div className="h-3 bg-slate-200 rounded w-1/2" />
                              <div className="h-8 bg-blue-100 rounded" />
                            </div>
                          </motion.div>
                          
                          {/* Success badge */}
                          <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.3, delay: 2 }}
                            className="absolute top-4 right-4 px-3 py-1.5 bg-emerald-500 text-white rounded-full text-xs font-medium"
                          >
                            ✓ 排版完成
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Stage 2: Multi-platform Sync */}
                    <AnimatePresence>
                      {activeIndex === 1 && (
                        <motion.div
                          key="sync"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5 }}
                          className="absolute inset-0 p-6 flex flex-col justify-center"
                        >
                          {/* Backend UI simulation */}
                          <div className="bg-slate-800 rounded-xl p-4 shadow-2xl">
                            <div className="flex items-center gap-2 mb-4">
                              <div className="w-2 h-2 rounded-full bg-red-500" />
                              <div className="w-2 h-2 rounded-full bg-yellow-500" />
                              <div className="w-2 h-2 rounded-full bg-green-500" />
                              <span className="text-xs text-slate-400 ml-2">多平台同步上新</span>
                            </div>
                            
                            {/* Platform progress bars */}
                            {[
                              { name: "淘宝", color: "orange", delay: 0 },
                              { name: "京东", color: "red", delay: 0.5 },
                              { name: "抖音", color: "pink", delay: 1 },
                            ].map((platform, idx) => (
                              <motion.div
                                key={platform.name}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: platform.delay }}
                                className="mb-3"
                              >
                                <div className="flex items-center justify-between mb-1">
                                  <span className="text-xs text-slate-300">{platform.name}录入中...</span>
                                  <motion.span 
                                    className="text-xs text-emerald-400"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: platform.delay + 1.5 }}
                                  >
                                    ✓ 完成
                                  </motion.span>
                                </div>
                                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                                  <motion.div
                                    className={`h-full ${
                                      platform.color === "orange" ? "bg-orange-500" :
                                      platform.color === "red" ? "bg-red-500" : "bg-pink-500"
                                    }`}
                                    initial={{ width: "0%" }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 1.5, delay: platform.delay }}
                                  />
                                </div>
                              </motion.div>
                            ))}
                            
                            {/* All done message */}
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 3 }}
                              className="mt-4 text-center py-2 bg-emerald-500/20 rounded-lg border border-emerald-500/30"
                            >
                              <span className="text-emerald-400 text-sm font-medium">🎉 全部平台同步完成</span>
                            </motion.div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Stage 3: Data Growth */}
                    <AnimatePresence>
                      {activeIndex === 2 && (
                        <motion.div
                          key="growth"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5 }}
                          className="absolute inset-0 flex items-center justify-center p-6"
                        >
                          {/* Background gradient */}
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20" />
                          
                          {/* Data Cards */}
                          <div className="relative z-10 grid grid-cols-1 gap-4 w-full max-w-sm">
                            {[
                              { label: "制作效率提升", value: "20", unit: "倍", color: "emerald" },
                              { label: "上新效率提升", value: "10", unit: "倍", color: "blue" },
                              { label: "人力成本降低", value: "30", unit: "%", color: "cyan" },
                            ].map((stat, idx) => (
                              <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, x: 50, scale: 0.8 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                transition={{ 
                                  duration: 0.5, 
                                  delay: idx * 0.2,
                                  ease: "easeOut"
                                }}
                                className={`p-4 rounded-2xl backdrop-blur-sm border ${
                                  stat.color === "emerald" ? "bg-emerald-500/20 border-emerald-400/30" :
                                  stat.color === "blue" ? "bg-blue-500/20 border-blue-400/30" :
                                  "bg-cyan-500/20 border-cyan-400/30"
                                }`}
                              >
                                <div className="text-xs text-blue-200 mb-1">{stat.label}</div>
                                <div className="flex items-baseline gap-1">
                                  <span className={`text-4xl font-bold ${
                                    stat.color === "emerald" ? "text-emerald-400" :
                                    stat.color === "blue" ? "text-blue-400" : "text-cyan-400"
                                  }`}>
                                    {stat.value}
                                  </span>
                                  <span className="text-lg text-blue-300">{stat.unit}</span>
                                  <motion.span
                                    animate={{ y: [0, -3, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                    className={`ml-2 text-xl ${
                                      stat.label.includes("降低") ? "text-rose-400" : "text-emerald-400"
                                    }`}
                                  >
                                    {stat.label.includes("降低") ? "↓" : "↑"}
                                  </motion.span>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-cyan-500 rounded-full blur-3xl opacity-20" />
                  <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: Vertical Layout (Fallback) */}
      <div className="lg:hidden bg-[#001A41] py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-medium tracking-widest uppercase mb-3 text-cyan-400">
              核心能力
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              智能美工全流程
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
                className="bg-blue-900/30 rounded-2xl p-6 border border-blue-800/50"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                    {stage.icon}
                  </div>
                  <span className="text-xs font-medium text-blue-400">0{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{stage.title}</h3>
                <p className="text-blue-200 text-sm mb-4">{stage.description}</p>
                <ul className="space-y-2">
                  {stage.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-blue-100">
                      <Check className="w-4 h-4 text-cyan-400" />
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

export default ECProStickyScroll;