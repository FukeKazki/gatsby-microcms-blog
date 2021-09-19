import * as React from 'react'
import {graphql, PageProps} from "gatsby";

const TechBlogPage = (props: PageProps<{
  microcmsTechblog: {
    title: string
    body: string
    techblogId: string
  }
}>): JSX.Element => {
  const {data} = props
  return (
    <>
      <h1>{data.microcmsTechblog.title}</h1>
      <div dangerouslySetInnerHTML={{__html: data.microcmsTechblog.body}}/>
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
