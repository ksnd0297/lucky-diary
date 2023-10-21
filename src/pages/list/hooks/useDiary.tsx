import { useEffect } from 'react';
import { isSameDay } from 'date-fns';
import { useRouter } from 'next/router';
import useMessage from '@/hooks/useMessage';
import useModal from '@/hooks/useModal';
import Fill from '@/pages/fill';
import usePopup from '@/hooks/usePopup';

const useDiary = (writeDates: Date[]) => {
	const router = useRouter();

	const { showModal } = useModal();
	const { showPopup, hidePopup } = usePopup();

	const { response, isFetched, postMessage } = useMessage();

	const { data, key } = response || {};

	useEffect(() => {
		if (!isFetched) return;

		if (key === 'DIARY_GET_DIARY') {
			showModal({
				children: <Fill wroteText={data.text} isWrote />,
			});
		}
	}, [isFetched]);

	const onClick = (value: Date) => {
		const isExist = writeDates.find((writeDate) => isSameDay(writeDate, value));

		if (!isExist) {
			return showPopup({
				children: <BeforeWrite />,
				onConfirm: () => {
					router.push('/');
					hidePopup();
				},
			});
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

function BeforeWrite() {
	return (
		<>
			<h3>작성된 일기가 없습니다 !</h3>
			<br />
			<p>오늘 일기를 작성하러 가실까요 ?</p>
		</>
	);
}
