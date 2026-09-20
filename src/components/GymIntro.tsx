/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function GymIntro() {
  const highlights = [
    {
      title: 'ベテランコーチによる丁寧な指導',
      desc: '指導を専門とする経験豊富なベテランコーチが直接レッスンを担当。一人ひとりの体力に合わせて安全かつ論理的に指導します。'
    },
    {
      title: 'MMAクラス 19:00〜21:30 (月・金・土)',
      desc: '学校・お仕事帰りの時間帯に合わせて開講。月曜・金曜・土曜の週3回（※土曜日はジムイベント等により不定期開催）、ご自身のライフスタイルに合わせてお気軽にご参加いただけます。'
    },
    {
      title: '在籍者全員が未経験スタート',
      desc: '「格闘技ジムは怖そう…」そんな心配は無用です。在籍しているメンバー全員が未経験から始めており、アットホームで居心地の良い雰囲気が自慢です。'
    },
    {
      title: '総合格闘技（MMA）に特化',
      desc: '打撃（パンチ・キック）、テイクダウン、寝技・関節技の基本を丁寧に指導。総合格闘技の魅力をシンプルに、安全に楽しめます。'
    }
  ];

  return (
    <section className="py-20 bg-neutral-950 border-t border-neutral-900 relative overflow-hidden" id="about">
      
      {/* Dynamic Red Lights on the background margins */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 bg-red-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text / Mission Side */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold tracking-widest text-red-500 uppercase block">
              CONCEPT / INTRODUCTION
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-black text-white leading-tight">
              プラマーズデン <br />
              <span className="text-red-600">MMA Academy</span> とは
            </h2>
            
            <p className="text-sm md:text-base text-neutral-300 leading-relaxed max-w-2xl">
              『プラマーズデン』は、
              <strong>「総合格闘技を始めてみたい」「趣味として楽しく体を動かしたい」</strong>という未経験の方々のために特化したアットホームな総合格闘技ジムです。
            </p>

            <p className="text-sm text-neutral-400 leading-relaxed max-w-2xl">
              在籍者全員が未経験・完全な趣味としてスタートされています。格闘技を通じた「健康維持」「ストレス発散」「初心者同士の楽しいコミュニティ作り」を最も大切にしています。
              豊中市の天神川沿いに位置する開放的なスペースで、安全第一で怪我のない丁寧なレッスンを提供します。
            </p>

            {/* Check marks grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              <div className="flex items-center gap-2.5 text-xs text-neutral-200">
                <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                <span>豊中市・庄内駅から徒歩圏内の好アクセス</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-neutral-200">
                <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                <span>シャワー室完備（練習後もスッキリ帰宅）</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-neutral-200">
                <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                <span>鍵付き無料プライベートロッカー完備</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-neutral-200">
                <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                <span>冷暖房・更衣室・練習マット完備</span>
              </div>
            </div>
          </div>

          {/* Right Bento Box Side */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {highlights.map((h, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-5 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-red-500/30 transition-all group"
                id={`intro-highlight-${idx}`}
                style={{ contentVisibility: 'auto' }}
              >
                <div className="flex items-start gap-4">
                  <span className="w-6 h-6 rounded-full bg-red-900/20 border border-red-500/30 flex items-center justify-center text-red-500 font-mono text-xs font-bold shrink-0 mt-0.5 group-hover:bg-red-600 group-hover:text-white transition-all">
                    {idx + 1}
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1.5 group-hover:text-red-500 transition-colors">
                      {h.title}
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {h.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
