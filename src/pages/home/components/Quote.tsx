import { styled } from 'styled-components';

function Quote() {
	return (
		<Wrapper>
			<P>
				모든것들에는 나름의 경이로움과 심지어 어둠과 침묵이 있고, 내가 어떤 상태에 있더라도 나는 그속에서 만족하는 법을
				배운다 -헬렌켈러
			</P>
		</Wrapper>
	);
}

export default Quote;

const Wrapper = styled.div`
	width: 100%;
	height: 10%;

	display: flex;
	align-items: center;
	justify-content: center;
`;

const P = styled.p`
	font-size: 15px;
	padding: 3%;
	font-weight: bold;
	text-align: center;
`;
