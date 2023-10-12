import { useSetRecoilState } from 'recoil';
import { ReactNode } from 'react';
import { popupConfigState } from '@/Constant/layout';

const usePopup = () => {
	const setPopupConfig = useSetRecoilState(popupConfigState);

	const showPopup = ({
		children,
		onConfirm,
		onCancel,
		confirmText,
		cancelText,
	}: {
		children?: ReactNode;
		onConfirm?: () => void;
		onCancel?: () => void;
		confirmText?: string;
		cancelText?: string;
	}) => {
		setPopupConfig({
			isOpen: true,
			children,
			onConfirm,
			onCancel,
			confirmText,
			cancelText,
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
