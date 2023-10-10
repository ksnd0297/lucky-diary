import styled from 'styled-components';
import { useState } from 'react';
import Header from './components/Header';
import Write from './components/Write';

function Fill() {
	const [text, setText] = useState<string>('');

	return (
		<Wrapper>
			<Header text={text} />
			<Write text={text} setText={setText} />
		</Wrapper>
	);
}

export default Fill;

const Wrapper = styled.div`
	width: 100%;
	height: 100%;

	background-color: #fffbfb;
`;
