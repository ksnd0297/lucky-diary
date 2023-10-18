import { ChangeEvent, ClipboardEvent, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

type WriteProps = {
	text: string;
	setText: Dispatch<SetStateAction<string>>;
	isWrote?: boolean;
};

function Write(props: WriteProps) {
	const { text, setText, isWrote } = props;

	const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		if (!isWrote) {
			setText(event.target.value);
		}
	};

	const onPaste = (event: ClipboardEvent<HTMLTextAreaElement>) => {
		event.preventDefault();
		return false;
	};

	return (
		<>
			<Wrapper>
				<div className="paper">
					<div className="paper-content">
						<textarea
							placeholder="오늘의 마음을 글로 표현해주세요"
							value={text}
							onChange={(event) => onChange(event)}
							onPaste={(event) => onPaste(event)}
						/>
					</div>
				</div>
			</Wrapper>
		</>
	);
}

export default Write;

Write.defaultProps = {
	isWrote: false,
};

const Wrapper = styled.div`
	width: 100%;
	height: 100%;

	.paper {
		position: absolute;

		width: 100%;
		height: 100%;
		background: #fafafa;
		overflow: hidden;
	}
	.paper:before {
		content: '';
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		width: 60px;
		background: radial-gradient(#575450 6px, transparent 7px) repeat-y;
		background-size: 30px 30px;
		box-sizing: border-box;
	}

	.paper-content {
		position: absolute;
		top: 0px;
		right: 0;
		bottom: 30px;
		left: 30px;

		background-size: 30px 30px;
	}

	.paper-content textarea {
		width: 100%;
		max-width: 100%;
		height: 100%;
		max-height: 100%;
		line-height: 25px;
		padding: 0 10px;
		border: 0;
		outline: 0;
		background: transparent;

		font-size: 18px;
		box-sizing: border-box;
	}
`;
