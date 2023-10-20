import styled from 'styled-components';
import { useEffect } from 'react';
import { withLayout } from '@/components/layout/withLayout';
import { isClient } from '@/utils/device';
import useMessage from '@/hooks/useMessage';
import BeforeWrite from './components/BeforeWrite';
import Coin from './components/Coin';

import HomeButton from './components/HomeButton';
import Quote from './components/Quote';

function Home() {
	const { data: userInfo, isLoading, getMessage, postMessage } = useMessage();

	useEffect(() => {
		if (!isClient) return;

		postMessage({
			domain: 'INFO',
			type: 'GET_INFO',
		});

		getMessage();
	}, []);

	useEffect(() => {
		if (isLoading) return;
		

	}, [isLoading, userInfo]);

	return (
		<Wrapper>
			<Coin />
			<BeforeWrite />
			<Quote />
			<HomeButton />
		</Wrapper>
	);
}

export default withLayout({ header: true })(Home);

const Wrapper = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;
