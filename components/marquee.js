import React from 'react'
import Image from 'next/image'
import styles from './Gallery.module.css'
import image1 from '../public/assets/gallery-1.webp'
import image2 from '../public/assets/gallery-2.webp'
import image3 from '../public/assets/gallery-3.webp'
import image4 from '../public/assets/gallery-4.webp'
import image5 from '../public/assets/gallery-5.webp'
const Marquee = () => {
	return (
		<>
			<div className={styles.marquee}>
				<div className={styles.marquee__group}>
					<Image src={image1} alt='' />
					<Image src={image2} alt='marquee image' />
					<Image src={image3} alt='marquee image' />
					<Image src={image4} alt='marquee image' />
					<Image src={image5} alt='marquee image' />
				</div>
				<div aria-hidden='true' className={styles.marquee__group}>
					<Image src={image1} alt='marquee image' />
					<Image src={image2} alt='marquee image' />
					<Image src={image3} alt='marquee image' />
					<Image src={image4} alt='marquee image' />
					<Image src={image5} alt='marquee image' />
				</div>
			</div>
		</>
	)
}

export default Marquee
