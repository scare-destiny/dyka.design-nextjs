import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const fadeIn = {
	visible: { opacity: 1, scale: 1, transition: { duration: 0.9 } },
	hidden: { opacity: 0, scale: 1 },
}

export default function Animation({ children }) {
	const control = useAnimation()
	const [ref, inView] = useInView({})

	useEffect(() => {
		if (inView) {
			control.start('visible')
		} else {
			control.start('hidden')
		}
	}, [control, inView])

	return (
		<motion.div ref={ref} variants={fadeIn} initial='hidden' animate={control}>
			{children}
		</motion.div>
	)
}
