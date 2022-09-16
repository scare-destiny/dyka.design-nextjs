import Marquee from './marquee'
import MarqueeReversed from './marqueeReversed'
import styles from './Gallery.module.css'

const Gallery = () => {
	return (
		<div className={styles.container}>
			<Marquee />
			<MarqueeReversed />
		</div>
	)
}

export default Gallery
