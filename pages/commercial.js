import { Navbar, Footer, BackgroundImage, Portfolio } from '../components'
import image from '../public/assets/commercial-4.webp'
import commercialImages from '../public'

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
			<Portfolio
				images={commercialImages}
				heading='Commercial Projects'
				subheading=''
			/>
			<Footer />
		</>
	)
}

export default Contact
