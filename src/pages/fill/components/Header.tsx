import Image from 'next/image';
import styled from 'styled-components';
import useModal from '@/hooks/useModal';

type HeaderProps = {
	text: string;
	isWrote?: boolean;
};

function Header(props: HeaderProps) {
	const { text, isWrote } = props;

	const { hideModal } = useModal();

	const onClose = () => {
		hideModal();
	};

	const onSubmit = () => {
		// TODO : 웹뷰로 텍스트 데이터 전송
		console.log('text : ', text);

		onClose();
	};

	return (
		<Wrapper>
			<Image src="svg/close-svgrepo-com.svg" alt="일기 작성" width={25} height={25} onClick={onClose} />
			{!isWrote && <Image src="svg/pencil-svgrepo-com.svg" alt="일기 작성" width={40} height={40} onClick={onSubmit} />}
		</Wrapper>
	);
}

export default Header;

Header.defaultProps = {
	isWrote: false,
};

const Wrapper = styled.div`
	width: 100%;
	height: 6%;

	position: sticky;

	display: flex;
	align-items: center;
	justify-content: space-between;

	padding: 2%;
	background: #fafafa;
`;
