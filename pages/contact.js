import {
	Navbar,
	BackgroundImage,
	ContactForm,
	Footer,
} from '../components'

const Contact = () => {
	return (
		<>
			<Navbar />
			<BackgroundImage
        image='https://mir-s3-cdn-cf.behance.net/project_modules/fs/6f4b1a113393045.6026a9d2a3d7c.jpg'
        text="Let's make a beatiful design for you"
				buttonText='Contact Me'
				backgroundPosition={'center center'}
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
