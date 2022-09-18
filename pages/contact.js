import { Navbar, ContactForm, Footer, BackgroundImage } from '../components'
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
			<ContactForm />
			<Footer
				header={'Do you want to turn your project into reality?'}
				cta='So contact'
			/>
		</>
	)
}

export default Contact
