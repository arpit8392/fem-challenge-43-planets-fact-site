const tabsData = ['overview', 'structure', 'surface']

type PlanetTabsProps = {}
const PlanetTabs = (props: PlanetTabsProps) => {
	return (
		<ul className='flex items-center justify-between border-b border-white/10 px-6 py-5'>
			{tabsData.map((tab) => (
				<li
					key={tab}
					className='text-white/50 uppercase text-xs tracking-[2px] font-bold hover:text-white cursor-pointer'>
					{tab}
				</li>
			))}
		</ul>
	)
}
export default PlanetTabs
