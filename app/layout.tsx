import Navbar from '@/components/navbar'
import type { Metadata } from 'next'
import { Antonio, League_Spartan } from 'next/font/google'
import './globals.css'

const antonio = Antonio({ subsets: ['latin'], variable: '--font-antonio' })
const league_spartan = League_Spartan({
	subsets: ['latin'],
	variable: '--font-league-spartan',
})

export const metadata: Metadata = {
	title: 'Planets Fact Site',
	description:
		'Frontend Mentor Challenge | Solved by Arpit Namdev | Developed using Next JS, Tailwind CSS and many more...',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body
				className={`${antonio.variable} ${league_spartan.variable} font-spartan bg-midnight bg-stars text-white`}>
				<Navbar />
				{children}
			</body>
		</html>
	)
}
