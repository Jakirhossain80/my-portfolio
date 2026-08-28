import Link from "next/link";

export default function NotFound() {
  return (
    <div className="route-shell">
      <div className="route-content">
        <p className="foundation-label">Page not found</p>
        <h1>This page is not available.</h1>
        <p className="route-introduction">
          The address may be incorrect, or the page may not have been published yet.
        </p>
        <Link className="text-link inline-flex min-h-11 items-center" href="/">
          Return to the portfolio homepage
        </Link>
      </div>
    </div>
  );
}
