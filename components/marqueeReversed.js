import React from 'react'
import Image from 'next/image'
import styles from './Gallery.module.css'
import image6 from '../public/assets/gallery-6.webp'
import image7 from '../public/assets/gallery-7.webp'
import image8 from '../public/assets/gallery-8.webp'
import image9 from '../public/assets/gallery-9.webp'
import image10 from '../public/assets/gallery-10.webp'
const Marquee = () => {
	return (
		<>
			<div className={styles.marquee}>
				<div className={styles.marquee__group}>
					<Image
						src={image6}
						alt=''
					/>
					<Image
						src={image7}
						alt='marquee image'
					/>
					<Image
						src={image8}
						alt='marquee image'
					/>
					<Image
						src={image9}
						alt='marquee image'
					/>
					<Image
						src={image10}
						alt='marquee image'
					/>
				</div>
				<div aria-hidden='true' className={styles.marquee__group}>
					<Image
						src={image6}
						alt='marquee image'
					/>
					<Image
						src={image7}
						alt='marquee image'
					/>
					<Image
						src={image8}
						alt='marquee image'
					/>
					<Image
						src={image9}
						alt='marquee image'
					/>
					<Image
						src={image10}
						alt='marquee image'
					/>
				</div>
			</div>
		</>
	)
}

export default Marquee
