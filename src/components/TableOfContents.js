import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

const TableOfContents = ({ items, currentHeaderUrl }) => {
  if (!items) return <></>;

  return (
    <Wrapper>
      <div
        dangerouslySetInnerHTML={{ __html: items }}
        css={css`
          li.active > a,
          a:hover,
          a[href*="${currentHeaderUrl}"] {
            color: black;
          }
        `}
      />
    </Wrapper>
  );
};

export default TableOfContents;

const Wrapper = styled.div`
  position: fixed;
  position: -webkit-sticky;
  top: 250px;
  right: calc(((100% - 960px) / 2) - 220px);
  max-width: 220px;
  max-height: 90%;
  overflow: hidden;

  h5 {
    text-indent: 10px;
    margin-bottom: 8px;
  }

  p,
  ul,
  li {
    list-style: none;
    margin-top: 0;
    margin-bottom: 0;
    line-height: 30px;
    text-indent: 10px;
    font-size: 13px;
  }
  a {
    text-decoration: none;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: grey;
  }
`;
