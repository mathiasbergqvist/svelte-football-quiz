import App from './App.svelte';
import 'smelte/src/tailwind.css';
import HMR from '@sveltech/routify/hmr';

const app = HMR(App, { target: document.body }, 'routify-app');

export default app;
