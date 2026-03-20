export const Footer = () => {
  return (
    <footer className="bg-brand-dark border-t border-brand-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div className="max-w-sm">
            <h2 className="text-4xl font-syne font-bold text-brand-white mb-6 uppercase">Vryce</h2>
            <p className="text-brand-white/60 font-manrope">
              Audacious, contemporary, and editorial creative studio. Part of Lupitex Consulting Group.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-12">
            <div>
              <h4 className="font-syne font-bold text-brand-white mb-4 uppercase tracking-wider text-sm">Studio</h4>
              <ul className="space-y-2 text-brand-white/60 font-manrope">
                <li><a href="#work" className="hover:text-brand-violet transition-colors">Work</a></li>
                <li><a href="#services" className="hover:text-brand-violet transition-colors">Services</a></li>
                <li><a href="#about" className="hover:text-brand-violet transition-colors">About</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-syne font-bold text-brand-white mb-4 uppercase tracking-wider text-sm">Connect</h4>
              <ul className="space-y-2 text-brand-white/60 font-manrope">
                <li><a href="mailto:info@vrycel.com" className="hover:text-brand-violet transition-colors">info@vrycel.com</a></li>
                <li><a href="#" className="hover:text-brand-violet transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-brand-violet transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-brand-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-brand-white/40 font-manrope">
          <p>© {new Date().getFullYear()} Vryce LLC. All rights reserved.</p>
          <p>25 SW 9th St, Suite 406, Miami, FL, 33130</p>
        </div>
      </div>
    </footer>
  );
};
