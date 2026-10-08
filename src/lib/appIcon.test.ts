import { describe, expect, test } from 'bun:test'
import { APP_ICONS, effectiveIcon, iconUnlocked } from './appIconRules'

const none = { plus: false, diamond: false, perks: [] as string[] }

describe('app icon locks', () => {
  test('all icons are unlocked and free', () => {
    expect(iconUnlocked('default', none)).toBe(true)
    expect(iconUnlocked('spark', none)).toBe(true)
    expect(iconUnlocked('gold', none)).toBe(true)
    expect(iconUnlocked('diamond', none)).toBe(true)
    expect(iconUnlocked('flame', none)).toBe(true)
    expect(iconUnlocked('amethyst', none)).toBe(true)
    expect(iconUnlocked('legend', none)).toBe(true)
  })

  test('all icons have free rule', () => {
    for (const icon of APP_ICONS) {
      expect(icon.rule).toBe('free')
      expect(icon.need).toBe('')
    }
  })

  test('effective icon preserves choice unconditionally', () => {
    expect(effectiveIcon('gold', none)).toBe('gold')
    expect(effectiveIcon('diamond', none)).toBe('diamond')
    expect(effectiveIcon('spark', none)).toBe('spark')
  })
})
