import { atom } from 'recoil';

export type userInfoType = {
	coin: string;
	last: string;
	isTodayWrite: boolean;
};

export const userInfoState = atom({
	key: 'userInfoState',
	default: {} as userInfoType,
});
