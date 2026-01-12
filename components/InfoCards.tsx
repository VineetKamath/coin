import React from 'react';
import { Twitter, BarChart2, ExternalLink } from 'lucide-react';
import { Container } from './ui/Container';
import { Button } from './ui/Button';
import { TWITTER_URL, DEXSCREENER_URL } from '../constants';

export const InfoCards: React.FC = () => {
  return (
    <section className="py-20 relative z-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Twitter Card */}
          <div className="group relative bg-slate-900/50 border border-white/5 rounded-3xl p-8 hover:bg-slate-800/50 transition-all duration-300 hover:border-energy-500/30 overflow-hidden">
            <div className="absolute top-0 right-0 p-32 bg-energy-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            
            <div className="flex flex-col items-center text-center h-full">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-800 to-black border border-white/10 flex items-center justify-center mb-6 shadow-lg shadow-black/50">
                 <Twitter className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">X Community</h3>
              
              <p className="text-slate-400 mb-8 max-w-sm">
                Join our vibrant community on X (Twitter) for the latest updates, memes, and community discussions.
              </p>
              
              <div className="mt-auto">
                <a href={TWITTER_URL} target="_blank" rel="noreferrer">
                  <Button variant="primary" className="w-full sm:w-auto min-w-[200px]">
                    Join Community
                    <ExternalLink size={16} className="ml-2" />
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* DexScreener Card */}
          <div className="group relative bg-slate-900/50 border border-white/5 rounded-3xl p-8 hover:bg-slate-800/50 transition-all duration-300 hover:border-energy-500/30 overflow-hidden">
            <div className="absolute top-0 right-0 p-32 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            
            <div className="flex flex-col items-center text-center h-full">
               <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-800 to-black border border-white/10 flex items-center justify-center mb-6 shadow-lg shadow-black/50">
                 {/* Dexscreener doesn't have a standard Lucide icon, using BarChart as proxy */}
                 <BarChart2 className="w-8 h-8 text-energy-400" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">Dexscreener</h3>
              
              <p className="text-slate-400 mb-8 max-w-sm">
                Track real-time price movements, trading volume, and market data for $ENERGY on Dexscreener.
              </p>
              
              <div className="mt-auto">
                <a href={DEXSCREENER_URL} target="_blank" rel="noreferrer">
                  <Button variant="primary" className="w-full sm:w-auto min-w-[200px]">
                    View Chart
                    <BarChart2 size={16} className="ml-2" />
                  </Button>
                </a>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};