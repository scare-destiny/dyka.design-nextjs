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

// TODO Rewrite Form Without Dependencies
const ContactForm = () => {
	const {
		handleSubmit,
		register,
		formState: { errors, isSubmitting },
	} = useForm()

	// function onSubmit(values) {
	// 	return new Promise((resolve) => {
	// 		setTimeout(() => {
	// 			alert(JSON.stringify(values, null, 2))
	// 			resolve()
	// 		}, 3000)
	// 	})
	// }

	const onSubmit = async (data) => {
		try {
			const response = await fetch(
				'https://script.google.com/macros/s/AKfycbz9WEEwSceX1mSQhZeD0Amb8BjFNeOr8Owo9Hhxk2mAV_DJPhRgFvkvbRiA4nA82Ucl/exec',
				{
					method: 'POST',
					cache: 'no-cache',
					mode: 'no-cors',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(data),
				}
			)
			alert('form submitted!')
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<Container p={8}>
			<Stack spacing={6}>
				<Heading as='h1' size='4xl' noOfLines={1} color='yellow.700'>
					Contact Me
				</Heading>
				<form onSubmit={handleSubmit(onSubmit)}>
					<FormControl isInvalid={errors.name}>
						<FormLabel pt={2} htmlFor='name'>
							First Name
						</FormLabel>
						<Input
							id='name'
							placeholder='Your name'
							{...register('name', {
								required: 'Please share your name',
								minLength: { value: 4, message: 'Minimum length should be 4' },
							})}
						/>
						<FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
					</FormControl>
					<FormControl isInvalid={errors.mail}>
						<FormLabel pt={2} htmlFor='mail'>
							Email address
						</FormLabel>
						<Input
							id='mail'
							placeholder='Email address'
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
						<FormLabel pt={2} htmlFor='text'>
							Info
						</FormLabel>
						<Textarea
							id='text'
							placeholder='I want a new design for my...'
							{...register('text', {
								required: 'Please share a few words about your request',
								minlength: { value: 12, message: '' },
							})}
						/>
						<FormErrorMessage>{errors.text && errors.text.message}</FormErrorMessage>
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
