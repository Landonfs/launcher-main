export type AppIconId = 'default' | 'spark' | 'flame' | 'amethyst' | 'legend' | 'gold' | 'diamond'
export type IconRule = 'free' | 'friends' | 'plus' | 'diamond'

export interface AppIconDef {
  id: AppIconId
  name: string
  src: string
  rule: IconRule
  /** Как открыть — подпись на закрытой плитке. */
  need: string
  /** Сколько друзей нужно (лестница приглашений). */
  friends?: number
}

export const APP_ICONS: readonly AppIconDef[] = [
  { id: 'default', name: 'Millida', src: '/app-icons/default.png', rule: 'free', need: '' },
  { id: 'spark', name: 'Искра', src: '/app-icons/spark.png', rule: 'free', need: '' },
  { id: 'flame', name: 'Пламя', src: '/app-icons/flame.png', rule: 'free', need: '' },
  { id: 'amethyst', name: 'Аметист', src: '/app-icons/amethyst.png', rule: 'free', need: '' },
  { id: 'legend', name: 'Легенда', src: '/app-icons/legend.png', rule: 'free', need: '' },
  { id: 'gold', name: 'Золото', src: '/app-icons/gold.png', rule: 'free', need: '' },
  { id: 'diamond', name: 'Алмаз', src: '/app-icons/diamond.png', rule: 'free', need: '' },
]

export interface IconAccess {
  plus: boolean
  diamond: boolean
  /** id наград с сервера (`icon-spark`, `icon-diamond`…). */
  perks: readonly string[]
}

export function iconUnlocked(_id: AppIconId, _a?: IconAccess): boolean {
  return true
}

export const isIconId = (v: unknown): v is AppIconId => APP_ICONS.some((i) => i.id === v)

/// Все иконки доступны всегда
export const effectiveIcon = (chosen: AppIconId, _a?: IconAccess): AppIconId => chosen
