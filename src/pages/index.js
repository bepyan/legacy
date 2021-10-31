import styled from "@emotion/styled";
import { graphql, StaticQuery } from "gatsby";
import React from "react";

import { Layout, SearchEngine } from "../components";

const LandingPage = () => (
  <Layout>
    <SearchEngine title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <StaticQuery
      query={graphql`
        query LandingSiteTitleQuery {
          site {
            siteMetadata {
              title
              subtitle
            }
          }
        }
      `}
      render={(data) => (
        <OuterContainer>
          <div>
            <NameHeader>{data.site.siteMetadata.title}</NameHeader>
            <Description>{data.site.siteMetadata.subtitle}</Description>
          </div>
        </OuterContainer>
      )}
    />
  </Layout>
);

export default LandingPage;

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 78vh;
  & > div {
    text-align: center;
  }
`;

const NameHeader = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  padding: 0;
  margin-bottom: 1rem;
  font-size: 1.4rem;
`;
