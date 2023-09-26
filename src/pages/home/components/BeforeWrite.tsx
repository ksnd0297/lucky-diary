import { styled } from 'styled-components';

function BeforeWrite() {
	return (
		<Wrapper>
			<P fontWeight={600}>999일 전에 마지막 일기를 작성하셨어요</P>
			<P fontWeight={800}>가장 최근에 작성한 일기 보러가기 {'>'}</P>
		</Wrapper>
	);
}

export default BeforeWrite;

const Wrapper = styled.div`
	width: 100%;
	height: 10%;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
`;

const P = styled.p<{ fontWeight?: number }>`
	font-size: 20px;
	font-weight: ${(props) => props.fontWeight};
`;
