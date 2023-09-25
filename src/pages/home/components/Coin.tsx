import { styled } from 'styled-components';

function Coin() {
	return (
		<Wrapper>
			<Heart />
			<CenterDiv>999+</CenterDiv>
		</Wrapper>
	);
}

export default Coin;

const Wrapper = styled.div`
	width: 100%;
	height: 35%;

	display: flex;
	align-items: center;
	justify-content: center;

	padding-top: 5%; // TODO : Layout 으로 잡아주기
`;

const Heart = styled.div`
	position: absolute;
	width: 130px;
	height: 130px;
	background: #ff6666;
	position: relative;
	transform: rotate(45deg);

	filter: drop-shadow(2px 4px 6px black);

	&::before,
	&::after {
		content: '';
		width: 130px;
		height: 130px;
		position: absolute;
		border-radius: 50%;
		background: #ff6666;
	}

	&::before {
		left: -50%;
	}
	&::after {
		top: -50%;
	}
`;

const CenterDiv = styled.div`
	position: absolute;
	font-size: 45px;
	font-weight: 800;
	margin-bottom: 15%;
`;
