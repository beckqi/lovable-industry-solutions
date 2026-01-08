import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import ProductsMegaMenu from "./ProductsMegaMenu";

const navLinks = [
  { label: "产品介绍", href: "#products", hasDropdown: true },
  { label: "行业解决方案", href: "#solutions", hasDropdown: false },
  { label: "客户案例", href: "#cases", hasDropdown: false },
  { label: "关于我们", href: "#about", hasDropdown: false },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsMenuOpen, setIsProductsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-effect py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo - white text on purple background */}
        <a href="/" className="flex items-center gap-2 group">
          <span className={`font-semibold text-xl tracking-tight transition-colors duration-300 ${
            isScrolled ? "text-foreground" : "text-white"
          }`}>
            infimind
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div
              key={link.href}
              className="relative"
              onMouseEnter={() => link.hasDropdown && setIsProductsMenuOpen(true)}
              onMouseLeave={() => link.hasDropdown && setIsProductsMenuOpen(false)}
            >
              {link.hasDropdown ? (
                <button
                  className={`relative py-2 flex items-center gap-1 transition-colors duration-300 hover:opacity-80 ${
                    isScrolled ? "text-foreground" : "text-white"
                  }`}
                >
                  {link.label}
                  <ChevronDown 
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isProductsMenuOpen ? "rotate-180" : ""
                    }`} 
                  />
                </button>
              ) : (
                <a
                  href={link.href}
                  className={`relative py-2 transition-colors duration-300 hover:opacity-80 ${
                    isScrolled ? "text-foreground" : "text-white"
                  }`}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
                </a>
              )}
              
              {link.hasDropdown && <ProductsMegaMenu isOpen={isProductsMenuOpen} />}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#" className={`transition-colors duration-300 hover:opacity-80 ${
            isScrolled ? "text-foreground" : "text-white"
          }`}>
            登录
          </a>
          <Button 
            size="default"
            className={`rounded-full px-6 transition-all duration-300 ${
              isScrolled 
                ? "bg-foreground text-background hover:bg-foreground/90" 
                : "bg-white text-black hover:bg-white/90"
            }`}
          >
            预约演示
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden p-2 transition-colors duration-300 ${
            isScrolled ? "text-foreground" : "text-white"
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-border flex flex-col gap-3">
              <a href="#" className="nav-link py-2">
                登录
              </a>
              <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-full">
                预约演示
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
