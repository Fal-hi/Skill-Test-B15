import React from "react";
import { Link } from "react-router-dom";

export default function NavLink({ href, children }) {
  return <Link to={href}>{children}</Link>;
}
