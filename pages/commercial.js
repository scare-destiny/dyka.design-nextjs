import { Navbar, Footer, BackgroundImage, SEO, Portfolio } from '../components'
import image from '../public/assets/commercial-4.webp'
import commercialImages from '../public'

const Contact = () => {
	return (
		<>
			<SEO
				pageDescription='Dyka Design - Commercial Projects'
				pageTitle='Selection of the commercial projects I&#39;ve created for my clients. Made with love.'
			/>
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
