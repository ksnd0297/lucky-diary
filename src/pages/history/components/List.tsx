import styled from 'styled-components';

import { getFormatDate } from '@/utils/date';
import useDiary from '@/hooks/list/useDiary';
import { coinListType } from '../../../hooks/history/useHistory';

function List(props: coinListType) {
	const { date, coin: value } = props;

	const { onDateClick } = useDiary();

	return (
		<Wrapper onClick={() => onDateClick(new Date(date))}>
			<Div fontSize="18px">{getFormatDate(date)}</Div>
			<Div fontSize="16px" flex center>
				{+value >= 0 ? '💙' : '❤️'}&nbsp;&nbsp;
				<Div color={+value >= 0 ? 'blue' : 'red'}>{+value >= 0 ? `+${+value}` : +value}</Div>
			</Div>
			<Div fontSize="14px" flex center>
				<Div color={+value >= 0 ? 'blue' : 'red'}>{+value}</Div>&nbsp;의 행운코인을&nbsp;
				<Div color={+value >= 0 ? 'blue' : 'red'}>{+value >= 0 ? '획득' : '소비'}</Div>
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
