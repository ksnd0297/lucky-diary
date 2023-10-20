import styled from 'styled-components';
import { subDays } from 'date-fns';
import { withLayout } from '@/components/layout/withLayout';
import List from './components/List';

const list = [
	{ date: new Date(), value: 70 },
	{ date: subDays(new Date(), 1), value: -50 },
	{ date: subDays(new Date(), 2), value: 30 },
	{ date: subDays(new Date(), 3), value: 60 },
	{ date: subDays(new Date(), 4), value: 100 },
	{ date: subDays(new Date(), 5), value: 200 },
	{ date: subDays(new Date(), 6), value: -120 },
	{ date: subDays(new Date(), 7), value: -150 },
	{ date: subDays(new Date(), 8), value: -180 },
	{ date: subDays(new Date(), 9), value: 300 },
];

function History() {
	return (
		<>
			<Wrapper>
				{list.map((value) => (
					<List key={value.date.getTime()} {...value} />
				))}
			</Wrapper>
		</>
	);
}

export default withLayout({ footer: true })(History);

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	overflow: auto;
`;
