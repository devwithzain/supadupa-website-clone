import createMiddleware from "next-intl/middleware";

export default createMiddleware({
   locales: ["en", "nl"],
   defaultLocale: "en",
});

export const config = {
   matcher: ["/", "/(nl|en)/:path*"],
};
