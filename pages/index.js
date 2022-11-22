import Head from 'next/head'
import {
	Navbar,
	BackgroundImage,
	About,
	Footer,
	Testimonials,
	Gallery,
	Animation,
	SEO,
} from '../components'
import image from '../public/assets/commercial-3.webp'

export default function Home() {
	return (
		<>
			<SEO
				pageTitle='Dyka Design - Main Page'
				pageDescription='Welcome to the Dyka Design website, professional interior architect and designer. I create beautiful interior design projects and turn your ideas into reality. Take a peek at my projects and get to know me better.'
			/>
			<Navbar />
			{/* // TODO ADD INTERNAL IMAGE INSTEAD OF DOWNLOADED */}
			<Animation>
				<BackgroundImage
					image={image}
					alt='le jardin shop'
					backgroundPosition={'center center'}
					priority={true}
				/>
			</Animation>
			<Animation>
				<About />
			</Animation>
			<Animation>
				<Testimonials />
			</Animation>
			<Animation>
				<Gallery />
			</Animation>
			<Footer />
		</>
	)
}
