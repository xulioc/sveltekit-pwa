import { Readable } from 'svelte/store';

export declare const isOffline: Readable<boolean>;
export declare const isOnline: Readable<boolean>;
export declare const setSettings: (input: {
    usePing?: boolean;
    interval?: number;
    url?: string;
}) => void;
