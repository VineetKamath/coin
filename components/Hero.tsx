import React from 'react';
import { Zap, Play } from 'lucide-react';
import { Container } from './ui/Container';
import { TWEET_1_EMBED, TWEET_2_EMBED } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center py-32 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <Container className="relative z-10 flex flex-col items-center text-center">
        
        {/* Animated Logo */}
        <div className="mb-8 relative group">
          <div className="absolute inset-0 bg-energy-500 rounded-full blur-xl opacity-50 animate-pulse-slow group-hover:opacity-75 transition-opacity" />
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden bg-gradient-to-b from-slate-800 to-slate-950 border-2 border-energy-500/50 flex items-center justify-center shadow-[0_0_30px_rgba(56,189,248,0.3)]">
            <img
              src="https://i.ibb.co/20xLMBgH/image.png"
              alt="$ENERGY logo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 drop-shadow-sm">
          $ENERGY
        </h1>
        
        {/* Tagline */}
        <p className="text-xl sm:text-2xl text-energy-200 font-light tracking-wide mb-12">
          Energy is the True Currency
        </p>

        {/* Tweet Embeds */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 w-full max-w-7xl mx-auto">
          {/* Tweet 1 - @cz_binance */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900">
            <div className="relative w-full h-[600px] md:h-[700px] lg:h-[800px]">
              <iframe
                src={TWEET_1_EMBED}
                title="@cz_binance Tweet"
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                scrolling="no"
              />
            </div>
          </div>

          {/* Tweet 2 - @XScharo */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900">
            <div className="relative w-full h-[600px] md:h-[700px] lg:h-[800px]">
              <iframe
                src={TWEET_2_EMBED}
                title="@XScharo Tweet"
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                scrolling="no"
              />
            </div>
          </div>
        </div>

        {/* Video */}
        <div className="w-full max-w-4xl mx-auto rounded-2xl p-1 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-sm">
          <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-900 border border-white/5 shadow-2xl">
            <iframe
              src="https://streamable.com/e/9jm3br"
              title="$ENERGY video"
              className="w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

      </Container>
    </section>
  );
};