import fs from "fs/promises"
import path from "path"

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { CodeBlock } from "./code-block"

export async function ExampleComponent({ name }: { name: string }) {
  const Component = (
    (await import(`@/components/examples/${name}-example`)) as {
      default: React.ComponentType
    }
  ).default
  const code = await fs.readFile(
    path.join(
      process.cwd(),
      "src",
      "components",
      "examples",
      `${name}-example.tsx`
    ),
    "utf-8"
  )

  return (
    <Tabs defaultValue="example">
      <TabsList>
        <TabsTrigger value="example">Example</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
      </TabsList>
      <TabsContent
        forceMount
        value="example"
        className="data-[state=inactive]:hidden"
      >
        <ScrollArea className="w-full rounded-lg border">
          <div className="max-h-[400px] p-4 px-2 sm:px-4 md:p-6">
            <Component />
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </TabsContent>
      <TabsContent value="code">
        <CodeBlock code={code} lang="tsx" />
      </TabsContent>
    </Tabs>
  )
}
