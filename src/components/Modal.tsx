import styled from 'styled-components';
import { ModalConfigType } from '@/Constant/layout';
import Portal from './Portal';

function Modal(props: ModalConfigType) {
	const { children, isOpen } = props;

	return (
		<Portal selector="#modal">
			<Container>
				<div className="container">
					<div className="modal">{isOpen && children}</div>
				</div>
			</Container>
		</Portal>
	);
}

export default Modal;

const Container = styled.div`
	.modal {
		background: #fff;
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		transition: all 600ms cubic-bezier(0.86, 0, 0.07, 1);
		top: 100%;
		position: fixed;
		left: 0;
		text-align: left;
	}

	.container.modal-open .modal {
		top: 0;
	}
`;
