import * as React from 'react'

import { Link } from 'gatsby'
import { DarkToggle } from './DarkToggle'

export const NavigationBar = () => {
  return (
    <div className="fixed top-0 z-50 flex w-full justify-between p-4  shadow-md backdrop-blur-lg">
      <div>
        <Link
          className="px-2 font-mono text-xl font-black text-white hover:shadow-none"
          to={'/'}
          style={{ textShadow: '-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black' }}
        >
          Cartoon Street
        </Link>

        <Link
          className="px-2 font-mono text-xl font-black text-white hover:shadow-none"
          to={'/the-simpsons'}
          style={{ textShadow: '-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black' }}
        >
          ザ・シンプソンズ
        </Link>
      </div>
      <DarkToggle />
    </div>
  )
}
