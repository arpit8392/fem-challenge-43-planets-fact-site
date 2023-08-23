type MetricItemProps = {
	label: string
	value: string
}
const MetricItem = ({ label, value }: MetricItemProps) => {
	return (
		<li className='flex items-center justify-between px-6 py-4 md:py-5 lg:py-6 border border-white/20 md:flex-col md:gap-1.5 md:items-start md:w-full md:justify-center lg:gap-1'>
			<p className='text-white/50 uppercase text-xs tracking-[0.7px] font-bold lg:text-sm lg:tracking-[1px]'>
				{label}
			</p>
			<p className='text-right font-antonio text-lg tracking-[0.75px] uppercase md:text-2xl md:tracking-[0.9px] lg:text-[40px] lg:tracking-[1.5px]'>
				{value}
			</p>
		</li>
	)
}
export default MetricItem
