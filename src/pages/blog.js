import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`

const Title = styled.h1`
  margin-bottom: 3.5rem;
`

const MarkerHeader = styled.h3`
  display: inline;
  border-radius: .5rem;
  padding: 0 .5rem;
  margin: 0 -.5rem;
  &:hover{
    text-decoration: underline;
  }
`

const ArticleDate = styled.h5`
  display: inline;
  color: #606060;
`

const ReadingTime = styled.h5`
  display: inline;
  color: #606060;
`

const PreviewText = styled.p`
  font-size: .9rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <Content>
        <Title>Blog</Title>
        {data.allMarkdownRemark.edges
          .filter(({ node }) => {
            const rawDate = node.frontmatter.rawDate
            const date = new Date(rawDate)
            return date < new Date()
          })
          .map(({ node }) => (
            <div key={node.id}>
              <Link
                to={node.frontmatter.path}
                css={css`
                  text-decoration: none;
                  color: inherit;
                `}
              >
                <MarkerHeader>{node.frontmatter.title}</MarkerHeader>
              </Link>
              <div>
                <ArticleDate>{node.frontmatter.date}</ArticleDate>
                <ReadingTime> - {node.fields.readingTime.text}</ReadingTime>
              </div>
              <PreviewText>{node.excerpt}</PreviewText>
            </div>
          ))}
      </Content>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { eq: false } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            rawDate: date
            path
          }
          fields {
            slug
            readingTime {
              text
            }
          }
          excerpt
        }
      }
    }
  }
`
