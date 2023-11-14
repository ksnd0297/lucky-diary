import '@/styles/globals.css';
import '@/styles/normalize.css';
import '@/styles/Calendar.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { RecoilRoot, useRecoilValue } from 'recoil';
import Modal from '@/components/Modal';
import { modalConfigState, popupConfigState, toastConfigState } from '@/Constant/layout';
import Popup from '@/components/Popup';
import Toast from '@/components/Toast';

function ModalComponent() {
	const modalConfig = useRecoilValue(modalConfigState);

	return <Modal {...modalConfig} />;
}

function PopupComponent() {
	const popupConfig = useRecoilValue(popupConfigState);

	return <Popup {...popupConfig} />;
}

function ToastComponent() {
	const toastConfig = useRecoilValue(toastConfigState);

	return <Toast {...toastConfig} />;
}

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<RecoilRoot>
				<Head>
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"
					/>
				</Head>
				<Component {...pageProps} />
				<ModalComponent />
				<PopupComponent />
				<ToastComponent />
			</RecoilRoot>
		</>
	);
}
