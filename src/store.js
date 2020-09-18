import {writable} from 'svelte/store';

export const score = writable(0);
export const round = writable(0);
export const gameOngoing = writable(false);