import * as React from 'react'
import {graphql, Link, PageProps} from "gatsby";
import { TopNavigation } from "../components/shared/TopNavigation";
import {Container} from "../components/layout/Container";

const IndexPage = ({data}: PageProps<GatsbyTypes.IndexPageQuery>): JSX.Element => {
  const {allMicrocmsTechblog} = data

  return (
    <main>
      <title>Home Page</title>
      <TopNavigation title={allMicrocmsTechblog.edges[0].node.title!} link={allMicrocmsTechblog.edges[0].node.link!}/>
      <Container>
        <ul>
          {allMicrocmsTechblog.edges.map(({node}, index) => (
            <li key={`${node.title}-${index}`}>
              <article>
                <h2>{node.title}</h2>
                {typeof node.link === "string" && (
                  <Link to={node.link}>こちら</Link>
                )}
              </article>
            </li>
          ))}
        </ul>
      </Container>
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
