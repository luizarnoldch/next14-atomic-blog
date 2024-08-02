import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "../ui/button"
import { SendIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import Instagram from "@/icons/Instagram"
import LinkedIn from "@/icons/LinkedIn"
import TikTok from "@/icons/Tiktok"
import Threads from "@/icons/Threads"

type NetworkDropDownProps = {
  className?: string
}

const socialLinks = [
  { href: "https://www.instagram.com", icon: Instagram, name: "Instagram" },
  { href: "https://www.threads.net", icon: Threads, name: "Threads" },
  { href: "https://www.tiktok.com", icon: TikTok, name: "TikTok" },
  { href: "https://www.linkedin.com", icon: LinkedIn, name: "LinkedIn" },
]

const NetworkDropDown = ({ className }: NetworkDropDownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={cn("", className)}>
        <Button asChild variant={"outline"} size={"icon"}>
          <div className="flex justify-center items-center">
            <SendIcon className="w-6 h-6 text-primary" />
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className={cn("")}>
        <DropdownMenuLabel>Redes Sociales</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {socialLinks.map((social) => (
          <DropdownMenuItem key={social.name} className="flex items-center">
            <Link href={social.href} target="_blank" className="flex items-center gap-2">
              <social.icon className="size-6 fill-white" />
              <span className="flex-grow">{social.name}</span>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default NetworkDropDown
