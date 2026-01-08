import { motion } from "framer-motion";

const IconDatabase = () => (<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><ellipse cx="24" cy="12" rx="16" ry="5" /><ellipse cx="24" cy="24" rx="16" ry="5" /><ellipse cx="24" cy="36" rx="16" ry="5" /><line x1="8" y1="12" x2="8" y2="36" /><line x1="40" y1="12" x2="40" y2="36" /></svg>);
const IconTarget = () => (<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><circle cx="24" cy="24" r="20" /><circle cx="24" cy="24" r="14" /><circle cx="24" cy="24" r="8" /><circle cx="24" cy="24" r="2" fill="currentColor" /></svg>);
const IconSpeed = () => (<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><polygon points="24,4 44,24 24,44 4,24" /><polygon points="24,12 36,24 24,36 12,24" /></svg>);
const IconShield = () => (<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><path d="M24 4 L40 10 L40 24 C40 36 24 44 24 44 C24 44 8 36 8 24 L8 10 Z" /><path d="M24 12 L32 15 L32 22 C32 30 24 35 24 35 C24 35 16 30 16 22 L16 15 Z" /></svg>);

const technologies = [
  { Icon: IconDatabase, stat: "100M+", title: "多模态数据库", description: "覆盖服装、鞋包、美妆等全品类商品素材" },
  { Icon: IconTarget, stat: "99.2%", title: "识别准确率", description: "精准理解面料、版型、风格等细节特征" },
  { Icon: IconSpeed, stat: "3s", title: "极速生成", description: "支持批量处理与实时预览调整" },
  { Icon: IconShield, stat: "100%", title: "版权安全", description: "所有生成内容均为商业可用" },
];

const TechAdvantages = () => (
  <section className="py-20 md:py-28 bg-muted/30">
    <div className="container mx-auto px-6 lg:px-12">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12 md:mb-16">
        <span className="inline-block text-sm font-medium tracking-widest uppercase mb-3 text-muted-foreground">技术优势</span>
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground">领先的 AI 核心能力</h2>
      </motion.div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {technologies.map((tech, index) => (
          <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="text-center p-6 md:p-8 rounded-2xl bg-background border border-border/50 hover:border-border hover:shadow-lg transition-all duration-300">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-muted mb-4 text-foreground/70"><tech.Icon /></div>
            <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">{tech.stat}</div>
            <h3 className="text-base md:text-lg font-semibold text-foreground mb-2">{tech.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{tech.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TechAdvantages;