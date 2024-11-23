import { format } from "prettier"
import prettierConfig from "prettier.config.mjs"
import { transform } from "sucrase"

export async function compileCode(code: string): Promise<string> {
  const compiledCode = transform(code, {
    transforms: ["typescript", "jsx"],
  }).code

  const formattedCode = await format(compiledCode, {
    parser: "typescript",
    ...prettierConfig,
  })

  return formattedCode
}
