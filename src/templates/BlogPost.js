import React from "react";
import { graphql, Link } from "gatsby";
import styled from "@emotion/styled";
import {
  Layout,
  SearchEngine,
  SeriesCard,
  TableOfContents,
} from "../components";
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
          {`${frontmatter.date} · `}
          {frontmatter.tags.map((v) => (
            <Link key={v} to={`/legacy/tags/${v.toLowerCase()}`}>
              {` ${v} `}
            </Link>
          ))}
          {` · ${post.fields.readingTime.text}`}
        </HeaderDate>

        {frontmatter.series && (
          <SeriesCard
            series={frontmatter.series}
            currentPath={frontmatter.path}
          />
        )}

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

export const query = graphql`
  query ($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      tableOfContents
      excerpt(pruneLength: 160)
      frontmatter {
        date(formatString: "YYYY.MM.DD")
        path
        title
        tags
        series
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
  font-weight: 800;
`;

const HeaderDate = styled.h3`
  margin-top: 1rem;
  font-size: 1rem;
  font-weight: 400;
  color: #606060;
  & > a {
    :hover {
      text-decoration: none;
    }
  }
`;

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
