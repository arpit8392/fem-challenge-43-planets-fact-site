import MobileMenu from '@/components/mobile-menu'
import planetsData from '@/planets-data.json'
import Link from 'next/link'

// TODO: Active Page Styling of the tabs

const Navbar = () => {
	return (
		<header className='border-b border-white/10'>
			<nav className='flex justify-between items-center md:flex-col md:gap-10 lg:flex-row px-6 py-4 md:px-14 md:py-8 lg:px-8 lg:py-6'>
				<Link
					href={'/'}
					className='font-antonio uppercase text-[28px] tracking-[-1.05px]'>
					The Planets
				</Link>
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
		</header>
	)
}
export default Navbar
