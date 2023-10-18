import styled from 'styled-components';
import { withLayout } from '@/components/layout/withLayout';
import BeforeWrite from './components/BeforeWrite';
import Coin from './components/Coin';

import HomeButton from './components/HomeButton';
import Quote from './components/Quote';

function Home() {
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
