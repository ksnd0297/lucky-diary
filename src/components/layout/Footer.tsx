import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from 'styled-components';

function Footer() {
	const router = useRouter();

	const onClick = (path: string) => {
		router.push(path);
	};

	return (
		<Wrapper>
			<Image src="svg/home-4-svgrepo-com.svg" alt="홈" width={30} height={30} onClick={() => onClick('/')} />
			<Image
				src="svg/calendar-heart-svgrepo-com.svg"
				alt="일기목록"
				width={30}
				height={30}
				onClick={() => onClick('/list')}
			/>
			<Image src="svg/heart-svgrepo-com2.svg" alt="알림" width={30} height={30} onClick={() => onClick('/history')} />
			<Image src="svg/gear-svgrepo-com.svg" alt="설정" width={30} height={30} onClick={() => onClick('/setting')} />
		</Wrapper>
	);
}

export default Footer;

const Wrapper = styled.div`
	bottom: 0;

	width: 100%;
	height: 8%;

	display: flex;
	align-items: center;
	justify-content: space-evenly;

	border-top: 2px solid black;

	background-color: #fcf9fb;
`;
