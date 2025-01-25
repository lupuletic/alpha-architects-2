declare module 'next-themes' {
  import React from 'react';

  export interface ThemeProviderProps {
    children: React.ReactNode
    attribute?: string
    defaultTheme?: string
    enableSystem?: boolean
    enableColorScheme?: boolean
    storageKey?: string
  }

  export const ThemeProvider: React.ComponentType<ThemeProviderProps>
  export function useTheme(): {
    theme?: string
    setTheme: (theme: string) => void
    resolvedTheme?: string
    systemTheme?: string
  }
}