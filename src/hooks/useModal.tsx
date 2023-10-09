import { ReactNode, useState } from 'react';
import Modal from '@/components/Modal';

const useModal = () => {
	const [isOn, setIsOn] = useState<boolean>(false);

	const createModal = ({ children }: { children: ReactNode }) => <Modal>{children}</Modal>;

	const showModal = () => {
		const container = document.querySelector('#portal .container');

		if (container) {
			container.classList.add('modal-open');
			setIsOn(true);
		}
	};

	const hideModal = () => {
		const container = document.querySelector('#portal .container');

		if (container) {
			container.classList.remove('modal-open');
			setIsOn(false);
		}
	};

	return { isOn, createModal, showModal, hideModal };
};

export default useModal;
