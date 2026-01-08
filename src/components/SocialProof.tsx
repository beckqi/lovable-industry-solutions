import { motion } from "framer-motion";

const logos = [
  { name: "安踏", initials: "ANTA" }, { name: "太平鸟", initials: "PEACEBIRD" }, { name: "百丽", initials: "BELLE" }, { name: "JINS", initials: "JINS" }, { name: "UGG", initials: "UGG" },
  { name: "LANCY", initials: "LANCY" }, { name: "森马", initials: "SEMIR" }, { name: "斯凯奇", initials: "SKECHERS" }, { name: "红豆", initials: "HODO" }, { name: "SALOMON", initials: "SALOMON" },
  { name: "MO&Co", initials: "MO&Co" }, { name: "ELLASSAY", initials: "ELLASSAY" }, { name: "Kappa", initials: "KAPPA" }, { name: "Champion", initials: "CHAMPION" }, { name: "New Balance", initials: "NEW BALANCE" },
];

const SocialProof = () => (
  <section className="py-32 bg-secondary/30">
    <div className="container mx-auto px-6 lg:px-16">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
        <p className="text-sm text-muted-foreground tracking-[0.2em] uppercase mb-4">Trusted Partners</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">合作客户</h2>
      </motion.div>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-8 md:gap-12 mb-16">
        {logos.map((logo, index) => (
          <motion.div key={logo.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.03 }} className="flex items-center justify-center py-6">
            <span className="text-sm md:text-base font-semibold tracking-[0.15em] text-muted-foreground/40 hover:text-foreground/60 transition-colors duration-500">{logo.initials}</span>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="text-center">
        <div className="inline-flex items-center gap-4 px-8 py-4 bg-background rounded-full border border-border">
          <p className="text-sm md:text-base text-muted-foreground">已为 <span className="font-bold text-foreground">25,000+</span> 品牌提供 AI 生产力支持</p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default SocialProof;