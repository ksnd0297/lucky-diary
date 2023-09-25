import Image from 'next/image';
import styled from 'styled-components';

function Header() {
	// TODO : 하트의 양과 옵션을 위한 톱니바퀴 설정 svg
	return (
		<Wrapper>
			<Div className="header-left" center>
				<Image src="svg/heart-svgrepo-com.svg" alt="행운 코인" width={30} height={30} />
				&nbsp;999+
			</Div>
			<Div className="header-right" center>
				<Image src="svg/bell-alt-1-svgrepo-com.svg" alt="설정" width={30} height={30} style={{ marginRight: '10px' }} />
				<Image src="svg/gear-svgrepo-com.svg" alt="설정" width={30} height={30} />
			</Div>
		</Wrapper>
	);
}

export default Header;

const Wrapper = styled.div`
	height: 5%;

	display: flex;
	align-items: center;
	justify-content: space-between;

	padding: 0 5%;
`;

const Div = styled.div<{ center?: boolean }>`
	display: ${(props) => props.center && 'flex'};
	align-items: ${(props) => props.center && 'center'};
	justify-content: ${(props) => props.center && 'center'};
`;