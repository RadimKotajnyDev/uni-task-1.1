import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/galerie')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "galerie"!</div>
}
