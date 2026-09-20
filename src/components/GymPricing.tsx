/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { MEMBERSHIP_PLANS, OPTION_SERVICES } from '../data';
import { MembershipPlan } from '../types';
import { Calculator, Check, ArrowRight, AlertTriangle, Users, Award } from 'lucide-react';

interface GymPricingProps {
  onSendConfigToForm: (configText: string, selectedServiceLabel: string) => void;
}

export default function GymPricing({ onSendConfigToForm }: GymPricingProps) {
  const [selectedPlan, setSelectedPlan] = useState<MembershipPlan>(MEMBERSHIP_PLANS[0]);
  const [isStudent, setIsStudent] = useState<boolean>(false);
  const [totalPrice, setTotalPrice] = useState<number>(MEMBERSHIP_PLANS[0].price);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  // Recalculate total monthly cost in real time based on base price (general vs student)
  useEffect(() => {
    const basePrice = isStudent ? selectedPlan.studentPrice : selectedPlan.price;
    setTotalPrice(basePrice);
  }, [selectedPlan, isStudent]);

  const handleApplyToForm = () => {
    const basePrice = isStudent ? selectedPlan.studentPrice : selectedPlan.price;
    const planUnit = selectedPlan.unit || '月額';
    
    let summaryText = `【入会・体験プランのシミュレーション】\n`;
    summaryText += `■ 希望プラン: ${selectedPlan.name} (${isStudent ? '学生・ユース' : '一般・社会人'})\n`;
    summaryText += `■ 基本料金 (${planUnit}): ¥${basePrice.toLocaleString()}\n`;
    summaryText += `--------------------------------------\n`;
    summaryText += `お見積合計金額 (${planUnit}): ¥${totalPrice.toLocaleString()} (税込)\n`;
    summaryText += `※こちらの条件で体験（1,000円）・入会のご相談を希望します。`;

    onSendConfigToForm(summaryText, `${selectedPlan.name} (${isStudent ? '学生' : '一般'})`);
    
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 4000);

    // Smooth scroll down to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-neutral-950 border-t border-neutral-900 relative" id="pricing">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-widest text-red-500 uppercase block mb-2">
            MEMBERSHIP FEES & SIMULATION
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-black text-white mb-4">
            料金プラン & シミュレーター
          </h2>
          <p className="text-sm text-neutral-400 max-w-xl mx-auto leading-relaxed">
            プラマーズデンの入会プラン。一般・学生の区分とプランを選ぶだけで、料金を簡単に確認できます。
          </p>
        </div>

        {/* 2-Column layout: Grid and Simulator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Options side */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Step 1: Member Category (General vs Student) */}
            <div>
              <span className="text-[10px] font-mono tracking-widest text-red-500 uppercase font-black block mb-3">
                STEP 1: 区分を選択（一般 / 学生）
              </span>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setIsStudent(false)}
                  className={`p-4 rounded-xl border font-bold text-xs md:text-sm tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all ${
                    !isStudent
                      ? 'border-red-600 bg-red-950/20 text-white ring-1 ring-red-500/30 font-extrabold'
                      : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white'
                  }`}
                >
                  <Users className="w-4 h-4 text-red-500" />
                  <span>一般（一般・社会人の方）</span>
                </button>
                <button
                  type="button"
                  onClick={() => setIsStudent(true)}
                  className={`p-4 rounded-xl border font-bold text-xs md:text-sm tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all ${
                    isStudent
                      ? 'border-red-600 bg-red-950/20 text-white ring-1 ring-red-500/30 font-extrabold'
                      : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white'
                  }`}
                >
                  <Award className="w-4 h-4 text-red-500" />
                  <span>学生（学生・ユース割引対象）</span>
                </button>
              </div>
            </div>

            {/* Step 2: Base Plans list */}
            <div>
              <span className="text-[10px] font-mono tracking-widest text-red-500 uppercase font-black block mb-3">
                STEP 2: 会員プランを選択
              </span>
              <div className="space-y-3">
                {MEMBERSHIP_PLANS.map((plan) => {
                  const isChecked = selectedPlan.id === plan.id;
                  const displayPrice = isStudent ? plan.studentPrice : plan.price;
                  const planUnit = plan.unit || '月額';
                  return (
                    <div
                      key={plan.id}
                      onClick={() => setSelectedPlan(plan)}
                      className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${
                        isChecked
                          ? 'border-red-600 bg-red-950/20 ring-1 ring-red-500/30'
                          : 'bg-neutral-900 border-neutral-800 hover:border-neutral-700'
                      }`}
                      id={`plan-card-${plan.id}`}
                    >
                      <div className="flex justify-between items-start gap-3 mb-1.5">
                        <h4 className="text-sm md:text-base font-bold text-white flex items-center gap-2">
                          <span className={`w-2.5 h-2.5 rounded-full ${isChecked ? 'bg-red-600' : 'bg-neutral-800'}`} />
                          {plan.name}
                        </h4>
                        <span className="text-sm font-mono font-bold text-red-500 shrink-0">
                          {planUnit} ¥{displayPrice.toLocaleString()}
                        </span>
                      </div>
                      <p className="text-xs text-neutral-400 leading-relaxed mb-2.5">
                        {plan.description}
                      </p>
                      <span className="text-[10px] bg-neutral-950 text-neutral-400 py-1 px-2.5 rounded border border-neutral-800">
                        推奨: {plan.target}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Calculator Simulator column */}
          <div className="lg:col-span-5">
            <div className="p-6 md:p-8 rounded-3xl bg-neutral-900 border border-neutral-800 relative overflow-hidden shadow-2xl sticky top-24">
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-radial from-red-600/5 to-transparent rounded-full pointer-events-none" />

              <div className="flex items-center gap-2 mb-6 border-b border-neutral-800 pb-3">
                <Calculator className="w-5 h-5 text-red-500" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                  お見積シミュレーション
                </h3>
              </div>

              {/* Recaps */}
              <div className="space-y-3.5 mb-6 text-xs border-b border-neutral-800 pb-5">
                <div className="flex justify-between items-center gap-2">
                  <span className="text-neutral-400 font-medium">区分:</span>
                  <span className="font-bold text-white">
                    {isStudent ? '学生・ユース対象' : '一般・社会人'}
                  </span>
                </div>
                <div className="flex justify-between items-center gap-2">
                  <span className="text-neutral-400 font-medium">選択プラン:</span>
                  <span className="font-bold text-white text-right">
                    {selectedPlan.name}
                  </span>
                </div>
                <div className="flex justify-between items-center pl-4 text-[11px] text-neutral-500">
                  <span>└ 基本料金 ({selectedPlan.unit || '月額'}):</span>
                  <span className="font-mono text-neutral-300">
                    ¥{(isStudent ? selectedPlan.studentPrice : selectedPlan.price).toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Total display area */}
              <div className="mb-6 bg-red-950/35 border border-red-500/20 rounded-2xl p-4 flex items-center justify-between">
                <div>
                  <span className="text-[9px] uppercase font-bold tracking-wider text-red-400 block mb-0.5">
                    お見積合計 ({selectedPlan.unit || '月額'} / 税込)
                  </span>
                  <span className="text-[10px] text-emerald-400 font-bold block">
                    ※ 入会金無料 / 体験 1,000円
                  </span>
                </div>
                <div className="flex items-baseline gap-0.5 text-right text-red-500 font-mono">
                  <span className="text-xs font-bold">¥</span>
                  <span className="text-xl md:text-3xl font-bold">{totalPrice.toLocaleString()}</span>
                </div>
              </div>

              {/* Apply conditional actions */}
              <button
                onClick={handleApplyToForm}
                className={`w-full py-3.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 cursor-pointer transition-all ${
                  isCopied
                    ? 'bg-emerald-600 text-white'
                    : 'bg-[#06C755] hover:bg-[#05b34c] text-white shadow-lg'
                }`}
                id="apply-pricing-simulation"
              >
                <span>{isCopied ? 'LINE用ボードに同期完了！' : 'この内容で公式LINEに体験予約する'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="mt-4 flex items-start gap-2 bg-neutral-950 p-3 rounded-lg border border-neutral-800/80 text-[10px] text-neutral-400 text-left">
                <AlertTriangle className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                <p className="leading-normal">
                  見学は無料、体験レッスンは1,000円です。入会金や初期費用は一切不要ですので安心してお申し込みください。
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
