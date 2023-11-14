import { useEffect } from 'react';
import { isSameDay } from 'date-fns';
import useMessage from '@/hooks/useMessage';
import useModal from '@/hooks/useModal';
import Fill from '@/pages/fill';
import useToast from '../useToast';

const useDiary = (writeDates?: Date[]) => {
	const { showModal } = useModal();

	const { showToast } = useToast();

	const { response, isFetched, postMessage } = useMessage();

	const { data, code, key } = response || {};

	useEffect(() => {
		if (!isFetched) return;

		if (key[0] === 'DIARY_GET_DIARY' && code === 200) {
			showModal({
				children: <Fill wroteText={data.text} isWrote />,
			});
		}
	}, [isFetched, key]);

	const onClick = (value: Date) => {
		if (writeDates) {
			const isExist = writeDates.find((writeDate) => isSameDay(writeDate, value));

			if (!isExist) {
				return showToast({
					text: '작성된 일기가 없습니다.',
				});
			}
		}

		postMessage({
			domain: 'DIARY',
			type: 'GET_DIARY',
			message: {
				date: value,
			},
		});
	};

	return { onDateClick: onClick };
};

export default useDiary;
