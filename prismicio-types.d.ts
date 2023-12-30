// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type BackgroundOfSmallImagesDocumentDataSlicesSlice = SmallBackgroundImageSlice;

/**
 * Content for Background Of Small Images documents
 */
interface BackgroundOfSmallImagesDocumentData {
  /**
   * Slice Zone field in *Background Of Small Images*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: background_of_small_images.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<BackgroundOfSmallImagesDocumentDataSlicesSlice>;
}

/**
 * Background Of Small Images document from Prismic
 *
 * - **API ID**: `background_of_small_images`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BackgroundOfSmallImagesDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<BackgroundOfSmallImagesDocumentData>,
    "background_of_small_images",
    Lang
  >;

/**
 * Content for Footer documents
 */
interface FooterDocumentData {
  /**
   * Logo field in *Footer*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;

  /**
   * Footer Text Color field in *Footer*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.footer_text_color
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  footer_text_color: prismic.ColorField;

  /**
   * Footer Background Color field in *Footer*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.footer_background_color
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  footer_background_color: prismic.ColorField;

  /**
   * Company Name field in *Footer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.company_name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  company_name: prismic.KeyTextField;
}

/**
 * Footer document from Prismic
 *
 * - **API ID**: `footer`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FooterDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<FooterDocumentData>, "footer", Lang>;

type HeaderDocumentDataSlicesSlice = NavigationSlice;

/**
 * Content for Header documents
 */
interface HeaderDocumentData {
  /**
   * Logo field in *Header*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: header.logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;

  /**
   * Navigation Items Color field in *Header*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: header.navigation_items_color
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  navigation_items_color: prismic.ColorField;

  /**
   * Header Background Color field in *Header*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: header.header_background_color
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  header_background_color: prismic.ColorField;

  /**
   * CTA Message field in *Header*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: header.cta_message
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  cta_message: prismic.KeyTextField;

  /**
   * CTA Link field in *Header*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: header.cta_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  cta_link: prismic.LinkField;

  /**
   * Hamburger Icon Color field in *Header*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: header.hamburger_icon_color
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  hamburger_icon_color: prismic.ColorField;

  /**
   * Slice Zone field in *Header*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: header.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HeaderDocumentDataSlicesSlice>;
}

/**
 * Header document from Prismic
 *
 * - **API ID**: `header`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HeaderDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<HeaderDocumentData>, "header", Lang>;

/**
 * Content for iFrame documents
 */
interface IframeDocumentData {
  /**
   * CTA iFrame field in *iFrame*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: iframe.cta_iframe
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  cta_iframe: prismic.KeyTextField;
}

/**
 * iFrame document from Prismic
 *
 * - **API ID**: `iframe`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type IframeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<IframeDocumentData>, "iframe", Lang>;

type PageDocumentDataSlicesSlice =
  | CallToActionSlice
  | CardsSlice
  | SmallCardsSlice
  | ProjectSlice
  | PartnersSlice
  | ParagraphSlice
  | HeroSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Comments for Content Editors field in *Page*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page.comments_for_content_editors
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  comments_for_content_editors: prismic.RichTextField;

  /**
   * Header field in *Page*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: page.header
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  header: prismic.ContentRelationshipField<"header">;

  /**
   * Footer field in *Page*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: page.footer
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  footer: prismic.ContentRelationshipField<"footer">;

  /**
   * Text Color field in *Page*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: page.text_color
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  text_color: prismic.ColorField;

  /**
   * Background Color field in *Page*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: page.background_color
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  background_color: prismic.ColorField;

  /**
   * Background Noise field in *Page*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: page.background_noise
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  background_noise: prismic.BooleanField;

  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
  /**
   * Default Header field in *Settings*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.default_header
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  default_header: prismic.ContentRelationshipField<"header">;

  /**
   * Default Footer field in *Settings*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.default_footer
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  default_footer: prismic.ContentRelationshipField<"footer">;

  /**
   * Favicon field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.favicon
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  favicon: prismic.ImageField<never>;

  /**
   * Primary Color field in *Settings*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.primary_color
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  primary_color: prismic.ColorField;

  /**
   * Secondary Color field in *Settings*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.secondary_color
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  secondary_color: prismic.ColorField;

  /**
   * CTA Text Color field in *Settings*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.cta_text_color
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  cta_text_color: prismic.ColorField;

  /**
   * CTA Background Color field in *Settings*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.cta_background_color
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  cta_background_color: prismic.ColorField;

  /**
   * Meta Title field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.meta_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.meta_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * OG Image field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.og_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  og_image: prismic.ImageField<never>;

  /**
   * GTM_ID field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.gtm_id
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  gtm_id: prismic.KeyTextField;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;

export type AllDocumentTypes =
  | BackgroundOfSmallImagesDocument
  | FooterDocument
  | HeaderDocument
  | IframeDocument
  | PageDocument
  | SettingsDocument;

/**
 * Primary content in *CallToAction → Primary*
 */
export interface CallToActionSliceDefaultPrimary {
  /**
   * Call Text field in *CallToAction → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.primary.call
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  call: prismic.RichTextField;

  /**
   * Action Button Text field in *CallToAction → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.primary.action_button_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  action_button_text: prismic.KeyTextField;

  /**
   * Action Button Link field in *CallToAction → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.primary.action_button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  action_button_link: prismic.LinkField;

  /**
   * email_icon field in *CallToAction → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.primary.email_icon
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  email_icon: prismic.ImageField<never>;

  /**
   * email field in *CallToAction → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.primary.email
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  email: prismic.KeyTextField;

  /**
   * link_to_email field in *CallToAction → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.primary.link_to_email
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link_to_email: prismic.LinkField;
}

/**
 * Default variation for CallToAction Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CallToActionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<CallToActionSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *CallToAction*
 */
type CallToActionSliceVariation = CallToActionSliceDefault;

/**
 * CallToAction Shared Slice
 *
 * - **API ID**: `call_to_action`
 * - **Description**: CallToAction
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CallToActionSlice = prismic.SharedSlice<
  "call_to_action",
  CallToActionSliceVariation
>;

/**
 * Primary content in *Cards → Primary*
 */
export interface CardsSliceDefaultPrimary {
  /**
   * Title field in *Cards → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: cards.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Heading field in *Cards → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: cards.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;
}

/**
 * Primary content in *Cards → Items*
 */
export interface CardsSliceDefaultItem {
  /**
   * Card Icon field in *Cards → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: cards.items[].card_icon
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  card_icon: prismic.ImageField<never>;

  /**
   * Card Title field in *Cards → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: cards.items[].card_title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  card_title: prismic.RichTextField;

  /**
   * Card Content field in *Cards → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: cards.items[].card_content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  card_content: prismic.RichTextField;
}

/**
 * Default variation for Cards Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CardsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<CardsSliceDefaultPrimary>,
  Simplify<CardsSliceDefaultItem>
>;

/**
 * Slice variation for *Cards*
 */
type CardsSliceVariation = CardsSliceDefault;

/**
 * Cards Shared Slice
 *
 * - **API ID**: `cards`
 * - **Description**: Cards
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CardsSlice = prismic.SharedSlice<"cards", CardsSliceVariation>;

/**
 * Primary content in *Hero → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Bond Text field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.bond_text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  bond_text: prismic.RichTextField;

  /**
   * Heading_h2 field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.heading_h2
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading_h2: prismic.RichTextField;

  /**
   * CTA Text field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.cta_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  cta_text: prismic.KeyTextField;

  /**
   * CTA Link field in *Hero → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.cta_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  cta_link: prismic.LinkField;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Primary content in *Navigation → Items*
 */
export interface NavigationSliceDefaultItem {
  /**
   * Name field in *Navigation → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.items[].name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Link field in *Navigation → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.items[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Default variation for Navigation Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NavigationSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<NavigationSliceDefaultItem>
>;

/**
 * Slice variation for *Navigation*
 */
type NavigationSliceVariation = NavigationSliceDefault;

/**
 * Navigation Shared Slice
 *
 * - **API ID**: `navigation`
 * - **Description**: Navigation
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NavigationSlice = prismic.SharedSlice<
  "navigation",
  NavigationSliceVariation
>;

/**
 * Primary content in *Paragraph → Primary*
 */
export interface ParagraphSliceDefaultPrimary {
  /**
   * Content field in *Paragraph → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: paragraph.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;
}

/**
 * Default variation for Paragraph Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ParagraphSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ParagraphSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Paragraph*
 */
type ParagraphSliceVariation = ParagraphSliceDefault;

/**
 * Paragraph Shared Slice
 *
 * - **API ID**: `paragraph`
 * - **Description**: Paragraph
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ParagraphSlice = prismic.SharedSlice<
  "paragraph",
  ParagraphSliceVariation
>;

/**
 * Primary content in *Partners → Items*
 */
export interface PartnersSliceDefaultItem {
  /**
   * Partner Logo field in *Partners → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: partners.items[].partner_logo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  partner_logo: prismic.ImageField<never>;
}

/**
 * Default variation for Partners Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PartnersSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<PartnersSliceDefaultItem>
>;

/**
 * Slice variation for *Partners*
 */
type PartnersSliceVariation = PartnersSliceDefault;

/**
 * Partners Shared Slice
 *
 * - **API ID**: `partners`
 * - **Description**: Partners
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PartnersSlice = prismic.SharedSlice<
  "partners",
  PartnersSliceVariation
>;

/**
 * Primary content in *Project → Primary*
 */
export interface ProjectSliceDefaultPrimary {
  /**
   * Title field in *Project → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Description field in *Project → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * CTA Text field in *Project → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.primary.cta_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  cta_text: prismic.KeyTextField;

  /**
   * Laptop Size Project Screenshot field in *Project → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: project.primary.laptop_size_project_screenshot
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  laptop_size_project_screenshot: prismic.ImageField<never>;

  /**
   * Mobile Size Project Screenshot field in *Project → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: project.primary.mobile_size_project_screenshot
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  mobile_size_project_screenshot: prismic.ImageField<never>;

  /**
   * Clients Review field in *Project → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.primary.clients_review
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  clients_review: prismic.RichTextField;

  /**
   * Client's Name field in *Project → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.primary.clients_name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  clients_name: prismic.KeyTextField;

  /**
   * Client's Professional Title field in *Project → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.primary.clients_professional_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  clients_professional_title: prismic.KeyTextField;

  /**
   * Clients Picture field in *Project → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: project.primary.clients_picture
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  clients_picture: prismic.ImageField<never>;
}

/**
 * Default variation for Project Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProjectSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ProjectSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Project*
 */
type ProjectSliceVariation = ProjectSliceDefault;

/**
 * Project Shared Slice
 *
 * - **API ID**: `project`
 * - **Description**: Project
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProjectSlice = prismic.SharedSlice<
  "project",
  ProjectSliceVariation
>;

/**
 * Primary content in *SmallBackgroundImage → Primary*
 */
export interface SmallBackgroundImageSliceDefaultPrimary {
  /**
   * Small Background Image field in *SmallBackgroundImage → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: small_background_image.primary.small_background_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  small_background_image: prismic.ImageField<never>;

  /**
   * Top field in *SmallBackgroundImage → Primary*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: small_background_image.primary.top
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  top: prismic.NumberField;

  /**
   * Right field in *SmallBackgroundImage → Primary*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: small_background_image.primary.right
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  right: prismic.NumberField;

  /**
   * Bottom field in *SmallBackgroundImage → Primary*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: small_background_image.primary.bottom
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  bottom: prismic.NumberField;

  /**
   * Left field in *SmallBackgroundImage → Primary*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: small_background_image.primary.left
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  left: prismic.NumberField;
}

/**
 * Default variation for SmallBackgroundImage Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SmallBackgroundImageSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<SmallBackgroundImageSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *SmallBackgroundImage*
 */
type SmallBackgroundImageSliceVariation = SmallBackgroundImageSliceDefault;

/**
 * SmallBackgroundImage Shared Slice
 *
 * - **API ID**: `small_background_image`
 * - **Description**: SmallBackgroundImage
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SmallBackgroundImageSlice = prismic.SharedSlice<
  "small_background_image",
  SmallBackgroundImageSliceVariation
>;

/**
 * Primary content in *SmallCards → Primary*
 */
export interface SmallCardsSliceDefaultPrimary {
  /**
   * Title field in *SmallCards → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: small_cards.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;
}

/**
 * Primary content in *SmallCards → Items*
 */
export interface SmallCardsSliceDefaultItem {
  /**
   * Card Icon field in *SmallCards → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: small_cards.items[].card_icon
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  card_icon: prismic.ImageField<never>;

  /**
   * Card Title field in *SmallCards → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: small_cards.items[].card_title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  card_title: prismic.RichTextField;

  /**
   * Card Content field in *SmallCards → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: small_cards.items[].card_content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  card_content: prismic.RichTextField;
}

/**
 * Default variation for SmallCards Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SmallCardsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<SmallCardsSliceDefaultPrimary>,
  Simplify<SmallCardsSliceDefaultItem>
>;

/**
 * Slice variation for *SmallCards*
 */
type SmallCardsSliceVariation = SmallCardsSliceDefault;

/**
 * SmallCards Shared Slice
 *
 * - **API ID**: `small_cards`
 * - **Description**: SmallCards
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SmallCardsSlice = prismic.SharedSlice<
  "small_cards",
  SmallCardsSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      BackgroundOfSmallImagesDocument,
      BackgroundOfSmallImagesDocumentData,
      BackgroundOfSmallImagesDocumentDataSlicesSlice,
      FooterDocument,
      FooterDocumentData,
      HeaderDocument,
      HeaderDocumentData,
      HeaderDocumentDataSlicesSlice,
      IframeDocument,
      IframeDocumentData,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      SettingsDocument,
      SettingsDocumentData,
      AllDocumentTypes,
      CallToActionSlice,
      CallToActionSliceDefaultPrimary,
      CallToActionSliceVariation,
      CallToActionSliceDefault,
      CardsSlice,
      CardsSliceDefaultPrimary,
      CardsSliceDefaultItem,
      CardsSliceVariation,
      CardsSliceDefault,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      NavigationSlice,
      NavigationSliceDefaultItem,
      NavigationSliceVariation,
      NavigationSliceDefault,
      ParagraphSlice,
      ParagraphSliceDefaultPrimary,
      ParagraphSliceVariation,
      ParagraphSliceDefault,
      PartnersSlice,
      PartnersSliceDefaultItem,
      PartnersSliceVariation,
      PartnersSliceDefault,
      ProjectSlice,
      ProjectSliceDefaultPrimary,
      ProjectSliceVariation,
      ProjectSliceDefault,
      SmallBackgroundImageSlice,
      SmallBackgroundImageSliceDefaultPrimary,
      SmallBackgroundImageSliceVariation,
      SmallBackgroundImageSliceDefault,
      SmallCardsSlice,
      SmallCardsSliceDefaultPrimary,
      SmallCardsSliceDefaultItem,
      SmallCardsSliceVariation,
      SmallCardsSliceDefault,
    };
  }
}
