"use client"

import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from "next-themes"

type Props = {}

const ThemeButton: React.FC<Props> = (props: Props) => {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  if (!mounted) {
    return <Button variant="outline" size="icon">
      {theme === "light" ? (
        <SunIcon className="size-6 text-primary" />
      ) : (
        <MoonIcon className="size-6 text-primary" />
      )}
    </Button>
  }

  return (
    <Button className="" variant="outline" size="icon" onClick={toggleTheme}>
      {theme === "light" ? (
        <SunIcon className="size-6 text-primary" />
      ) : (
        <MoonIcon className="size-6 text-primary" />
      )}
    </Button>
  )
}

export default ThemeButton
