import Navbar from '@/components/Navbar';
import Body from '@/components/Body';
import Footer from '@/components/Footer';
export default function Home() {
	return (
		<main className="bg-[#FBFCFD] w-screen overflow-x-hidden">
			<Navbar />
			<div className="flex place-content-center mt-2">
				<Body />
			</div>
			<Footer />
		</main>
	);
}
