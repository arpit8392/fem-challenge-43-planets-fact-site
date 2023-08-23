interface PlanetTab {
	content: string
	source: string
}

interface Images {
	planet: string
	internal: string
	geology: string
}

interface Planet {
	name: string
	overview: PlanetTab
	structure: PlanetTab
	geology: PlanetTab
	rotation: string
	revolution: string
	radius: string
	temperature: string
	images: Images
}
