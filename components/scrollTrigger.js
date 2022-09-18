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
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger)
		const images = gsap.utils.toArray('img')
		const showDemo = () => {
			// document.body.style.overflow = 'auto'
			// document.scrollingElement.scrollTo(0, 0)
			console.log(gsap.utils.toArray('section'))
			gsap.utils.toArray('section').forEach((section, index) => {
				const w = section.querySelector('.scrollTrigger_wrapper__hOkTR')
				const [x, xEnd] =
					index % 2
						? ['100%', (w.scrollWidth - section.offsetWidth) * -1]
						: [w.scrollWidth * -1, 0]
				gsap.fromTo(
					w,
					{ x },
					{
						x: xEnd,
						scrollTrigger: {
							trigger: section,
							scrub: 0.3,
						},
					}
				)
			})
		}
		ScrollTrigger.getAll().forEach((t) => t.kill())
		showDemo()
		return () => {
			ScrollTrigger.getAll().forEach((t) => t.kill())
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
					<div className={styles.wrapper}>COMMERCIAL PROJECTS</div>
				</section>
			</div>
		</div>
	)
}

export default Portfolio
