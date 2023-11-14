export const isClient = typeof window === 'object';

export const isWebView = () => {
	if (!isClient) return;

	return !!navigator.userAgent.match(/WebView/);
};

export const isAndroid = () => !!navigator.userAgent.match(/Android/);

export const isIos = () => !!navigator.userAgent.match(/ios/);
