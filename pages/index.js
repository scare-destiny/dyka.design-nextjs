import Head from 'next/head'
import {
	Navbar,
	BackgroundImage,
	About,
	Footer,
	Testimonials,
	Gallery,
} from '../components'
import image from '../public/assets/commercial-3.webp'

export default function Home() {
	return (
		<>
			<Head>
				<title>Dyka Design</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Navbar />
			{/* // TODO ADD INTERNAL IMAGE INSTEAD OF DOWNLOADED */}
			<BackgroundImage
				image={image}
				alt='le jardin shop'
				backgroundPosition={'center center'}
				priority={true}
			/>
			<About />
			<Testimonials />
			<Gallery />
			<Footer />
		</>
	)
}
