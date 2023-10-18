import styled from 'styled-components';
import Image from 'next/image';
import { withLayout } from '@/components/layout/withLayout';
import usePopup from '@/hooks/usePopup';

function SettingPage() {
	const { showPopup, hidePopup } = usePopup();

	const onAskClick = () => {
		window?.open(
			'https://docs.google.com/forms/d/e/1FAIpQLSdigmLgLDf_KXhX-G25WWeM0D7OWMnieExRoACE9QekyNQI9A/viewform?usp=sf_link',
		);
	};

	const onResetClick = () => {
		showPopup({
			children: (
				<>
					<h3>정말 작성한 일기를 삭제하시겠습니까 ?</h3>
					<br />
					<p>삭제한 일기들은 되돌릴 수 없습니다.</p>
				</>
			),
			onConfirm: () => {
				// TODO : 리셋 로직 작동
				hidePopup();
			},
			onCancel: () => {
				hidePopup();
			},
		});
	};

	return (
		<Wrapper>
			<div className="book">
				<Image src="/gif/giphy-book_out.gif" alt="book" width={150} height={150} />
			</div>

			<div className="ask" onClick={onAskClick} role="presentation">
				행운 다이어리 문의하기 {'>'}
			</div>
			<div className="reset" onClick={onResetClick} role="presentation">
				정보 초기화 {'>'}
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;

	width: 100%;
	height: 100%;

	.book {
		width: 100%;
		height: 20%;

		display: flex;
		align-items: center;
		justify-content: center;

		margin: 5% 0;

		img {
			border-radius: 50%;
		}
	}

	.ask {
		width: 100%;
		height: 10%;
		font-size: 20px;

		display: flex;
		align-items: center;
		justify-content: center;
	}

	.reset {
		width: 100%;
		height: 10%;
		font-size: 20px;

		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

export default withLayout({ footer: true })(SettingPage);
