// export let appData = writable({});

import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const defaultValue = '';
const initialValue = browser ? window.localStorage.getItem('firebase') ?? defaultValue : defaultValue;
 
const firebase = writable<string>(initialValue);
 
firebase.subscribe((value) => {
  if (browser) {
    window.localStorage.setItem('firebase', value);
  }
});
 
export default firebase;