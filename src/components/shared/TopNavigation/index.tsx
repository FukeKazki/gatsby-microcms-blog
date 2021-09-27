import * as React from 'react'
import {ComponentPropsWithRef} from "react";
import {Link} from "gatsby";
import { css } from "@emotion/react"

interface TopNavigationProps extends ComponentPropsWithRef<"nav"> {
  title: string
  link: string
}

const base = css`
  height: 32px;
  line-height: 32px;
  font-weight: bold;
  background: var(--ui-gradient);
  color: var(--white);
  text-align: center;
`

export const TopNavigation = ({title, link, ...props}: TopNavigationProps): JSX.Element => {
  return (
    <nav css={base} {...props}>
      <Link to={link}>
        <h2>{title}</h2>
      </Link>
    </nav>
  )
}
