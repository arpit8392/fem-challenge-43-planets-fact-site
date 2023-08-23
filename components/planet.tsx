import { cn } from '@/lib/utils'
import Details from './details'
import Metrics from './metrics'
import PlanetImage from './planet-image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'

const tabsData = ['overview', 'structure', 'geology']

// TODO: Inner Tab Integration using Shadcn Tab Components
// TODO: Layout Modification for Tablet and Desktop Screens

const PlanetDetails = (planet: Planet) => {
	const {
		name,
		overview,
		structure,
		geology,
		rotation,
		revolution,
		radius,
		temperature,
		images,
	} = planet

	const tabsMap = new Map<string, PlanetTab>()

	if (overview && structure && geology) {
		tabsMap.set('overview', overview)
		tabsMap.set('structure', structure)
		tabsMap.set('geology', geology)
	}

	const getValueFromMap = (key: string) => {
		if (tabsMap.has(key)) {
			return tabsMap.get(key)!
		}
		return null
	}

	return (
		<main className='grid grid-cols-1 gap-7'>
			<Tabs defaultValue={tabsData[0]}>
				<TabsList className='grid w-full grid-cols-3 border-b border-white/10 px-6 py-5'>
					{tabsData.map((tab) => (
						<TabsTrigger
							key={tab}
							value={tab}
							className={cn(
								'data-[state=active]:underline data-[state=active]:underline-offset-[20px] data-[state=active]:decoration-4',
								{
									'decoration-mercury': name.toLowerCase() === 'mercury',
									'decoration-venus': name.toLowerCase() === 'venus',
									'decoration-earth': name.toLowerCase() === 'earth',
									'decoration-mars': name.toLowerCase() === 'mars',
									'decoration-jupiter': name.toLowerCase() === 'jupiter',
									'decoration-saturn': name.toLowerCase() === 'saturn',
									'decoration-uranus': name.toLowerCase() === 'uranus',
									'decoration-neptune': name.toLowerCase() === 'neptune',
								}
							)}>
							{tab}
						</TabsTrigger>
					))}
				</TabsList>
				{tabsData.map((tab) => (
					<TabsContent key={tab} value={tab}>
						<section className='flex items-center justify-center py-24'>
							<PlanetImage
								imageUrl={
									tab === 'overview'
										? images.planet
										: tab === 'structure'
										? images.internal
										: images.geology
								}
								description={`${name}'s Image`}
							/>
						</section>
						<section className='px-6 md:px-10 lg:px-40'>
							<Details
								name={name}
								content={getValueFromMap(tab)?.content!}
								source={getValueFromMap(tab)?.source!}
							/>
						</section>
					</TabsContent>
				))}
			</Tabs>
			<section className='px-6 md:px-10 lg:px-40 mb-12 md:mb-9 lg:mb-14'>
				<Metrics data={{ rotation, revolution, radius, temperature }} />
			</section>
		</main>
	)
}
export default PlanetDetails
