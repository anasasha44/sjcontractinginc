import type { Metadata } from "next";
import { notFound } from "next/navigation";
import servicesData from "../../Component/data/servicesData";
import ServiceClient from "./ServiceClient";

const SITE_URL = "https://www.aquavior.com";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found | AQUAVIOR",
    };
  }

  const title = `${service.title} Windsor Ontario | AQUAVIOR`;
 const description = `${service.title} services in Windsor Ontario by AQUAVIOR Landscaping & Irrigation. Serving Windsor, LaSalle, Tecumseh and Essex County.`;
  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}/services/${service.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/services/${service.slug}`,
      siteName: "AQUAVIOR Landscaping & Irrigation",
      images: [
        {
          url: service.mainImage || "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `${service.title} in Windsor Ontario`,
        },
      ],
      locale: "en_CA",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [service.mainImage || "/og-image.jpg"],
    },
  };
}

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return <ServiceClient service={service} />;
}