import { useState } from 'react';
import { isClient } from '@/utils/device';

type messageType = {
	type: string;
	domain: string;
	data?: string;
};

const useMessage = () => {
	const [data, setData] = useState<any>();
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const getMessage = () => {
		if (!isClient) return;

		const listener = (event: MessageEvent) => {
			const response = JSON.parse(event.data);

			setData(response);
			setIsLoading(false);
		};

		setIsLoading(true);
		window.addEventListener('message', listener, { once: true });
	};

	const postMessage = (message: messageType) => {
		if (!isClient) return;

		window.ReactNativeWebView.postMessage(JSON.stringify(message));
	};

	return { data, isLoading, getMessage, postMessage };
};

export default useMessage;
