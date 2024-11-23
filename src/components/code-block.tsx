import { Fragment } from "react"
import { jsx, jsxs } from "react/jsx-runtime"
import { toJsxRuntime } from "hast-util-to-jsx-runtime"
import { codeToHast } from "shiki"

import { CopyButton } from "./copy-button"

interface CodeBlockProps {
  code: string
  lang: "tsx" | "jsx"
}
export async function CodeBlock({ code, lang }: CodeBlockProps) {
  const out = await codeToHast(code, {
    theme: "github-dark",
    lang,
  })

  return toJsxRuntime(out, {
    Fragment,
    jsx,
    jsxs,
    components: {
      pre: ({ style, className, ...props }) => (
        <div className="relative">
          <CopyButton value={code} className="absolute right-4 top-4" />
          <pre
            data-custom-codeblock
            {...props}
            className="max-h-[calc(100vh-250px)] overflow-x-auto rounded-lg border bg-zinc-950 py-4 ps-2 dark:bg-zinc-900 md:max-h-[calc(100vh-350px)]"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "hsl(var(--border)) transparent",
            }}
          />
        </div>
      ),
      code: ({ style, className, ...props }) => (
        <code data-custom-code {...props} className="text-sm" />
      ),
    },
  })
}
