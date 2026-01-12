import { motion } from "framer-motion";
const TrustWall = () => {
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div className="text-center" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5
      }}>
          <p className="text-sm tracking-[0.2em] mb-4 text-primary">
            产品内容
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            AIGC 全链路内容运营解决方案
          </h2>
        </motion.div>
      </div>
    </section>;
};
export default TrustWall;