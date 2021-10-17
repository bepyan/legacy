import React from "react";
import { Link, graphql } from "gatsby";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { Layout, SearchEngine } from "../components";

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <SearchEngine title="Blog" />
      <Content>
        <Header>
          <h1>Blog</h1>
          <div>
            <Link to="/tags">Tags</Link>
            <Link to="/series">Series</Link>
          </div>
        </Header>
        {data.allMarkdownRemark.edges
          .filter(({ node }) => {
            const rawDate = node.frontmatter.rawDate;
            const date = new Date(rawDate);
            return date < new Date();
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
                <ReadingTime> · {node.fields.readingTime.text}</ReadingTime>
              </div>
              <PreviewText>{node.excerpt}</PreviewText>
            </div>
          ))}
      </Content>
    </Layout>
  );
};

export default BlogPage;

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
            date(formatString: "YYYY.MM.DD")
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
`;

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`;

const Header = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 3.5rem;

  & > * {
    margin-bottom: 0px;
  }
  div {
    margin-left: auto;
    display: flex;
    align-items: flex-end;
    & > * {
      margin-left: 1rem;
    }
  }
`;

const MarkerHeader = styled.h3`
  display: inline;
  border-radius: 0.5rem;
  padding: 0 0.5rem;
  margin: 0 -0.5rem;
  &:hover {
    text-decoration: underline;
  }
`;

const ArticleDate = styled.h5`
  display: inline;
  color: #606060;
  font-weight: 400;
`;

const ReadingTime = styled.h5`
  display: inline;
  color: #606060;
  font-weight: 400;
`;

const PreviewText = styled.p`
  font-size: 0.9rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
`;
