import {
	Box,
	Divider,
	Center,
	Text,
	Flex,
	Spacer,
	Button,
} from '@chakra-ui/react'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import { InfoIcon, AtSignIcon } from '@chakra-ui/icons'
import { getPhotoById } from '../../api/api'
import commercialImages from '../../../public'

export async function getServerSideProps({ params }) {
	const picture = commercialImages[params.id]
	console.log(params)
	return {
		props: {
			picture,
		},
	}
}

export default function Photos({ picture }) {
	console.log('test')
	return (
		<Box p='2rem' bg='white.700' minH='100vh'>
			<Head>
				<title> Dyka Design: {picture.title}</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Flex px='1rem' justify='center' align='center'>
				<Text
					letterSpacing='wide'
					textDecoration='underline'
					// as='h2'
					fontWeight='semibold'
					fontSize='xl'
					as='a'
					target='_blank'
					href={picture.photographer_url}
				>
					<AtSignIcon />
					{picture.photographer}
				</Text>
				<Spacer />
				<Box as='a' target='_blank' href={picture.url}>
					<InfoIcon focusable='true' boxSize='2rem' color='red.500' />{' '}
				</Box>{' '}
				<Spacer />
				<Link href={`/commercial`}>
					<Button
						as='a'
						borderRadius='full'
						mt={4} colorScheme='gray'
						type='submit'
						fontSize='lg'
						size='lg'
						cursor='pointer'
					>
						🏠  To Projects
					</Button>
				</Link>
			</Flex>
			<Divider my='1rem' />
			<Center>
				<Box>
					<Image
						src={picture.image}
						width={980}
						height={700}
						quality={50}
						priority
						loading='eager'
						alt={picture.title}
					/>
				</Box>
			</Center>
		</Box>
	)
}
