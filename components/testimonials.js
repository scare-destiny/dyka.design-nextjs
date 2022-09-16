import {
	Avatar,
	Box,
	chakra,
	Flex,
	Icon,
	SimpleGrid,
	useColorModeValue,
} from '@chakra-ui/react'

const testimonials = [
	{
		name: 'Sasha',
		content:
			"Anastasiia is an absolutely phenomenal professional. She has delivered above and beyond and we're very excited to work with her even more in the future. We have asked for the decor for part of our office, but looking to get more done now after seeing what she has delivered",
		avatar: (
			<svg
				viewBox='0 0 36 36'
				fill='none'
				role='img'
				xmlns='http://www.w3.org/2000/svg'
				width='80'
				height='80'
			>
				<title>Amelia Boynton</title>
				<mask
					id='mask__beam'
					maskUnits='userSpaceOnUse'
					x='0'
					y='0'
					width='36'
					height='36'
				>
					<rect width='36' height='36' rx='72' fill='#FFFFFF'></rect>
				</mask>
				<g mask='url(#mask__beam)'>
					<rect width='36' height='36' fill='#c1ac8d'></rect>
					<rect
						x='0'
						y='0'
						width='36'
						height='36'
						transform='translate(6 6) rotate(332 18 18) scale(1.2)'
						fill='#000000'
						rx='6'
					></rect>
					<g transform='translate(4 3) rotate(-2 18 18)'>
						<path d='M13,21 a1,0.75 0 0,0 10,0' fill='#FFFFFF'></path>
						<rect
							x='12'
							y='14'
							width='1.5'
							height='2'
							rx='1'
							stroke='none'
							fill='#FFFFFF'
						></rect>
						<rect
							x='22'
							y='14'
							width='1.5'
							height='2'
							rx='1'
							stroke='none'
							fill='#FFFFFF'
						></rect>
					</g>
				</g>
			</svg>
		),
	},
	{
		name: 'Kristina',
		content:
			'Amazing work! Anastasiia is super responsive, quick and professional. The result is far beyond of what we could have expected, we are really happy and could only highly recommend!',
		avatar: (
			<svg
				viewBox='0 0 36 36'
				fill='none'
				role='img'
				xmlns='http://www.w3.org/2000/svg'
				width='80'
				height='80'
			>
				<title>Betty Ford</title>
				<mask
					id='mask__beam'
					maskUnits='userSpaceOnUse'
					x='0'
					y='0'
					width='36'
					height='36'
				>
					<rect width='36' height='36' rx='72' fill='#FFFFFF'></rect>
				</mask>
				<g mask='url(#mask__beam)'>
					<rect width='36' height='36' fill='#0c8f8f'></rect>
					<rect
						x='0'
						y='0'
						width='36'
						height='36'
						transform='translate(-1 -1) rotate(205 18 18) scale(1.1)'
						fill='#c1ac8d'
						rx='36'
					></rect>
					<g transform='translate(-5 -3) rotate(5 18 18)'>
						<path
							d='M15 20c2 1 4 1 6 0'
							stroke='#000000'
							fill='none'
							stroke-linecap='round'
						></path>
						<rect
							x='14'
							y='14'
							width='1.5'
							height='2'
							rx='1'
							stroke='none'
							fill='#000000'
						></rect>
						<rect
							x='20'
							y='14'
							width='1.5'
							height='2'
							rx='1'
							stroke='none'
							fill='#000000'
						></rect>
					</g>
				</g>
			</svg>
		),
	},
	{
		name: 'Darcy L.',
		content:
			"Second time working with Anastasiia on a project and it's even better than the last. Very impressed with her work and communication. Strongly recommended as a true professional",
		avatar: (
			<svg
				viewBox='0 0 36 36'
				fill='none'
				role='img'
				xmlns='http://www.w3.org/2000/svg'
				width='80'
				height='80'
			>
				<title>Christa McAuliffe</title>
				<mask
					id='mask__beam'
					maskUnits='userSpaceOnUse'
					x='0'
					y='0'
					width='36'
					height='36'
				>
					<rect width='36' height='36' rx='72' fill='#FFFFFF'></rect>
				</mask>
				<g mask='url(#mask__beam)'>
					<rect width='36' height='36' fill='#ffffff'></rect>
					<rect
						x='0'
						y='0'
						width='36'
						height='36'
						transform='translate(4 4) rotate(190 18 18) scale(1.1)'
						fill='#c1ac8d'
						rx='6'
					></rect>
					<g transform='translate(6 4) rotate(0 18 18)'>
						<path d='M13,20 a1,0.75 0 0,0 10,0' fill='#000000'></path>
						<rect
							x='14'
							y='14'
							width='1.5'
							height='2'
							rx='1'
							stroke='none'
							fill='#000000'
						></rect>
						<rect
							x='20'
							y='14'
							width='1.5'
							height='2'
							rx='1'
							stroke='none'
							fill='#000000'
						></rect>
					</g>
				</g>
			</svg>
		),
	},
	{
		name: 'Yaiza',
		content:
			'Anastasiia was a pleasure to work with on this project. The communication was great and in a timely manner and the end result was excellent. I would recommend her to anyone. We are already working on another project together.',
		avatar: (
			<svg
				viewBox='0 0 36 36'
				fill='none'
				role='img'
				xmlns='http://www.w3.org/2000/svg'
				width='80'
				height='80'
			>
				<title>Amelia Boynton</title>
				<mask
					id='mask__beam'
					maskUnits='userSpaceOnUse'
					x='0'
					y='0'
					width='36'
					height='36'
				>
					<rect width='36' height='36' rx='72' fill='#FFFFFF'></rect>
				</mask>
				<g mask='url(#mask__beam)'>
					<rect width='36' height='36' fill='#c1ac8d'></rect>
					<rect
						x='0'
						y='0'
						width='36'
						height='36'
						transform='translate(6 6) rotate(332 18 18) scale(1.2)'
						fill='#000000'
						rx='6'
					></rect>
					<g transform='translate(4 3) rotate(-2 18 18)'>
						<path d='M13,21 a1,0.75 0 0,0 10,0' fill='#FFFFFF'></path>
						<rect
							x='12'
							y='14'
							width='1.5'
							height='2'
							rx='1'
							stroke='none'
							fill='#FFFFFF'
						></rect>
						<rect
							x='22'
							y='14'
							width='1.5'
							height='2'
							rx='1'
							stroke='none'
							fill='#FFFFFF'
						></rect>
					</g>
				</g>
			</svg>
		),
	},
]

const backgrounds = [
	`url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='102.633' cy='61.0737' rx='102.633' ry='61.0737' fill='%23ED64A6' /%3E%3Cellipse cx='399.573' cy='123.926' rx='102.633' ry='61.0737' fill='%23F56565' /%3E%3Cellipse cx='366.192' cy='73.2292' rx='193.808' ry='73.2292' fill='%2338B2AC' /%3E%3Cellipse cx='222.705' cy='110.585' rx='193.808' ry='73.2292' fill='%23ED8936' /%3E%3C/svg%3E")`,
	`url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ED8936'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%2348BB78'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%230BC5EA'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%23ED64A6'/%3E%3C/svg%3E")`,
	`url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='102.633' cy='61.0737' rx='102.633' ry='61.0737' fill='%23ED8936'/%3E%3Cellipse cx='399.573' cy='123.926' rx='102.633' ry='61.0737' fill='%2348BB78'/%3E%3Cellipse cx='366.192' cy='73.2292' rx='193.808' ry='73.2292' fill='%230BC5EA'/%3E%3Cellipse cx='222.705' cy='110.585' rx='193.808' ry='73.2292' fill='%23ED64A6'/%3E%3C/svg%3E")`,
	`url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ECC94B'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%239F7AEA'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%234299E1'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%2348BB78'/%3E%3C/svg%3E")`,
]

const TestimonialCard = (props) => {
	const { name, content, avatar, index } = props
	return (
		<Flex
			boxShadow={'lg'}
			maxW={'640px'}
			direction={{ base: 'column-reverse', md: 'row' }}
			width={'full'}
			rounded={'xl'}
			p={10}
			justifyContent={'space-between'}
			position={'relative'}
			bg={useColorModeValue('white', 'gray.800')}
			_after={{
				content: '""',
				position: 'absolute',
				height: '21px',
				width: '29px',
				left: '35px',
				top: '-10px',
				backgroundSize: 'cover',
				// backgroundImage:
			}}
			_before={{
				content: '""',
				position: 'absolute',
				zIndex: '-1',
				height: 'full',
				maxW: '640px',
				width: 'full',
				filter: 'blur(40px)',
				transform: 'scale(0.98)',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				top: 0,
				left: 0,
				backgroundImage: backgrounds[index % 4],
				background: '#C1AC8D',
			}}
		>
			<Flex
				direction={'column'}
				textAlign={'left'}
				justifyContent={'space-between'}
			>
				<chakra.p
					fontFamily={'Inter'}
					fontWeight={'medium'}
					fontSize={'15px'}
					pb={4}
				>
					{content}
				</chakra.p>
				<chakra.p fontFamily={'Work Sans'} fontWeight={'bold'} fontSize={14}>
					{name}
				</chakra.p>
			</Flex>
			<Avatar
				icon={avatar}
				height={'80px'}
				width={'80px'}
				alignSelf={'center'}
				m={{ base: '0 0 35px 0', md: '0 0 0 50px' }}
			/>
		</Flex>
	)
}

const Testimonials = () => {
	return (
		<Flex
			textAlign={'center'}
			pt={10}
			pb={10}
			justifyContent={'center'}
			direction={'column'}
			width={'full'}
		>
			<Box width={{ base: 'full', sm: 'lg', lg: 'xl' }} margin={'auto'}>
				<chakra.h3
					fontFamily={'Work Sans'}
					fontWeight={'bold'}
					fontSize={20}
					textTransform={'uppercase'}
					color={'#C1AC8D'}
				>
					CLIENTS&apos LOVE
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
			</Box>
			<SimpleGrid columns={{ base: 1, xl: 2 }} spacing={'20'} mt={16} mx={'auto'}>
				{testimonials.map((cardInfo, index) => (
					<TestimonialCard {...cardInfo} key={index} index={index} />
				))}
			</SimpleGrid>
			<Box>
				<Icon viewBox='0 0 40 35' mt={14} boxSize={10} color={'#C1AC8D'}>
					<path
						fill={'currentColor'}
						d='M10.7964 5.04553e-07C8.66112 -0.000123335 6.57374 0.632971 4.79827 1.81922C3.0228 3.00547 1.63898 4.69158 0.82182 6.66433C0.00466116 8.63708 -0.209132 10.8079 0.207477 12.9021C0.624087 14.9964 1.65239 16.9201 3.16233 18.4299L19.1153 34.3828C19.2395 34.5074 19.3871 34.6062 19.5496 34.6736C19.7121 34.741 19.8863 34.7757 20.0622 34.7757C20.2381 34.7757 20.4123 34.741 20.5748 34.6736C20.7373 34.6062 20.8848 34.5074 21.0091 34.3828L36.962 18.4272C38.9319 16.3917 40.0228 13.6636 39.9996 10.8311C39.9764 7.99858 38.8409 5.28867 36.838 3.28573C34.835 1.28279 32.1251 0.147283 29.2926 0.124081C26.4601 0.100879 23.732 1.19184 21.6965 3.1617L20.0622 4.79337L18.4305 3.1617C17.4276 2.15892 16.237 1.36356 14.9267 0.821064C13.6163 0.278568 12.2119 -0.000433066 10.7937 5.04553e-07H10.7964Z'
					/>
				</Icon>
			</Box>
		</Flex>
	)
}

export default Testimonials
