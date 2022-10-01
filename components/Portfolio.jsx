import { useEffect } from 'react'
import {chakra, Box, Container, useColorModeValue, Wrap, WrapItem } from '@chakra-ui/react'
import Image from 'next/image'

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


const Portfolio = (props) => {
	const { index } = props
	
	const backgrounds = [
		`url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='102.633' cy='61.0737' rx='102.633' ry='61.0737' fill='%23ED64A6' /%3E%3Cellipse cx='399.573' cy='123.926' rx='102.633' ry='61.0737' fill='%23F56565' /%3E%3Cellipse cx='366.192' cy='73.2292' rx='193.808' ry='73.2292' fill='%2338B2AC' /%3E%3Cellipse cx='222.705' cy='110.585' rx='193.808' ry='73.2292' fill='%23ED8936' /%3E%3C/svg%3E")`,
		`url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ED8936'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%2348BB78'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%230BC5EA'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%23ED64A6'/%3E%3C/svg%3E")`,
		`url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='102.633' cy='61.0737' rx='102.633' ry='61.0737' fill='%23ED8936'/%3E%3Cellipse cx='399.573' cy='123.926' rx='102.633' ry='61.0737' fill='%2348BB78'/%3E%3Cellipse cx='366.192' cy='73.2292' rx='193.808' ry='73.2292' fill='%230BC5EA'/%3E%3Cellipse cx='222.705' cy='110.585' rx='193.808' ry='73.2292' fill='%23ED64A6'/%3E%3C/svg%3E")`,
		`url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ECC94B'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%239F7AEA'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%234299E1'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%2348BB78'/%3E%3C/svg%3E")`,
	]

	
	return (
		<Box p={4}  overflow='hidden' minH='100vh'>
			<Container 	pb={10} align='center'>
			<chakra.h3
					fontFamily={'Work Sans'}
					fontWeight={'bold'}
					fontSize={20}
					textTransform={'uppercase'}
					color={'#C1AC8D'}
				>
					Testimonials
				</chakra.h3>
				<chakra.h1
					py={5}
					fontSize={48}
					fontFamily={'Work Sans'}
					fontWeight={'bold'}
					color={useColorModeValue('gray.700', 'gray.50')}
				>
					What my clients say
				</chakra.h1>
				<chakra.h2
					margin={'auto'}
					width={'70%'}
					fontFamily={'Inter'}
					fontWeight={'medium'}
					color={useColorModeValue('gray.500', 'gray.400')}
				>
					See why over{' '}
					<chakra.strong color={useColorModeValue('gray.700', 'gray.50')}>
						50
					</chakra.strong>{' '}
					clients love my work
				</chakra.h2>
				</Container>
				<Wrap px='1rem' spacing={4} justify='center'>
					{contents.map((picture, index) => (
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
