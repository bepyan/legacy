import { Link } from "gatsby";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import React from "react";

const SiteHeader = ({ siteTitle }) => (
  <Wrapper>
    <div>
      <p>
        <HomeLink to="/legacy">{siteTitle}</HomeLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink href="https://github.com/bepyan">GitHub</NavLink>
      </p>
    </div>
  </Wrapper>
);

SiteHeader.propTypes = {
  siteTitle: PropTypes.string,
};

SiteHeader.defaultProps = {
  siteTitle: ``,
};

export default SiteHeader;

const Wrapper = styled.header`
  background: transparent;
  display: flex;
  align-content: center;
  justify-content: center;
  & > div {
    max-width: 860px;
    padding: 1rem 1.0875rem;
    font-size: 1.2rem;
  }
`;

const NavLink = styled(Link)`
  color: black;
  margin-left: 15px;
  text-decoration: none;
  display: inline-block;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    transform-origin: bottom right;
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }

  :hover {
    text-decoration: none;
    color: black;
  }
  :hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

const HomeLink = styled(NavLink)`
  margin-left: 0;
`;
