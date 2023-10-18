import Image from 'next/image';
import { styled } from 'styled-components';

function Coin() {
	return (
		<Wrapper>
			<Image src="/gif/giphy_out.gif" alt="giphy" width={230} height={230} className="coin" />
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
		border: none;
		border-radius: 50%;
	}
`;
