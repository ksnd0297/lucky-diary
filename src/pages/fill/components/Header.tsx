import Image from 'next/image';
import styled from 'styled-components';
import useModal from '@/hooks/useModal';
import usePopup from '@/hooks/usePopup';
import useMessage from '@/hooks/useMessage';

type HeaderProps = {
	text: string;
	isWrote?: boolean;
};

function Header(props: HeaderProps) {
	const { text, isWrote } = props;

	const { hideModal } = useModal();
	const { showPopup, hidePopup } = usePopup();

	const { postMessage } = useMessage();

	const onClose = () => {
		if (text.length > 0 && !isWrote) {
			showPopup({
				children: (
					<>
						<h3>작성중인 내용이 존재합니다</h3>
						<p style={{ fontSize: '10px' }}>닫기 시 작성중인 내용은 저장되지 않습니다.</p>
					</>
				),
				confirmText: '머무르기',
				cancelText: '닫기',
				onCancel: () => {
					hideModal();
					hidePopup();
				},
			});
		} else {
			hideModal();
		}
	};

	const onSubmit = () => {
		showPopup({
			children: (
				<>
					<h3>일기를 작성하시겠습니까 ?</h3>
					<p style={{ fontSize: '10px' }}>오늘 작성한 일기는 더 이상 수정되지 않습니다.</p>
				</>
			),
			confirmText: '작성하기',
			cancelText: '닫기',
			onConfirm: () => {
				postMessage({
					domain: 'DIARY',
					type: 'CREATE_DIARY',
					message: {
						text,
					},
				});

				hidePopup();
				hideModal();
			},
		});
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
