import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/kurzy/javascript')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/kurzy/javascript"!</div>
}
