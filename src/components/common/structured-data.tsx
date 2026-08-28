import { serializeJsonLd } from "@/lib/seo";

type StructuredDataProps = {
  data: object;
};

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
      type="application/ld+json"
    />
  );
}
