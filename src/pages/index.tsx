import * as React from 'react'
import {graphql, Link, PageProps} from "gatsby";

const IndexPage = ({ data }: PageProps<any>): JSX.Element => {
  const { allMicrocmsTechblog } = data
  return (
    <main>
      <title>Home Page</title>
      <h1>hello world</h1>
      <ul>
        {allMicrocmsTechblog.edges.map(({node}, index) => (
          <li key={`${node.title}-${index}`}>
            <article>
              <h2>{node.title}</h2>
              <Link to={node.link}>こちら</Link>
            </article>
          </li>
        ))}
      </ul>
    </main>
  )
}

export const query = graphql`
  query IndexPage {
    allMicrocmsTechblog {
      edges {
        node {
          title
          link: gatsbyPath(filePath: "/blog/{microcmsTechblog.techblogId}")
        }
      }
    }
  }
`

export default IndexPage
