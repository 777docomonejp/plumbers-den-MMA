/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GYM_CLASSES } from '../data';
import { Clock, ArrowRight, BookOpen, UserCheck, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function GymClasses() {
  const activeClass = GYM_CLASSES[0];

  return (
    <section className="py-20 bg-black border-t border-neutral-900 relative" id="classes">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-widest text-red-500 uppercase block mb-2">
            SCHOOL & TRAINING CLASSES
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-black text-white mb-4">
            指導クラス案内
          </h2>
          <p className="text-sm text-neutral-400 max-w-xl mx-auto leading-relaxed">
            プラマーズデンでは、格闘技が完全に初めての方向けのレッスンを行っております。安全指導を徹底するベテランコーチが丁寧に伴走します。
          </p>
        </div>

        {/* Active Class Showcase Panel */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-neutral-900 border border-neutral-800 rounded-3xl p-6 md:p-8"
          id={`class-panel-${activeClass.id}`}
        >
          {/* Visual Column */}
          <div className="lg:col-span-5 relative group overflow-hidden rounded-2xl aspect-video lg:aspect-square bg-neutral-950 border border-neutral-800">
            <img
              src="glove.webp"
              alt="オープンフィンガーグローブ"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="px-2.5 py-1 rounded bg-red-600 text-white font-mono text-[10px] uppercase tracking-wider font-bold">
                {activeClass.englishName}
              </span>
              <h3 className="text-xl md:text-2xl font-black text-white mt-1.5">
                {activeClass.name}
              </h3>
            </div>
          </div>

          {/* Content Details Column */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-red-500 uppercase font-bold block mb-1">
                DISCIPLINE OVERVIEW
              </span>
              <p className="text-sm md:text-base text-neutral-300 leading-relaxed">
                {activeClass.description}
              </p>
            </div>

            {/* Training Features */}
            <div className="space-y-2.5">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-red-500" />
                <span>レッスンの主な特徴</span>
              </h4>
              <ul className="space-y-2">
                {activeClass.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ideal candidates */}
            <div className="space-y-2.5">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-red-500" />
                <span>こんな方におすすめ</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeClass.targetAudience.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-neutral-950 border border-neutral-800 text-[11px] font-medium text-neutral-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Time specification */}
            <div className="p-4 bg-neutral-950 rounded-xl border border-neutral-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Clock className="w-4.5 h-4.5 text-red-500" />
                <div>
                  <span className="text-[10px] text-neutral-500 block uppercase font-bold leading-none mb-1">
                    SCHEDULE / クラス開講時間
                  </span>
                  <span className="text-xs font-bold text-white">
                    {activeClass.scheduleDescription}
                  </span>
                </div>
              </div>

              <a
                href="#contact"
                className="px-4 py-2 bg-[#06C755] hover:bg-[#05b34c] text-white font-bold text-xs rounded-lg flex items-center justify-center gap-1.5 transition-colors self-start sm:self-center"
              >
                <span>LINEで体験予約（1,000円）</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
