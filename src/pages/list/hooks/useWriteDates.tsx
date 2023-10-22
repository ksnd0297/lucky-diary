import { useEffect, useState } from 'react';
import useMessage from '@/hooks/useMessage';

const useWriteDates = () => {
	const [writeDates, setWriteDates] = useState<Date[]>([]);

	const { response, isFetched, postMessage } = useMessage();

	const { data, code, key } = response || {};

	useEffect(() => {
		postMessage({
			domain: 'DIARY',
			type: 'GET_DIARY_DATE_LIST',
		});
	}, []);

	useEffect(() => {
		if (!isFetched) return;

		if (key[0] === 'DIARY_GET_DIARY_DATE_LIST' && code === 200) {
			const dateList = JSON.parse(data).map((date: string) => new Date(date));

			setWriteDates(dateList);
		}
	}, [isFetched, key]);

	return { writeDates };
};

export default useWriteDates;
