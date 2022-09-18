import { useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { Heading } from '../containers/index'
import Image from 'next/image'
import styles from './Portfolio.module.css'

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
const contents = [
	{
		title: 'Проєкт намбер 1',
		image: commercial1,
	},
	{
		title: 'Проєкт намбер 1',
		image: commercial2,
	},
	{
		title: 'Проєкт намбер 1',
		image: commercial3,
	},
	{
		title: 'Проєкт намбер 1',
		image: commercial4,
	},
	{
		title: 'Проєкт намбер 2',
		image: commercial5,
	},
	{
		title: 'Проєкт намбер 2',
		image: commercial6,
	},
	{
		title: 'Проєкт намбер 3',
		image: commercial7,
	},
	{
		title: 'Проєкт намбер 3',
		image: commercial8,
	},
	{
		title: 'Проєкт намбер 3',
		image: commercial9,
	},
	{
		title: 'Проєкт намбер 3',
		image: commercial10,
	},
]
// TODO SERVER DIFFERENT IMAGES FOR mobile
const PortfolioNew = () => {
	gsap.registerPlugin(ScrollTrigger)

	useLayoutEffect(() => {
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
						start: 'top center',
						end: 'bottom top',
						scrub: true,
					},
				},
			)

			gsap.fromTo(
				'.section:nth-child(' + (i + 1) + ') .coolImg',
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
	// TODO ADD Inline Styles For Title
	return (
		<div className={styles.scrollTriggerContainer}>
			<div className='app'>
				{contents.map((content, index) => (
					<section className='section' key={index}>
						<h1 className={'title'} id='title'>
							{content.title}
						</h1>
						<style jsx>{`
							.title {
								position: fixed;
								bottom: 100px;
								left: 50px;
								z-index: 2;
								color: #fff;
								font-family: 'Dosis', sans-serif;
								font-size: 3rem;
								overflow: hidden;
							}
						`}</style>
						<div
							className='test'
							// style={{
							// 	backgroundImage: `url(${commercial1})`,
							// 	width: '100%',
							// 	height: '100%',
							// }}
						>
							<Image src={content.image} alt='portfolio image' className='coolImg' />
						</div>
						<style jsx>
							{`
								.coolImg {
									position: fixed;
									top: 0;
									left: 0;
									z-index: 1;
									width: 100vw;
									height: 100vh;
									background-size: cover;
								}
								,
								.section {
									position: relative;
									width: 100%;
									height: 100vh;
									background-size: cover;
								}
							`}
						</style>
					</section>
				))}
			</div>
		</div>
	)
}

export default PortfolioNew
