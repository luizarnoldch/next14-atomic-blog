"use client"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react"
import { Button } from "../ui/button"
import { ReactNode } from "react"
import Instagram from "@/icons/Instagram"
import LinkedIn from "@/icons/LinkedIn"
import TikTok from "@/icons/Tiktok"
import Threads from "@/icons/Threads"
import Link from "next/link"

type MobileToggleProps = {
  children: ReactNode
}

const socialLinks = [
  { href: "https://www.instagram.com", icon: Instagram, name: "Instagram" },
  { href: "https://www.threads.net", icon: Threads, name: "Threads" },
  { href: "https://www.tiktok.com", icon: TikTok, name: "TikTok" },
  { href: "https://www.linkedin.com", icon: LinkedIn, name: "LinkedIn" },
]

const MobileToggle = ({ children }: MobileToggleProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden z-30">
        <Button className="" variant="outline" size="icon">
          <MenuIcon className="size-6 text-primary" />
        </Button>
      </SheetTrigger>
      <SheetContent className="">
        <SheetHeader className="">
          <SheetTitle>Explora Nuestro Sitio</SheetTitle>
          <SheetDescription className="">
            Encuentra lo que más te interesa
          </SheetDescription>
          {children}
        </SheetHeader>
        <SheetFooter>
          <ul className="flex justify-around w-full mt-6">
            {socialLinks.map((social) => (
              <li key={social.name}>
                <Button asChild size="icon" variant="ghost">
                  <Link href={social.href} target="_blank">
                    <social.icon className="size-6 fill-primary"/>
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export default MobileToggle
