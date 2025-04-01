import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import {DefaultLayout} from "@/layouts/defaultLayout.tsx";

export const Route = createRootRoute({
  component: () => (
    <DefaultLayout>
      <Outlet />
      <TanStackRouterDevtools />
    </DefaultLayout>
  ),
})
