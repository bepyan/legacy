import React from "react";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import { Layout, SearchEngine, TableOfContents } from "../components";
import { useTocScroll } from "../hooks";

const BlogPost = ({ data }) => {
  const { frontmatter, tableOfContents, ...post } = data.markdownRemark;
  const { currentHeaderUrl } = useTocScroll();

  return (
    <Layout>
      <SearchEngine
        title={frontmatter.title}
        description={frontmatter.description || post.excerpt}
      />
      <Content>
        <MarkedHeader>{frontmatter.title}</MarkedHeader>
        <HeaderDate>
          {frontmatter.date} · {post.fields.readingTime.text}
        </HeaderDate>
        <MarkdownContent dangerouslySetInnerHTML={{ __html: post.html }} />
        <TableOfContents
          items={tableOfContents}
          currentHeaderUrl={currentHeaderUrl}
        />
      </Content>
    </Layout>
  );
};
export default BlogPost;

export const pageQuery = graphql`
  query ($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      tableOfContents
      excerpt(pruneLength: 160)
      frontmatter {
        date(formatString: "YYYY MMM DD")
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
`;

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`;

const MarkedHeader = styled.h1`
  display: inline;
`;

const HeaderDate = styled.h3`
  margin-top: 10px;
  color: #606060;
`;

// STYLE THE TAGS INSIDE THE MARKDOWN HERE
const MarkdownContent = styled.div`
  a {
    text-decoration: none;
    position: relative;

    color: grey;
    background-image: linear-gradient(rgba(222, 233, 255), rgba(222, 233, 255));
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
`;
