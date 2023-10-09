import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Modal from '../../components/Modal';
import Header from './components/Header';
import Write from './components/Write';

type FillProps = {
	wroteText?: string;
};

function Fill(props: FillProps) {
	const { wroteText } = props;

	const [text, setText] = useState<string>(wroteText ?? '');

	useEffect(() => {
		if (wroteText) {
			setText(wroteText);
		}
	}, [wroteText]);

	return (
		<Modal>
			<Wrapper>
				<Header text={text} />
				<Write text={text} setText={setText} />
			</Wrapper>
		</Modal>
	);
}

export default Fill;

Fill.defaultProps = {
	wroteText: '',
};

const Wrapper = styled.div`
	width: 100%;
	height: 100%;

	background-color: #fffbfb;
`;
