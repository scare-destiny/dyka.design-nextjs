import React from 'react'
import Image from 'next/image'
import styles from './Gallery.module.css'
import image1 from '../public/assets/gallery-1.webp'
import image2 from '../public/assets/gallery-2.webp'
import image3 from '../public/assets/gallery-3.webp'
import image4 from '../public/assets/gallery-4.webp'
import image5 from '../public/assets/gallery-5.webp'
import image6 from '../public/assets/gallery-6.webp'
import image7 from '../public/assets/gallery-7.webp'
import image8 from '../public/assets/gallery-8.webp'
import image9 from '../public/assets/gallery-9.webp'
import image10 from '../public/assets/gallery-10.webp'

const Gallery = () => {
	return (
			<div className={styles.container}>
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
			<div className={styles.marquee} id='marqueeReversed' >
				<div className={styles.marquee__group}>
					<Image src={image6} alt='' />
					<Image src={image7} alt='marquee image' />
					<Image src={image8} alt='marquee image' />
					<Image src={image9} alt='marquee image' />
					<Image src={image10} alt='marquee image' />
				</div>
				<div aria-hidden='true' className={styles.marquee__group}>
					<Image src={image6} alt='marquee image' />
					<Image src={image7} alt='marquee image' />
					<Image src={image8} alt='marquee image' />
					<Image src={image9} alt='marquee image' />
					<Image src={image10} alt='marquee image' />
				</div>
				<style jsx>{`
        #marqueeReversed {
      		animation-direction: reverse;
					animation-delay: calc(var(--duration) / -2);
					@keyframes scroll {
						0% {
							transform: translateX(0);
						}
					
						100% {
							transform: translateX(calc(-100% - var(--gap)));
						}
					}
        }

      `}</style>
			</div>
		</div>
		
	)
}

export default Gallery
