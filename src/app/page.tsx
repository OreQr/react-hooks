import { hooksConfig } from "@/config/hooks"
import { HookCard } from "@/components/hook-card"

export default async function Home() {
  return (
    <div className="space-y-4">
      <h2>
        Collection of React Hooks that you can copy and paste into your
        projects.
        <br />
        No package installation required, no dependencies to manage.
      </h2>
      <div className="space-y-2">
        {hooksConfig.map((hook) => (
          <HookCard key={hook.name} hook={hook} />
        ))}
      </div>
    </div>
  )
}
