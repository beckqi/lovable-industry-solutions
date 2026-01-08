import { motion, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
      {suffix}
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
  "https://cms-s3.ipim.cn/upload/13_a0420606b9.JPG",
  "https://cms-s3.ipim.cn/upload/5_5a5a9809b4.jpg",
  "https://cms-s3.ipim.cn/upload/12_47b21d2fe9.jpg",
  "https://cms-s3.ipim.cn/upload/18_67b5893d2b.jpg",
];

const customerCases = [
  {
    logo: "https://infimind.com/images/customerCase/logo_%E8%BF%AA%E6%A1%91%E7%89%B9.png",
    name: "迪桑特",
    description: "迪桑特2021年与极睿达成深度合作，通过极睿商品操作系统，可以制作更优质的营销素材覆盖更多的平台，实现更好的消费者触达与转化，降低管理成本，实现商品全生命周期智能化运营，进一步实现货品品类结构与上新波段的升级。",
    image: "https://infimind.com/images/customerCase/img_%E8%BF%AA%E6%A1%91%E7%89%B9.png",
  },
  {
    logo: "https://infimind.com/images/customerCase/logo_%E4%BE%8B%E5%A4%96.png",
    name: "例外",
    description: "例外2021年与极睿达成深度合作，通过易尚货系统，通用模版市场、自定义模块设计、内容智能生成、商品内容在线编辑等功能，解决例外在多平台、多店铺、多SKU的情况下，快速制作、修改、管理商品内容的难题。",
    image: "https://infimind.com/images/customerCase/img_%E4%BE%8B%E5%A4%96.png",
  },
  {
    logo: "https://infimind.com/images/customerCase/logo_%E4%BC%8A%E8%8A%99%E4%B8%BD.png",
    name: "伊芙丽",
    description: "伊芙丽集团于22年与极睿科技进行深度合作，通过易尚货自动生成店铺图片素材，数据上下游统一管理，实现一键多平台同步上新及管理详情页等功能。利用人工智能，便于多平台多店铺系统化、数字化管理。",
    image: "https://infimind.com/images/customerCase/img_%E4%BC%8A%E8%8A%99%E4%B8%BD.png",
  },
  {
    logo: "https://infimind.com/images/customerCase/logo_%E4%BB%A5%E7%BA%AF.png",
    name: "以纯",
    description: "以纯集团于22年与极睿科技进行深度合作，通过易尚货智能解析图片、自动生成线上店铺营销需要的所有图片素材，并通过一键多平台同步上新及批量投放和管理等功能。将重复的工作交于人工智能，把重心更多的放在设计与研发，专注品牌力的提升。",
    image: "https://infimind.com/images/customerCase/img_%E4%BB%A5%E7%BA%AF.png",
  },
];

const ECPro = () => {
  const [activeFeature, setActiveFeature] = useState(2); // Default to 03 like the website
  const [currentCase, setCurrentCase] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextCase = () => {
    setCurrentCase((prev) => (prev + 1) % customerCases.length);
  };

  const prevCase = () => {
    setCurrentCase((prev) => (prev - 1 + customerCases.length) % customerCases.length);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section - Blue gradient exactly like infimind */}
      <section className="pt-24 pb-0 bg-gradient-to-br from-[#4F46E5] via-[#5B4EE8] to-[#6366F1] relative overflow-hidden min-h-[500px]">
        {/* Decorative curved waves at bottom */}
        <div className="absolute bottom-0 left-0 right-0 w-full">
          <svg viewBox="0 0 1440 200" fill="none" preserveAspectRatio="none" className="w-full h-32">
            <path 
              d="M0,100 C150,150 350,50 600,100 C850,150 1050,50 1200,100 C1300,130 1400,80 1440,100 L1440,200 L0,200 Z" 
              fill="rgba(255,255,255,0.1)"
            />
            <path 
              d="M0,130 C200,170 400,90 700,130 C900,160 1100,100 1440,140 L1440,200 L0,200 Z" 
              fill="rgba(255,255,255,0.05)"
            />
          </svg>
        </div>

        {/* Decorative circles */}
        <div className="absolute top-10 left-0 w-[500px] h-[500px] opacity-20">
          <div className="absolute top-0 left-0 w-80 h-80 border border-white/30 rounded-full" />
          <div className="absolute top-10 left-10 w-64 h-64 border border-white/20 rounded-full" />
          <div className="absolute top-20 left-20 w-48 h-48 border border-white/10 rounded-full" />
        </div>
        
        <div className="container mx-auto max-w-7xl px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[450px]">
            {/* Left - Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="py-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                ECPro易尚货
              </h1>
              
              <p className="text-base md:text-lg text-white/80 leading-relaxed mb-8 max-w-lg">
                易尚货是针对泛服装电商上新频率快、美工作图成本高、多平台上货工作重复低效等情况而推出的电商商品内容一站式服务平台
              </p>
              
              <Button 
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#4F46E5] rounded-full px-10 py-6 text-base font-medium transition-all duration-300"
              >
                立即试用
              </Button>
            </motion.div>

            {/* Right - 3D Box Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="relative flex justify-center items-center"
            >
              <div className="relative">
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative"
                >
                  {/* 3D Box Image */}
                  <img 
                    src="https://cms-s3.ipim.cn/infimind/banner_img_08a40ae53b.png" 
                    alt="ECPro 3D Box"
                    className="w-[450px] h-auto object-contain"
                  />
                  
                  {/* Floating labels - positioned like original */}
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute right-0 top-8 bg-[#22C55E] text-white px-5 py-2.5 rounded-lg text-sm shadow-lg font-medium"
                  >
                    素材制作
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                    className="absolute left-4 bottom-28 bg-[#3B82F6] text-white px-5 py-2.5 rounded-lg text-sm shadow-lg font-medium"
                  >
                    运营管理
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                    className="absolute right-12 bottom-12 bg-[#F97316] text-white px-5 py-2.5 rounded-lg text-sm shadow-lg font-medium"
                  >
                    渠道发布
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Features Section - Exact layout like infimind */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              产品功能
            </h2>
            <p className="text-lg text-slate-500">
              一站式智能美工平台
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left - Feature List with left border indicator */}
            <div className="space-y-0">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  onClick={() => setActiveFeature(index)}
                  className={`relative py-5 px-6 cursor-pointer transition-all duration-300 border-l-4 ${
                    activeFeature === index
                      ? "border-[#4F46E5] bg-slate-50"
                      : "border-transparent hover:bg-slate-50/50"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className={`text-lg font-bold transition-colors ${
                      activeFeature === index ? "text-[#4F46E5]" : "text-slate-300"
                    }`}>
                      {feature.id}
                    </span>
                    <div className="flex-1">
                      <h3 className={`font-medium text-lg transition-colors ${
                        activeFeature === index ? "text-[#4F46E5]" : "text-slate-700"
                      }`}>
                        {feature.title}
                      </h3>
                      {activeFeature === index && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          transition={{ duration: 0.3 }}
                          className="text-sm text-slate-500 leading-relaxed mt-2"
                        >
                          {feature.description}
                        </motion.p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right - Feature Screenshot */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="sticky top-24"
            >
              <div className="relative">
                {/* Screenshot display area */}
                <div className="bg-white rounded-lg shadow-2xl overflow-hidden border border-slate-200">
                  <motion.img
                    key={activeFeature}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    src={features[activeFeature].image}
                    alt={features[activeFeature].title}
                    className="w-full h-auto"
                  />
                </div>

                {/* Feature info overlay at bottom */}
                <div className="mt-6 bg-white rounded-lg shadow-lg p-6 border border-slate-100">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[#4F46E5] font-bold text-lg">{features[activeFeature].id}</span>
                    <span className="text-slate-900 font-semibold">{features[activeFeature].title}</span>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {features[activeFeature].description}
                  </p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Button 
                  size="lg"
                  className="bg-[#4F46E5] text-white hover:bg-[#4338CA] rounded-full px-10 py-6 text-base shadow-lg"
                >
                  立即试用
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Template Library Section - Like infimind carousel */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              海量优质模板库
            </h2>
          </motion.div>

          {/* Stats cards - exactly like infimind */}
          <div className="flex justify-center gap-8 mb-12 flex-wrap">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl px-8 py-5 shadow-sm flex items-center gap-4"
            >
              <span className="text-slate-700 font-medium">详情页模板</span>
              <span className="text-[#4F46E5] font-bold text-xl">5000+</span>
              <span className="text-slate-400 text-sm">素材库</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl px-8 py-5 shadow-sm flex items-center gap-4"
            >
              <span className="text-slate-700 font-medium">资源图模板</span>
              <span className="text-[#22C55E] font-bold text-xl">图文+视频</span>
            </motion.div>
          </div>

          {/* Image carousel - infinite scroll like infimind */}
          <div className="relative overflow-hidden py-4">
            {/* First row - scrolling left */}
            <div className="mb-4">
              <motion.div
                animate={{ x: [0, -1400] }}
                transition={{ 
                  duration: 25, 
                  repeat: Infinity, 
                  ease: "linear",
                  repeatType: "loop"
                }}
                className="flex gap-4"
              >
                {[...templateImages, ...templateImages, ...templateImages].map((img, i) => (
                  <div
                    key={`row1-${i}`}
                    className="w-36 h-48 rounded-lg flex-shrink-0 overflow-hidden shadow-md"
                  >
                    <img 
                      src={img} 
                      alt={`Template ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Second row - scrolling right */}
            <div>
              <motion.div
                animate={{ x: [-1400, 0] }}
                transition={{ 
                  duration: 25, 
                  repeat: Infinity, 
                  ease: "linear",
                  repeatType: "loop"
                }}
                className="flex gap-4"
              >
                {[...templateImages.reverse(), ...templateImages, ...templateImages].map((img, i) => (
                  <div
                    key={`row2-${i}`}
                    className="w-36 h-48 rounded-lg flex-shrink-0 overflow-hidden shadow-md"
                  >
                    <img 
                      src={img} 
                      alt={`Template ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: 9 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentSlide === i ? "bg-[#4F46E5] w-4" : "bg-slate-300"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button 
              size="lg"
              className="bg-[#4F46E5] text-white hover:bg-[#4338CA] rounded-full px-10 py-6 text-base shadow-lg"
            >
              立即试用
            </Button>
          </div>
        </div>
      </section>

      {/* Customer Cases Section - Like infimind design */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              客户案例
            </h2>
          </motion.div>

          {/* Logo tabs row */}
          <div className="flex justify-center items-center gap-6 mb-12 flex-wrap">
            {customerCases.map((caseItem, index) => (
              <motion.button
                key={caseItem.name}
                onClick={() => setCurrentCase(index)}
                whileHover={{ scale: 1.02 }}
                className={`px-6 py-3 rounded-lg transition-all ${
                  currentCase === index 
                    ? "bg-slate-100 shadow-sm" 
                    : "hover:bg-slate-50"
                }`}
              >
                <img 
                  src={caseItem.logo} 
                  alt={caseItem.name}
                  className={`h-8 w-auto object-contain transition-opacity ${
                    currentCase === index ? "opacity-100" : "opacity-60"
                  }`}
                />
              </motion.button>
            ))}
          </div>

          {/* Case content - two column layout like infimind */}
          <div className="relative max-w-6xl mx-auto">
            <motion.div
              key={currentCase}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              {/* Left - Text content */}
              <div className="space-y-6 order-2 md:order-1">
                <img 
                  src={customerCases[currentCase].logo} 
                  alt={customerCases[currentCase].name}
                  className="h-10 w-auto"
                />
                <p className="text-slate-600 leading-relaxed text-base">
                  {customerCases[currentCase].description}
                </p>
                <Button 
                  className="bg-[#4F46E5] text-white hover:bg-[#4338CA] rounded-full px-8"
                >
                  预约演示
                </Button>
              </div>

              {/* Right - Case image */}
              <div className="order-1 md:order-2">
                <img 
                  src={customerCases[currentCase].image} 
                  alt={customerCases[currentCase].name}
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
            </motion.div>

            {/* Navigation arrows */}
            <button 
              onClick={prevCase}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-16 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-slate-50 transition-colors border border-slate-100"
            >
              <ChevronLeft className="w-6 h-6 text-slate-600" />
            </button>
            <button 
              onClick={nextCase}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-16 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-slate-50 transition-colors border border-slate-100"
            >
              <ChevronRight className="w-6 h-6 text-slate-600" />
            </button>
          </div>
        </div>
      </section>

      {/* Data Section - Like infimind with same styling */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-medium text-slate-700 mb-3">
              数据提升
            </h2>
            <p className="text-slate-500">
              3分钟录入 10s生成 1键上架
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              { label: "制作效率", value: 20, unit: "倍", desc: "平均3分钟/款", color: "text-[#4F46E5]" },
              { label: "商品上新效率", value: 10, unit: "倍", desc: "平均制作+上新10分钟/款", color: "text-[#4F46E5]" },
              { label: "人力成本降低", value: 30, unit: "%", desc: "无淡旺季压力，简化流程", color: "text-[#F97316]" },
              { label: "转化率", value: 30, unit: "%", desc: "", color: "text-[#22C55E]" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-sm border border-slate-100"
              >
                <p className="text-slate-500 text-sm mb-2">{item.label}</p>
                <p className={`text-5xl font-bold ${item.color}`}>
                  <AnimatedNumber value={item.value} suffix={item.unit} duration={1.5} />
                </p>
                {item.desc && (
                  <p className="text-slate-400 text-sm mt-2">{item.desc}</p>
                )}
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg"
              className="bg-[#4F46E5] text-white hover:bg-[#4338CA] rounded-full px-12 py-6 text-lg shadow-lg"
            >
              立即试用
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Blue gradient like original */}
      <section className="py-24 bg-gradient-to-br from-[#4F46E5] via-[#5B4EE8] to-[#6366F1] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 border border-white/10 rounded-full" />
          <div className="absolute bottom-10 left-10 w-48 h-48 border border-white/10 rounded-full" />
        </div>

        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              快速开启您的数字化增长之路
            </h2>
            
            <Button 
              size="lg"
              className="bg-white text-[#4F46E5] hover:bg-slate-100 rounded-full px-12 py-6 text-lg font-medium shadow-xl"
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
