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

// Template showcase images - 3 main product displays
const templateShowcase = [
  {
    image: "https://cms-s3.ipim.cn/upload/12_b871682e51.jpg",
    tags: ["春季新款", "简约风格"],
  },
  {
    image: "https://cms-s3.ipim.cn/upload/2_e1a105c348.jpg",
    tags: ["合体版型 舒适自如", "时尚简约 百搭时尚"],
    brand: "WARRIOR",
    hasDetails: true,
  },
  {
    image: "https://cms-s3.ipim.cn/upload/4_8f4fb79194.jpg",
    tags: ["时尚百搭"],
  },
];

const customerCases = [
  {
    logo: "https://infimind.com/images/customerCase/logo_%E4%BE%8B%E5%A4%96.png",
    name: "例外",
    description: "例外2021年与极睿达成深度合作，通过易尚货系统，通用模版市场、自定义模块设计、内容智能生成、商品内容在线编辑等功能，解决例外在多平台、多店铺、多SKU的情况下，快速制作、修改、管理商品内容的难题。",
    image: "https://infimind.com/images/customerCase/img_%E4%BE%8B%E5%A4%96.png",
  },
  {
    logo: "https://infimind.com/images/customerCase/logo_%E8%BF%AA%E6%A1%91%E7%89%B9.png",
    name: "迪桑特",
    description: "迪桑特2021年与极睿达成深度合作，通过极睿商品操作系统，可以制作更优质的营销素材覆盖更多的平台，实现更好的消费者触达与转化，降低管理成本，实现商品全生命周期智能化运营。",
    image: "https://infimind.com/images/customerCase/img_%E8%BF%AA%E6%A1%91%E7%89%B9.png",
  },
  {
    logo: "https://infimind.com/images/customerCase/logo_%E4%BC%8A%E8%8A%99%E4%B8%BD.png",
    name: "伊芙丽",
    description: "伊芙丽集团于22年与极睿科技进行深度合作，通过易尚货自动生成店铺图片素材，数据上下游统一管理，实现一键多平台同步上新及管理详情页等功能。",
    image: "https://infimind.com/images/customerCase/img_%E4%BC%8A%E8%8A%99%E4%B8%BD.png",
  },
  {
    logo: "https://infimind.com/images/customerCase/logo_%E4%BB%A5%E7%BA%AF.png",
    name: "以纯",
    description: "以纯集团于22年与极睿科技进行深度合作，通过易尚货智能解析图片、自动生成线上店铺营销需要的所有图片素材。",
    image: "https://infimind.com/images/customerCase/img_%E4%BB%A5%E7%BA%AF.png",
  },
];

// Brand logos grid - matching the screenshot exactly
const brandLogos = [
  { name: "MO&Co.", text: "MO&Co." },
  { name: "JNBY", text: "JNBY/江南布衣" },
  { name: "O.L.E", text: "O.L.E 仟叶" },
  { name: "G2000", text: "G2000" },
  { name: "VICUTU", text: "VICUTU" },
  { name: "MM", text: "MM" },
  { name: "i.t", text: "i.t" },
  { name: "Stussy", text: "Stussy" },
  { name: "DIKENI", text: "DIKENI" },
  { name: "balabala", text: "balabala" },
  { name: "BSX", text: "BSX" },
  { name: "PAMAX", text: "PAMAX" },
  { name: "Lang", text: "Lang" },
  { name: "A", text: "A" },
  { name: "SCOFILD", text: "SCOFILD" },
  { name: "YOWHAY", text: "YOWHAY" },
  { name: "Roem", text: "Roem" },
  { name: "brand1", text: "" },
  { name: "brand2", text: "" },
  { name: "LANDI", text: "LANDI" },
  { name: "Song of Song", text: "Song of Song" },
  { name: "YINER", text: "YINER 音儿" },
  { name: "Annil", text: "Annil" },
  { name: "Baleno", text: "Baleno" },
  { name: "MEILNI", text: "MEILNI" },
  { name: "MIID", text: "MIID" },
];

const ECPro = () => {
  const [activeFeature, setActiveFeature] = useState(2);
  const [currentCase, setCurrentCase] = useState(0);
  const [activeTab, setActiveTab] = useState<'detail' | 'resource'>('resource');
  const [currentTemplateSlide, setCurrentTemplateSlide] = useState(0);

  const nextCase = () => {
    setCurrentCase((prev) => (prev + 1) % customerCases.length);
  };

  const prevCase = () => {
    setCurrentCase((prev) => (prev - 1 + customerCases.length) % customerCases.length);
  };

  const nextTemplate = () => {
    setCurrentTemplateSlide((prev) => (prev + 1) % 3);
  };

  const prevTemplate = () => {
    setCurrentTemplateSlide((prev) => (prev - 1 + 3) % 3);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section - Blue gradient exactly like screenshot */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-[#4F46E5] via-[#5B4EE8] to-[#6366F1] relative overflow-hidden">
        {/* Decorative curved waves */}
        <div className="absolute bottom-0 left-0 right-0 w-full">
          <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none" className="w-full h-24">
            <path 
              d="M0,60 Q360,100 720,60 T1440,60 L1440,120 L0,120 Z" 
              fill="rgba(255,255,255,0.08)"
            />
            <path 
              d="M0,80 Q360,110 720,80 T1440,80 L1440,120 L0,120 Z" 
              fill="rgba(255,255,255,0.04)"
            />
          </svg>
        </div>

        {/* Decorative circles on left */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] opacity-15">
          <div className="absolute top-8 left-4 w-72 h-72 border border-white/40 rounded-full" />
          <div className="absolute top-16 left-12 w-56 h-56 border border-white/30 rounded-full" />
          <div className="absolute top-24 left-20 w-40 h-40 border border-white/20 rounded-full" />
        </div>
        
        <div className="container mx-auto max-w-7xl px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left - Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="py-8"
            >
              <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                ECPro易尚货
              </h1>
              
              <p className="text-sm md:text-base text-white/75 leading-relaxed mb-6 max-w-md">
                易尚货是针对泛服装电商上新频率快、美工作图成本高、多平台上货工作重复低效等情况而推出的电商商品内容一站式服务平台
              </p>
              
              <Button 
                className="bg-transparent border border-white/80 text-white hover:bg-white hover:text-[#4F46E5] rounded-full px-8 py-2.5 text-sm font-normal transition-all duration-300"
              >
                立即试用
              </Button>
            </motion.div>

            {/* Right - 3D Box Visual */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="relative flex justify-center items-center"
            >
              <div className="relative">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative"
                >
                  <img 
                    src="https://cms-s3.ipim.cn/infimind/banner_img_08a40ae53b.png" 
                    alt="ECPro 3D Box"
                    className="w-[320px] md:w-[380px] h-auto object-contain"
                  />
                  
                  {/* Floating labels */}
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -right-2 top-6 bg-[#10B981] text-white px-4 py-2 rounded-md text-xs shadow-lg"
                  >
                    素材制作
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, 4, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                    className="absolute left-0 bottom-24 bg-[#3B82F6] text-white px-4 py-2 rounded-md text-xs shadow-lg"
                  >
                    运营管理
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                    className="absolute right-8 bottom-8 bg-[#F59E0B] text-white px-4 py-2 rounded-md text-xs shadow-lg"
                  >
                    渠道发布
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
              产品功能
            </h2>
            <p className="text-slate-500 text-sm">
              一站式智能美工平台
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left - Feature List */}
            <div>
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  onClick={() => setActiveFeature(index)}
                  className={`py-4 px-4 cursor-pointer transition-all duration-200 border-l-[3px] ${
                    activeFeature === index
                      ? "border-[#4F46E5] bg-slate-50/80"
                      : "border-transparent hover:bg-slate-50/50"
                  }`}
                >
                  <div className="flex items-start gap-2">
                    <span className={`text-base font-bold transition-colors ${
                      activeFeature === index ? "text-[#4F46E5]" : "text-slate-300"
                    }`}>
                      {feature.id}
                    </span>
                    <div className="flex-1">
                      <h3 className={`font-medium text-base transition-colors ${
                        activeFeature === index ? "text-[#4F46E5]" : "text-slate-700"
                      }`}>
                        {feature.title}
                      </h3>
                      {activeFeature === index && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="text-xs text-slate-500 leading-relaxed mt-1.5"
                        >
                          {feature.description}
                        </motion.p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right - Feature Screenshot */}
            <div className="sticky top-20">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-slate-100">
                <motion.img
                  key={activeFeature}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  src={features[activeFeature].image}
                  alt={features[activeFeature].title}
                  className="w-full h-auto"
                />
              </div>

              <div className="mt-6 text-center">
                <Button 
                  className="bg-[#4F46E5] text-white hover:bg-[#4338CA] rounded-full px-8 py-2.5 text-sm"
                >
                  立即试用
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Template Library Section - Matching screenshot exactly */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              海量优质模板库
            </h2>
          </motion.div>

          {/* Tab buttons like screenshot */}
          <div className="flex justify-center gap-6 mb-10">
            <button
              onClick={() => setActiveTab('detail')}
              className={`px-4 py-2 text-sm font-medium transition-all ${
                activeTab === 'detail'
                  ? "text-slate-900 border-b-2 border-[#4F46E5]"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              详情页模板
            </button>
            <button
              onClick={() => setActiveTab('resource')}
              className={`px-4 py-2 text-sm font-medium transition-all flex items-center gap-2 ${
                activeTab === 'resource'
                  ? "text-slate-900 border-b-2 border-[#4F46E5]"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              资源图模板
              <span className="bg-[#4F46E5] text-white text-xs px-2 py-0.5 rounded">5000+</span>
            </button>
          </div>

          {/* Template carousel - 3 product cards like screenshot */}
          <div className="relative px-12">
            <div className="grid grid-cols-3 gap-6">
              {/* Card 1 - Dress images */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden"
              >
                <div className="aspect-[3/4] relative overflow-hidden">
                  <img 
                    src="https://cms-s3.ipim.cn/upload/12_b871682e51.jpg"
                    alt="Template 1"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Card 2 - Main featured with details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-xl shadow-md border border-slate-100 overflow-hidden"
              >
                <div className="p-4">
                  {/* Product thumbnails row */}
                  <div className="flex gap-2 mb-3 justify-center">
                    {[1,2,3,4,5].map((i) => (
                      <div key={i} className="w-10 h-10 bg-slate-100 rounded overflow-hidden">
                        <div className="w-full h-full bg-slate-200" />
                      </div>
                    ))}
                  </div>
                  
                  {/* Main image */}
                  <div className="aspect-square relative overflow-hidden rounded-lg mb-3">
                    <img 
                      src="https://cms-s3.ipim.cn/upload/2_e1a105c348.jpg"
                      alt="Template 2"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Description text */}
                  <div className="text-center space-y-1">
                    <p className="text-xs text-slate-500">合体版型 舒适自如</p>
                    <p className="text-xs text-slate-400">时尚简约 百搭时尚</p>
                  </div>

                  {/* Brand logo */}
                  <div className="mt-3 flex justify-center">
                    <span className="text-red-600 font-bold text-sm">WARRIOR</span>
                  </div>
                </div>
              </motion.div>

              {/* Card 3 - Model image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden"
              >
                <div className="aspect-[3/4] relative overflow-hidden">
                  <img 
                    src="https://cms-s3.ipim.cn/upload/4_8f4fb79194.jpg"
                    alt="Template 3"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>

            {/* Navigation arrows */}
            <button 
              onClick={prevTemplate}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-slate-50 transition-colors border border-slate-100"
            >
              <ChevronLeft className="w-5 h-5 text-slate-400" />
            </button>
            <button 
              onClick={nextTemplate}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-slate-50 transition-colors border border-slate-100"
            >
              <ChevronRight className="w-5 h-5 text-slate-400" />
            </button>
          </div>

          <div className="mt-10 text-center">
            <Button 
              className="bg-[#4F46E5] text-white hover:bg-[#4338CA] rounded-full px-8 py-2.5 text-sm"
            >
              立即试用
            </Button>
          </div>
        </div>
      </section>

      {/* Customer Cases Section - Gray background like screenshot */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              客户案例
            </h2>
          </motion.div>

          {/* Case content - two column layout */}
          <div className="relative max-w-5xl mx-auto mb-12">
            <motion.div
              key={currentCase}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 gap-10 items-center"
            >
              {/* Left - Text content */}
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <img 
                    src={customerCases[currentCase].logo} 
                    alt={customerCases[currentCase].name}
                    className="h-8 w-auto"
                  />
                  <span className="text-slate-400 text-sm">{customerCases[currentCase].name}</span>
                </div>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {customerCases[currentCase].description}
                </p>
                <Button 
                  className="bg-[#4F46E5] text-white hover:bg-[#4338CA] rounded-full px-6 py-2 text-sm"
                >
                  预约演示
                </Button>
              </div>

              {/* Right - Case image */}
              <div>
                <img 
                  src={customerCases[currentCase].image} 
                  alt={customerCases[currentCase].name}
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
            </motion.div>

            {/* Navigation arrows */}
            <button 
              onClick={prevCase}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-slate-50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-slate-400" />
            </button>
            <button 
              onClick={nextCase}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-slate-50 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-slate-400" />
            </button>
          </div>

          {/* Brand logos grid - exactly like screenshot */}
          <div className="border-t border-slate-200 pt-8">
            <div className="grid grid-cols-9 gap-4 mb-4">
              {[
                "MO&Co.", "JNBY", "O.L.E仟叶", "G2000", "VICUTU", "MM", "i.t", "Stussy", "DIKENI"
              ].map((brand, i) => (
                <div key={i} className="flex items-center justify-center py-3 px-2 bg-white rounded border border-slate-100 hover:shadow-sm transition-shadow">
                  <span className="text-xs text-slate-600 font-medium truncate">{brand}</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-9 gap-4">
              {[
                "balabala", "BSX", "PAMAX", "Lang", "A", "SCOFILD", "YOWHAY", "Roem", ""
              ].map((brand, i) => (
                <div key={i} className={`flex items-center justify-center py-3 px-2 bg-white rounded border border-slate-100 hover:shadow-sm transition-shadow ${!brand && 'opacity-0'}`}>
                  <span className="text-xs text-slate-600 font-medium truncate">{brand}</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-9 gap-4 mt-4">
              {[
                "", "", "LANDI", "Song of Song", "YINER音儿", "Annil", "Baleno", "MEILNI", "MIID"
              ].map((brand, i) => (
                <div key={i} className={`flex items-center justify-center py-3 px-2 bg-white rounded border border-slate-100 hover:shadow-sm transition-shadow ${!brand && 'opacity-0'}`}>
                  <span className="text-xs text-slate-600 font-medium truncate">{brand}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Data Section - White background like screenshot */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              数据提升
            </h2>
            <p className="text-slate-500 text-sm">
              3分钟录入 10s生成 1键上架
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-6 mb-10">
            {[
              { label: "生产效率", value: 20, unit: "倍", desc: "平均3分钟/款", color: "text-[#4F46E5]" },
              { label: "商品上新效率", value: 10, unit: "倍", desc: "单次制作+上新10分钟/款", color: "text-[#4F46E5]" },
              { label: "人力成本降低", value: 30, unit: "%", desc: "无淡旺季压力，简化流程", color: "text-[#F59E0B]" },
              { label: "转化率", value: 30, unit: "%", desc: "无需专业修图技能", color: "text-[#10B981]" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-slate-50 rounded-xl p-6"
              >
                <p className="text-slate-500 text-xs mb-1">{item.label}</p>
                <div className="flex items-baseline gap-1">
                  <span className={`text-4xl font-bold ${item.color}`}>
                    <AnimatedNumber value={item.value} suffix="" duration={1.2} />
                  </span>
                  <span className={`text-lg ${item.color}`}>{item.unit}</span>
                  <span className="text-emerald-500 text-sm ml-1">↑</span>
                </div>
                <p className="text-slate-400 text-xs mt-1">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              className="bg-[#4F46E5] text-white hover:bg-[#4338CA] rounded-full px-8 py-2.5 text-sm"
            >
              立即试用
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Blue gradient like screenshot */}
      <section className="py-16 bg-gradient-to-r from-[#4F46E5] to-[#6366F1]">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              快速开启您的数字化增长之路
            </h2>
            
            <Button 
              className="bg-transparent border border-white text-white hover:bg-white hover:text-[#4F46E5] rounded-full px-8 py-2.5 text-sm transition-all"
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
