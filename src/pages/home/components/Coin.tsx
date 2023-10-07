import Image from 'next/image';
import { styled } from 'styled-components';

function Coin() {
	return (
		<Wrapper>
			<Image src="svg/heart-suit-svgrepo-com.svg" alt="코인" width={250} height={250} className="coin" />
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

	.coin {
		filter: drop-shadow(2px 4px 6px black);
	}
`;

const CenterDiv = styled.div`
	position: absolute;
	font-size: 41px;
	font-weight: 600;

	margin-bottom: 2%;
`;
