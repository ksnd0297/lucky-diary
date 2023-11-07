export const isClient = typeof window === 'object';

export const isWebView = () => {
	if (!isClient) return;

	return !!navigator.userAgent.match(/WebView/);
};

export const isAndroid = () => {
	if (!isClient) return;

	return !!navigator.userAgent.match(/Android/);
};

export const isIos = () => {
	if (!isClient) return;

	return !!navigator.userAgent.match(/ios/);
};
