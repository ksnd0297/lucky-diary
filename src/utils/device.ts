export const isClient = typeof window === 'object';

export const isAndroid = () => {
	if (!isClient) return;

	return navigator.userAgent.match(/Android/);
};

export const isIos = () => {
	if (!isClient) return;

	return navigator.userAgent.match(/(iPod|iPhone|iPad)/);
};
