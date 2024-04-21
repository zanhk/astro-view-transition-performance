import cloudflare from "@astrojs/cloudflare";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	output: "hybrid",
	adapter: cloudflare({
		imageService: "compile",
	}),
});
