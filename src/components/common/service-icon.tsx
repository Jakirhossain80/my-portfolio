import type { ServiceIconName } from "@/types/service";

type ServiceIconProps = {
  name: ServiceIconName;
};

export function ServiceIcon({ name }: ServiceIconProps) {
  return (
    <svg
      aria-hidden="true"
      className="size-6"
      fill="none"
      focusable="false"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.75"
      viewBox="0 0 24 24"
    >
      {name === "interface" ? (
        <>
          <rect height="13" rx="2" width="18" x="3" y="3" />
          <path d="M8 21h8M12 16v5M7 7h4M7 10h8" />
        </>
      ) : null}
      {name === "full-stack" ? (
        <>
          <path d="m12 3 8 4.5-8 4.5-8-4.5L12 3Z" />
          <path d="m4 12 8 4.5 8-4.5M4 16.5l8 4.5 8-4.5" />
        </>
      ) : null}
      {name === "api" ? (
        <>
          <path d="m8 9-3 3 3 3M16 9l3 3-3 3M14 5l-4 14" />
        </>
      ) : null}
      {name === "authentication" ? (
        <>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
          <path d="m9 12 2 2 4-4" />
        </>
      ) : null}
      {name === "integration" ? (
        <>
          <path d="m8 12 3-3a3 3 0 0 1 4 4l-2 2a3 3 0 0 1-4 0" />
          <path d="m16 12-3 3a3 3 0 0 1-4-4l2-2a3 3 0 0 1 4 0" />
        </>
      ) : null}
      {name === "repair" ? (
        <>
          <path d="M14.7 6.3a4 4 0 0 0-5-5L12 3.6 9.6 6 7.3 3.7a4 4 0 0 0 5 5L4 17l3 3 8.3-8.3a4 4 0 0 0 5-5L18 9l-2.4-2.4L18 4.3" />
        </>
      ) : null}
    </svg>
  );
}
