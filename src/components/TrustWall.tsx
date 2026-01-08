const logos = [
  { name: "安踏", initials: "ANTA" },
  { name: "太平鸟", initials: "PEACEBIRD" },
  { name: "百丽", initials: "BELLE" },
  { name: "JINS", initials: "JINS" },
  { name: "森马", initials: "SEMIR" },
  { name: "斯凯奇", initials: "SKECHERS" },
  { name: "红豆", initials: "HODO" },
  { name: "SALOMON", initials: "SALOMON" },
  { name: "MO&Co", initials: "MO&Co" },
  { name: "ELLASSAY", initials: "ELLASSAY" },
  { name: "LANCY", initials: "LANCY" },
  { name: "Kappa", initials: "KAPPA" },
];

const TrustWall = () => {
  const doubledLogos = [...logos, ...logos];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6 mb-12">
        <div className="flex items-center justify-center gap-6">
          <div className="h-px w-16 bg-border" />
          <p className="text-sm text-muted-foreground tracking-[0.2em] uppercase">
            Trusted by <span className="font-medium text-foreground">1000+</span> brands
          </p>
          <div className="h-px w-16 bg-border" />
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-secondary to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-secondary to-transparent z-10 pointer-events-none" />

        <div className="flex animate-scroll-x hover:[animation-play-state:paused]">
          {doubledLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex-shrink-0 mx-12 group cursor-default"
            >
              <span className="text-lg font-medium tracking-widest text-muted-foreground/40 group-hover:text-primary transition-colors duration-500 whitespace-nowrap">
                {logo.initials}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustWall;
