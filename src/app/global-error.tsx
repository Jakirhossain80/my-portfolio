"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    console.error("The portfolio failed to render.", error);
  }, [error]);

  return (
    <html lang="en">
      <head>
        <title>Unable to load | Md. Jakir Hossain</title>
      </head>
      <body>
        <main
          style={{
            fontFamily: "Arial, sans-serif",
            margin: "0 auto",
            maxWidth: "48rem",
            padding: "4rem 1.25rem",
          }}
        >
          <p style={{ fontWeight: 700 }}>Unable to load the portfolio</p>
          <h1>Something went wrong.</h1>
          <p>
            The site could not be displayed. Try again, return home, or use the email contact
            alternative.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "1.5rem" }}>
            <button
              onClick={retry}
              style={{ cursor: "pointer", minHeight: "44px", padding: "0.65rem 1rem" }}
              type="button"
            >
              Try again
            </button>
            <Link
              href="/"
              style={{ alignItems: "center", display: "inline-flex", minHeight: "44px" }}
            >
              Return home
            </Link>
            <a
              href="mailto:jakir.devbd@gmail.com"
              style={{ alignItems: "center", display: "inline-flex", minHeight: "44px" }}
            >
              Email Jakir Hossain
            </a>
          </div>
        </main>
      </body>
    </html>
  );
}
