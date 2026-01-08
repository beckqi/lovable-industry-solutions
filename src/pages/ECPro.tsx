import { motion, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

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
      <span className="text-xl text-slate-500">{suffix}</span>
    </span>
  );
};

const features = [
  {
    id: "01",
    title: "智能详情页排版",
    description: "高效图像识别算法，自动解析图片属性，秒级生成详情页，适配多个平台PC及APP尺寸规则",
    image: "https://cms-s3.ipim.cn/infimind/p_1_d2f263094f.png",
  },
  {
    id: "02",
    title: "自动录入商品属性",
    description: "AI自动识别商品属性，读取商品基本信息，自动完成多平台同步录入，简化手动重复填写过程",
    image: "https://cms-s3.ipim.cn/infimind/p_3_45c4dfb32a.png",
  },
  {
    id: "03",
    title: "跨店铺多平台极速上新",
    description: "平均数分钟可完成设计、排版、上新，支持批量操作，支持主流电商平台一键上新",
    image: "https://cms-s3.ipim.cn/infimind/p_1_d2f263094f.png",
  },
  {
    id: "04",
    title: "智能美工工具",
    description: "自动抠图、批量主图、智能修图、在线拼图等附加功能，满足不同场景作图需求",
    image: "https://cms-s3.ipim.cn/infimind/p_3_45c4dfb32a.png",
  },
  {
    id: "05",
    title: "商品全生命周期管理",
    description: "支持商品上新后的多种链接维护，如自动识别失效链接，详情页批量、定时、分类投放等",
    image: "https://cms-s3.ipim.cn/infimind/p_1_d2f263094f.png",
  },
];

const templateImages = [
  "https://cms-s3.ipim.cn/upload/12_b871682e51.jpg",
  "https://cms-s3.ipim.cn/upload/2_e1a105c348.jpg",
  "https://cms-s3.ipim.cn/upload/4_8f4fb79194.jpg",
  "https://cms-s3.ipim.cn/upload/26_91f8d7b1c9.jpg",
  "https://cms-s3.ipim.cn/upload/17_9c83c9101d.jpg",
  "https://cms-s3.ipim.cn/upload/5_5a5a9809b4.jpg",
  "https://cms-s3.ipim.cn/upload/12_47b21d2fe9.jpg",
  "https://cms-s3.ipim.cn/upload/18_67b5893d2b.jpg",
];

const customerCases = [
  {
    logo: "https://infimind.com/images/customerCase/logo_%E8%BF%AA%E6%A1%91%E7%89%B9.png",
    name: "迪桑特",
    description: "迪桑特2021年与极睿达成深度合作，通过极睿商品操作系统，可以制作更优质的营销素材覆盖更多的平台，实现更好的消费者触达与转化，降低管理成本，实现商品全生命周期智能化运营。",
    image: "https://infimind.com/images/customerCase/img_%E8%BF%AA%E6%A1%91%E7%89%B9.png",
  },
  {
    logo: "https://infimind.com/images/customerCase/logo_%E4%BE%8B%E5%A4%96.png",
    name: "例外",
    description: "例外2021年与极睿达成深度合作，通过易尚货系统，通用模版市场、自定义模块设计、内容智能生成、商品内容在线编辑等功能，解决例外在多平台、多店铺、多SKU的情况下的难题。",
    image: "https://infimind.com/images/customerCase/img_%E8%BF%AA%E6%A1%91%E7%89%B9.png",
  },
  {
    logo: "https://infimind.com/images/customerCase/logo_%E4%BC%8A%E8%8A%99%E4%B8%BD.png",
    name: "伊芙丽",
    description: "伊芙丽集团于22年与极睿科技进行深度合作，通过易尚货自动生成店铺图片素材，数据上下游统一管理，实现一键多平台同步上新及管理详情页等功能。",
    image: "https://infimind.com/images/customerCase/img_%E8%BF%AA%E6%A1%91%E7%89%B9.png",
  },
  {
    logo: "https://infimind.com/images/customerCase/logo_%E4%BB%A5%E7%BA%AF.png",
    name: "以纯",
    description: "以纯集团于22年与极睿科技进行深度合作，通过易尚货智能解析图片、自动生成线上店铺营销需要的所有图片素材，并通过一键多平台同步上新及批量投放和管理等功能。",
    image: "https://infimind.com/images/customerCase/img_%E4%BB%A5%E7%BA%AF.png",
  },
];

const ECPro = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [currentCase, setCurrentCase] = useState(0);

  const nextCase = () => {
    setCurrentCase((prev) => (prev + 1) % customerCases.length);
  };

  const prevCase = () => {
    setCurrentCase((prev) => (prev - 1 + customerCases.length) % customerCases.length);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section - Violet gradient like PhotoMagic style */}
      <section className="pt-24 pb-20 px-6 bg-gradient-to-br from-violet-600 via-violet-700 to-indigo-800 relative overflow-hidden min-h-[600px]">
        {/* Decorative curved lines */}
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute bottom-0 left-0 w-full h-auto opacity-20" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="white" d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,181.3C960,203,1056,213,1152,197.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
          <div className="absolute top-20 left-10 w-64 h-64 border border-white/10 rounded-full" />
          <div className="absolute top-40 left-20 w-48 h-48 border border-white/10 rounded-full" />
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                ECPro易尚货
              </h1>
              
              <p className="text-lg md:text-xl text-violet-100 leading-relaxed mb-8 max-w-xl">
                易尚货是针对泛服装电商上新频率快、美工作图成本高、多平台上货工作重复低效等情况而推出的电商商品内容一站式服务平台
              </p>
              
              <Button 
                size="lg"
                className="bg-white text-violet-700 hover:bg-violet-50 rounded-full px-8 gap-2 shadow-lg"
              >
                立即试用
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>

            {/* Right - 3D Box Visual with floating labels */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="relative flex justify-center"
            >
              <div className="relative">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative"
                >
                  {/* 3D Box */}
                  <img 
                    src="https://cms-s3.ipim.cn/infimind/banner_img_08a40ae53b.png" 
                    alt="ECPro 3D Box"
                    className="w-[400px] h-auto object-contain"
                  />
                  
                  {/* Floating labels */}
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -right-4 top-4 bg-emerald-500 text-white px-4 py-2 rounded-lg text-sm shadow-lg font-medium"
                  >
                    素材制作
                  </motion.div>
                  <motion.div
                    animate={{ x: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute -left-4 bottom-32 bg-violet-500 text-white px-4 py-2 rounded-lg text-sm shadow-lg font-medium"
                  >
                    运营管理
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute right-8 bottom-8 bg-orange-500 text-white px-4 py-2 rounded-lg text-sm shadow-lg font-medium"
                  >
                    渠道发布
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Features Section - Like infimind layout */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4">
              产品功能
            </h2>
            <p className="text-lg text-slate-500">
              一站式智能美工平台
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left - Feature List - Vertical tabs style like infimind */}
            <div className="space-y-1">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onClick={() => setActiveFeature(index)}
                  className={`p-5 rounded-xl cursor-pointer transition-all duration-300 border-l-4 ${
                    activeFeature === index
                      ? "bg-violet-50 border-violet-500"
                      : "bg-slate-50/50 border-transparent hover:bg-slate-100"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span className={`text-sm font-bold ${
                      activeFeature === index ? "text-violet-600" : "text-slate-400"
                    }`}>
                      {feature.id}
                    </span>
                    <div className="flex-1">
                      <h3 className={`font-semibold text-base ${
                        activeFeature === index ? "text-violet-700" : "text-slate-700"
                      }`}>
                        {feature.title}
                      </h3>
                      {activeFeature === index && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="text-sm text-slate-600 leading-relaxed mt-2"
                        >
                          {feature.description}
                        </motion.p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right - Feature Image - Like infimind screenshot style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="sticky top-32"
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
                <motion.img
                  key={activeFeature}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  src={features[activeFeature].image}
                  alt={features[activeFeature].title}
                  className="w-full h-auto"
                />
              </div>

              <div className="mt-8 text-center">
                <Button 
                  size="lg"
                  className="bg-violet-600 text-white hover:bg-violet-700 rounded-full px-8"
                >
                  立即试用
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Template Library Section - Horizontal scroll like infimind */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4">
              海量优质模板库
            </h2>
          </motion.div>

          {/* Stats cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 text-center"
            >
              <h3 className="text-lg text-slate-600 mb-1">详情页模板</h3>
              <p className="text-3xl font-bold text-violet-600">5000+ <span className="text-base font-normal text-slate-500">素材库</span></p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 text-center"
            >
              <h3 className="text-lg text-slate-600 mb-1">资源图模板</h3>
              <p className="text-3xl font-bold text-emerald-600">图文+视频</p>
            </motion.div>
          </div>

          {/* Scrolling gallery - Infinite horizontal scroll like infimind */}
          <div className="overflow-hidden py-4">
            <motion.div
              animate={{ x: [0, -1200] }}
              transition={{ 
                duration: 30, 
                repeat: Infinity, 
                ease: "linear",
                repeatType: "loop"
              }}
              className="flex gap-4"
            >
              {[...templateImages, ...templateImages, ...templateImages].map((img, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="w-40 h-52 rounded-xl flex-shrink-0 overflow-hidden shadow-md bg-white"
                >
                  <img 
                    src={img} 
                    alt={`Template ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="mt-10 text-center">
            <Button 
              size="lg"
              className="bg-violet-600 text-white hover:bg-violet-700 rounded-full px-8"
            >
              立即试用
            </Button>
          </div>
        </div>
      </section>

      {/* Customer Cases Section - Like infimind carousel */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
              客户案例
            </h2>
          </motion.div>

          {/* Logo row */}
          <div className="flex justify-center items-center gap-8 mb-12 flex-wrap">
            {customerCases.map((caseItem, index) => (
              <motion.button
                key={caseItem.name}
                onClick={() => setCurrentCase(index)}
                whileHover={{ scale: 1.05 }}
                className={`p-3 rounded-xl transition-all ${
                  currentCase === index 
                    ? "bg-violet-50 ring-2 ring-violet-500" 
                    : "bg-slate-50 hover:bg-slate-100"
                }`}
              >
                <img 
                  src={caseItem.logo} 
                  alt={caseItem.name}
                  className="h-10 w-auto object-contain"
                />
              </motion.button>
            ))}
          </div>

          {/* Case content carousel */}
          <div className="relative max-w-5xl mx-auto">
            <motion.div
              key={currentCase}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 gap-8 items-center bg-gradient-to-br from-slate-50 to-violet-50/30 rounded-3xl p-8 md:p-12"
            >
              <div className="space-y-6">
                <img 
                  src={customerCases[currentCase].logo} 
                  alt={customerCases[currentCase].name}
                  className="h-12 w-auto"
                />
                <p className="text-slate-600 leading-relaxed">
                  {customerCases[currentCase].description}
                </p>
                <Button 
                  className="bg-violet-600 text-white hover:bg-violet-700 rounded-full px-6"
                >
                  预约演示
                </Button>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={customerCases[currentCase].image} 
                  alt={customerCases[currentCase].name}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            {/* Navigation arrows */}
            <button 
              onClick={prevCase}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-violet-50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-slate-600" />
            </button>
            <button 
              onClick={nextCase}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-violet-50 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-slate-600" />
            </button>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {customerCases.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCase(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentCase === index 
                      ? "bg-violet-600 w-6" 
                      : "bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Data Improvement Section - Matching PhotoMagic style */}
      <section className="py-20 md:py-28 bg-slate-50">
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
              3分钟录入 10s生成 1键上架
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
                desc: "",
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
                className="relative p-8 rounded-2xl bg-white border border-slate-100 overflow-hidden cursor-default shadow-sm"
              >
                {/* Animated background decoration */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-10">
                  <svg width="120" height="80" viewBox="0 0 120 80" fill="none">
                    <motion.path 
                      d="M10 70 L40 30 L70 50 L110 10" 
                      stroke="currentColor" 
                      strokeWidth="3" 
                      className="text-violet-500"
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
                      className="text-violet-500"
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
                className="bg-violet-600 text-white hover:bg-violet-700 rounded-full px-12 py-6 text-lg shadow-lg shadow-violet-200 transition-all duration-300"
              >
                立即试用
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section - Violet gradient like PhotoMagic */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-violet-600 via-violet-700 to-indigo-800">
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
            
            <Button 
              size="lg"
              className="bg-white text-violet-700 hover:bg-violet-50 rounded-full px-12 py-6 text-lg gap-2 shadow-xl"
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
