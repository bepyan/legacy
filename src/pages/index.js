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

            <Content>
              <p>현 블로그는 비활성화된 상태입니다.</p>
              <a
                href="https://bepyan.notion.site/Frontend-Developer-69fd245161734c1793e8df78dffe705c"
                target="_blank"
              >
                resume
              </a>
              <a href="https://github.com/bepyan" target="_blank">
                github
              </a>
              <a href="https://velog.io/@bepyan" target="_blank">
                velog
              </a>
              <a
                href="https://bepyan.notion.site/GET-START-de49308c21884e8a8037829b0c156931"
                target="_blank"
              >
                notion
              </a>
              <a
                href="https://bepyan.notion.site/2fcb69da90cd448fa074a9cda0ee0b29?v=ba83381b66d34c64974f82cb38825339"
                target="_blank"
              >
                TIL
              </a>
            </Content>
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

const Content = styled.div`
  margin-top: 1rem;
  a {
    margin: 0 1rem;
    :hover {
      text-decoration: underline;
    }
  }
`;
