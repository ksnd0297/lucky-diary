import styled from 'styled-components';
import { useState } from 'react';
import Modal from '../../components/Modal';
import Header from './components/Header';
import Write from './components/Write';

function Fill() {
	const [text, setText] = useState<string>('');

	return (
		<Modal>
			<Wrapper>
				<Header text={text} setText={setText} />
				<Write text={text} setText={setText} />
			</Wrapper>
		</Modal>
	);
}

export default Fill;

const Wrapper = styled.div`
	width: 100%;
	height: 100%;

	background-color: #fffbfb;
`;