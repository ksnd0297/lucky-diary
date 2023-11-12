import styled from 'styled-components';
import clsx from 'clsx';
import { ToastConfigType } from '@/Constant/layout';
import Portal from './Portal';

function Toast(props: ToastConfigType) {
	const { isOpen, text } = props;

	return (
		<Portal selector="#toast">
			<Container>
				<div className={clsx({ open: !!isOpen })}>
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

	div {
		transition: transform 500ms;

		&.open {
			width: 70%;
			height: 50%;

			border-radius: 3%;
			background-color: black;
			color: white;

			display: flex;
			align-items: center;
			justify-content: center;

			transform: translateY(-20px);
		}
	}
`;
