import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const solutions = [
  { id: "shelf", label: "货架电商", subtitle: "淘系 · 京东 · 拼多多", headline: "AGI Ecpro", description: "一键生成爆款主图、详情页，告别传统拍摄的高成本与低效率。", stats: [{ value: "10x", label: "效率提升" }, { value: "90%", label: "成本降低" }], features: ["智能换脸换背景", "批量主图生成", "详情页自动排版"] },
  { id: "live", label: "直播电商", subtitle: "抖音 · 快手 · 视频号", headline: "iClip 直剪", description: "直播高光时刻智能识别，60秒自动切片产出爆款短视频。", stats: [{ value: "60s", label: "切片速度" }, { value: "1000+", label: "日产视频" }], features: ["高光时刻识别", "智能切片剪辑", "多平台分发"] },
  { id: "local", label: "本地生活与广告", subtitle: "美团 · 大众点评", headline: "易视频", description: "批量视频生产与精细化剪辑平台，支持模板化快速产出。", stats: [{ value: "500+", label: "模板库" }, { value: "3x", label: "转化提升" }], features: ["批量视频生产", "模板化剪辑", "场景化素材库"] },
];

const SolutionTabs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSolution = solutions[activeIndex];

  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-16">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <p className="text-sm text-muted-foreground tracking-[0.2em] uppercase mb-4">Solutions</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">场景化解决方案</h2>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {solutions.map((solution, index) => (
            <button key={solution.id} onClick={() => setActiveIndex(index)} className={`group flex items-center gap-3 px-6 py-4 rounded-xl transition-all duration-300 border ${activeIndex === index ? "bg-foreground text-background border-foreground shadow-lg" : "bg-background text-foreground border-border hover:border-foreground/30"}`}>
              <div className="text-left"><p className="font-semibold">{solution.label}</p><p className={`text-xs ${activeIndex === index ? "text-background/70" : "text-muted-foreground"}`}>{solution.subtitle}</p></div>
            </button>
          ))}
        </div>
        <div className="bg-secondary/50 rounded-3xl p-8 lg:p-12 border border-border/50">
          <AnimatePresence mode="wait">
            <motion.div key={activeSolution.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{activeSolution.headline}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">{activeSolution.description}</p>
                  <div className="flex gap-8 mb-8">{activeSolution.stats.map((stat, i) => (<div key={i} className="text-center"><p className="text-3xl font-bold text-foreground">{stat.value}</p><p className="text-sm text-muted-foreground">{stat.label}</p></div>))}</div>
                  <div className="flex flex-wrap gap-3">{activeSolution.features.map((f, i) => (<span key={i} className="px-4 py-2 bg-background rounded-full text-sm text-muted-foreground border border-border">{f}</span>))}</div>
                </div>
                <div className="relative aspect-[4/3] bg-background rounded-2xl border border-border flex items-center justify-center">
                  <span className="text-5xl font-bold text-foreground/20">{activeSolution.stats[0].value}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default SolutionTabs;