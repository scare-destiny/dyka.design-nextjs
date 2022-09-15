import { useForm } from 'react-hook-form'
import {
	Heading,
	FormErrorMessage,
	FormLabel,
	FormControl,
	Input,
	Textarea,
	Button,
	Container,
	Stack,
} from '@chakra-ui/react'

const ContactForm = () =>  {
	const {
		handleSubmit,
		register,
		formState: { errors, isSubmitting },
	} = useForm()

	function onSubmit(values) {
		return new Promise((resolve) => {
			setTimeout(() => {
				alert(JSON.stringify(values, null, 2))
				resolve()
			}, 3000)
		})
	}

	return (
		<Container p={8}>
			<Stack spacing={6}>
				<Heading as='h1' size='4xl' noOfLines={1} color='yellow.700'>
					Contact Me
				</Heading>
				<form onSubmit={handleSubmit(onSubmit)}>
					<FormControl isInvalid={errors.name}>
						<FormLabel htmlFor='name'>First Name</FormLabel>
						<Input
							id='name'
							placeholder='name'
							{...register('name', {
								required: 'Please share your name',
								minLength: { value: 4, message: 'Minimum length should be 4' },
							})}
						/>
						<FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
					</FormControl>
					<FormControl isInvalid={errors.mail}>
						<FormLabel htmlFor='mail'>Email address</FormLabel>
						<Input
							id='mail'
							placeholder='mail'
							{...register('mail', {
								required: 'Email address is required',
								minlength: { value: 4, message: 'Minimum lenght should be 4' },
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
									message: 'Please provide valid email address',
								},
							})}
						/>
						<FormErrorMessage>{errors.mail && errors.mail.message}</FormErrorMessage>
					</FormControl>
					<FormControl isInvalid={errors.text}>
						<FormLabel htmlFor='text'>How can I help</FormLabel>
						<Textarea 
							id='text'
							placeholder='I want a new design for my...'
							{...register('text', {
								required: 'Please share a few words on your needs',
								minlength: { value: 2, message: 'Minimum lenght should be 4' },
							})}
						/>
					</FormControl>
					<Button mt={4} colorScheme='gray' isLoading={isSubmitting} type='submit'>
						Submit
					</Button>
				</form>
			</Stack>
		</Container>
	)
}

export default ContactForm