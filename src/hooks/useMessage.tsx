import { useEffect, useState } from 'react';
import { isClient, isWebView } from '@/utils/device';

type messageType = {
	type: string;
	domain: string;
	message?: object;
};

const useMessage = () => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const [data, setData] = useState<{ code: number; key: string; data: any }>();
	const [isFetched, setIsFetched] = useState<boolean>(false);

	const listener = (event: MessageEvent) => {
		if (!isWebView()) return;

		const response = JSON.parse(event.data);

		setIsFetched(true);
		setData(response);
	};

	const postMessage = (message: messageType) => {
		if (!isClient) return;

		setIsFetched(false);
		window.ReactNativeWebView?.postMessage(JSON.stringify(message));
	};

	const debug = (message: object) => {
		if (!isClient) return;

		window.ReactNativeWebView?.postMessage(
			JSON.stringify({
				domain: 'UTIL',
				type: 'DEBUG',
				message,
			}),
		);
	};

	useEffect(() => {
		if (!isClient) return;

		window.addEventListener('message', listener);
		document.addEventListener('message', listener);

		return () => {
			window.removeEventListener('message', listener);
			document.addEventListener('message', listener);
		};
	}, []);

	return { response: data!, isFetched, postMessage, debug };
};

export default useMessage;
