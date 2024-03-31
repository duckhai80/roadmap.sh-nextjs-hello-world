import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

function Navbar(props) {
  const { data: session, status } = useSession();

  return (
    <nav className="header">
      <h1 className="logo">
        <a href="#">Next Auth</a>
      </h1>
      <ul
        className={`main-nav ${
          !session && status === "loading" ? "loading" : "loaded"
        }`}
      >
        <li>
          <Link href="/">Home</Link>
        </li>
        {session && (
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
        )}
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        {!session && (
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
        )}
        {session && (
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
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
