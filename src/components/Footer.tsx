const Footer = () => (
  <footer className="py-12 bg-foreground text-background/80">
    <div className="container mx-auto px-6 lg:px-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-background/10 rounded-lg flex items-center justify-center"><span className="text-sm font-bold text-background">极</span></div>
          <span className="text-lg font-semibold text-background">极睿科技</span>
        </div>
        <div className="flex flex-wrap items-center gap-8 text-sm">
          <a href="#" className="hover:text-background transition-colors">产品</a>
          <a href="#" className="hover:text-background transition-colors">解决方案</a>
          <a href="#" className="hover:text-background transition-colors">关于我们</a>
          <a href="#" className="hover:text-background transition-colors">联系我们</a>
        </div>
        <p className="text-sm text-background/50">© 2024 极睿科技 Infimind. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;