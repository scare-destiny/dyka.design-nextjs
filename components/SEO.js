import Head from 'next/head'

const SEO = ({ pageTitle, pageDescription }) => {
	return (
		<Head>
			<title>{pageTitle}</title>
			<meta name='description' content={pageDescription} />
			<link rel='icon' href='/favicon.ico' />
		</Head>
	)
}

export default SEO
