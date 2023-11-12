import styled from 'styled-components';
import clsx from 'clsx';
import { ToastConfigType } from '@/Constant/layout';
import Portal from './Portal';

function Toast(props: ToastConfigType) {
	const { isOpen, text } = props;

	return (
		<Portal selector="#toast">
			<Container className={clsx({ open: !!isOpen })}>
				<div>
					<div>{text}</div>
				</div>
			</Container>
		</Portal>
	);
}
export default Toast;

const Container = styled.div`
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 10%;

	display: flex;
	align-items: end;
	justify-content: center;
	z-index: 3;
	transition: transform 250ms;
	visibility: hidden;

	&.open {
		transform: translateY(-30px);
		visibility: visible;
	}

	div {
		width: 70%;
		height: 50%;

		border-radius: 3%;
		background-color: black;
		color: white;

		display: flex;
		align-items: center;
		justify-content: center;
	}
`;
