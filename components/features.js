import {
	Container,
	SimpleGrid,
	Flex,
	Heading,
	Text,
	Stack,
	StackDivider,
	Icon,
	useColorModeValue,
} from '@chakra-ui/react'
import Image from 'next/image'
import { MdArchitecture } from 'react-icons/md'
import { BiPhotoAlbum } from 'react-icons/bi'
import { SiCoronarenderer } from 'react-icons/si'
import { GiSelfLove } from 'react-icons/gi'
import image from '../public/assets/about.jpeg'

const Feature = ({ text, icon, iconBg }) => {
	return (
		<Stack direction={'row'} align={'center'}>
			<Flex
				w={8}
				h={8}
				align={'center'}
				justify={'center'}
				rounded={'full'}
				bg={iconBg}
			>
				{icon}
			</Flex>
			<Text fontWeight={600}>{text}</Text>
		</Stack>
	)
}

const Features = () => {
	return (
		<Container maxW={'8xl'} py={12}>
			<SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
				<Stack spacing={4}>
					<Text
						textTransform={'uppercase'}
						color={'blue.400'}
						fontWeight={600}
						fontSize={'sm'}
						bg={useColorModeValue('blue.50', 'blue.900')}
						p={2}
						alignSelf={'flex-start'}
						rounded={'md'}
					>
						My Story
					</Text>
					<Heading>Interior architect and designer</Heading>
					<Text color={'gray.500'} fontSize={'lg'}>
						I fell in love with design when I was a teenager. Time flies and I enjoy
						it more and more with each breath. All my work comes with:
					</Text>
					<Stack
						spacing={4}
						divider={
							<StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
						}
					>
						<Feature
							icon={<Icon as={MdArchitecture} color={'yellow.500'} w={5} h={5} />}
							iconBg={useColorModeValue('yellow.100', 'yellow.900')}
							text={'Detailed Plans'}
						/>
						<Feature
							icon={<Icon as={BiPhotoAlbum} color={'green.500'} w={5} h={5} />}
							iconBg={useColorModeValue('green.100', 'green.900')}
							text={'Moodboards'}
						/>
						<Feature
							icon={<Icon as={SiCoronarenderer} color={'purple.500'} w={5} h={5} />}
							iconBg={useColorModeValue('purple.100', 'purple.900')}
							text={'Shopping Lists With Photorealistic Visualizations'}
						/>
						<Feature
							icon={<Icon as={GiSelfLove} color={'red.500'} w={5} h={5} />}
							iconBg={useColorModeValue('red.100', 'red.900')}
							text={'Pinch Of Love And Care'}
						/>
					</Stack>
				</Stack>
				<Flex>
					<Image
						rounded={'md'}
						alt={'feature image'}
						src={
							'https://instagram.fifo1-1.fna.fbcdn.net/v/t51.2885-15/271263932_682214743150701_82640951494844104_n.jpg?stp=dst-jpg_e35_p720x720&_nc_ht=instagram.fifo1-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=CslGwMEVe6UAX9DcJh9&tn=4IjaF3FxEEpQf_zM&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjc0MzY5OTc5Njk0MTYwNjA0NQ%3D%3D.2-ccb7-5&oh=00_AfD8MXfBd9VBloXq0_F6ryPKs9QFtPRk5-gZwdM3bnrMVQ&oe=636D4430&_nc_sid=30a2ef'
						}
						width='580'
						height='730'
						objectFit={'cover'}
					/>
				</Flex>
			</SimpleGrid>
		</Container>
	)
}

export default Features
