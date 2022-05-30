/* @refresh reload */
import { render } from 'solid-js/web';
import { Router } from 'solid-app-router';
import { useRegisterSW } from 'virtual:pwa-register/solid';

import './index.css';
import App from './App';

const intervalMS = 60* 60* 1000

const updateServiceWorker = useRegisterSW({
    onRegistered(r) {
        r && setInterval(() => {
            r.update()
        }, intervalMS)
    }
})

render(() => <Router><App /></Router>, document.getElementById('root') as HTMLElement);
