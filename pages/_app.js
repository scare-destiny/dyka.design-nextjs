// pages/_app.js
import { Analytics } from '@vercel/analytics/react'
import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider>
			<Component {...pageProps} />
			<Analytics />
		</ChakraProvider>
	)
}

export default MyApp
