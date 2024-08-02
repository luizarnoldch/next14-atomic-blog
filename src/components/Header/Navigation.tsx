"use client"

import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

type NavigationProps = {
  className?: string
}

const navigationItems = [
  { name: 'Inicio', href: '/' },
  { name: 'Servicios', href: '/servicios' },
  { name: 'CV', href: '/cv' },
  { name: 'Blog', href: '/blog' },
]

const Navigation = ({ className }: NavigationProps) => {
  const pathname = usePathname()

  return (
    <ul className={cn(`flex flex-col gap-4 md:flex-row md:justify-between md:items-center text-primary/50`, className)}>
      {navigationItems.map((item) => (
        <li key={item.name} className='w-full h-10'>
          <Button asChild variant="ghost" className={cn(`w-full`, pathname === item.href && " scale-110 text-primary/100")}>
            <Link href={item.href}>
              {item.name}
            </Link>
          </Button>
        </li>
      ))}
    </ul>
  )
}

export default Navigation