import { component, defineMarkdocConfig, nodes } from "@astrojs/markdoc/config";

export default defineMarkdocConfig({
	nodes: {
		document: {
			...nodes.document, // Apply defaults for other options
			render: null, // default 'article'
		},
		heading: {
			attributes: {
				...nodes.heading.attributes, // Use the correct base attributes for a heading
				// Additional custom attributes if needed
				title: { type: String, render: "title" },
				level: { type: Number, render: "level" },
			},
			render: component("./src/components/primitives/Title.astro"),
		},
	},
	tags: {
		Container: {
			attributes: {
				class: { type: String, render: "class" },
			},
			children: ["*"],
			render: component("./src/components/primitives/Container.astro"),
		},
		ContainerFluid: {
			attributes: {
				class: { type: String, render: "class" },
			},
			children: ["*"],
			render: component("./src/components/primitives/ContainerFluid.astro"),
		},
		Prose: {
			attributes: {
				class: { type: String, render: "class" },
			},
			children: ["*"],
			render: component("./src/components/primitives/Prose.astro"),
		},
		Flex: {
			attributes: {
				class: { type: String, render: "class" },
				direction: { type: String, render: "direction" },
				verticalAlign: { type: String, render: "verticalAlign" },
				horizontalAlign: { type: String, render: "horizontalAlign" },
				itemsAlignment: { type: String, render: "itemsAlignment" },
				gap: { type: Number, render: "gap" },
				wrap: { type: Boolean, render: "wrap" },
			},
			children: ["*"],
			render: component("./src/components/primitives/Flex.astro"),
		},
		ContactWithForm: {
			attributes: {
				title: { type: String, render: "title", required: true },
				subtitle: { type: String, render: "subtitle", required: true },
				email: { type: String, render: "email", required: true },
				phone: { type: String, render: "phone", required: true },
				timetables: { type: Array, render: "timetables" },
			},
			render: component("./src/components/sections/ContactWithForm.astro"),
		},
		ContactWithMap: {
			attributes: {
				title: { type: String, render: "title", required: true },
				subtitle: { type: String, render: "subtitle", required: true },
				contacts: { type: Object, render: "contacts", required: true },
				map: { type: Object, render: "map", required: true },
			},
			render: component("./src/components/sections/ContactWithMap.astro"),
		},
		Hero: {
			attributes: {
				title: { type: String, render: "title", required: true },
				subtitle: { type: String, render: "subtitle", required: true },
				reviews: { type: Object, render: "reviews", required: true },
				location: { type: Object, render: "location", required: false },
				buttons: { type: Array, render: "buttons", required: true },
				imagePath: { type: String, render: "imagePath", required: true },
				slot: { type: String, render: "slot", required: false },
			},
			render: component("./src/components/sections/Hero.astro"),
		},
		Highlights: {
			attributes: {
				highlights: { type: Array, render: "highlights", required: true },
			},
			render: component("./src/components/sections/Highlights.astro"),
		},
		Testimonials: {
			attributes: {
				title: { type: String, render: "title", required: true },
				subtitle: { type: String, render: "subtitle", required: true },
				testimonials: { type: Array, render: "testimonials", required: true },
			},
			render: component("./src/components/sections/Testimonials.astro"),
		},
		Advantages: {
			attributes: {
				title: { type: String, render: "title", required: true },
				subtitle: { type: String, render: "subtitle", required: true },
				buttons: { type: Array, render: "buttons", required: true },
				advantages: { type: Array, render: "advantages", required: true },
			},
			render: component("./src/components/sections/Advantages.astro"),
		},
		PopularServices: {
			attributes: {
				title: { type: String, render: "title", required: true },
				subtitle: { type: String, render: "subtitle", required: true },
				services: { type: Array, render: "services", required: true },
			},
			render: component("./src/components/sections/PopularServices.astro"),
		},
		ImageAside: {
			attributes: {
				title: { type: String, render: "title", required: true },
				description: { type: String, render: "description", required: true },
				image: { type: Object, render: "image", required: true },
				link: { type: Object, render: "link", required: false },
			},
			render: component("./src/components/sections/ImageAside.astro"),
		},
		TitleImage: {
			attributes: {
				title: { type: String, render: "title", required: true },
				subtitle: { type: String, render: "subtitle", required: true },
				image: { type: Object, render: "image", required: true },
				link: { type: Object, render: "link", required: false },
			},
			render: component("./src/components/sections/TitleImage.astro"),
		},
		FeatureList: {
			attributes: {
				title: { type: String, render: "title", required: true },
				subtitle: { type: String, render: "subtitle", required: true },
				features: { type: Array, render: "features", required: true },
			},
			render: component("./src/components/sections/FeatureList.astro"),
		},
		PostList: {
			attributes: {},
			render: component("./src/components/sections/PostList.astro"),
		},
		Results: {
			attributes: {
				results: { type: Array, render: "results", required: true },
			},
			render: component("./src/components/sections/Results.astro"),
		},
		Vision: {
			attributes: {
				title: { type: String, render: "title", required: true },
				description: { type: String, render: "description", required: true },
			},
			render: component("./src/components/sections/Vision.astro"),
		},
		Values: {
			attributes: {
				title: { type: String, render: "title", required: true },
				subtitle: { type: String, render: "subtitle", required: true },
				values: { type: Array, render: "values", required: true },
			},
			render: component("./src/components/sections/Values.astro"),
		},
		Team: {
			attributes: {
				title: { type: String, render: "title", required: true },
				subtitle: { type: String, render: "subtitle", required: true },
				team: { type: Array, render: "team", required: true },
			},
			render: component("./src/components/sections/Team.astro"),
		},
		Book: {
			attributes: {},
			render: component("./src/components/sections/Book.astro"),
		},
		Pricing: {
			attributes: {},
			render: component("./src/components/sections/Pricing.astro"),
		},
		Feedback: {
			attributes: {},
			render: component("./src/components/sections/Feedback.astro"),
		},
		SpecialOffer: {
			attributes: {
				title: { type: String, render: "title", required: true },
				subtitle: { type: String, render: "subtitle", required: false },
				promo: { type: Object, render: "promo", required: false },
			},
			render: component("./src/components/sections/SpecialOffer.astro"),
		},
		PromoVideo: {
			attributes: {
				title: { type: String, render: "title", required: true },
				subtitle: { type: String, render: "subtitle", required: true },
				videoPath: { type: String, render: "videoPath", required: true },
			},
			render: component("./src/components/sections/PromoVideo.astro"),
		},
	},
});
