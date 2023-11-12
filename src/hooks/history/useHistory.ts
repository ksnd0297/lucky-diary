import { useEffect, useState } from "react";
import useMessage from "@/hooks/useMessage";

export type coinListType = {
  date: string;
  emotion: string;
  coin: string;
}

const useHistory = () => {
  const [coinList, setCoinList] = useState<coinListType[] | null>(null);

  const {response, isFetched, postMessage} = useMessage();

  const { data, code, key } = response || {};

  useEffect(() => {
    postMessage({
      domain: 'COIN',
      type:'GET_COIN_LIST'
    })
  }, []);

  useEffect(() => {
    if(!isFetched) return;

    if(key[0] === 'COIN_GET_COIN_LIST' && code === 200) {
      setCoinList(data as coinListType[]);
    }

  }, [isFetched, key])

  return {coinList}
}

export default useHistory;