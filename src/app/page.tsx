import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSettings } from "@/app/utils";
import Morphing from "@/components/Morphing/Morphing";

export default async function Page() {
  const client = createClient();

  const homepage = await client.getByUID("page", "homepage");

  const settings = await getSettings();

  const { default_header, default_footer } = settings.data;
  const { header, footer, background_noise, morphing_effect } = homepage?.data;

  const headerUID =
    //@ts-ignore
    header?.uid ||
    //@ts-ignore
    default_header?.uid ||
    "default-header-not-found-in-settings";
  const footerUID =
    //@ts-ignore
    footer?.uid ||
    //@ts-ignore
    default_footer?.uid ||
    "default-footer-not-found-in-settings";

  return (
    <>
      <div className="relative">
        <div
          className="absolute w-full h-full -z-50"
          style={{
            color: homepage.data.text_color || "",
            background: homepage.data.background_color || "",
          }}
        />
        {morphing_effect && (
          <Morphing
            dissolveColor={homepage.data.background_color || "#000000"}
            className="-z-40 absolute h-full w-full"
          ></Morphing>
        )}

        {background_noise && (
          <div
            className="absolute h-full w-full -z-30"
            style={{
              background: "url(/Noise&Texture.webp)",
            }}
          />
        )}

        <Header uid={headerUID} />
        <SliceZone slices={homepage.data.slices} components={components} />
        <Footer uid={footerUID} />
      </div>
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();

  const page = await client
    .getByUID("page", "homepage")
    .catch(() => notFound());

  return {
    //@ts-ignore
    title: page.data.meta_title,
    //@ts-ignore
    description: page.data.meta_description,
  };
}
