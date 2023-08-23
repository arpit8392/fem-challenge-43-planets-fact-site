import MetricItem from './metric-item'

interface MetricsProps {
	data: {
		rotation: string
		revolution: string
		radius: string
		temperature: string
	}
}

const Metrics = ({
	data: { rotation, revolution, radius, temperature },
}: MetricsProps) => {
	return (
		<ul className='flex flex-col gap-2 md:flex-row md:gap-3 lg:gap-8'>
			<MetricItem label='rotation time' value={rotation} />
			<MetricItem label='revolution time' value={revolution} />
			<MetricItem label='radius' value={radius} />
			<MetricItem label='average temp.' value={temperature} />
		</ul>
	)
}
export default Metrics
