import { useSetRecoilState } from 'recoil';
import { ReactNode } from 'react';
import { modalConfigState } from '@/Constant/layout';

const useModal = () => {
	const setModalConfig = useSetRecoilState(modalConfigState);

	const showModal = ({ children }: { children: ReactNode }) => {
		const container = document.querySelector('#modal .container');

		if (container) {
			container.classList.add('modal-open');

			setModalConfig({
				isOpen: true,
				children,
			});
		}
	};

	const hideModal = () => {
		const container = document.querySelector('#modal .container');

		if (container) {
			container.classList.remove('modal-open');

			//* 600ms 시간 후 애니메이션이 종료 되기에, 해당 시간을 둠
			setTimeout(() => {
				setModalConfig({
					isOpen: false,
					children: <></>,
				});
			}, 600);
		}
	};

	const isModalOpen = () => {
		const container = document.querySelector('#modal .modal')?.childNodes[0];
		return !!container;
	};

	return { isModalOpen, showModal, hideModal };
};

export default useModal;
