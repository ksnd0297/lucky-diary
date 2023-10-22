import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import useMessage from '@/hooks/useMessage';
import { userInfoState } from '@/Constant/user';

const useUserInfo = () => {
	const [userInfo, setUserInfo] = useRecoilState(userInfoState);

	const { response, isFetched, postMessage } = useMessage();

	const { key, code, data } = response || {};

	useEffect(() => {
		// * 사용자 정보를 조회합니다
		postMessage({
			domain: 'INFO',
			type: 'GET_INFO',
		});
	}, []);

	useEffect(() => {
		if (!isFetched) return;

		if (key[0] === 'INFO_GET_INFO' && code === 200) {
			setUserInfo({
				coin: data?.coin ?? '',
				last: data?.last ?? '',
				isTodayWrite: data?.isTodayWrite ?? false,
			});
		}
	}, [key, isFetched]);

	return { userInfo };
};

export default useUserInfo;
