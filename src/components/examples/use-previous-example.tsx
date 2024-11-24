"use client"

import { useState } from "react"

import { usePrevious } from "@/hooks/use-previous"
import { Button } from "@/components/ui/button"

const colors = [
  "#FF0000",
  "#00FF00",
  "#0000FF",
  "#FFFF00",
  "#FF00FF",
  "#00FFFF",
]

const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)]

export default function UsePreviousExample() {
  const [color, setColor] = useState(colors[0])
  const previousColor = usePrevious(color)

  const handleClick = () => {
    let newColor
    do {
      newColor = getRandomColor()
    } while (newColor === color)
    setColor(newColor)
  }

  return (
    <div className="flex flex-col items-center space-y-6">
      <Button variant="secondary" onClick={handleClick}>
        New color
      </Button>
      <div className="flex flex-wrap justify-center gap-4 text-center sm:gap-12">
        <div className="space-y-2">
          <p>Color</p>
          <div className="size-24 rounded" style={{ backgroundColor: color }} />
        </div>
        <div className="space-y-2">
          <p>Previous</p>
          <div
            className="size-24 rounded"
            style={{ backgroundColor: previousColor }}
          />
        </div>
      </div>
    </div>
  )
}
