
import { SvelteComponentTyped } from 'svelte';

export interface ConnectionStatusEventsInterface {
    change: (event: CustomEvent) => void;
}

export class ConnectionStatus extends SvelteComponentTyped<{}, ConnectionStatusEventsInterface> {}
