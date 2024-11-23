import fs from "fs/promises"
import path from "path"
import { notFound } from "next/navigation"

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

export default async function HookPage({
  params,
}: {
  params: Promise<{ hookName: string }>
}) {
  const { hookName } = await params
  const hook = hooksConfig.find((hook) => hook.name === hookName)
  if (!hook) notFound()

  const code = await fs.readFile(
    path.join(process.cwd(), "src", "hooks", `${hook.fileName}.ts`),
    "utf-8"
  )

  const jsCode = await compileCode(code)

  return (
    <div className="space-y-6">
      {hook.name}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>1</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>2</TableCell>
            <TableCell>3</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <ExampleComponent name={hook.fileName} />
      <section className="space-y-4">
        <h3 className="border-b pb-2 text-2xl font-semibold tracking-tight">
          Installation
        </h3>
        <Tabs defaultValue="manual-ts">
          <TabsList>
            <TabsTrigger value="manual-ts">
              <img
                src="typescript.svg"
                alt="typescript"
                className="mr-1 size-5"
              />
              Manual
            </TabsTrigger>
            <TabsTrigger value="manual-js">
              <img
                src="javascript.svg"
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
