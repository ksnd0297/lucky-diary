import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import useMessage from '@/hooks/useMessage';
import { userInfoState } from '@/Constant/user';

const useUserInfo = () => {
	const [userInfo, setUserInfo] = useRecoilState(userInfoState);

	const { response, isFetched, postMessage } = useMessage();

	const { code, key, data } = response || {};

	useEffect(() => {
		// * 사용자 정보를 조회합니다
		postMessage({
			domain: 'INFO',
			type: 'GET_INFO',
		});
	}, []);

	useEffect(() => {
		if (!isFetched) return;

		// * info.json 이 존재하지 않을 경우
		if (code === 404) {
			return postMessage({
				domain: 'INFO',
				type: 'CREATE_INFO',
			});
		}

		setUserInfo({
			coin: data?.coin ?? '',
			last: data?.last ?? '',
			isTodayWrite: data?.isTodayWrite ?? false,
		});
	}, [isFetched, key]);

	return { userInfo };
};

export default useUserInfo;
