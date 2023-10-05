import styled from 'styled-components';
import Modal from '../../components/Modal';
import Header from './components/Header';
import Write from './components/Write';

function Fill() {
	return (
		<Modal>
			<Wrapper>
				<Header />
				<Write />
			</Wrapper>
		</Modal>
	);
}

export default Fill;

const Wrapper = styled.div`
	width: 100%;
	height: 100%;

	background-color: #fffbfb;
`;
