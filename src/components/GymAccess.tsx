/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MapPin, Clock, Compass, Train, Car, MessageSquare } from 'lucide-react';

export default function GymAccess() {
  const mapUrl = "https://maps.google.com/maps?q=大阪府豊中市庄内東町5-7-25&t=&z=16&ie=UTF8&iwloc=";

  return (
    <section className="py-20 bg-neutral-950 border-t border-neutral-900 relative" id="access">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-widest text-red-500 uppercase block mb-2">
            LOCATION & ACCESS
          </span>
          <h2 className="text-2xl md:text-4xl font-display font-black text-white mb-4">
            アクセス・所在地
          </h2>
          <p className="text-sm text-neutral-400 max-w-xl mx-auto">
            プラマーズデン MMA Academyは阪急宝塚線「庄内駅」から徒歩圏内。天神川の爽やかな風が吹く環境に位置しています。
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Information block */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              
              {/* Card info */}
              <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-4">
                <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-neutral-800 pb-2.5">
                  <Compass className="w-5 h-5 text-red-500" />
                  <span>プラマーズデン MMA Academy</span>
                </h3>

                <div className="space-y-4 text-xs md:text-sm text-neutral-300">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4.5 h-4.5 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] text-neutral-500 block uppercase font-bold leading-none mb-1">住所</span>
                      <span className="text-white leading-relaxed">
                        〒561-0831<br />
                        大阪府豊中市庄内東町5-7-25
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MessageSquare className="w-4.5 h-4.5 text-[#06C755] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] text-neutral-500 block uppercase font-bold leading-none mb-1">公式LINE</span>
                      <a href="https://lin.ee/OVdR12t" target="_blank" rel="noopener noreferrer" className="text-[#06C755] hover:underline font-bold transition-colors">
                        友だち追加・チャット問い合わせ
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4.5 h-4.5 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] text-neutral-500 block uppercase font-bold leading-none mb-1">MMAクラス時間 / クラス開催日</span>
                      <span className="text-white">
                        19:30 〜 21:30 <span className="text-red-500 font-bold">（毎週 月・金・土 ※土曜は不定期）</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Travel guidelines */}
              <div className="space-y-3.5">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                  交通手段ガイド
                </h4>

                <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 flex items-start gap-3 text-xs text-neutral-400">
                  <Train className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block mb-0.5">電車でお越しの方</span>
                    <p className="leading-relaxed">
                      阪急宝塚線<strong>「庄内駅」東口</strong>から徒歩約10分。天神川東側川沿いのビル1階にございます。
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 flex items-start gap-3 text-xs text-neutral-400">
                  <Car className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block mb-0.5">お車・自転車でお越しの方</span>
                    <p className="leading-relaxed">
                      無料駐車場を完備しております。駐輪スペースもございますので、お車や自転車、バイクでも安心してお越しいただけます。
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Subtle banner call */}
            <div className="p-4 rounded-xl bg-red-950/25 border border-red-500/10 text-xs text-neutral-400 leading-relaxed">
              ※道順がわからない場合は、<strong>公式LINEのトーク</strong>からお気軽にお問い合わせください。スタッフがご案内いたします。
            </div>
          </div>

          {/* Map link column (static card, opens Google Maps externally) */}
          <div className="lg:col-span-7 min-h-[350px] rounded-3xl overflow-hidden border border-neutral-800 relative shadow-2xl bg-gradient-to-br from-neutral-900 to-black flex flex-col items-center justify-center gap-6 p-10 text-center">
            <MapPin className="w-12 h-12 text-red-500" />
            <div className="space-y-2">
              <p className="text-white font-bold text-lg">〒561-0831 大阪府豊中市庄内東町5-7-25</p>
              <p className="text-neutral-400 text-sm">阪急宝塚線「庄内駅」から徒歩圏内</p>
            </div>
            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-500 text-white text-sm font-bold rounded-xl tracking-wider transition-colors cursor-pointer"
            >
              <Compass className="w-4 h-4" />
              Google マップで見る
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
