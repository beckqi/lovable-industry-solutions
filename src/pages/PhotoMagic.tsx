import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Users, ImageIcon, Wand2, Upload, Palette, Zap, Check } from "lucide-react";
import productFlat from "@/assets/product-flat.png";
import productModel from "@/assets/product-model.png";

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

      {/* Module 1: AI Model Generation */}
      <section className="py-20 md:py-28 bg-slate-50/50">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <span className="inline-block text-sm font-medium tracking-widest uppercase text-violet-600">
                AI 模特生成
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 leading-tight">
                海量数字模特
                <br />
                <span className="text-slate-500">无需跟拍策划</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                内置百余位不同国籍、肤色、年龄的数字模特，完美匹配全球审美，彻底告别高昂的模特与摄影棚开支。
              </p>
              <ul className="space-y-3">
                {["亚洲 / 欧美 / 多元化模特库", "可定制年龄、体型、风格", "支持品牌专属模特训练"].map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-violet-100 flex items-center justify-center">
                      <Check className="w-3 h-3 text-violet-600" />
                    </div>
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right - Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-6 border border-slate-100">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-5 h-5 text-violet-500" />
                  <span className="text-sm font-medium text-slate-700">选择模特</span>
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className={`aspect-square rounded-xl bg-gradient-to-br ${
                        i === 3 ? "from-violet-100 to-violet-200 ring-2 ring-violet-400" : "from-slate-100 to-slate-200"
                      } flex items-center justify-center cursor-pointer transition-all`}
                    >
                      <div className={`w-8 h-8 rounded-full ${i === 3 ? "bg-violet-300" : "bg-slate-300"}`} />
                    </motion.div>
                  ))}
                </div>
                <div className="mt-4 flex gap-2">
                  {["亚洲女性", "欧美女性", "亚洲男性"].map((label, idx) => (
                    <span
                      key={label}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium ${
                        idx === 0 ? "bg-violet-100 text-violet-700" : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Module 2: Virtual Studio - Scene Replacement */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Visual */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-2 mb-4">
                  <ImageIcon className="w-5 h-5 text-blue-500" />
                  <span className="text-sm font-medium text-slate-700">场景切换</span>
                </div>
                <div className="relative">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden bg-white shadow-sm">
                    <img 
                      src={productModel} 
                      alt="Scene demo" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Scene Thumbnails */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-white rounded-full p-2 shadow-lg">
                    {[
                      { label: "客厅", color: "bg-amber-100" },
                      { label: "街道", color: "bg-slate-200", active: true },
                      { label: "影棚", color: "bg-violet-100" },
                    ].map((scene) => (
                      <motion.div
                        key={scene.label}
                        whileHover={{ scale: 1.1 }}
                        className={`w-12 h-12 rounded-full ${scene.color} flex items-center justify-center cursor-pointer ${
                          scene.active ? "ring-2 ring-blue-400" : ""
                        }`}
                      >
                        <span className="text-xs font-medium text-slate-600">{scene.label}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right - Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6 order-1 lg:order-2"
            >
              <span className="inline-block text-sm font-medium tracking-widest uppercase text-blue-600">
                智能场景替换
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 leading-tight">
                任意场景
                <br />
                <span className="text-slate-500">秒间切换</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                只需上传商品平铺图，即可智能识别商品类目与轮廓，自动生成与其调性相符的专业室内或户外场景，光影效果真实细腻。
              </p>
              <ul className="space-y-3">
                {["智能商品轮廓识别", "100+ 预设专业场景模板", "自定义上传场景图片"].map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                      <Check className="w-3 h-3 text-blue-600" />
                    </div>
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Module 3: Simplified Workflow */}
      <section className="py-20 md:py-28 bg-slate-50/50">
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
                className="relative text-center p-8 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all duration-300"
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
      <section className="py-20 md:py-28 bg-white">
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
