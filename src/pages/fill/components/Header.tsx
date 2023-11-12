import Image from 'next/image';
import styled from 'styled-components';
import { useRef } from 'react';
import useModal from '@/hooks/useModal';
import usePopup from '@/hooks/usePopup';
import useMessage from '@/hooks/useMessage';
import Coin from '@/components/Coin';
import useToast from '@/hooks/useToast';

type HeaderProps = {
	text: string;
	isWrote?: boolean;
};

function Header(props: HeaderProps) {
	const { text, isWrote } = props;

	const { hideModal } = useModal();
	const { showPopup, hidePopup } = usePopup();
	const { showToast } = useToast();

	const { postMessage } = useMessage();

	const coin = useRef<string | null>(null);
	const emotion = useRef<string | null>(null);

	const onClose = () => {
		if (text.length > 0 && !isWrote) {
			showPopup({
				children: (
					<>
						<h3>작성중인 내용이 존재합니다</h3>
						<p style={{ fontSize: '12px' }}>닫기 시 작성중인 내용은 저장되지 않습니다.</p>
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
		if (text.length <= 0) {
			return showToast({
				text: '일기를 작성해 주세요!',
			});
		}

		showPopup({
			children: <Coin coin={coin} emotion={emotion} />,
			confirmText: '일기 작성',
			cancelText: '작성 취소',
			onConfirm: () => {
				// * 일기 작성
				postMessage({
					domain: 'DIARY',
					type: 'CREATE_DIARY',
					message: {
						text,
					},
				});

				// * 코인 작성
				postMessage({
					domain: 'COIN',
					type: 'CREATE_COIN',
					message: {
						emotion: emotion.current,
						coin: coin.current,
					},
				});

				hidePopup();
				hideModal();

				showToast({
					text: '일기 작성을 완료했어요',
				});
			},
		});
	};

	return (
		<Wrapper>
			<Image src="svg/close-svgrepo-com.svg" alt="일기 취소" width={25} height={25} onClick={onClose} />
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
