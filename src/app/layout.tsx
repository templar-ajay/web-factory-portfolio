import type { Metadata, ResolvingMetadata, Viewport } from "next";

import "./globals.css";
import clsx from "clsx";

import { Questrial, Roboto, Montserrat } from "next/font/google";

import { repositoryName } from "@/prismicio";
import { PrismicPreview } from "@prismicio/next";

import { Providers } from "@/app/providers";
import { TrackingHeadScript } from "@phntms/next-gtm";
import { getSettings } from "@/app/utils";

const body = Questrial({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-body",
});

const display = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  display: "swap",
  variable: "--font-display",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-montserrat",
});

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSettings();

  console.log("settings", settings);

  const { meta_title, meta_description, og_image } = settings.data;

  return {
    title: meta_title || "Fallback Meta Title",
    description: meta_description || "Fallback description",
    openGraph: {
      images: [og_image?.url || "./fallback_image_path"],
    },
    robots: { index: true },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: false,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = await getSettings();

  const { gtm_id: GTM_ID } = settings.data;

  return (
    <html lang="en">
      <body
        className={clsx(body.variable, display.variable, montserrat.variable)}
      >
        <Providers>
          <TrackingHeadScript id={GTM_ID || ""} isGTM={true} />
          {children}
        </Providers>
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
