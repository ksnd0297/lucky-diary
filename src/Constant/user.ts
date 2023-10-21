import { atom } from 'recoil';

export type userInfoType = {
	coin: string;
	last: string;
};

export const userInfoState = atom({
	key: 'userInfoState',
	default: {} as userInfoType,
});
