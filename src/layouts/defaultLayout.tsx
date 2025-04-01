import type {FC, ReactNode} from "react";
import {Navbar} from "@/components/navigation/navbar.tsx";

type Props = {
  children: ReactNode
}

export const DefaultLayout: FC<Props> = ({children}) => {
  return (
    <>
      <Navbar/>
      {children}
    </>
  )
}