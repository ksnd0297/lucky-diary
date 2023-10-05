import { ReactNode } from 'react';
import Modal from '@/components/Modal';

const useModal = () => {
	const createModal = ({ children }: { children: ReactNode }) => <Modal>{children}</Modal>;

	const showModal = () => {
		const container = document.querySelector('#portal .container');

		if (container) {
			container.classList.add('modal-open');
		}
	};

	const hideModal = () => {
		const container = document.querySelector('#portal .container');

		if (container) {
			container.classList.remove('modal-open');
		}
	};

	const isModalOpen = () => {
		const container = document.querySelector('.modal-open');

		return !!container;
	};

	return { isModalOpen, createModal, showModal, hideModal };
};

export default useModal;
