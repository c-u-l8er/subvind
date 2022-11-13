// export let appData = writable({});

import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const defaultValue = 'https://api.istrav.com';
const initialValue = browser ? window.localStorage.getItem('backend') ?? defaultValue : defaultValue;
 
const backend = writable<string>(initialValue);
 
backend.subscribe((value) => {
  if (browser) {
    window.localStorage.setItem('backend', value);
  }
});
 
export default backend;