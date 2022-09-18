import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { Heading } from '../containers/index'
import Image from 'next/image'
import styles from './scrollTrigger.module.css'

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

// Source - https://codepen.io/noeldelgado/pen/BaogqYy
const Portfolio = () => {
	gsap.registerPlugin(ScrollTrigger)

	useEffect(() => {
		let i = 0
		const polygonFrom = 'polygon(0% 100%, 100% 100%, 100% 200%, 0% 200%)'
		const polygonTo = 'polygon(0% -100%, 100% -100%, 100% 0%, 0% 0%)'
		// const polygonFrom = 'polygon(0% 100%, 100% 120%, 100% 220%, 0% 200%)'
		// const polygonTo = 'polygon(0% -120%, 100% -100%, 100% 0%, 0% -20%)'
		console.log(contents.length)
		for (i = 0; i < contents.length; i++) {
			gsap.fromTo(
				'.section:nth-child(' + (i + 1) + ') .title',
				{
					clipPath: polygonFrom,
				},
				{
					clipPath: polygonTo,
					ease: 'linear',
					scrollTrigger: {
						// markers: true,
						trigger: '.section:nth-child(' + (i + 1) + ')',
						start: 'top center+=300px',
						end: 'bottom-=300px top',
						scrub: true,
					},
				},
			)

			gsap.fromTo(
				'.section:nth-child(' + (i + 1) + ') .graphic',
				{
					clipPath: polygonFrom,
					backgroundPositionY: '60px',
				},
				{
					clipPath: polygonTo,
					backgroundPositionY: '-60px',
					ease: 'linear',
					scrollTrigger: {
						// markers: true,
						trigger: '.section:nth-child(' + (i + 1) + ')',
						start: 'top bottom',
						end: 'bottom top',
						scrub: true,
					},
				}
			)
		}
	}, [])
	return (
		<div className={styles.mainContainer}>
			<div className={styles.demoWrapper}>
				<section className={styles.demoText}>
					<div className={styles.wrapper}>Commercial Projects</div>
				</section>
				<section className={styles.demoGallery}>
					<ul className={styles.wrapper}>
						<li>
							<Image
								width='526'
								height='370'
								layout='responsive'
								src={commercial1}
								alt='portfolio image'
							/>
						</li>
						<li>
							<Image
								width='526'
								height='370'
								layout='responsive'
								src={commercial2}
								alt='portfolio image'
							/>
						</li>
						<li>
							<Image
								width='526'
								height='370'
								layout='responsive'
								src={commercial3}
								alt='portfolio image'
							/>
						</li>
					</ul>
				</section>
				<section className={styles.demoGallery}>
					<ul className={styles.wrapper}>
						<li>
							<Image
								width='526'
								height='370'
								layout='responsive'
								src={commercial4}
								alt='portfolio image'
							/>
						</li>
						<li>
							<Image
								width='526'
								height='370'
								layout='responsive'
								src={commercial5}
								alt='portfolio image'
							/>
						</li>
						<li>
							<Image
								width='526'
								height='370'
								layout='responsive'
								src={commercial6}
								alt='portfolio image'
							/>
						</li>
					</ul>
				</section>
				<section className={styles.demoGallery}>
					<ul className={styles.wrapper}>
						<li>
							<Image
								width='526'
								height='370'
								layout='responsive'
								src={commercial7}
								alt='portfolio image'
							/>
						</li>
						<li>
							<Image
								width='526'
								height='370'
								layout='responsive'
								src={commercial8}
								alt='portfolio image'
							/>
						</li>
						<li>
							<Image
								width='526'
								height='370'
								layout='responsive'
								src={commercial9}
								alt='portfolio image'
							/>
						</li>
					</ul>
				</section>
				<section className={styles.demoText}>
					<div className={styles.wrapper}></div>
				</section>
			</div>
		</div>
	)
}

export default Portfolio
