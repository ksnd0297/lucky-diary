import styled from 'styled-components';
import { ReactNode } from 'react';
// import Ad from './Ad';

function Layout({ children }: { children: ReactNode }) {
	return (
		<Wrapper>
			{children}
			{/* <Ad /> */}
		</Wrapper>
	);
}

export default Layout;

const Wrapper = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;

	justify-content: space-between;

	padding: 1%;
`;
