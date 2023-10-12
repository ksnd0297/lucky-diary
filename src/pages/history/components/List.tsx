import styled from 'styled-components';
import useModal from '@/hooks/useModal';
import Fill from '@/pages/fill';

const getFormatDate = (date: Date) => {
	const year = date.getFullYear();
	const month = 1 + date.getMonth();
	const day = date.getDate();
	return `${year}년 ${month}월 ${day}일 `; // Template literals 이용
};

function List({ date, value }: { date: Date; value: number }) {
	const { showModal } = useModal();

	const onClick = (wroteText: string) => {
		showModal({
			children: <Fill wroteText={wroteText} isWrote />,
		});
	};

	return (
		<Wrapper onClick={() => onClick(date.toString())}>
			<Div fontSize="18px">{getFormatDate(date)}</Div>
			<Div fontSize="16px" flex center>
				{value >= 0 ? '❤️' : '💙'}&nbsp;&nbsp;
				<Div color={value >= 0 ? 'red' : 'blue'}>{value >= 0 ? `+${value}` : value}</Div>
			</Div>
			<Div fontSize="14px" flex center>
				<Div color={value >= 0 ? 'red' : 'blue'}>{value}</Div>&nbsp;의 행운코인을&nbsp;
				<Div color={value >= 0 ? 'red' : 'blue'}>{value >= 0 ? '획득' : '소비'}</Div>
				&nbsp;했어요
			</Div>
			<Line />
		</Wrapper>
	);
}

export default List;

const Wrapper = styled.div`
	width: 100%;
	height: 15%;

	display: flex;

	align-items: center;
	justify-content: space-evenly;

	flex-direction: column;

	margin-top: 5%;
	margin-bottom: 5%;
`;

const Div = styled.div<{ fontSize?: string; color?: string; flex?: boolean; center?: boolean }>`
	font-size: ${(props) => props.fontSize};
	color: ${(props) => props.color};
	display: ${(props) => props.flex && 'flex'};
	align-items: ${(props) => props.center && 'center'};
	justify-content: ${(props) => props.center && 'center'};
`;

const Line = styled.div`
	width: 10%;
	border: 1px solid #c7c7c7;
`;
