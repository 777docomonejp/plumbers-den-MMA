/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { MessageSquare, Copy, Check, ArrowRight, ShieldCheck, QrCode, Sparkles, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface GymContactProps {
  prepopulatedMessage: string;
  prepopulatedPlanLabel: string;
  onClearPrepopulated: () => void;
}

export default function GymContact({
  prepopulatedMessage,
  prepopulatedPlanLabel,
  onClearPrepopulated
}: GymContactProps) {
  const [name, setName] = useState('');
  const [isStudent, setIsStudent] = useState(false);
  const [preferredDate, setPreferredDate] = useState('');
  const [customMsg, setCustomMsg] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  // Sync with simulator prepopulated messages
  useEffect(() => {
    if (prepopulatedMessage) {
      // Parse or simply append to custom message
      setCustomMsg(prepopulatedMessage);
    }
  }, [prepopulatedMessage]);

  // Construct the message block that will be copied to LINE
  const generateLineMessage = () => {
    let text = `【プラマーズデン 体験・お問い合わせ】\n`;
    text += `■ お名前: ${name || '（未入力）'}\n`;
    text += `■ 区分: ${isStudent ? '学生' : '一般・社会人'}\n`;
    text += `■ 希望日時: ${preferredDate || '（未指定 / LINEで相談希望）'}\n`;
    
    if (customMsg) {
      text += `--------------------------------------\n`;
      text += `${customMsg}\n`;
    } else {
      text += `--------------------------------------\n`;
      text += `総合格闘技（MMA）の体験（1,000円）または見学を希望します。よろしくお願いします！\n`;
    }
    
    return text;
  };

  const handleCopyAndOpenLine = async () => {
    const fullMessage = generateLineMessage();
    
    try {
      await navigator.clipboard.writeText(fullMessage);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }

    // Open LINE in a new tab
    window.open('https://lin.ee/OVdR12t', '_blank', 'noopener,noreferrer');
    
    // Clear prepopulated state
    onClearPrepopulated();
  };

  return (
    <section className="py-20 bg-black border-t border-neutral-900 relative" id="contact">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-widest text-[#06C755] uppercase block mb-2">
            LINE RESERVATION & CONTACT
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-black text-white mb-4">
            体験予約・お問い合わせ
          </h2>
          <p className="text-sm text-neutral-400 max-w-xl mx-auto leading-relaxed">
            ご予約やご質問は、公式LINEより24時間いつでもお気軽にお送りください！
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Interactive Message Composer Board */}
          <div className="lg:col-span-7 bg-neutral-900/80 border border-neutral-800 rounded-3xl p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-5 h-5 text-[#06C755]" />
                <h3 className="text-lg font-bold text-white">
                  LINE送信用メッセージ作成ボード
                </h3>
              </div>
              
              <p className="text-xs text-neutral-400 mb-6 leading-relaxed">
                以下の簡単な項目を入力すると、LINEでそのまま送信できるメッセージを自動生成します。コピーしてLINEに貼り付けるだけで、スムーズにお申し込みいただけます。
              </p>

              {/* Form elements */}
              <div className="space-y-4 mb-6 text-left">
                {/* Name */}
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-1.5">
                    お名前
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="例: 豊中 太郎"
                    className="w-full px-4 py-3 text-xs md:text-sm rounded-xl border border-neutral-800 bg-neutral-950 text-white focus:ring-1 focus:ring-[#06C755] focus:outline-none transition-all"
                  />
                </div>

                {/* Division (Toggle) */}
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-1.5">
                    区分
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setIsStudent(false)}
                      className={`py-2.5 rounded-xl font-bold text-xs tracking-wider border cursor-pointer transition-all ${
                        !isStudent
                          ? 'bg-red-950/20 border-red-500/50 text-white shadow-md'
                          : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:text-white'
                      }`}
                    >
                      一般・社会人
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsStudent(true)}
                      className={`py-2.5 rounded-xl font-bold text-xs tracking-wider border cursor-pointer transition-all ${
                        isStudent
                          ? 'bg-red-950/20 border-red-500/50 text-white shadow-md'
                          : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:text-white'
                      }`}
                    >
                      学生・ユース
                    </button>
                  </div>
                </div>

                {/* Preferred Date */}
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-1.5">
                    体験希望日時（※体験希望の方のみ）
                  </label>
                  <input
                    type="text"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    placeholder="例: 月曜日の19時、不定期の土曜希望など"
                    className="w-full px-4 py-3 text-xs md:text-sm rounded-xl border border-neutral-800 bg-neutral-950 text-white focus:ring-1 focus:ring-[#06C755] focus:outline-none transition-all"
                  />
                </div>

                {/* Custom/Prepopulated Message */}
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-1.5">
                    メッセージ内容（質問・シミュレーション結果等）
                  </label>
                  <textarea
                    value={customMsg}
                    onChange={(e) => setCustomMsg(e.target.value)}
                    rows={4}
                    placeholder="シミュレーターで「この見積内容でお問い合わせする」を押すと、ここに結果が自動同期されます。ご質問なども自由に追記してください。"
                    className="w-full p-4 text-xs md:text-sm rounded-xl border border-neutral-800 bg-neutral-950 text-white focus:ring-1 focus:ring-[#06C755] focus:outline-none resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Generated Message Preview Block & Send CTA */}
            <div className="space-y-4">
              <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase font-bold block mb-1 text-left">
                MESSAGE PREVIEW / 送信メッセージのプレビュー
              </span>
              <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-left text-xs text-neutral-300 font-mono whitespace-pre-wrap leading-relaxed max-h-[140px] overflow-y-auto">
                {generateLineMessage()}
              </div>

              {/* Main Submit to LINE CTA Button */}
              <button
                onClick={handleCopyAndOpenLine}
                className={`w-full py-4 px-6 rounded-xl font-bold tracking-wider flex items-center justify-center gap-2.5 transition-all shadow-lg text-white text-sm md:text-base cursor-pointer ${
                  isCopied
                    ? 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-950/20'
                    : 'bg-[#06C755] hover:bg-[#05b34c] shadow-[0_4px_25px_rgba(6,199,85,0.25)] hover:scale-[1.01]'
                }`}
              >
                {isCopied ? (
                  <>
                    <Check className="w-5 h-5" />
                    <span>メッセージをコピーしました！LINEへ進みます</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 fill-current" />
                    <span>メッセージをコピーして公式LINEを開く</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Prominent QR Code Block */}
          <div className="lg:col-span-5 bg-neutral-900 border border-neutral-800 rounded-3xl p-6 md:p-8 flex flex-col justify-between items-center text-center relative overflow-hidden">
            
            <div className="absolute top-0 right-0 w-32 h-32 bg-radial from-[#06C755]/5 to-transparent rounded-full pointer-events-none" />

            <div className="space-y-4 w-full">
              <span className="text-xs font-bold tracking-widest text-[#06C755] uppercase block">
                QR CODE REGISTRATION
              </span>
              <h3 className="text-lg font-bold text-white leading-tight">
                QRコードで友だち追加
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed max-w-xs mx-auto">
                スマートフォンのカメラで以下のQRコードをスキャンするか、画像をタップして簡単にご登録いただけます。
              </p>
            </div>

            {/* Highly Polished Scanner Frame Area */}
            <div className="my-8 relative group cursor-pointer">
              {/* Outer pulsing scanning rings */}
              <div className="absolute -inset-1.5 rounded-2xl border border-[#06C755]/40 animate-pulse" />
              <div className="absolute -inset-4 rounded-3xl border border-[#06C755]/10" />

              <a href="https://lin.ee/OVdR12t" target="_blank" rel="noopener noreferrer" className="block relative bg-white p-3.5 rounded-2xl shadow-2xl">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNyAyNyIgc2hhcGUtcmVuZGVyaW5nPSJjcmlzcEVkZ2VzIj48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMCAwaDI3djI3SDB6Ii8+PHBhdGggc3Ryb2tlPSIjMTExMTExIiBkPSJNMSAxLjVoN200IDBoMm0zIDBoMW0xIDBoN00xIDIuNWgxbTUgMGgxbTIgMGgzbTIgMGgybTIgMGgxbTUgMGgxTTEgMy41aDFtMSAwaDNtMSAwaDFtMSAwaDFtMSAwaDNtMyAwaDFtMSAwaDFtMSAwaDNtMSAwaDFNMSA0LjVoMW0xIDBoM20xIDBoMW0xIDBoMW0xIDBoMW0zIDBoM20xIDBoMW0xIDBoM20xIDBoMU0xIDUuNWgxbTEgMGgzbTEgMGgxbTEgMGgzbTMgMGgzbTEgMGgxbTEgMGgzbTEgMGgxTTEgNi41aDFtNSAwaDFtMSAwaDJtMSAwaDFtMSAwaDFtMSAwaDJtMSAwaDFtNSAwaDFNMSA3LjVoN20xIDBoMW0xIDBoMW0xIDBoMW0xIDBoMW0xIDBoMW0xIDBoN005IDguNWgzbTEgMGgxbTMgMGgxTTEgOS41aDFtMSAwaDVtMiAwaDNtMSAwaDFtNCAwaDVNMiAxMC41aDJtNSAwaDFtMSAwaDFtMSAwaDFtMSAwaDNtMiAwaDFtMyAwaDFNNCAxMS41aDFtMiAwaDFtMSAwaDFtMyAwaDFtMiAwaDJtNCAwaDFtMSAwaDJNMSAxMi41aDFtMSAwaDJtNCAwaDJtMSAwaDJtMSAwaDFtMSAwaDVtMyAwaDFNMSAxMy41aDFtMSAwaDltMiAwaDFtMyAwaDJtMSAwaDFtMSAwaDNNMSAxNC41aDNtNCAwaDFtMiAwaDFtMSAwaDFtMSAwaDFtNCAwaDFtMSAwaDFtMSAwaDFNMSAxNS41aDFtMyAwaDNtMyAwaDFtMiAwaDFtMSAwaDNtMSAwaDNtMSAwaDJNMSAxNi41aDFtNiAwaDJtMSAwaDFtMSAwaDFtMiAwaDJtMiAwaDJtMyAwaDFNMSAxNy41aDFtMyAwaDNtMiAwaDJtMSAwaDltMSAwaDFNOSAxOC41aDFtNSAwaDNtMyAwaDJNMSAxOS41aDdtNCAwaDJtMSAwaDFtMSAwaDFtMSAwaDFtMSAwaDFtMSAwaDNNMSAyMC41aDFtNSAwaDFtMSAwaDFtMSAwaDJtNCAwaDFtMyAwaDJNMSAyMS41aDFtMSAwaDNtMSAwaDFtMSAwaDJtMSAwaDFtMyAwaDZtMSAwaDNNMSAyMi41aDFtMSAwaDNtMSAwaDFtMSAwaDJtMiAwaDJtNCAwaDFtMSAwaDVNMSAyMy41aDFtMSAwaDNtMSAwaDFtMSAwaDFtNCAwaDJtNiAwaDJtMSAwaDFNMSAyNC41aDFtNSAwaDFtMyAwaDFtMSAwaDJtMSAwaDNtMSAwaDNtMiAwaDFNMSAyNS41aDdtMSAwaDNtMSAwaDFtMSAwaDFtNCAwaDYiLz48L3N2Zz4K"
                  alt="Official LINE QR Code"
                  className="w-48 h-48 md:w-56 md:h-56 object-contain"
                />
              </a>

              {/* LINE Label */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#06C755] text-white font-mono text-[10px] font-black uppercase py-1 px-3 rounded-full border border-emerald-400 tracking-widest shadow-md">
                https://lin.ee/OVdR12t
              </div>
            </div>

            {/* Feature lists for high trust */}
            <div className="w-full border-t border-neutral-800 pt-6 space-y-3 text-xs text-neutral-300 text-left font-sans">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4.5 h-4.5 text-[#06C755] shrink-0" />
                <span>見学や体験予約はLINE内のチャットで完結</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4.5 h-4.5 text-[#06C755] shrink-0" />
                <span>登録後のしつこいセールス・勧誘は一切ありません</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4.5 h-4.5 text-[#06C755] shrink-0" />
                <span>入会に関するちょっとしたご相談だけでも歓迎です</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
