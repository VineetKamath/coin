import React, { useState } from 'react';
import { Copy, Check, ExternalLink, Zap } from 'lucide-react';
import { COIN_ADDRESS, BUY_URL } from '../constants';
import { Container } from './ui/Container';
import { Button } from './ui/Button';

export const Header: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(COIN_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const truncateAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="relative flex items-center justify-center w-10 h-10 rounded-full overflow-hidden bg-slate-900 shadow-[0_0_15px_rgba(56,189,248,0.5)]">
              <img
                src="https://i.ibb.co/20xLMBgH/image.png"
                alt="$ENERGY logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xl font-bold tracking-wider text-white uppercase hidden sm:block">
              $ENERGY
            </span>
          </div>

          {/* Contract Address Bar - Desktop */}
          <div className="hidden md:flex items-center gap-4 bg-slate-900/50 px-4 py-2 rounded-xl border border-white/10">
            <span className="text-slate-400 text-sm font-medium">Contract:</span>
            <code className="text-energy-300 text-sm font-mono">{COIN_ADDRESS}</code>
            <button 
              onClick={copyToClipboard}
              className="p-1.5 rounded-lg hover:bg-white/10 transition-colors text-slate-400 hover:text-white"
              title="Copy Address"
            >
              {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
            </button>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
             {/* Mobile Copy Button (Icon Only) */}
             <div className="md:hidden">
                <button 
                    onClick={copyToClipboard}
                    className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900 border border-white/10 text-energy-400"
                >
                    {copied ? <Check size={18} /> : <Copy size={18} />}
                </button>
             </div>

            <a href={BUY_URL} target="_blank" rel="noreferrer">
              <Button size="md" className="gap-2">
                <span>Buy Now</span>
                <ExternalLink size={16} />
              </Button>
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
};