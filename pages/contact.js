import { Navbar, ContactForm, Footer, BackgroundImage } from '../components'
import Image from 'next/image'

// TODO https://uharston.medium.com/next-js-image-optimization-on-background-images-65de18ea03f5
const Contact = () => {
	return (
		<>
			<Navbar />
			<BackgroundImage image='https://mir-s3-cdn-cf.behance.net/project_modules/fs/6f4b1a113393045.6026a9d2a3d7c.jpg' backgroundPosition={'center center'} text='test' buttonText='Contact Me' />
			<ContactForm />
			<Footer
				header={'Do you want to turn your project into reality?'}
				cta='So contact'
			/>
		</>
	)
}

export default Contact
