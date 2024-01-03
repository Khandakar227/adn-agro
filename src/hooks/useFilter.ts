import { atom, useAtom } from "jotai";

type FilterProps = {
  minAmount: number;
  maxAmount: number;
  category: string;
};

export const initialFilter = {
  minAmount: 0,
  maxAmount: 2000,
  category: "",
}

export const filterAtom = atom<FilterProps>(initialFilter);

export const useFilter = () => useAtom(filterAtom);