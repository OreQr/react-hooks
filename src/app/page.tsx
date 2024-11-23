import { hooksConfig } from "@/config/hooks"
import { HookCard } from "@/components/hook-card"

export default async function Home() {
  return (
    <div className="space-y-4">
      <h2>Copy-pase collection of React Hooks.</h2>
      <div className="space-y-2">
        {hooksConfig.map((hook) => (
          <HookCard key={hook.name} hook={hook} />
        ))}
      </div>
    </div>
  )
}
