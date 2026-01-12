import React from 'react';
import { Zap, Play, Twitter, ExternalLink } from 'lucide-react';
import { Container } from './ui/Container';
import { TWEET_1_URL, TWEET_2_URL } from '../constants';

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

        {/* Tweet Bubbles */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 w-full max-w-4xl mx-auto">
          <a
            href={TWEET_1_URL}
            target="_blank"
            rel="noreferrer"
            className="group relative flex items-center gap-3 px-6 py-4 bg-slate-900/80 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-energy-500/50 hover:bg-slate-800/80 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)]"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
              <Twitter className="w-5 h-5 text-white fill-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-white">@cz_binance</span>
              <span className="text-xs text-slate-400">View Tweet</span>
            </div>
            <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-energy-400 transition-colors ml-2" />
          </a>

          <a
            href={TWEET_2_URL}
            target="_blank"
            rel="noreferrer"
            className="group relative flex items-center gap-3 px-6 py-4 bg-slate-900/80 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-energy-500/50 hover:bg-slate-800/80 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)]"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-energy-500 to-blue-500 flex items-center justify-center flex-shrink-0">
              <Twitter className="w-5 h-5 text-white fill-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-white">@XScharo</span>
              <span className="text-xs text-slate-400">View Tweet</span>
            </div>
            <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-energy-400 transition-colors ml-2" />
          </a>
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