/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['mir-s3-cdn-cf.behance.net', 'source.unsplash.com' ],
	},
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
})

;(module.exports = nextConfig), withBundleAnalyzer({})
