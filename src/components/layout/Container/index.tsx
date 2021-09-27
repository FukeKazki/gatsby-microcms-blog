import * as React from 'react'
import {ComponentPropsWithRef} from "react";
import {css} from "@emotion/react";

interface ContainerProps extends ComponentPropsWithRef<"section"> {
}

const base = css`
  padding: 20px;
  max-width: 1000px;
  margin: 0 auto;
  @media (min-width: 600px) {
    padding: 40px;
  }
  @media (min-width: 1000px) {
    padding: 40px 0;
  }
`

export const Container = ({children, ...props}: ContainerProps): JSX.Element => {
  return (
    <section css={base} {...props}>
      {children}
    </section>
  )
}
