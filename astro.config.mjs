// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
	site: "https://mariomo16.github.io",
	base: "/portfolio",
	i18n: {
		defaultLocale: "es",
		locales: ["es", "en"],
		routing: {
			prefixDefaultLocale: false,
		},
	},
});
