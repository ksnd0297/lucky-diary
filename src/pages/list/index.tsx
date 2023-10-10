import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import Modal from '@/components/Modal';
import { isOpenModalState } from '@/Constant/layout';
import Footer from '@/components/layout/Footer';
import Fill from '../fill';
import Calendar from './components/Calendar';

const dummyData = [
	`(1절)
	동해물과 백두산이 마르고 닳도록
	하느님이 보우하사 우리나라만세
	(후렴)무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세`,
	`(2절)
	남산위에 저 소나무 철갑을 두른듯
	바람서리 불변함은 우리기상 일세
	(후렴)무궁화 삼천리 화려강산 대한사람 대한으로 길이보전하세`,
	`(3절)
	가을하늘 공활한데 높고 구름없이 
	밝은달은 우리가슴 일편단심일세
	(후렴)무궁화 삼천리 화려강산 대한사람 대한으로 길이보전하세`,
	`(4절)
	이 기상과 이 맘으로 충성을 다하여
	괴로우나 즐거우나 나라사랑하세
	(후렴)무궁화 삼천리 화려강산 대한사람 대한으로 길이보전하세
	`,
];

function ListPage() {
	const isOpen = useRecoilValue(isOpenModalState);

	const [wroteText, setWroteText] = useState<string>(dummyData[0]);

	return (
		<>
			<Calendar wroteText={dummyData[0]} setWroteText={setWroteText} />
			<Footer />
			<Modal>{isOpen && <Fill wroteText={wroteText} isWrote />}</Modal>
		</>
	);
}

export default ListPage;
