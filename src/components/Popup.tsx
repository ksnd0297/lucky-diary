import styled from 'styled-components';
import { MouseEvent, useRef } from 'react';
import { PopupConfigType } from '@/Constant/layout';
import usePopup from '@/hooks/usePopup';
import Portal from './Portal';

function Popup(props: PopupConfigType) {
	const { isOpen, children, onConfirm, onCancel, confirmText, cancelText } = props;

	const { hidePopup } = usePopup();

	const ref = useRef<HTMLDivElement | null>(null);

	const onDimmedClick = (event: MouseEvent<HTMLDivElement>) => {
		if ((event.target as HTMLDivElement).contains(ref.current)) {
			hidePopup();
		}
	};

	return (
		<Portal selector="#popup">
			<Container>
				{isOpen && (
					<div className="popup" onClick={onDimmedClick} aria-hidden>
						<Wrapper ref={ref}>
							<ContentWrapper>
								<Content>{children}</Content>
							</ContentWrapper>
							<ButtonWrapper>
								<Button className="cancel" onClick={onCancel}>
									{cancelText ?? '취소'}
								</Button>
								<Button className="confirm" onClick={onConfirm}>
									{confirmText ?? '확인'}
								</Button>
							</ButtonWrapper>
						</Wrapper>
					</div>
				)}
			</Container>
		</Portal>
	);
}

export default Popup;

const Container = styled.div`
	.popup {
		background: rgba(0, 0, 0, 0.1);
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		top: 0;
		position: fixed;
		left: 0;
		text-align: left;

		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

const Wrapper = styled.div`
	width: 70%;
	height: 35%;
`;

const ContentWrapper = styled.div`
	width: 100%;
	height: 80%;
	background-color: white;
	border-top-left-radius: 2%;
	border-top-right-radius: 2%;

	padding: 7%;
`;

const Content = styled.div`
	width: 100%;
	height: 100%;
	background-color: white;

	border-radius: 5%;

	display: flex;
	align-items: center;
	justify-content: space-evenly;

	flex-direction: column;
`;

const ButtonWrapper = styled.div`
	width: 100%;
	height: 25%;
	background-color: white;

	border-end-start-radius: 2%;
	border-end-end-radius: 2%;

	display: flex;

	justify-content: space-evenly;

	.cancel {
		background-color: #b9b9b9;
	}

	.confirm {
		background-color: #fac85a;
	}
`;

const Button = styled.button`
	border: 0;
	background-color: transparent;

	width: 40%;
	height: 70%;

	border-radius: 5%;

	display: flex;
	align-items: center;
	justify-content: center;
`;
