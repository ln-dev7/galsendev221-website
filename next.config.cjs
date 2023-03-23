/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'propel.community',
			},
			{
				protocol: 'https',
				hostname: 'xarala.co',
			},
		],
	},
};

module.exports = nextConfig;