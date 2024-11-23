export interface Hook {
  name: string
  fileName: string
  description: string
  parameters: HookItem[]
  returnValue: HookItem[]
}

export interface HookItem {
  name: string
  type: string
  description: string
}
