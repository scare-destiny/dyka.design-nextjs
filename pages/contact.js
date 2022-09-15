import { Navbar, BackgroundImage, ContactForm, Footer } from '../components'
import Image from 'next/image'

// TODO https://uharston.medium.com/next-js-image-optimization-on-background-images-65de18ea03f5
const Contact = () => {
	return (
		<>
			<Navbar />
			{/* <BackgroundImage
				image='https://mir-s3-cdn-cf.behance.net/project_modules/fs/6f4b1a113393045.6026a9d2a3d7c.jpg'
				text="Let's make a beatiful design for you"
				buttonText='Contact Me'
				backgroundPosition={'center center'}
			/> */}
			<ContactForm />
			<Footer
				header={'Do you want to turn your project into reality?'}
				cta='So contact'
			/>
			<Image
				src='https://mir-s3-cdn-cf.behance.net/project_modules/fs/6f4b1a113393045.6026a9d2a3d7c.jpg'
				alt='test'
				layout='fill'
				objectFit='cover'
				objectPosition={'center'}
			/>
		</>
	)
}

export default Contact
