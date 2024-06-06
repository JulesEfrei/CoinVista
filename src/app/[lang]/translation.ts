const translation = {
  en: () =>
    import("@translation/translate.en").then((module) => module.default),
  fr: () =>
    import("@translation/translate.fr").then((module) => module.default),
};

export const getTranslation = async (locale: string) =>
  locale === "en" || locale === "fr" ? translation[locale]() : translation.en();
