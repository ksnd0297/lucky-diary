import styled from 'styled-components';
import { useState } from 'react';
import Header from './components/Header';
import Write from './components/Write';

type FillProps = {
	wroteText?: string;
	isWrote?: boolean;
};

function Fill(props: FillProps) {
	const { wroteText, isWrote } = props;

	const [text, setText] = useState<string>(wroteText ?? '');

	return (
		<Wrapper>
			<Header text={text} isWrote={isWrote} />
			<Write text={text} setText={setText} isWrote={isWrote} />
		</Wrapper>
	);
}

export default Fill;

Fill.defaultProps = {
	wroteText: '',
	isWrote: false,
};

const Wrapper = styled.div`
	width: 100%;
	height: 100%;

	background-color: #fffbfb;
`;
