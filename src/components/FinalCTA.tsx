import { useState } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const FinalCTA = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", company: "", phone: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); toast.success("预约申请已提交！"); setIsOpen(false); setFormData({ name: "", company: "", phone: "", email: "", message: "" }); };

  return (
    <>
      <section className="relative py-32 overflow-hidden" style={{ background: "linear-gradient(135deg, #001A41 0%, #002D6B 50%, #001A41 100%)" }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="container relative mx-auto px-6 lg:px-16 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">准备好开启 AI 驱动的增长了吗？</h2>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12">立即预约专家演示，获取定制化全链路内容解决方案</p>
            <motion.button onClick={() => setIsOpen(true)} className="relative px-12 py-5 rounded-full text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-600 shadow-[0_0_40px_rgba(59,130,246,0.4)] hover:scale-105 transition-all duration-300" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>预约演示</motion.button>
          </motion.div>
        </div>
      </section>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader><DialogTitle className="text-xl font-bold text-center">预约专家演示</DialogTitle></DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="grid grid-cols-2 gap-4"><Input placeholder="您的姓名" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required /><Input placeholder="公司名称" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} required /></div>
            <Input type="tel" placeholder="手机号码" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required />
            <Textarea placeholder="请简述您的需求（可选）" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={3} />
            <Button type="submit" className="w-full py-6 text-base font-semibold">提交预约</Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FinalCTA;