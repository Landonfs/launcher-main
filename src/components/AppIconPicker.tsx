import { useState } from 'react'
import { Icon } from './Icon'
import { APP_ICONS, chosenIcon, pickAppIcon } from '../lib/appIcon'
import type { AppIconId } from '../lib/appIcon'
import '../styles/pixel/invite.css'

/// Выбор иконки окна, панели задач и Dock. Все иконки открыты.
export function AppIconPicker() {
  const [picked, setPicked] = useState<AppIconId>(() => chosenIcon())

  const pick = (id: AppIconId) => {
    setPicked(id)
    void pickAppIcon(id)
  }

  return (
    <div className="ico-grid" role="radiogroup" aria-label="Иконка приложения">
      {APP_ICONS.map((i) => {
        const open = true
        return (
          <button
            key={i.id}
            role="radio"
            aria-checked={picked === i.id}
            data-track="icon_set"
            className={'ico-tile' + (picked === i.id ? ' on' : '')}
            onClick={() => pick(i.id)}
          >
            <span className="ico-pic" data-id={i.id}>
              <img src={i.src} alt="" draggable={false} />
              {open ? null : (
                <span className="ico-lock" aria-hidden="true">
                  <Icon id="i-lock" />
                </span>
              )}
            </span>
            <b>{i.name}</b>
            <small>
              {picked === i.id ? (
                <>
                  <Icon id="i-check" />
                  Выбрана
                </>
              ) : open ? null : (
                i.need
              )}
            </small>
          </button>
        )
      })}
    </div>
  )
}
