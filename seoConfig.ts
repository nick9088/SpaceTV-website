import type { ManifestOptions } from "vite-plugin-pwa"

/**
 * Configuración de SEO para la aplicación.
 * SEO configuration for the application.
 */
export const seoConfig = {
	baseURL: "spacetv.nick909.dev", // Production URL.
	description:
		"your daily soundtrack, 24/7",
	type: "website",
	image: {
		url: "spacetv.nick909.dev/img/og-image.png",
		alt: "og-image",
		width: 730,
		height: 382,
	},
	siteName: "spacetv.nick909.dev",
	twitter: {
		card: "summary_large_image",
	},
}

/**
 * Configuración del manifiesto para la aplicación.
 * Defines the configuration for PWA webmanifest.
 */
export const manifest: Partial<ManifestOptions> = {
	name: "SpaceTV",
	short_name: "SpaceTV",
	description:
		"your daily soundtrack, 24/7",
	theme_color: "#222222",
	background_color: "#222222",
	display: "fullscreen",
	icons: [
		{
			src: "/img/icons/favicon-192x192.png",
			sizes: "192x192",
			type: "image/png",
		},
		{
			src: "/img/icons/favicon-512x512.png",
			sizes: "512x512",
			type: "image/png",
		},
		{
			src: "/img/icons/favicon-512x512.png",
			sizes: "512x512",
			type: "image/png",
			purpose: "any maskable",
		},
	],
}