import { create } from 'zustand'
import type { ShopTier } from '../lib/rubies'

interface PlusState {
  /** Уровень подписки: гардероб и магазин пишут цены «С PLUS» и скидку по нему. */
  tier: ShopTier
  setTier: (tier: ShopTier) => void
  active: boolean
  diamond: boolean
  setActive: (active: boolean) => void
  load: () => Promise<void>
}

let seq = 0

export const usePlus = create<PlusState>((set) => ({
  tier: 'DIAMOND',
  setTier: (tier) => set({ tier, active: tier !== null, diamond: tier === 'DIAMOND' }),
  active: true,
  diamond: true,
  setActive: (active) => {
    seq++
    set((s) => ({ active, tier: active ? s.tier ?? 'DIAMOND' : null, diamond: active ? s.diamond : false }))
  },
  load: async () => {
    set({
      active: true,
      tier: 'DIAMOND',
      diamond: true,
    })
  },
}))
