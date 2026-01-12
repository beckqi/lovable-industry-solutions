import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import caseTpbBg from "@/assets/case-tpb-bg.webp";
import caseBelleBg from "@/assets/case-belle-bg.webp";
const caseStudies = [{
  id: "fashion",
  industry: "服装鞋帽",
  company: "太平鸟",
  logo: "TPB",
  painPoints: ["传统拍摄周期长、成本高"],
  solutions: ["使用 AGI Ecpro 一键生成多场景模特图"],
  metrics: [{
    value: "80%",
    label: "拍摄周期缩短"
  }, {
    value: "5x",
    label: "人效提升"
  }],
  gradient: "from-slate-50/80 via-blue-50/40 to-indigo-50/30",
  bgImage: caseTpbBg
}, {
  id: "beauty",
  industry: "美妆个护",
  company: "百丽",
  logo: "BL",
  painPoints: ["产品图精修耗时长"],
  solutions: ["智能修图功能自动优化产品质感"],
  metrics: [{
    value: "300%",
    label: "修图效率提升"
  }, {
    value: "25%",
    label: "点击率提升"
  }],
  gradient: "from-slate-50/80 via-rose-50/30 to-pink-50/20",
  bgImage: caseBelleBg
}, {
  id: "sports",
  industry: "运动户外",
  company: "安踏",
  logo: "AT",
  painPoints: ["运动场景拍摄成本高"],
  solutions: ["AI 运动场景生成"],
  metrics: [{
    value: "70%",
    label: "拍摄成本降低"
  }, {
    value: "2x",
    label: "上新效率提升"
  }],
  gradient: "from-slate-50/80 via-emerald-50/30 to-teal-50/20"
}, {
  id: "home",
  industry: "家居家装",
  company: "林氏木业",
  logo: "LS",
  painPoints: ["家具场景图拍摄布景复杂"],
  solutions: ["AI 生成多风格家居场景图"],
  metrics: [{
    value: "60%",
    label: "场景成本降低"
  }, {
    value: "3x",
    label: "场景数量提升"
  }],
  gradient: "from-slate-50/80 via-amber-50/30 to-orange-50/20"
}, {
  id: "food",
  industry: "食品饮料",
  company: "三只松鼠",
  logo: "SZS",
  painPoints: ["节日营销图设计周期紧"],
  solutions: ["AI 快速生成节日主题包装视觉"],
  metrics: [{
    value: "90%",
    label: "设计周期缩短"
  }, {
    value: "4x",
    label: "营销素材产出"
  }],
  gradient: "from-slate-50/80 via-yellow-50/30 to-lime-50/20"
}];
const CaseStudies = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return <section className="py-32 bg-background overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">优秀案例</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">看看各行业领先品牌如何借助 AI 技术实现内容生产力的飞跃</p>
        </motion.div>
        <div className="flex gap-3 h-[480px]">
          {caseStudies.map((item, index) => <motion.div key={item.id} onMouseEnter={() => setActiveIndex(index)} animate={{
          flex: activeIndex === index ? 4 : 0.6
        }} transition={{
          duration: 0.5
        }} className={`relative rounded-3xl overflow-hidden cursor-pointer ${activeIndex === index ? "shadow-xl" : "shadow-sm"}`}>
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />
              <AnimatePresence>
                {activeIndex !== index && <motion.div initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} exit={{
              opacity: 0
            }} className="absolute inset-0 flex items-center justify-center"><h3 className="text-xl font-bold text-primary" style={{
                writingMode: "vertical-rl"
              }}>{item.industry}</h3></motion.div>}
              </AnimatePresence>
              <AnimatePresence>
                {activeIndex === index && <motion.div initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} exit={{
              opacity: 0
            }} transition={{
              delay: 0.1
            }} className="relative h-full p-8 flex gap-8">
                    <div className="flex flex-col w-[280px] flex-shrink-0">
                      <h3 className="text-2xl font-bold text-primary mb-6">{item.industry}</h3>
                      <div className="flex-1 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/80 flex items-center justify-center shadow-none overflow-hidden">
                        {item.bgImage ? (
                          <img src={item.bgImage} alt={item.company} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center"><span className="text-2xl font-bold text-primary">{item.logo}</span></div>
                        )}
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                      <h4 className="text-xl font-bold text-foreground mb-4">{item.company}</h4>
                      <div className="mb-4"><span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">历史痛点</span><p className="text-sm text-foreground/70 mt-2">{item.painPoints[0]}</p></div>
                      <div className="mb-6"><span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">解决方案</span><p className="text-sm text-foreground/80 mt-2">{item.solutions[0]}</p></div>
                      <div className="flex gap-8">{item.metrics.map((m, i) => <div key={i}><div className="text-3xl font-bold text-primary">{m.value}</div><div className="text-xs text-muted-foreground">{m.label}</div></div>)}</div>
                    </div>
                  </motion.div>}
              </AnimatePresence>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default CaseStudies;