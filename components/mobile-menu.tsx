import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import planetData from '@/planets-data.json'
import ChevronIcon from '@/public/assets/icon-chevron.svg'
import HamburgerIcon from '@/public/assets/icon-hamburger.svg'
import Image from 'next/image'
import Link from 'next/link'

const MobileMenu = () => {
	return (
		<Sheet>
			<SheetTrigger asChild className='data-[state=open]:opacity-25'>
				<button className='block md:hidden outline-none'>
					<Image src={HamburgerIcon} alt='Open Mobile Menu' />
				</button>
			</SheetTrigger>
			<SheetContent className='bg-midnight px-6 py-10' side='right-full'>
				<ul>
					{planetData.map((planet) => (
						<li key={planet.name} className='py-5 border-b border-white/10'>
							<Link href={`/planets/${planet.name}`}>
								<div className='flex items-center justify-between'>
									<div className='flex items-center gap-6'>
										<div
											className={cn('w-5 h-5 rounded-full', {
												'bg-mercury': planet.name.toLowerCase() === 'mercury',
												'bg-venus': planet.name.toLowerCase() === 'venus',
												'bg-earth': planet.name.toLowerCase() === 'earth',
												'bg-mars': planet.name.toLowerCase() === 'mars',
												'bg-jupiter': planet.name.toLowerCase() === 'jupiter',
												'bg-saturn': planet.name.toLowerCase() === 'saturn',
												'bg-uranus': planet.name.toLowerCase() === 'uranus',
												'bg-neptune': planet.name.toLowerCase() === 'neptune',
											})}
										/>
										<span className='uppercase font-bold tracking-[1.364px]'>
											{planet.name}
										</span>
									</div>
									<Image
										src={ChevronIcon}
										alt='Right Icon'
										className='object-contain'
									/>
								</div>
							</Link>
						</li>
					))}
				</ul>
			</SheetContent>
		</Sheet>
	)
}
export default MobileMenu
