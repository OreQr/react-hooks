import { type Hook } from "@/types/hooks"

export const hooksConfig: Hook[] = [
  {
    name: "usePrevious",
    fileName: "use-previous",
    description: `Returns the previous value of a given input. Useful for comparing previous and current values in a component lifecycle.`,
    parameters: [
      {
        name: "value",
        type: "any",
        description: "Value to track the previous state of.",
      },
    ],
    returnValue: [
      {
        name: "previousValue",
        type: "value type | undefined",
        description: "Previous value of the provided input.",
      },
    ],
  },
]
