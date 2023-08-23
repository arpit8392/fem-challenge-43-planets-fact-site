import SourceIcon from '@/public/assets/icon-source.svg'
import Image from 'next/image'
import Link from 'next/link'

type DetailsProps = {
	name: string
	content: string
	source: string
}
const Details = ({ name, content, source }: DetailsProps) => {
	return (
		<div className='space-y-4 text-center'>
			<h1 className='uppercase font-antonio text-[40px]'>{name}</h1>
			<p className='text-sm/6 text-white/80'>{content}</p>
			<p className='pt-4 text-sm opacity-50 flex items-center justify-center gap-1'>
				Source :
				<Link href={source} prefetch={false} className='underline font-bold'>
					Wikipedia
				</Link>
				<Image src={SourceIcon} alt='Source Icon' />
			</p>
		</div>
	)
}
export default Details
