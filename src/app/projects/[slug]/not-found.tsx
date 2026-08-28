import Link from "next/link";

export default function ProjectNotFound() {
  return (
    <div className="route-shell">
      <div className="route-content">
        <p className="foundation-label">Project not found</p>
        <h1>This case study is not available.</h1>
        <p className="route-introduction">
          The project may not exist, or its case study may not have been published yet.
        </p>
        <Link className="text-link" href="/projects">
          View available projects
        </Link>
      </div>
    </div>
  );
}
