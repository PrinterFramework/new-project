'use client'
import type { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { reduxStore } from '@redux/store'

export interface ReduxProviderI {
  children: ReactNode
}

export function ReduxProvider({ children }: ReduxProviderI) {
  return <Provider store={reduxStore}>{children}</Provider>
}
