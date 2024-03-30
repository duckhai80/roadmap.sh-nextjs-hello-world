import Link from "next/link";
import React from "react";
import { signIn, signOut } from "next-auth/react";

function Navbar(props) {
  return (
    <nav className="header">
      <h1 className="logo">
        <a href="#">Next Auth</a>
      </h1>
      <ul className="main-nav">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link
            href="/api/auth/signin"
            onClick={(e) => {
              e.preventDefault();
              signIn("github");
            }}
          >
            Sign in
          </Link>
        </li>
        <li>
          <Link
            href="/api/auth/signout"
            onClick={(e) => {
              e.preventDefault();
              signOut();
            }}
          >
            Sign out
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
