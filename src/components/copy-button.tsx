"use client"

import { useEffect, useState } from "react"
import { CheckIcon, ClipboardIcon } from "lucide-react"

import { cn } from "@/lib/utils"

import { Button, type ButtonProps } from "./ui/button"

interface CopyButtonProps extends ButtonProps {
  value: string
}
export function CopyButton({ value, className, ...props }: CopyButtonProps) {
  const [hasCopied, setHasCopied] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setHasCopied(false)
    }, 2000)
  }, [hasCopied])

  const handleClick = async () => {
    await navigator.clipboard.writeText(value)
    setHasCopied(true)
  }

  return (
    <Button
      size="icon"
      variant="ghost"
      className={cn(
        "size-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50 [&_svg]:size-3",
        className
      )}
      onClick={handleClick}
      {...props}
    >
      <span className="sr-only">Copy</span>
      {hasCopied ? <CheckIcon /> : <ClipboardIcon />}
    </Button>
  )
}
