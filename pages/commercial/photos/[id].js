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
		<Box p='2rem' bg='white.700' minH='100vh' al>
			<Head>
				<title> Dyka Design: {picture.title}</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Flex px='1rem' justify='center' align='center'>
			<Box>
						<Link href='/'>Dyka Design</Link>
					</Box>
		
				<Spacer />
				<Link href={`/commercial`}>
					<Button
						as='a'
						borderRadius='full'
				 colorScheme='gray'
						type='submit'
						fontSize='lg'
						size='md'
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
