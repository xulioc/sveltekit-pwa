import { derived, readable } from 'svelte/store';

const settings = {
  usePing: true,
  interval: 5000,
  url: 'https://github.com/sveltejs/svelte/blob/master/package.json',
};

export const setSettings = (input) => {
  if (typeof input.usePing === 'boolean') {
    settings.usePing = input.usePing;
  }
  if (typeof input.interval === 'number') {
    settings.interval = input.interval;
  }
  if (typeof input.url === 'string') {
    settings.url = input.url;
  }
};

export const isOffline = readable(
  !navigator.onLine || false,
  (set) => {
    const handleStatus = event => {
      switch (event.type) {
        case 'online':
          set(false);
          break;
        case 'offline':
          set(true);
          break;
      };
    };

    const makeRequest = async (url) => {
      return fetch(
        url,
        {
          method: 'HEAD',
          mode: 'no-cors',
          cache: 'no-cache',
          credentials: 'omit',
          referrerPolicy: 'no-referrer',
        },
      );
    };

    let lastCheckTime = Date.now();
    let fetchTimeout;

    const handleActive = () => {
      if (!settings.usePing) {
        return;
      }

      if (!document.hidden) {
        const fromLastTime = Date.now() - lastCheckTime;

        fetchTimeout = setTimeout(
          async () => {
            try {
              lastCheckTime = Date.now();
              await makeRequest(settings.url);

              set(false);
            } catch (err) {
              set(true);
            }

            handleActive();
          },
          Math.max(settings.interval - fromLastTime, 0),
        );
      } else {
        clearTimeout(fetchTimeout);
      }
    };

    handleActive();

    window.addEventListener('visibilitychange', handleActive);
    window.addEventListener('online', handleStatus);
    window.addEventListener('offline', handleStatus);

    return () => {
      clearInterval(fetchInterval);
      window.removeEventListener('visibilitychange', handleActive);
      window.removeEventListener('online', handleStatus);
      window.removeEventListener('offline', handleStatus);
    };
  },
);

export const isOnline = derived(
  isOffline,
  $isOffline => !$isOffline,
);
