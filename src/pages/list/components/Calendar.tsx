import { isSameDay, subYears } from 'date-fns';
import { Calendar as CalendarComponent } from 'react-calendar';
import styled from 'styled-components';
import { Dispatch, SetStateAction } from 'react';
import useModal from '@/hooks/useModal';
import Fill from '@/pages/fill';

const MIN_DATE = subYears(new Date(), 1);
const MAX_DATE = new Date();

type CalendarProps = {
	wroteText: string;
	setWroteText: Dispatch<SetStateAction<string>>;
};

function Calendar(props: CalendarProps) {
	const { wroteText, setWroteText } = props;

	const { showModal } = useModal();

	const writeDates = [new Date(2023, 9, 4), new Date(2023, 9, 5), new Date(2023, 9, 6)];

	return (
		<Wrapper>
			<CalendarComponent
				tileClassName="calendar-tile"
				locale="ko"
				minDate={MIN_DATE}
				maxDate={MAX_DATE}
				showNeighboringMonth={false}
				prev2Label="‹‹"
				next2Label="››"
				calendarType="gregory"
				minDetail="month"
				// eslint-disable-next-line react/no-unstable-nested-components
				tileContent={({ date }) => {
					if (writeDates.find((writeDate) => isSameDay(writeDate, date))) return <Circle />;

					return <></>;
				}}
				onClickDay={() => {
					setWroteText(wroteText);
					showModal({
						children: <Fill wroteText={wroteText} isWrote />,
					});
				}}
			/>
		</Wrapper>
	);
}

export default Calendar;

const Wrapper = styled.div`
	width: 100%;
	height: 100%;

	.calendar-tile {
		height: 80px;

		display: flex;
		align-items: center;
		justify-content: center;
	}

	.react-calendar {
		width: 100%;
		height: 100%;
		background-color: #fcf9fb;
		color: #222;
		line-height: 1.125em;
	}
	.react-calendar__navigation button {
		color: #6f48eb;
		min-width: 44px;
		background: none;
		font-size: 16px;
		margin-top: 8px;
	}

	abbr {
		text-decoration: none;
		position: absolute;
		border-bottom: none;
	}

	abbr[title] :not(.react-calendar__month-view__weekdays__weekday) {
		color: black;
	}

	.react-calendar__tile--now {
		border-radius: 6px;
		color: #6f48eb;
	}

	.react-calendar__tile--hasActive:enabled:hover,
	.react-calendar__tile--hasActive:enabled:focus {
		background: #f8f8fa;
	}
	.react-calendar__tile--active {
		border-radius: 6px;
		font-weight: bold;
		color: white;
	}

	.react-calendar--selectRange .react-calendar__tile--hover {
		background-color: #f8f8fa;
	}
	.react-calendar__tile--range {
		color: black;
		font-weight: 900;
		border-radius: 0;
	}
`;

const Circle = styled.div`
	position: relative;

	border: 3px dashed #ff4b91;
	border-radius: 50%;

	width: 35px;
	height: 35px;
`;
