import { type Hook } from "@/types/hooks"

export const hooksConfig: Hook[] = [
  {
    name: "usePrevious",
    fileName: "use-previous",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s.`,
    parameters: [
      {
        name: "value",
        type: "any",
        description: "input value",
      },
    ],
    returnValue: [
      {
        name: "previous value",
        type: "value type | undefined",
        description: "previous value based on input value",
      },
    ],
  },
]
