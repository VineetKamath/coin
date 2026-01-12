import React from 'react';
import { Zap, Heart } from 'lucide-react';
import { Container } from './ui/Container';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-slate-950 border-t border-white/5 relative overflow-hidden">
      {/* Footer background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-energy-900/10 rounded-full blur-[80px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="flex flex-col items-center justify-center gap-6">
          
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-energy-500 fill-energy-500" />
            <span className="text-xl font-bold text-energy-500 tracking-wider">
              $ENERGY
            </span>
          </div>

          <div className="text-center space-y-2">
            <p className="text-slate-500 text-sm">
              Website made by <span className="text-energy-400 font-medium">skeptic46</span>
            </p>
            <p className="text-slate-600 text-xs flex items-center justify-center gap-1">
              &copy; 2026 $Energy <span className="w-1 h-1 rounded-full bg-slate-700 mx-1"></span> Built on BSC <span className="w-1 h-1 rounded-full bg-slate-700 mx-1"></span> Pump.fun Launch
            </p>
          </div>

        </div>
      </Container>
    </footer>
  );
};