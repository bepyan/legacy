import React, { useState } from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const SeriesCard = ({ series, currentPath }) => {
  const list = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: ASC }
        filter: { frontmatter: { draft: { eq: false } } }
      ) {
        edges {
          node {
            frontmatter {
              title
              path
              series
            }
          }
        }
      }
    }
  `)
    .allMarkdownRemark.edges.filter(
      ({ node }) => node.frontmatter.series === series
    )
    .map(({ node }) => node.frontmatter);

  const [isFold, setIsFold] = useState(false);

  const onToggle = () => {
    setIsFold(!isFold);
  };

  return (
    <Card>
      <h3 onClick={onToggle}>Series. {series}</h3>
      {!isFold && (
        <div>
          {list.map(({ path, title }, i) => (
            <li key={path} css={[currentPath === path && currentLink]}>
              <Link to={path}>
                {i + 1}. {title}
              </Link>
            </li>
          ))}

          <Link to={`/series`}>다른 Series 보기</Link>
        </div>
      )}
    </Card>
  );
};

export default SeriesCard;

const Card = styled.div`
  border-radius: 8px;
  overflow: hidden;
  background-color: #f8f9fa;
  margin-bottom: 3rem;

  h3 {
    cursor: pointer;
    padding: 2rem;
    margin-bottom: 0px;
    transition: all 0.3s ease-in-out;
    &:hover {
      background-color: #f4f4f4;
    }
  }

  div {
    padding: 0.5rem 2rem 2rem 2rem;
    position: relative;
    transition: all 0.3s ease-in-out;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: #6f6f6f;
    &:hover {
      text-decoration: none;
      color: #4c4c4c;
    }
  }
`;

const currentLink = css`
  a {
    font-weight: bold;
  }
`;
