import styled from 'styled-components';
import { withLayout } from '@/components/layout/withLayout';
import List from './components/List';
import useHistory from '../../hooks/history/useHistory';

function History() {
	const { coinList } = useHistory();

	return (
		<>
			<Wrapper>{coinList?.map((value) => <List key={value.date} {...value} />)}</Wrapper>
		</>
	);
}

export default withLayout({ footer: true })(History);

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	overflow: auto;
`;
