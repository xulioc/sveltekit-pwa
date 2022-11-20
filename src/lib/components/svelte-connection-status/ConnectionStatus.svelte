<script>
  import { createEventDispatcher } from 'svelte';
  import { isOnline } from './store';

  const emit = createEventDispatcher();

  $: if (typeof $isOnline === 'boolean') {
    emit(
      'change',
      {
        isOnline: $isOnline,
        isOffline: !$isOnline,
      },
    );
  }
</script>

{#if $isOnline}
  <slot name="online" />
{:else}
  <slot name="offline" />
{/if}
