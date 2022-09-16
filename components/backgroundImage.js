import {
	Stack,
	Flex,
	Button,
	Text,
	VStack,
	useBreakpointValue,
} from '@chakra-ui/react'
import Image from 'next/image'

const BackgroundImage = ({ image, text, buttonText }) => {
	return (
		<div
			style={{
				width: 'auto',
				height: '100vh',
				position: 'relative',
				display: 'flex',
			}}
		>
			<Image
				src={image}
				layout='fill'
				objectFit='cover'
				objectPosition='center'
				alt='wall art'
			/>
			<VStack
				w={'full'}
				justify={'center'}
				px={useBreakpointValue({ base: 4, md: 8 })}
				bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
			>
				<Stack
					maxW={'2xl'}
					align={'center'}
					justify={'center'}
					spacing={6}
					zIndex={1}
				>
					<Text
						color={'white'}
						fontWeight={700}
						lineHeight={1.2}
						fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
					>
						{text}
					</Text>
					<Stack direction={'row'}>
						<Button
							bg={'whiteAlpha.300'}
							rounded={'full'}
							color={'white'}
							_hover={{ bg: 'whiteAlpha.500' }}
						>
							{buttonText}
						</Button>
					</Stack>
				</Stack>
			</VStack>
			{/* </Flex> */}
		</div>
	)
}

export default BackgroundImage
