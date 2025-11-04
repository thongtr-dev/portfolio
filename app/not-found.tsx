import Link from 'next/link';

export default function NotFound() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-white flex items-center justify-center">
			<div className="text-center">
				<h1 className="text-6xl font-bold mb-4">404</h1>
				<p className="text-xl text-gray-400 mb-8">Page not found</p>
				<Link href="/" className="text-blue-400 hover:text-blue-300 transition-colors">
					Return to Portfolio
				</Link>
			</div>
		</div>
	);
}