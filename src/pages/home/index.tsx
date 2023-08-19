import BeforeWrite from "./components/BeforeWrite";
import Coin from "./components/Coin";
import HomeButton from "./components/HomeButton";
import Quote from "./components/Quote";

function Home() {
	return (
		<>
			<Coin />
			<BeforeWrite />
			<Quote />
			<HomeButton />
		</>
	)
}

export default Home;
