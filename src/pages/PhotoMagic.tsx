import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Wand2, Upload, Palette, Zap } from "lucide-react";
import productFlat from "@/assets/product-flat.png";
import productModel from "@/assets/product-model.png";
import PhotoMagicStickyScroll from "@/components/PhotoMagicStickyScroll";

const PhotoMagic = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Product Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-violet-600" />
                </div>
                <span className="text-sm font-medium text-violet-600 bg-violet-50 px-3 py-1 rounded-full">
                  AI 智能商拍
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                PhotoMagic
                <span className="block text-slate-500 text-3xl md:text-4xl mt-2 font-normal">
                  AI 智能商拍工具
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 max-w-xl">
                基于电商大模型，一键实现平铺图转模特图、背景替换与光影重绘，让商拍成本降低 90%
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg"
                  className="bg-slate-900 text-white hover:bg-slate-800 rounded-full px-8 gap-2"
                >
                  免费试用
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 border-slate-300 text-slate-700 hover:bg-slate-50"
                >
                  预约演示
                </Button>
              </div>

              {/* Stats */}
              <div className="flex gap-8 mt-12 pt-8 border-t border-slate-100">
                <div>
                  <div className="text-3xl font-bold text-slate-900">90%</div>
                  <div className="text-sm text-slate-500">成本降低</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-900">5x</div>
                  <div className="text-sm text-slate-500">效率提升</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-900">100+</div>
                  <div className="text-sm text-slate-500">品牌客户</div>
                </div>
              </div>
            </motion.div>

            {/* Right - Demo Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-8 shadow-xl shadow-slate-200/50">
                {/* Transformation Demo */}
                <div className="grid grid-cols-5 gap-4 items-center">
                  {/* Original Image */}
                  <div className="col-span-2">
                    <div className="bg-white rounded-2xl p-4 shadow-sm">
                      <div className="text-xs text-slate-400 mb-2 text-center">原图 · 平铺图</div>
                      <div className="aspect-[3/4] rounded-xl overflow-hidden bg-slate-100">
                        <img 
                          src={productFlat} 
                          alt="Original product" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="col-span-1 flex justify-center">
                    <motion.div
                      animate={{ x: [0, 8, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      className="w-12 h-12 rounded-full bg-violet-500 flex items-center justify-center shadow-lg shadow-violet-200"
                    >
                      <ArrowRight className="w-5 h-5 text-white" />
                    </motion.div>
                  </div>

                  {/* Result Image */}
                  <div className="col-span-2">
                    <div className="bg-white rounded-2xl p-4 shadow-sm ring-2 ring-violet-100">
                      <div className="text-xs text-violet-600 mb-2 text-center font-medium">AI 生成 · 模特图</div>
                      <div className="aspect-[3/4] rounded-xl overflow-hidden bg-slate-100">
                        <img 
                          src={productModel} 
                          alt="AI generated model" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Feature Tags */}
                <div className="flex flex-wrap gap-2 mt-6 justify-center">
                  {["换背景", "换模特", "光影重绘", "多风格"].map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1.5 bg-white rounded-full text-xs font-medium text-slate-600 shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-violet-100 rounded-full blur-3xl opacity-60" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-60" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Immersive Sticky Scroll Module */}
      <PhotoMagicStickyScroll />

      {/* Module 3: Simplified Workflow */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="inline-block text-sm font-medium tracking-widest uppercase mb-3 text-slate-500">
              极简操作流程
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
              三步完成 AI 商拍
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              { 
                step: "01", 
                icon: Upload, 
                title: "上传图片", 
                description: "拍摄或上传商品平铺图，支持 JPG/PNG 格式",
                color: "violet"
              },
              { 
                step: "02", 
                icon: Palette, 
                title: "选择风格", 
                description: "挑选模特、场景和光影风格，一键预览效果",
                color: "blue"
              },
              { 
                step: "03", 
                icon: Zap, 
                title: "一键生成", 
                description: "AI 秒级生成高清模特图，支持批量导出",
                color: "emerald"
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative text-center p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4 ${
                  item.color === "violet" ? "bg-violet-100 text-violet-600" :
                  item.color === "blue" ? "bg-blue-100 text-blue-600" :
                  "bg-emerald-100 text-emerald-600"
                }`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <div className="text-xs font-bold text-slate-300 mb-2">{item.step}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>

                {/* Connector Arrow */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-slate-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900">
              开启 AI 商拍新时代
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              告别传统拍摄的高成本与长周期，让每一张商品图都成为爆款素材
            </p>
            
            <Button 
              size="lg"
              className="bg-slate-900 text-white hover:bg-slate-800 rounded-full px-12 py-6 text-lg gap-2 shadow-xl shadow-slate-900/20"
            >
              <Wand2 className="w-5 h-5" />
              立即开启 AI 商拍
            </Button>

            <p className="text-sm text-slate-400">
              已支持服装、鞋包、美妆等全品类商拍
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PhotoMagic;
