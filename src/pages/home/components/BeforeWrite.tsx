import { differenceInDays } from 'date-fns';
import { useRouter } from 'next/router';
import { styled } from 'styled-components';

type BeforeWriteProps = {
	date: string;
};

function BeforeWrite(props: BeforeWriteProps) {
	const { date } = props;

	const router = useRouter();

	const onClick = (path: string) => {
		if (router.isReady) {
			router.push(`/${path}`);
		}
	};

	const beforeWriteDay = !date ? 0 : differenceInDays(new Date(date), new Date());

	return (
		<Wrapper>
			<P fontWeight={600}>{beforeWriteDay}일 전에 마지막 일기를 작성하셨어요</P>
			<P fontWeight={800} onClick={() => onClick('list')}>
				가장 최근에 작성한 일기 보러가기 {'>'}
			</P>
			<P fontWeight={800} onClick={() => onClick('history')}>
				내 행운 코인 내역 보러가기 {'>'}
			</P>
		</Wrapper>
	);
}

export default BeforeWrite;

const Wrapper = styled.div`
	width: 100%;
	height: 15%;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
`;

const P = styled.p<{ fontWeight?: number }>`
	font-size: 16px;
	font-weight: ${(props) => props.fontWeight};
`;
