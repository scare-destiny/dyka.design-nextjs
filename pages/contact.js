import {
	Navbar,
	ContactForm,
	SEO,
	BackgroundImage,
	Animation,
	Footer,
} from '../components'
import image from '../public/assets/commercial-4.webp'

const Contact = () => {
	return (
		<>
			<SEO
				pageTitle='Dyka Design - Contact Me'
				pageDescription='Ready to turn your idea into reality? Write to me and let&#39;s chat.'
			/>
			<Navbar />
			<Animation>
				<BackgroundImage
					// TODO ADD INTERNAL IMAGE INSTEAD OF DOWNLOADED
					image={image}
					priority={true}
					alt='art image'
					backgroundPosition={'center center'}
					text='Work With Me'
					buttonText='Contact'
				/>
			</Animation>
			<Animation>
				<ContactForm />
			</Animation>
			<Footer
				header={'Do you want to turn your project into reality?'}
				cta='So contact'
			/>
		</>
	)
}

export default Contact
