import PlanetDetails from '@/components/planet'
import planetsData from '@/planets-data.json'

// TODO: getStaticParams to Build Time generate all the planets pages

type PlanetPageProps = {
	params: {
		planet: string
	}
}

const PlanetPage = ({ params: { planet } }: PlanetPageProps) => {
	const planetInfo = planetsData.find(
		(item) => item.name.toLowerCase() === planet.toLowerCase()
	)

	if (!planetInfo) return

	return (
		<>
			<PlanetDetails {...planetInfo} />
		</>
	)
}
export default PlanetPage
