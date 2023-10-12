import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from 'styled-components';

function Header() {
	const router = useRouter();

	const onClick = (path: string) => {
		router.push(`/${path}`);
	};

	return (
		<Wrapper>
			<Div className="header-left" center="true" onClick={() => onClick('history')}>
				<Image src="svg/heart-svgrepo-com.svg" alt="행운 코인" width={30} height={30} />
				&nbsp;999+
			</Div>
			<Div className="header-right" center="true">
				<Image src="svg/gear-svgrepo-com.svg" alt="설정" width={30} height={30} onClick={() => onClick('setting')} />
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

const Div = styled.div<{ center?: string }>`
	display: ${(props) => props.center === 'true' && 'flex'};
	align-items: ${(props) => props.center === 'true' && 'center'};
	justify-content: ${(props) => props.center === 'true' && 'center'};
`;
