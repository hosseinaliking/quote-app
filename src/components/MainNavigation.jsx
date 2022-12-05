import React from "react";

import Container from "../layout/Container";

import { Link, NavLink } from "react-router-dom";

const MainNavigation = (props) => {
  return (
    <>
      <Container>
        <nav className="flex items-center justify-between my-5">
          <Link className="text-lg font-bold" to={'/'}>Quote app</Link>

          <ul className="flex items-center gap-5">
            <li>
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/quotes"
              >
                All Quotes
              </NavLink>
            </li>

            <li>
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/new-quote"
              >
                New Quote
              </NavLink>
            </li>
          </ul>
        </nav>
      </Container>

      {props.children}
    </>
  );
};

export default MainNavigation;
