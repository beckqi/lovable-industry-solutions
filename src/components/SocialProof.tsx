import { motion } from "framer-motion";

import logoAnta from "@/assets/logo-anta.png";
import logoEpyaying from "@/assets/logo-epyaying.png";
import logoDescente from "@/assets/logo-descente.png";
import logoEifini from "@/assets/logo-eifini.png";
import logoException from "@/assets/logo-exception.png";
import logoEeka from "@/assets/logo-eeka.png";
import logoMoco from "@/assets/logo-moco.png";
import logoEllassay from "@/assets/logo-ellassay.png";
import logoJoeone from "@/assets/logo-joeone.png";
import logoSnowflying from "@/assets/logo-snowflying.png";

const logos = [
  { name: "安踏", image: logoAnta },
  { name: "EP雅莹", image: logoEpyaying },
  { name: "DESCENTE", image: logoDescente },
  { name: "伊芙丽", image: logoEifini },
  { name: "例外", image: logoException },
  { name: "赢家时尚", image: logoEeka },
  { name: "MO&Co", image: logoMoco },
  { name: "ELLASSAY", image: logoEllassay },
  { name: "九牧王", image: logoJoeone },
  { name: "雪中飞", image: logoSnowflying },
  { name: "Kappa", initials: "KAPPA" },
  { name: "Champion", initials: "CHAMPION" },
  { name: "New Balance", initials: "NEW BALANCE" },
  { name: "SALOMON", initials: "SALOMON" },
  { name: "斯凯奇", initials: "SKECHERS" },
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
          <motion.div 
            key={logo.name} 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.4, delay: index * 0.03 }} 
            className="flex items-center justify-center group border border-border rounded-lg bg-background/50 hover:border-primary/30 transition-all duration-300"
          >
            {logo.image ? (
              <img 
                src={logo.image} 
                alt={logo.name} 
                className="h-20 md:h-24 w-auto object-contain opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
              />
            ) : (
              <span className="text-sm md:text-base font-semibold tracking-[0.15em] text-muted-foreground/40 group-hover:text-foreground/60 group-hover:scale-110 transition-all duration-300">
                {logo.initials}
              </span>
            )}
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
