import { useRecoilValue } from 'recoil';
import Modal from '@/components/Modal';
import { isOpenModalState } from '@/Constant/layout';
import BeforeWrite from './components/BeforeWrite';
import Coin from './components/Coin';
import Header from './components/Header';
import HomeButton from './components/HomeButton';
import Quote from './components/Quote';
import Fill from '../fill';

function Home() {
	const isOpen = useRecoilValue(isOpenModalState);

	return (
		<>
			<Header />
			<Coin />
			<BeforeWrite />
			<Quote />
			<HomeButton />
			<Modal>{isOpen && <Fill />}</Modal>
		</>
	);
}

export default Home;
