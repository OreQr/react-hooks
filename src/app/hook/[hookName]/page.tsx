import fs from "fs/promises"
import path from "path"
import { cache } from "react"
import { type Metadata } from "next"
import { notFound } from "next/navigation"

import { type HookItem } from "@/types/hooks"
import { hooksConfig } from "@/config/hooks"
import { compileCode } from "@/lib/transform"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeBlock } from "@/components/code-block"
import { ExampleComponent } from "@/components/example-component"

export function generateStaticParams() {
  return hooksConfig.map((hook) => ({
    hookName: hook.name,
  }))
}

interface Props {
  params: Promise<{ hookName: string }>
}

const getHook = cache((hookName: string) => {
  const hook = hooksConfig.find((hook) => hook.name === hookName)
  if (!hook) notFound()

  return hook
})

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const hook = getHook((await params).hookName)

  return {
    title: hook.name,
    description: hook.description,
  }
}

export default async function HookPage({ params }: Props) {
  const hook = getHook((await params).hookName)

  const code = await fs.readFile(
    path.join(process.cwd(), "src", "hooks", `${hook.fileName}.ts`),
    "utf-8"
  )
  const jsCode = await compileCode(code)

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">{hook.name}</h1>
        <p className="text text-justify text-muted-foreground">
          {hook.description}
        </p>
      </header>
      <ExampleComponent name={hook.fileName} />
      <section className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold tracking-tight">Parameters</h3>
          <ItemsTable items={hook.parameters} />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold tracking-tight">Return value</h3>
          <ItemsTable items={hook.returnValue} />
        </div>
      </section>
      <section className="space-y-4">
        <h3 className="border-b pb-2 text-2xl font-semibold tracking-tight">
          Installation
        </h3>
        <Tabs defaultValue="manual-ts">
          <TabsList>
            <TabsTrigger value="manual-ts">
              <img
                src="/typescript.svg"
                alt="typescript"
                className="mr-1 size-5"
              />
              Manual
            </TabsTrigger>
            <TabsTrigger value="manual-js">
              <img
                src="/javascript.svg"
                alt="javascript"
                className="mr-1 size-5"
              />
              Manual
            </TabsTrigger>
          </TabsList>
          <TabsContent value="manual-ts">
            <CodeBlock code={code} lang="tsx" />
          </TabsContent>
          <TabsContent value="manual-js">
            <CodeBlock code={jsCode} lang="jsx" />
          </TabsContent>
        </Tabs>
      </section>
    </div>
  )
}

export function ItemsTable({ items }: { items: HookItem[] }) {
  return (
    <Table>
      <TableHeader className="font-mono">
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Description</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.type}</TableCell>
            <TableCell>{item.description}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
