import {
	chakra,
	Box,
	Container,
	useColorModeValue,
	Wrap,
	WrapItem,
} from '@chakra-ui/react'
import { useState } from 'react'
import Image from 'next/image'
import styles from './About.module.css'


const Portfolio = (props) => {
	const { index, images, heading, subheading } = props

	// TODO ADD BLUR

	return (
		<Box p={4} overflow='hidden' minH='100vh'>
			<Container pb={10} align='center'>
				<chakra.h1
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
				</chakra.h2>
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
						<Image
							src={picture.image}
							key={index}
							alt={picture.title}
							width={630}
							height={450}
						/>
					</WrapItem>
				))}
			</Wrap>
		</Box>
	)
}

export default Portfolio
