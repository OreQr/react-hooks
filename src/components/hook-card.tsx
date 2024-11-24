import Link from "next/link"
import { MoveRightIcon } from "lucide-react"

import { type Hook } from "@/types/hooks"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function HookCard({ hook }: { hook: Hook }) {
  return (
    <Link href={"/hook/" + hook.name}>
      <Card className="group transition-shadow duration-300 hover:shadow-lg">
        <CardHeader className="pb-2">
          <CardTitle className="text-primary">{hook.name}</CardTitle>
          <CardDescription className="text-justify">
            {hook.description}
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <MoveRightIcon className="text-foreground transition-all duration-300 ease-in-out group-hover:translate-x-2" />
        </CardFooter>
      </Card>
    </Link>
  )
}
