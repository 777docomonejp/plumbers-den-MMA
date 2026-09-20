/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { FAQ_DATA } from '../data';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function GymFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-black border-t border-neutral-900 relative" id="faq">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-widest text-red-500 uppercase block mb-2">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-2xl md:text-4xl font-display font-black text-white mb-4">
            よくあるご質問 (FAQ)
          </h2>
          <p className="text-sm text-neutral-400 max-w-xl mx-auto">
            入会をご検討中の方からよくいただく質問をまとめております。その他、気になる点がございましたらお気軽にお問い合わせください。
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {FAQ_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-neutral-800 bg-neutral-900 overflow-hidden"
                id={`faq-item-${idx}`}
                style={{ contentVisibility: 'auto' }}
              >
                {/* Trigger head */}
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 text-white hover:bg-neutral-800/50 cursor-pointer transition-all"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-red-500 font-bold font-mono text-base shrink-0 mt-0.5">Q.</span>
                    <span className="text-xs md:text-sm font-bold tracking-wide">
                      {faq.q}
                    </span>
                  </div>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-red-500 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-neutral-500 shrink-0" />
                  )}
                </button>

                {/* Body dropdown */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden border-t border-neutral-800 bg-neutral-950/50"
                    >
                      <div className="p-5 text-xs md:text-sm text-neutral-400 leading-relaxed flex items-start gap-3">
                        <span className="text-white font-bold font-mono text-base shrink-0">A.</span>
                        <p className="whitespace-pre-line">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
