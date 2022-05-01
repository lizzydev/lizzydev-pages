import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === "development";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs'
		}),
        paths: {
            // change below to your repo name
            base: dev ? '' : '/lizzydev-pages',
        },
		prerender: {
			default: true
		}
	}
};

export default config;
