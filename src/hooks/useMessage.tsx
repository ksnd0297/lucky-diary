import { useState } from 'react';
import { isClient } from '@/utils/device';

type messageType = {
	type: string;
	domain: string;
	message?: object;
};

const useMessage = () => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const [data, setData] = useState<{ code: number; key: string; data: any }>();
	const [isFetched, setIsFetched] = useState<boolean>(false);

	const getMessage = () => {
		if (!isClient) return;

		const listener = (event: MessageEvent) => {
			const response = JSON.parse(event.data);

			setIsFetched(true);
			setData(response);
		};

		window.addEventListener('message', listener);
	};

	const postMessage = (message: messageType) => {
		if (!isClient) return;

		window.ReactNativeWebView.postMessage(JSON.stringify(message));
	};

	const debug = (message: object) => {
		if (!isClient) return;

		window.ReactNativeWebView.postMessage(
			JSON.stringify({
				domain: 'UTIL',
				type: 'DEBUG',
				message,
			}),
		);
	};

	getMessage();

	return { response: data!, isFetched, postMessage, debug };
};

export default useMessage;
