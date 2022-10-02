import { Heading, Box, Container, Wrap, WrapItem } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'

const Portfolio = (props) => {
	const { index, images, heading, subheading } = props

	// TODO ADD BLUR

	return (
		<Box p={4} overflow='hidden' minH='100vh'>
			<Container pb={10} align='center'>
				<Heading as='h1' size='4xl' color='yellow.700'>
					{heading}
				</Heading>
				{/* <chakra.h1
					py={5}
					fontSize={48}
					fontFamily={'Work Sans'}
					fontWeight={'bold'}
					color={useColorModeValue('gray.700', 'gray.50')}
				>
					{heading}
				</chakra.h1>
				<chakra.h2
					margin={'auto'}
					width={'70%'}
					fontFamily={'Inter'}
					fontWeight={'medium'}
					color={useColorModeValue('gray.500', 'gray.400')}
				>
					{subheading}
				</chakra.h2> */}
			</Container>
			<Wrap px='1rem' spacing={4} justify='center'>
				{images.map((picture, index) => (
					<WrapItem
						key={index}
						boxShadow='base'
						rounded='20px'
						overflow='hidden'
						bg='white'
						lineHeight='0'
						_hover={{ boxShadow: 'dark-lg' }}
					>
						<Link href={`/commercial/photos/${picture.id}`} target='_blank'>
							<a target='_blank'>
								<Image
									src={picture.image}
									key={index}
									alt={picture.title}
									width={630}
									height={450}
								/>
							</a>
						</Link>
					</WrapItem>
				))}
			</Wrap>
		</Box>
	)
}

export default Portfolio
