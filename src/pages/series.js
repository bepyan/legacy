import React from "react";
import { Link, graphql } from "gatsby";
import { Layout, SearchEngine } from "../components";
import styled from "@emotion/styled";

const SeriesPage = ({ data }) => (
  <Layout>
    <SearchEngine title="Tags" />
    <Content>
      <Header>
        <h1>Series</h1>
        <div>
          <Link to="/blog">Blog</Link>
          <Link to="/tags">Tags</Link>
        </div>
      </Header>

      {data.tagsGroup.group.map(({ tag, totalCount }) => (
        <div key={tag}>
          <Link to={`/tags/${tag.toLowerCase()}`}>
            <MarkerHeader>
              {tag} ({totalCount})
            </MarkerHeader>
          </Link>
        </div>
      ))}
    </Content>
  </Layout>
);

export default SeriesPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    tagsGroup: allMarkdownRemark {
      group(field: frontmatter___tags) {
        tag: fieldValue
        totalCount
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
