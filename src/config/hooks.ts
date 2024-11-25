import { type Hook } from "@/types/hooks"

const usePreviousConfig = {
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
}

const useDebounceConfig = {
  name: "useDebounce",
  fileName: "use-debounce",
  description:
    "Returns a debounced value after a delay. Useful for optimizing performance in cases like user input handling.",
  parameters: [
    {
      name: "value",
      type: "any",
      description: "Value to debounce.",
    },
    {
      name: "delay",
      type: "number",
      description: "Delay time in milliseconds.",
    },
  ],
  returnValue: [
    {
      name: "debouncedValue",
      type: "value type",
      description: "Debounced version of the input value.",
    },
  ],
}

export const hooksConfig: Hook[] = [usePreviousConfig, useDebounceConfig]
