import { Navbar, ContactForm, Footer, BackgroundImage, ScrollTrigger } from '../components'
import image from '../public/assets/commercial-4.webp'


const Contact = () => {
	return (
		<>
			<Navbar />
			<BackgroundImage
				// TODO ADD INTERNAL IMAGE INSTEAD OF DOWNLOADED
				image={image}
				priority={true}
				alt='art image'
				backgroundPosition={'center center'}
				text='test'
				buttonText='Contact Me'
			/>
			<ScrollTrigger/>
			<Footer />
		</>
	)
}

export default Contact
