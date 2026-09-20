/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import GymLogo from './components/GymLogo';
import GymHero from './components/GymHero';
import GymIntro from './components/GymIntro';
import GymClasses from './components/GymClasses';
import GymPricing from './components/GymPricing';
import GymFAQ from './components/GymFAQ';
import GymAccess from './components/GymAccess';
import GymContact from './components/GymContact';
import { MapPin, Clock, ArrowUpRight, ChevronRight, MessageSquare, ShieldCheck } from 'lucide-react';

export default function App() {
  const [prepopulatedMessage, setPrepopulatedMessage] = useState<string>('');
  const [prepopulatedPlanLabel, setPrepopulatedPlanLabel] = useState<string>('');

  const handleSendConfigToForm = (configText: string, selectedPlanName: string) => {
    setPrepopulatedMessage(configText);
    setPrepopulatedPlanLabel(selectedPlanName);
  };

  const handleClearPrepopulated = () => {
    setPrepopulatedMessage('');
    setPrepopulatedPlanLabel('');
  };

  const handleScrollTo = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-red-600 selection:text-white antialiased flex flex-col">
      
      {/* Premium Glassmorphic Header */}
      <header className="sticky top-0 z-40 w-full border-b border-neutral-900 bg-black/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 h-20 flex items-center justify-between gap-2">
          
          {/* Gym brand logo */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="cursor-pointer flex items-center gap-2 sm:gap-3 md:gap-4 shrink"
          >
            <GymLogo className="w-9 h-9 sm:w-10 sm:h-10 shrink-0" />
            <div className="flex flex-col border-l border-neutral-800 pl-2 sm:pl-3">
              <span className="text-[11px] sm:text-xs font-black text-red-500 tracking-wider leading-tight whitespace-nowrap">
                総合格闘技クラス専用ページ
              </span>
              <span className="text-[9px] md:text-[10px] text-neutral-400 font-medium leading-normal mt-0.5">
                総合格闘技以外のお問い合わせは <span className="text-white font-bold whitespace-nowrap">06-7898-0888</span> にお問い合わせお願いします
              </span>
            </div>
          </div>

          {/* Nav links */}
          <nav className="hidden lg:flex items-center gap-7">
            <button
              onClick={() => handleScrollTo('about')}
              className="text-xs font-bold uppercase tracking-wider text-neutral-400 hover:text-red-500 transition-colors cursor-pointer"
            >
              特徴・紹介
            </button>
            <button
              onClick={() => handleScrollTo('classes')}
              className="text-xs font-bold uppercase tracking-wider text-neutral-400 hover:text-red-500 transition-colors cursor-pointer"
            >
              クラス
            </button>
            <button
              onClick={() => handleScrollTo('pricing')}
              className="text-xs font-bold uppercase tracking-wider text-neutral-400 hover:text-red-500 transition-colors cursor-pointer"
            >
              料金・シミュレーター
            </button>
            <button
              onClick={() => handleScrollTo('access')}
              className="text-xs font-bold uppercase tracking-wider text-neutral-400 hover:text-red-500 transition-colors cursor-pointer"
            >
              アクセス
            </button>
            <button
              onClick={() => handleScrollTo('faq')}
              className="text-xs font-bold uppercase tracking-wider text-neutral-400 hover:text-red-500 transition-colors cursor-pointer"
            >
              よくある質問
            </button>
          </nav>

          {/* Header Action Button */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            <a
              href="https://lin.ee/OVdR12t"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1.5 text-xs font-bold text-[#06C755] hover:text-white transition-colors mr-1 animate-pulse whitespace-nowrap"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-current shrink-0" />
              <span className="whitespace-nowrap">公式LINE友だち追加</span>
            </a>

            <button
              onClick={() => handleScrollTo('contact')}
              className="px-2.5 sm:px-4 py-1.5 sm:py-2 bg-[#06C755] hover:bg-[#05b34c] text-white text-[10px] sm:text-xs font-bold rounded-xl tracking-wider flex items-center gap-1 sm:gap-1.5 cursor-pointer transition-colors shadow-lg border border-emerald-500 shrink-0"
              id="header-cta-trial-btn"
            >
              <span className="text-center leading-tight block">
                公式LINEで<br />体験予約
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
            </button>
          </div>

        </div>
      </header>

      {/* Main content body */}
      <main className="flex-grow">
        
        {/* 1. Hero Section */}
        <GymHero onNavigate={handleScrollTo} />

        {/* 2. Gym Concept and Introductions */}
        <GymIntro />

        {/* 3. Class Offerings (MMA) */}
        <GymClasses />

        {/* 4. Pricing Fees & Live Simulator */}
        <GymPricing onSendConfigToForm={handleSendConfigToForm} />

        {/* 5. Frequently Asked Questions */}
        <GymFAQ />

        {/* 6. Gym Location Directions & Map Embedding */}
        <GymAccess />

        {/* 7. Booking & Inquiry Form */}
        <GymContact
          prepopulatedMessage={prepopulatedMessage}
          prepopulatedPlanLabel={prepopulatedPlanLabel}
          onClearPrepopulated={handleClearPrepopulated}
        />

      </main>

      {/* Professional Athletic Footer as requested */}
      <footer className="bg-neutral-950 border-t border-neutral-900 py-16 text-neutral-400 text-xs relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
            
            {/* Logo and brief col */}
            <div className="md:col-span-5 space-y-4">
              <GymLogo className="w-12 h-12" />
              <p className="text-neutral-400 leading-relaxed max-w-sm">
                豊中市庄内の総合格闘技ジム『プラマーズデン MMA Academy』。
                在籍者全員が未経験からスタート。初心者の方でも安心・安全・アットホームに格闘技を楽しめる環境を提供しています。
              </p>
            </div>

            {/* Quick navigational links */}
            <div className="md:col-span-3 space-y-4">
              <h4 className="font-display font-bold text-sm text-white tracking-wider uppercase border-l-2 border-red-600 pl-2.5">
                コンテンツ
              </h4>
              <ul className="space-y-2.5 font-medium">
                <li>
                  <button onClick={() => handleScrollTo('about')} className="hover:text-red-500 transition-colors flex items-center gap-1 cursor-pointer">
                    <ChevronRight className="w-3 h-3 text-red-500" />
                    <span>ジム紹介・特徴</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => handleScrollTo('classes')} className="hover:text-red-500 transition-colors flex items-center gap-1 cursor-pointer">
                    <ChevronRight className="w-3 h-3 text-red-500" />
                    <span>指導クラス一覧</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => handleScrollTo('pricing')} className="hover:text-red-500 transition-colors flex items-center gap-1 cursor-pointer">
                    <ChevronRight className="w-3 h-3 text-red-500" />
                    <span>料金・シミュレーター</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => handleScrollTo('access')} className="hover:text-red-500 transition-colors flex items-center gap-1 cursor-pointer">
                    <ChevronRight className="w-3 h-3 text-red-500" />
                    <span>アクセス・所在地</span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Coordinates / Required details: Address, LINE, Hours */}
            <div className="md:col-span-4 space-y-4">
              <h4 className="font-display font-bold text-sm text-white tracking-wider uppercase border-l-2 border-red-600 pl-2.5">
                ジム情報
              </h4>
              
              <ul className="space-y-3 font-mono">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block mb-0.5 text-xs">所在地</span>
                    <span className="leading-relaxed">
                      〒561-0831 大阪府豊中市庄内東町5-7-25
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <MessageSquare className="w-4 h-4 text-[#06C755] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block mb-0.5 text-xs">公式LINE（お問い合わせ）</span>
                    <a href="https://lin.ee/OVdR12t" target="_blank" rel="noopener noreferrer" className="hover:text-[#06C755] transition-colors font-bold text-white tracking-wider text-xs">
                      友だち追加はこちら
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block mb-0.5 text-xs">MMAクラス時間 / クラス開催日</span>
                    <span>
                      19:00 〜 21:30 (毎週 月・金・土 ※土曜は不定期)
                    </span>
                  </div>
                </li>
              </ul>
            </div>

          </div>

          {/* Sub footer */}
          <div className="pt-8 border-t border-neutral-900 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500 font-mono">
            <span>
              Copyright &copy; プラマーズデン. All rights reserved.
            </span>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-red-500" />
                <span>SSL Hardened Protection</span>
              </span>
              <span>|</span>
              <span>Produced by Professional Web Designer</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
