import { styled } from 'styled-components';
import { useRouter } from 'next/router';
import useModal from '@/hooks/useModal';
import Fill from '@/pages/fill';

type HomeButtonProps = {
	isTodayWrite: boolean;
};

function HomeButton(props: HomeButtonProps) {
	const router = useRouter();

	const { isTodayWrite } = props;

	const { showModal } = useModal();

	const onClick = () => {
		// * 일기를 작성했을 경우
		if (!isTodayWrite) {
			return showModal({
				children: <Fill />,
			});
		}

		router.push('/list');
	};

	return (
		<Wrapper onClick={onClick}>
			<Div>{isTodayWrite ? <>오늘은 이미 일기를 작성하셨어요 !</> : <>오늘 일기를 아직 작성하지 않으셨어요 !</>}</Div>
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
