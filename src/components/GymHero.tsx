/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Calendar, Users, ArrowRight, Shield, Flame, QrCode, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

interface GymHeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function GymHero({ onNavigate }: GymHeroProps) {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center bg-black overflow-hidden py-16 px-4 md:py-24" id="hero">
      
      {/* Background Grid Pattern & Intense Radial Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:40px_40px] opacity-45" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/10 left-10 w-[300px] h-[300px] bg-red-900/15 blur-[100px] rounded-full pointer-events-none" />

      {/* Hero Content Container */}
      <div className="max-w-5xl mx-auto text-center relative z-10 w-full flex flex-col items-center">
        
        {/* Entrance badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/20 bg-red-950/20 text-red-500 font-mono text-xs font-bold uppercase tracking-wider mb-8"
        >
          <Flame className="w-3.5 h-3.5 animate-pulse text-red-500" />
          <span>PLUMBER'S DEN MMA ACADEMY</span>
        </motion.div>

        {/* Catchphrases */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-7xl font-display font-extrabold text-white tracking-tight leading-none mb-6"
        >
          総合格闘技を<span className="text-red-600">始めたい人</span>へ。
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-2xl font-sans text-neutral-300 font-medium tracking-wide mb-10 max-w-2xl"
        >
          初心者歓迎・見学・体験受付中（体験 1,000円 / 入会金なし）
        </motion.p>

        {/* Hero CTA Button - LINE Main Focus */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 mb-16 w-full max-w-md justify-center"
        >
          <a
            href="https://lin.ee/OVdR12t"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#06C755] hover:bg-[#05b34c] text-white font-bold rounded-xl text-base tracking-wider flex items-center justify-center gap-2.5 transition-all shadow-[0_4px_20px_rgba(6,199,85,0.3)] hover:scale-[1.02] cursor-pointer"
            id="hero-line-btn"
          >
            <MessageSquare className="w-5 h-5 fill-current" />
            <span>公式LINEで体験予約（1,000円）</span>
            <ArrowRight className="w-5 h-5" />
          </a>

          <button
            onClick={() => onNavigate('pricing')}
            className="px-8 py-4 bg-neutral-950 hover:bg-neutral-900 text-white border border-neutral-800 font-bold rounded-xl text-base tracking-wider flex items-center justify-center gap-2.5 transition-all cursor-pointer"
            id="hero-pricing-btn"
          >
            <span>料金プランを見る</span>
          </button>
        </motion.div>

        {/* Reconstructed Physical Signboard Banner (Modified for LINE focus and no website/phone/email) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="w-full max-w-4xl bg-neutral-900/95 border border-neutral-800 rounded-2xl p-6 md:p-8 text-left relative overflow-hidden shadow-2xl"
          id="reconstructed-signboard"
        >
          {/* Accent red corner bars */}
          <div className="absolute top-0 left-0 w-2 h-full bg-red-600" />
          <div className="absolute top-0 right-0 w-32 h-32 bg-radial from-red-600/5 to-transparent rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Logo and brand area */}
            <div className="md:col-span-5 flex items-center gap-4 md:border-r md:border-neutral-800 md:pr-6">
              <div className="w-1.5 h-12 bg-red-600 rounded-sm shrink-0" />
              <div className="text-left">
                <span className="text-[10px] font-mono tracking-widest text-red-500 font-bold block uppercase">
                  TOYONAKA SHONAI GYM
                </span>
                <h4 className="font-display font-black text-2xl text-white tracking-wider leading-none">
                  PLUMBER'S DEN
                </h4>
                <span className="text-[9px] font-mono text-neutral-400 block tracking-widest leading-none mt-1">
                  MMA ACADEMY
                </span>
              </div>
            </div>

            {/* Content area: QR Code and LINE instructions */}
            <div className="md:col-span-7 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-3 font-sans text-neutral-300 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#06C755]" />
                  <span className="text-white font-bold">お問い合わせは公式LINEへ統合</span>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
                  見学・体験予約・ご質問等はすべて公式LINEにて24時間受け付けております。右記のQRコードをスキャンするか、タップして友だち追加を行ってください。
                </p>
                <div className="pt-1">
                  <a 
                    href="https://lin.ee/OVdR12t" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs text-[#06C755] font-mono hover:underline font-bold flex items-center gap-1.5"
                  >
                    <span>URL: https://lin.ee/OVdR12t</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* LINE QR Code block */}
              <div className="flex flex-col items-center gap-1.5 shrink-0 bg-neutral-950 p-3.5 rounded-xl border border-neutral-800">
                <div className="relative w-28 h-28 bg-white p-1 rounded-lg flex items-center justify-center">
                  <img 
                    src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https%3A%2F%2Flin.ee%2FOVdR12t" 
                    alt="LINE QR Code" 
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle scan corners */}
                  <div className="absolute inset-0 border-2 border-transparent pointer-events-none rounded-lg" />
                </div>
                <span className="text-[9px] font-mono text-[#06C755] uppercase font-bold tracking-wider">
                  LINE SCAN TO ADD
                </span>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Bottom Feature Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mt-16 text-left">
          
          <div className="p-5 rounded-xl bg-neutral-900/60 border border-neutral-800 flex items-start gap-4" style={{ contentVisibility: 'auto' }}>
            <div className="p-3 bg-red-600/10 rounded-lg text-red-500 shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-sm font-bold text-white mb-1">全員が未経験スタート</h5>
              <p className="text-xs text-neutral-400 leading-relaxed">
                在籍メンバー全員が未経験から格闘技を始めています。経験豊富なベテランコーチが親身に伴走します。
              </p>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-neutral-900/60 border border-neutral-800 flex items-start gap-4" style={{ contentVisibility: 'auto' }}>
            <div className="p-3 bg-red-600/10 rounded-lg text-red-500 shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-sm font-bold text-white mb-1">MMAクラス：19:00 〜 21:30 (月・金・土)</h5>
              <p className="text-xs text-neutral-400 leading-relaxed">
                仕事や学校帰りの時間帯に開催（※土曜日はジムイベント等により不定期開催）。ご都合に合わせてご参加いただけます。
              </p>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-neutral-900/60 border border-neutral-800 flex items-start gap-4" style={{ contentVisibility: 'auto' }}>
            <div className="p-3 bg-red-600/10 rounded-lg text-red-500 shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-sm font-bold text-white mb-1">シャワー・無料ロッカー完備</h5>
              <p className="text-xs text-neutral-400 leading-relaxed">
                汗を流せる個室シャワールームと無料のプライベート保管ロッカーを完備。手ぶらで身軽に通い続けられるのが特徴です。
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
