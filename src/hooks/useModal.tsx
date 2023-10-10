import { useSetRecoilState } from 'recoil';
import { isOpenModalState } from '@/Constant/layout';

const useModal = () => {
	const setIsModalOpen = useSetRecoilState(isOpenModalState);

	const showModal = () => {
		const container = document.querySelector('#portal .container');

		if (container) {
			container.classList.add('modal-open');

			setIsModalOpen(true);
		}
	};

	const hideModal = () => {
		const container = document.querySelector('#portal .container');

		if (container) {
			container.classList.remove('modal-open');

			//* 600ms 시간 후 애니메이션이 종료 되기에, 해당 시간을 둠
			setTimeout(() => {
				setIsModalOpen(false);
			}, 600);
		}
	};

	const isModalOpen = () => {
		const container = document.querySelector('#portal');
		return !!container;
	};

	return { isModalOpen, showModal, hideModal };
};

export default useModal;
