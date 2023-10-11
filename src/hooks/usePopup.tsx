import { useSetRecoilState } from 'recoil';
import { ReactNode } from 'react';
import { popupConfigState } from '@/Constant/layout';

const usePopup = () => {
	const setPopupConfig = useSetRecoilState(popupConfigState);

	const showPopup = ({
		children,
		onConfirm,
		onCancel,
	}: {
		children?: ReactNode;
		onConfirm?: () => void;
		onCancel?: () => void;
	}) => {
		setPopupConfig({
			isOpen: true,
			children,
			onConfirm,
			onCancel,
		});
	};

	const hidePopup = () => {
		setPopupConfig({
			isOpen: false,
			children: <></>,
		});
	};

	return { showPopup, hidePopup };
};

export default usePopup;
