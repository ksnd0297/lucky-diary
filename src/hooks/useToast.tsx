import { useSetRecoilState } from 'recoil';
import { toastConfigState } from '@/Constant/layout';

const useToast = () => {
	const setToastConfig = useSetRecoilState(toastConfigState);

	const hideToast = () => {};

	const showToast = ({ text }: { text: string }) => {
		setToastConfig({
			isOpen: true,
			text,
		});

		setTimeout(() => {
			setToastConfig({
				isOpen: false,
				text: '',
			});
		}, 1000);
	};

	return { showToast, hideToast };
};

export default useToast;
