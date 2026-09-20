/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface GymClass {
  id: string;
  name: string;
  englishName: string;
  description: string;
  features: string[];
  scheduleDescription: string;
  targetAudience: string[];
}

export interface MembershipPlan {
  id: string;
  name: string;
  price: number;
  studentPrice: number;
  description: string;
  target: string;
  unit?: string;
}

export interface OptionService {
  id: string;
  name: string;
  price: number;
  description: string;
}

export interface TrialBooking {
  id: string;
  name: string;
  email: string;
  phone: string;
  classType: string;
  preferredDate: string;
  message: string;
  timestamp: string;
  status: 'pending' | 'confirmed';
}
