import React, { ReactNode } from 'react'

export default function layout({children}: {children: ReactNode}) {
  return (
    <div>
        {children}
        <p>Painel Administrativo</p>
    </div>
  )
}
