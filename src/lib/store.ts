import { writable } from 'svelte/store';

function createLog() {
    const { subscribe, set, update } = writable([{ t: Date.now(), l: "LOG STARTED" }]);

    return {
        subscribe,
        write: (line: string) => update(n => [...n, { t: Date.now(), l: line }]),
        clear: () => set([])
    };
}

export const log = createLog();
export const popup = writable(false);