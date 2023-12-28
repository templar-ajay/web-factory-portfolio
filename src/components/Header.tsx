import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import { getHeader, getSettings } from "@/app/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Navigation from "@/slices/Navigation";

type HeaderParams = {
  uid: string;
};

export default async function Header({ uid }: HeaderParams) {
  const header = await getHeader(uid);
  const settings = await getSettings();

  const { secondary_color } = settings.data;

  const {
    logo,
    cta_message,
    cta_link,
    header_background_color,
    navigation_items_color,
    slices,
  } = header.data;

  return (
    <>
      <header
        className="w-full absolute top-0 z-10"
        style={{
          backgroundColor: header_background_color || "transparent",
        }}
      >
        <div className="flex justify-between items-center px-3 sm:px-5 py-5 sm:py-7 mx-auto max-w-[1300px]">
          <div className="logo h-fit">
            <Link href="/">
              <PrismicNextImage
                field={logo}
                style={{
                  objectFit: "contain",
                }}
                className=" w-[120px] h-[50px] sm:h-[55px] xs:w-[150px] sm:w-full"
              />
            </Link>
          </div>
          <div
            className="h-fit"
            style={{
              color: navigation_items_color || secondary_color || "#fff",
            }}
          >
            <div className="flex items-start">
              {slices[0] && (
                <Navigation
                  context={{ spacing: 50 }}
                  index={0}
                  slices={slices}
                  slice={slices[0]}
                />
              )}
              <PrismicNextLink field={cta_link}>
                <div className="block arrow-box text-lg">
                  <div
                    style={{
                      color:
                        navigation_items_color || secondary_color || "#fff",
                    }}
                    className="arrow-button block text-sm xs:text-md sm:text-lg border-solid border-[1px] rounded-full px-8 py-2"
                  >
                    {cta_message}
                    <FontAwesomeIcon
                      className="arrow-icon mb-1 ml-2 w-3 inline-block"
                      icon={faArrowRight}
                    />
                  </div>
                </div>
              </PrismicNextLink>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
