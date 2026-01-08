import { motion, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Box } from "lucide-react";
import ECProStickyScroll from "@/components/ECProStickyScroll";

// Animated counter component
const AnimatedNumber = ({ value, suffix = "", duration = 2 }: { value: number; suffix?: string; duration?: number }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const controls = animate(0, value, {
            duration,
            ease: "easeOut",
            onUpdate: (v) => setDisplayValue(Math.round(v)),
          });
          return () => controls.stop();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  return (
    <span ref={ref}>
      {displayValue}
      <span className="text-xl text-blue-300">{suffix}</span>
    </span>
  );
};

const ECPro = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Product Hero Section - Deep blue background */}
      <section className="pt-32 pb-20 px-6 bg-[#001A41] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-64 h-64 border border-cyan-500/30 rounded-full" />
          <div className="absolute top-40 left-20 w-48 h-48 border border-blue-500/20 rounded-full" />
          <div className="absolute bottom-10 right-10 w-32 h-32 border border-cyan-400/20 rounded-full" />
          <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/50 border border-blue-700 mb-6">
                <Box className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-medium text-cyan-300">一站式智能美工平台</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                ECPro 易尚货
                <span className="block text-cyan-400 text-2xl md:text-3xl mt-3 font-normal">
                  一站式智能美工平台
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-blue-200 leading-relaxed mb-8 max-w-xl">
                针对泛服装电商打造，实现从详情页排版、属性自动录入到跨平台极速上新的全流程自动化
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg"
                  className="bg-cyan-500 text-white hover:bg-cyan-400 rounded-full px-8 gap-2 shadow-lg shadow-cyan-500/30"
                >
                  立即试用
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 border-blue-600 text-blue-200 hover:bg-blue-900/50 hover:text-white"
                >
                  预约演示
                </Button>
              </div>

              {/* Stats */}
              <div className="flex gap-8 mt-12 pt-8 border-t border-blue-800/50">
                <div>
                  <div className="text-3xl font-bold text-white">5000+</div>
                  <div className="text-sm text-blue-400">精品模板</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">20x</div>
                  <div className="text-sm text-blue-400">效率提升</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">100+</div>
                  <div className="text-sm text-blue-400">品牌客户</div>
                </div>
              </div>
            </motion.div>

            {/* Right - 3D Box Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="relative flex justify-center"
            >
              <div className="relative">
                {/* 3D Box illustration */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-72 h-72 relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-3xl transform rotate-12 shadow-2xl shadow-cyan-500/30 flex items-center justify-center">
                    <span className="text-white text-5xl font-bold">ECpro</span>
                  </div>
                  {/* Floating labels */}
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -right-20 top-4 bg-emerald-500 text-white px-4 py-2 rounded-lg text-sm shadow-lg shadow-emerald-500/30"
                  >
                    素材制作
                  </motion.div>
                  <motion.div
                    animate={{ x: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute -left-20 bottom-24 bg-blue-500 text-white px-4 py-2 rounded-lg text-sm shadow-lg shadow-blue-500/30"
                  >
                    运营管理
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute right-0 -bottom-8 bg-orange-500 text-white px-4 py-2 rounded-lg text-sm shadow-lg shadow-orange-500/30"
                  >
                    渠道发布
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Sticky Scroll Module */}
      <ECProStickyScroll />

      {/* Data Improvement Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-medium text-slate-700 mb-4">
              数据提升
            </h2>
            <p className="text-lg text-slate-500">
              3分钟录入 · 10秒生成 · 1键上架
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
            {[
              { 
                label: "制作效率", 
                value: 20, 
                unit: "倍",
                desc: "平均3分钟/款",
                trend: "up",
              },
              { 
                label: "商品上新效率", 
                value: 10, 
                unit: "倍",
                desc: "平均制作+上新10分钟/款",
                trend: "up",
              },
              { 
                label: "人力成本降低", 
                value: 30, 
                unit: "%",
                desc: "无淡旺季压力，简化流程",
                trend: "down",
              },
              { 
                label: "转化率", 
                value: 30, 
                unit: "%",
                desc: "高品质视觉提升点击",
                trend: "up",
              },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)",
                  transition: { duration: 0.3 }
                }}
                className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50/30 border border-slate-100 overflow-hidden cursor-default"
              >
                {/* Animated background decoration */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-10">
                  <svg width="120" height="80" viewBox="0 0 120 80" fill="none">
                    <motion.path 
                      d="M10 70 L40 30 L70 50 L110 10" 
                      stroke="currentColor" 
                      strokeWidth="3" 
                      className="text-blue-500"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5 + index * 0.2 }}
                    />
                    <motion.circle 
                      cx="110" 
                      cy="10" 
                      r="4" 
                      fill="currentColor" 
                      className="text-blue-500"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 1.5 + index * 0.2 }}
                    />
                  </svg>
                </div>

                <motion.div 
                  className="text-sm text-slate-500 mb-2"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                >
                  {item.label}
                </motion.div>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl md:text-6xl font-bold text-slate-800">
                    <AnimatedNumber value={item.value} suffix={item.unit} duration={1.5 + index * 0.2} />
                  </span>
                  <motion.span 
                    className={`ml-2 text-2xl ${item.trend === "down" ? "text-rose-500" : "text-emerald-500"}`}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                    animate={{ 
                      y: item.trend === "down" ? [0, 3, 0] : [0, -3, 0]
                    }}
                  >
                    {item.trend === "down" ? "↓" : "↑"}
                  </motion.span>
                </div>
                {item.desc && (
                  <motion.div 
                    className="text-sm text-slate-500 mt-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  >
                    {item.desc}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                size="lg"
                className="bg-blue-600 text-white hover:bg-blue-700 rounded-full px-12 py-6 text-lg shadow-lg shadow-blue-200 transition-all duration-300"
              >
                立即试用
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-28 bg-[#001A41]">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
              快速开启您的数字化增长之路
            </h2>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto">
              告别繁琐的美工流程，让AI为您的电商业务赋能
            </p>
            
            <Button 
              size="lg"
              className="bg-cyan-500 text-white hover:bg-cyan-400 rounded-full px-12 py-6 text-lg gap-2 shadow-xl shadow-cyan-500/30"
            >
              预约演示
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ECPro;