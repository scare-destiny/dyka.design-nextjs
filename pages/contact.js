import { Navbar, ContactForm, Footer, BackgroundImage } from '../components'
import Image from 'next/image'


const Contact = () => {
	return (
		<>
			<Navbar />
			<BackgroundImage
				// TODO ADD INTERNAL IMAGE INSTEAD OF DOWNLOADED
				image='https://mir-s3-cdn-cf.behance.net/project_modules/fs/6f4b1a113393045.6026a9d2a3d7c.jpg'
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
