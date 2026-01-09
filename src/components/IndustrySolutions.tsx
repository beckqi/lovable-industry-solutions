import { motion } from "framer-motion";
import { Crown, Layers, Video, Package, LayoutGrid } from "lucide-react";

const solutions = [
  {
    id: "fashion",
    icon: Crown,
    title: "大型服装品牌",
    description: "助力实现全域商品内容的自动化生成与分发，让成本、效率与电商内容质量共同起飞",
    color: "from-orange-400 to-yellow-400",
    iconBg: "bg-gradient-to-br from-orange-100 to-yellow-50",
  },
  {
    id: "shelf",
    icon: Layers,
    title: "货架电商品牌",
    description: "通过主图详情页与短视频内容极速覆盖，抢占淘天与京东的流量扶持",
    color: "from-cyan-400 to-emerald-400",
    iconBg: "bg-gradient-to-br from-cyan-50 to-emerald-50",
  },
  {
    id: "livestream",
    icon: Video,
    title: "直播电商品牌",
    description: "直播切片助力品牌引流种草，抖店图文商品卡带来更多商品流量与转化",
    color: "from-amber-400 to-orange-400",
    iconBg: "bg-gradient-to-br from-amber-50 to-orange-50",
  },
  {
    id: "nosource",
    icon: Package,
    title: "无货源/档口商家",
    description: "换模特与换场景，让无货源商家避免盗图被判重风险",
    color: "from-red-400 to-orange-400",
    iconBg: "bg-gradient-to-br from-red-50 to-orange-50",
  },
  {
    id: "platform",
    icon: LayoutGrid,
    title: "电商平台与内容平台",
    description: "基于图片与视频中的商品识别与打标，助力平台更好的管理内容资产",
    color: "from-emerald-400 to-cyan-400",
    iconBg: "bg-gradient-to-br from-emerald-50 to-cyan-50",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const IndustrySolutions = () => {
  return (
    <section className="py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            行业解决方案
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            极睿科技的解决方案专家可以为您远程或上门演示产品
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center gap-12"
        >
          {/* Top row - 3 items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 w-full">
            {solutions.slice(0, 3).map((solution) => (
              <motion.div
                key={solution.id}
                variants={itemVariants}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`w-20 h-20 rounded-2xl ${solution.iconBg} flex items-center justify-center mb-6 shadow-lg shadow-black/5`}
                >
                  <solution.icon
                    className={`w-10 h-10 bg-gradient-to-br ${solution.color} bg-clip-text`}
                    style={{
                      stroke: "url(#gradient-" + solution.id + ")",
                    }}
                    strokeWidth={1.5}
                  />
                  <svg width="0" height="0">
                    <defs>
                      <linearGradient
                        id={`gradient-${solution.id}`}
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          stopColor={
                            solution.id === "fashion"
                              ? "#f97316"
                              : solution.id === "shelf"
                              ? "#22d3d1"
                              : solution.id === "livestream"
                              ? "#fbbf24"
                              : solution.id === "nosource"
                              ? "#f87171"
                              : "#34d399"
                          }
                        />
                        <stop
                          offset="100%"
                          stopColor={
                            solution.id === "fashion"
                              ? "#facc15"
                              : solution.id === "shelf"
                              ? "#34d399"
                              : solution.id === "livestream"
                              ? "#fb923c"
                              : solution.id === "nosource"
                              ? "#fb923c"
                              : "#22d3d1"
                          }
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </motion.div>
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-primary/80 transition-colors">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                  {solution.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom row - 2 items centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-2xl">
            {solutions.slice(3).map((solution) => (
              <motion.div
                key={solution.id}
                variants={itemVariants}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`w-20 h-20 rounded-2xl ${solution.iconBg} flex items-center justify-center mb-6 shadow-lg shadow-black/5`}
                >
                  <solution.icon
                    className={`w-10 h-10`}
                    style={{
                      stroke: "url(#gradient-" + solution.id + ")",
                    }}
                    strokeWidth={1.5}
                  />
                  <svg width="0" height="0">
                    <defs>
                      <linearGradient
                        id={`gradient-${solution.id}`}
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          stopColor={
                            solution.id === "nosource" ? "#f87171" : "#34d399"
                          }
                        />
                        <stop
                          offset="100%"
                          stopColor={
                            solution.id === "nosource" ? "#fb923c" : "#22d3d1"
                          }
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </motion.div>
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-primary/80 transition-colors">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                  {solution.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustrySolutions;
