import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/kurzy/typescript')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/kurzy/typescript"!</div>
}
