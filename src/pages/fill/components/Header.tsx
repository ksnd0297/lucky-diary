import Image from 'next/image';
import styled from 'styled-components';

function Header() {
	return (
		<Wrapper>
			<Image src="svg/close-svgrepo-com.svg" alt="일기 작성" width={30} height={30} />
			<Image src="svg/pencil-svgrepo-com.svg" alt="일기 작성" width={40} height={40} />
		</Wrapper>
	);
}

export default Header;

const Wrapper = styled.div`
	width: 100%;
	height: 5%;

	display: flex;
	align-items: center;
	justify-content: space-between;

	padding: 2%;
`;
