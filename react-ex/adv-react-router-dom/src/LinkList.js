import * as React from "react";
import { Link } from "react-router-dom";

import { links } from "./links";

export const LinkList = ({
  history
}) => (
  <div>
    <h2>Links</h2>
    <ul>
      {links.map((link, i) => (
        <li key={i}>
          {link.title}
          <br />
          <Link to={`/links/${i}`}>&lt;Link&gt;</Link>
          <br />
          <Link
            to={{
              pathname: `/links/${i}`,
              state: { extraInformation: true }
            }}
          >
            {"<Link>"} with extra information
          </Link>
          <br />
          <a
            onClick={() =>
              window.confirm("Are you sure to proceed?") &&
              history.push(`/links/${i}`, { fromOnClick: true })
            }
          >
            OnClick Navigate with history
          </a>
        </li>
      ))}
    </ul>
  </div>
);
