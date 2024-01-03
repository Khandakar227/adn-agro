import { atom, useAtom } from "jotai";

type SortingType = 'default' | 'price-low-to-high' | 'price-high-to-low' | string;

export const initialSort:SortingType = 'default'

export const sortAtom = atom<SortingType>(initialSort);

export const useSorting = () => useAtom(sortAtom);