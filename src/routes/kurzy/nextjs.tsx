import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/kurzy/nextjs')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/kurzy/nextjs"!</div>
}
