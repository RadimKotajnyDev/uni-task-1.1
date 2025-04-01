import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/kurzy/graphql')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/kurzy/graphql"!</div>
}
