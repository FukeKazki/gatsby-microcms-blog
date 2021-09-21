import * as React from 'react'
import {graphql, PageProps} from "gatsby";

const TechBlogPage = ({data}: PageProps<{
  microcmsTechblog: {
    title: string
    body: string
    techblogId: string
  }
}>): JSX.Element => {
  const { microcmsTechblog } = data
  return (
    <>
      <h1>{microcmsTechblog.title}</h1>
      <div dangerouslySetInnerHTML={{__html: microcmsTechblog.body}}/>
    </>
  )
}

export const query = graphql`
  query ($id: String) {
    microcmsTechblog(id: {eq: $id}) {
      title
      body
      techblogId
    }
  }

`

export default TechBlogPage
