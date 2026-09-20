/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Flame } from 'lucide-react';

interface GymLogoProps {
  className?: string;
  showText?: boolean;
}

export default function GymLogo({ className = 'w-10 h-10', showText = true }: GymLogoProps) {
  return (
    <div className="flex items-center gap-2" id="gym-logo-wrapper">
      {/* Red accent square bar instead of the incorrect graphical mark */}
      <div className="w-2.5 h-6 bg-red-600 rounded-sm" />

      {showText && (
        <div className="flex flex-col">
          <span className="font-display font-bold text-lg md:text-xl tracking-wider text-white leading-none">
            PLUMBER'S <span className="text-red-600">DEN</span>
          </span>
          <span className="text-[10px] tracking-wider text-neutral-400 block leading-tight font-bold">
            冨宅飛駈クラス
          </span>
        </div>
      )}
    </div>
  );
}
