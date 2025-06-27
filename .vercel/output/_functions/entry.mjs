import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_ajBrhcQi.mjs';
import { manifest } from './manifest_Clx5zhXi.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/planta/_id_.astro.mjs');
const _page2 = () => import('./pages/solicitar-cotizacion.astro.mjs');
const _page3 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/planta/[id].astro", _page1],
    ["src/pages/solicitar-cotizacion.astro", _page2],
    ["src/pages/index.astro", _page3]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "e3586892-beb9-443c-9bf5-0c12f8aeeb7e",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
