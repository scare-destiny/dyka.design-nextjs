import { HamburgerIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import {
	Box,
	Flex,
	Button,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuDivider,
	useColorModeValue,
	Stack,
	useColorMode,
	Center,
	Avatar,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const MenuLinks = () => {
	return (
		<>
			<MenuItem>
				<Link href='/'>Home</Link>
			</MenuItem>
			{/* <MenuItem>
				<Link href='/residential'>Residential</Link>
			</MenuItem>
			<MenuItem>
				<Link href='/commercial'>Commercial</Link>
			</MenuItem>
			<MenuItem>
				<Link href='/art'>Art</Link>
			</MenuItem> */}
			<MenuItem>
				<Link href='/about'>About</Link>
			</MenuItem>
			<MenuItem>
				<Link href='/contact'>Contact</Link>
			</MenuItem>
		</>
	)
}

const Navbar = () => {
	const { colorMode, toggleColorMode } = useColorMode()
	return (
		<>
			<Box bg={useColorModeValue('white.100', 'white.900')} px={4}>
				<Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
					<Box>
						<Link href='/'>Dyka Design</Link>
					</Box>

					<Flex alignItems={'center'}>
						<Stack direction={'row'} spacing={7}>
							<Button onClick={toggleColorMode}>
								{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
							</Button>

							<Menu isLazy>
								<MenuButton
									as={Button}
									rounded={'full'}
									variant={'link'}
									cursor={'pointer'}
									minW={0}
								>
									<HamburgerIcon
										size={'sm'}
										src={'https://avatars.dicebear.com/api/male/username.svg'}
									/>
								</MenuButton>
								<MenuList alignItems={'center'}>
									<MenuLinks />
									<MenuDivider />
								</MenuList>
							</Menu>
						</Stack>
					</Flex>
				</Flex>
			</Box>
		</>
	)
}

export default Navbar
export { MenuLinks }
