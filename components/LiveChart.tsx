import React from 'react';
import { Container } from './ui/Container';
import { DEXSCREENER_EMBED_URL } from '../constants';

export const LiveChart: React.FC = () => {
  return (
    <section className="py-20 bg-slate-950/50 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-energy-900 to-transparent opacity-50" />
      
      <Container>
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-energy-400 to-blue-500 drop-shadow-[0_2px_10px_rgba(14,165,233,0.3)]">
            Live Chart
          </h2>
          <div className="h-1 w-24 bg-energy-500 rounded-full" />
        </div>

        <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900 h-[600px] md:h-[700px]">
          <iframe 
            src={DEXSCREENER_EMBED_URL}
            title="DexScreener Chart"
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
          ></iframe>
        </div>
      </Container>
      
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-energy-900 to-transparent opacity-50" />
    </section>
  );
};