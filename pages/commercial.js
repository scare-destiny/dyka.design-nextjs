import { Navbar, Footer, BackgroundImage, Portfolio } from '../components'
import image from '../public/assets/commercial-4.webp'

import commercial1 from '../public/assets/commercial-1.webp'
import commercial2 from '../public/assets/commercial-2.webp'
import commercial3 from '../public/assets/commercial-3.webp'
import commercial4 from '../public/assets/commercial-4.webp'
import commercial5 from '../public/assets/commercial-5.webp'
import commercial6 from '../public/assets/commercial-6.webp'
import commercial7 from '../public/assets/commercial-7.webp'
import commercial8 from '../public/assets/commercial-8.webp'
import commercial9 from '../public/assets/commercial-9.webp'
import commercial10 from '../public/assets/commercial-10.webp'



const Contact = () => {

	const commercialImages = [
		{
			title: 'Проєкт намбер 10',
			image: commercial1,
	
			id: 0,
		},
		{
			title: 'Проєкт намбер 1',
			image: commercial2,
			id: 1,
		},
		{
			title: 'Проєкт намбер 1',
			image: commercial3,
			id: 2,
		},
		{
			title: 'Проєкт намбер 1',
			image: commercial4,
			id: 3,
		},
		{
			title: 'Проєкт намбер 2',
			image: commercial5,
			id: 4,
		},
		{
			title: 'Проєкт намбер 2',
			image: commercial6,
			id: 5,
		},
		{
			title: 'Проєкт намбер 3',
			image: commercial7,
			id: 6,
		},
		{
			title: 'Проєкт намбер 3',
			image: commercial8,
			id: 7,
		},
		{
			title: 'Проєкт намбер 3',
			image: commercial9,
			id: 8,
		},
		{
			title: 'Проєкт намбер 3',
			image: commercial10,
			id: 9,
		},
	]

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
			<Portfolio images={commercialImages} heading='Commercial Projects' subheading=''/>
			<Footer />
		</>
	)
}

export default Contact
