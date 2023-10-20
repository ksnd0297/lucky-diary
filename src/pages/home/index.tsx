import styled from 'styled-components';
import { withLayout } from '@/components/layout/withLayout';
import useUserInfo from '@/hooks/useUserInfo';
import BeforeWrite from './components/BeforeWrite';
import Coin from './components/Coin';

import HomeButton from './components/HomeButton';
import Quote from './components/Quote';

function Home() {
	const { userInfo } = useUserInfo();

	return (
		<Wrapper>
			<Coin />
			<BeforeWrite date={userInfo.last} />
			<Quote />
			<HomeButton date={userInfo.last} />
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
