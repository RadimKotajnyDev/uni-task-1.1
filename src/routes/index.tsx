import {createFileRoute} from '@tanstack/react-router'
import {Heading} from "@chakra-ui/react";

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <>
      <Heading color="primary">Hello World!</Heading>
    </>
  )
}
