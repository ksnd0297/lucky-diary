import styled from 'styled-components';
import { ReactNode } from 'react';
import Portal from './Portal';

function Modal({ children }: { children: ReactNode }) {
	return (
		<Portal selector="#portal">
			<Container>
				<div className="container">
					<div className="modal">{children}</div>
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
