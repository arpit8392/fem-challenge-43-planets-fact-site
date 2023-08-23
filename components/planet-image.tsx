import Image from 'next/image'

type PlanetImageProps = {
	imageUrl: string
	description: string
}
const PlanetImage = ({ imageUrl, description }: PlanetImageProps) => {
	return (
		<div>
			<Image
				src={imageUrl}
				alt={description}
				width={111}
				height={111}
				className='object-contain block md:hidden'
			/>
			<Image
				src={imageUrl}
				alt={description}
				width={184}
				height={184}
				className='object-contain hidden md:block lg:hidden'
			/>
			<Image
				src={imageUrl}
				alt={description}
				width={290}
				height={290}
				className='object-contain hidden lg:block'
			/>
		</div>
	)
}
export default PlanetImage
