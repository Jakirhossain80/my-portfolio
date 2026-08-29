"use client";

import { useState } from "react";
import Image from "next/image";

import type { ProjectImage as ProjectImageData } from "@/types/project";
import { classNames } from "@/utils/class-names";

type ProjectImageProps = {
  className?: string;
  image: ProjectImageData;
  sizes: string;
};

export function ProjectImage({ className, image, sizes }: ProjectImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className="flex aspect-[8/5] min-h-48 items-center justify-center bg-muted p-6 text-center"
        role="status"
      >
        <div>
          <p className="font-semibold text-foreground">Project image unavailable</p>
          <p className="mt-2 text-sm text-muted-foreground">
            The case study text and project links are still available.
          </p>
        </div>
      </div>
    );
  }

  return (
    <Image
      alt={image.alt}
      className={classNames("aspect-[8/5] h-auto w-full object-cover object-top", className)}
      height={image.height}
      onError={() => setFailed(true)}
      sizes={sizes}
      src={image.src}
      width={image.width}
    />
  );
}
