import { styled } from 'styled-components';
import useModal from '@/hooks/useModal';
import Fill from '@/pages/fill';

function HomeButton() {
	const { showModal } = useModal();

	const onClick = () => {
		showModal({
			children: <Fill />,
		});
	};

	return (
		<Wrapper onClick={onClick}>
			<Div>오늘 일기를 아직 작성하지 않으셨어요 !</Div>
		</Wrapper>
	);
}

export default HomeButton;

const Wrapper = styled.div`
	height: 12%;
	width: 100%;

	display: flex;
	align-items: center;
	justify-content: center;

	margin-bottom: 10%;
`;

const Div = styled.div`
	height: 100%;
	width: 90%;

	background-color: #f9f3cc;

	display: flex;
	align-items: center;
	justify-content: center;

	font-size: 14px;

	border-radius: 3%;
`;
