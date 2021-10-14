import React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import Layout from "../components/Layout"
import SearchEngine from "../components/SearchEngine"

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`

const MarkedHeader = styled.h1`
  display: inline;
  border-radius: .5rem;
  padding: 0 .5rem;
  background-image: linear-gradient(
    rgba(222, 233, 255, 0.1),
    rgba(222, 233, 255, 0.4) 100%,
    rgba(222, 233, 255, 0.05)
  );
`

const HeaderDate = styled.h3`
  margin-top: 10px;
  padding: 0 .5rem;
  color: #606060;
`

// STYLE THE TAGS INSIDE THE MARKDOWN HERE
const MarkdownContent = styled.div`
  a {
    text-decoration: none;
    position: relative;

    color: grey;
    background-image: linear-gradient(
      rgba(222, 233, 255),
      rgba(222, 233, 255)
    );
    background-repeat: no-repeat;
    background-size: 100% 0.2em;
    background-position: 0 88%;
    transition: background-size 0.25s ease-in;
    &:hover {
      background-size: 100% 88%;
    }
  }

  a > code:hover {
    text-decoration: underline;
  }

  .anchor-header {
    left: 4px;
    background-image: none;
  }
`

const BlogPost = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <SearchEngine
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Content>
        <MarkedHeader>{post.frontmatter.title}</MarkedHeader>
        <HeaderDate>
          {post.frontmatter.date} - {post.fields.readingTime.text}
        </HeaderDate>
        <MarkdownContent dangerouslySetInnerHTML={{ __html: post.html }} />
      </Content>
    </Layout>
  )
}
export default BlogPost;


export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      tableOfContents
      excerpt(pruneLength: 160)
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        path
        title
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`
