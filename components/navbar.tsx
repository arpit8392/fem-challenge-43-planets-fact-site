import MobileMenu from '@/components/mobile-menu'
import { Separator } from '@/components/ui/separator'
import planetsData from '@/planets-data.json'
import Link from 'next/link'

const Navbar = () => {
	return (
		<header>
			<nav className='flex justify-between items-center md:flex-col md:gap-10 lg:flex-row px-6 py-4 md:px-14 md:py-8 lg:px-8 lg:py-6'>
				<h1 className='font-antonio uppercase text-[28px] tracking-[-1.05px]'>
					The Planets
				</h1>
				<ul className='items-center hidden md:flex gap-8'>
					{planetsData.map((planet) => (
						<li key={planet.name}>
							<Link
								href={`/planets/${planet.name.toLowerCase()}`}
								className='uppercase text-xs font-bold tracking-[1px] text-soft-gray hover:text-white'>
								{planet.name}
							</Link>
						</li>
					))}
				</ul>
				<MobileMenu />
			</nav>
			<Separator className='bg-white/20' />
		</header>
	)
}
export default Navbar
