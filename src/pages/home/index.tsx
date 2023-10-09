import BeforeWrite from './components/BeforeWrite';
import Coin from './components/Coin';
import Header from './components/Header';
import HomeButton from './components/HomeButton';
import Quote from './components/Quote';
import Fill from '../fill';

function Home() {
	return (
		<>
			<Header />
			<Coin />
			<BeforeWrite />
			<Quote />
			<HomeButton />
			<Fill />
		</>
	);
}

export default Home;
