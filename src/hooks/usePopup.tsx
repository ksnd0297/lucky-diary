import { useSetRecoilState } from 'recoil';
import { ReactNode } from 'react';
import { popupConfigState } from '@/Constant/layout';

const usePopup = () => {
	const setPopupConfig = useSetRecoilState(popupConfigState);

	const hidePopup = () => {
		setPopupConfig({
			isOpen: false,
			children: <></>,
		});
	};

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
			onConfirm: onConfirm ?? hidePopup,
			onCancel: onCancel ?? hidePopup,
			confirmText,
			cancelText,
		});
	};

	return { showPopup, hidePopup };
};

export default usePopup;
