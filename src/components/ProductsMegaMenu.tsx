import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Sparkles, 
  ImagePlus, 
  Scissors, 
  Video, 
  Factory,
  Brain,
  Database
} from "lucide-react";
import menuDecoration from "@/assets/menu-decoration.webp";

interface ProductItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  isRoute?: boolean;
}

const leftColumnProducts: ProductItem[] = [
  {
    icon: <Sparkles className="w-5 h-5 text-violet-500" />,
    title: "PhotoMagic",
    description: "AI 商拍工具，一键换脸换背景",
    href: "/photomagic",
    isRoute: true,
  },
  {
    icon: <ImagePlus className="w-5 h-5 text-blue-500" />,
    title: "易尚货",
    description: "主图/详情页自动生成与多平台上新同步",
    href: "#yishanghuo",
  },
  {
    icon: <Scissors className="w-5 h-5 text-emerald-500" />,
    title: "iCut 直剪",
    description: "直播切片智能制作与发布",
    href: "#icut",
  },
  {
    icon: <Video className="w-5 h-5 text-orange-500" />,
    title: "iClip 易视频",
    description: "商品短视频智能生成与运营",
    href: "#iclip",
  },
  {
    icon: <Factory className="w-5 h-5 text-slate-600" />,
    title: "内容工厂",
    description: "代制作与代上新服务",
    href: "#content-factory",
  },
];

const rightColumnProducts: ProductItem[] = [
  {
    icon: <Brain className="w-5 h-5 text-indigo-500" />,
    title: "AIFashion",
    description: "一站式人工智能技术与数据服务平台",
    href: "#aifashion",
  },
  {
    icon: <Database className="w-5 h-5 text-cyan-500" />,
    title: "iPIM",
    description: "新一代智能商品操作系统",
    href: "#ipim",
  },
];

interface ProductsMegaMenuProps {
  isOpen: boolean;
}

const ProductsMegaMenu = ({ isOpen }: ProductsMegaMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute top-full left-0 mt-2 w-[680px] bg-white rounded-2xl shadow-2xl shadow-black/10 border border-slate-100 overflow-hidden z-50"
        >
          {/* Decorative background image - covers entire menu */}
          <img 
            src={menuDecoration} 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none z-0"
          />
          {/* Menu Content - above decoration */}
          <div className="relative z-10 p-8 grid grid-cols-2 gap-8">
            {/* Left Column */}
            <div>
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                电商商品内容全流程制作
              </h4>
              <div className="space-y-1">
                {leftColumnProducts.map((product, index) => {
                  const MotionLink = motion(Link);
                  const content = (
                    <>
                      <div className="flex-shrink-0 mt-0.5">
                        {product.icon}
                      </div>
                      <div>
                        <div className="font-medium text-slate-900 group-hover:text-primary transition-colors">
                          {product.title}
                        </div>
                        <div className="text-sm text-slate-500 mt-0.5">
                          {product.description}
                        </div>
                      </div>
                    </>
                  );

                  return product.isRoute ? (
                    <MotionLink
                      key={product.title}
                      to={product.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                      {content}
                    </MotionLink>
                  ) : (
                    <motion.a
                      key={product.title}
                      href={product.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                      {content}
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Right Column */}
            <div>
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                电商商品内容智能化管理
              </h4>
              <div className="space-y-1">
                {rightColumnProducts.map((product, index) => (
                  <motion.a
                    key={product.title}
                    href={product.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (leftColumnProducts.length + index) * 0.05 }}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      {product.icon}
                    </div>
                    <div>
                      <div className="font-medium text-slate-900 group-hover:text-primary transition-colors">
                        {product.title}
                      </div>
                      <div className="text-sm text-slate-500 mt-0.5">
                        {product.description}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductsMegaMenu;
