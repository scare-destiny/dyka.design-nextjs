import { Navbar, Features, SEO, Animation, Footer } from '../components'

const About = () => {
	return (
		<>
			<SEO
				pageTitle='Dyka Design - About Me'
				pageDescription='Read more about my story and work ethic. '
			/>
			<Navbar />
			<Animation>
				<Features />
			</Animation>
			<Footer />
		</>
	)
}

export default About
