import 'kleur/colors';
import { g as decodeKey } from './chunks/astro/server_DJh7TYu4.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DuO16wYp.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/tikan/Documents/GitHub/plants-hub/","cacheDir":"file:///C:/Users/tikan/Documents/GitHub/plants-hub/node_modules/.astro/","outDir":"file:///C:/Users/tikan/Documents/GitHub/plants-hub/dist/","srcDir":"file:///C:/Users/tikan/Documents/GitHub/plants-hub/src/","publicDir":"file:///C:/Users/tikan/Documents/GitHub/plants-hub/public/","buildClientDir":"file:///C:/Users/tikan/Documents/GitHub/plants-hub/dist/client/","buildServerDir":"file:///C:/Users/tikan/Documents/GitHub/plants-hub/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.D9BFB6oc.css"}],"routeData":{"route":"/solicitar-cotizacion","isIndex":false,"type":"page","pattern":"^\\/solicitar-cotizacion\\/?$","segments":[[{"content":"solicitar-cotizacion","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/solicitar-cotizacion.astro","pathname":"/solicitar-cotizacion","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.D9BFB6oc.css"},{"type":"inline","content":"@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0;mix-blend-mode:plus-lighter}to{opacity:1;mix-blend-mode:plus-lighter}}@keyframes astroFadeOut{0%{opacity:1;mix-blend-mode:plus-lighter}to{opacity:0;mix-blend-mode:plus-lighter}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/tikan/Documents/GitHub/plants-hub/src/pages/planta/[id].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/planta/[id]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Users/tikan/Documents/GitHub/plants-hub/src/components/CardPlant.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/tikan/Documents/GitHub/plants-hub/src/components/PlantList.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/tikan/Documents/GitHub/plants-hub/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/Users/tikan/Documents/GitHub/plants-hub/src/components/Nav.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/tikan/Documents/GitHub/plants-hub/src/layouts/Layout.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/tikan/Documents/GitHub/plants-hub/src/pages/solicitar-cotizacion.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/solicitar-cotizacion@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/planta/[id]@_@astro":"pages/planta/_id_.astro.mjs","\u0000@astro-page:src/pages/solicitar-cotizacion@_@astro":"pages/solicitar-cotizacion.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","C:/Users/tikan/Documents/GitHub/plants-hub/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_vCXc9_cN.mjs","C:\\Users\\tikan\\Documents\\GitHub\\plants-hub\\.astro\\content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_CLtFlHuY.mjs","\u0000@astrojs-manifest":"manifest_Clx5zhXi.mjs","C:\\Users\\tikan\\Documents\\GitHub\\plants-hub\\.astro\\content-assets.mjs":"chunks/content-assets_BIsYd7uS.mjs","C:/Users/tikan/Documents/GitHub/plants-hub/src/pages/planta/[id].astro?astro&type=script&index=0&lang.ts":"_astro/_id_.astro_astro_type_script_index_0_lang.CChGdv_w.js","C:/Users/tikan/Documents/GitHub/plants-hub/src/pages/solicitar-cotizacion.astro?astro&type=script&index=0&lang.ts":"_astro/solicitar-cotizacion.astro_astro_type_script_index_0_lang.BL106Fy-.js","C:/Users/tikan/Documents/GitHub/plants-hub/src/components/PlantList.astro?astro&type=script&index=0&lang.ts":"_astro/PlantList.astro_astro_type_script_index_0_lang.BF_lo2WY.js","C:/Users/tikan/Documents/GitHub/plants-hub/src/components/CardPlant.astro?astro&type=script&index=0&lang.ts":"_astro/CardPlant.astro_astro_type_script_index_0_lang.kwpIhMg8.js","C:/Users/tikan/Documents/GitHub/plants-hub/src/components/Nav.astro?astro&type=script&index=0&lang.ts":"_astro/Nav.astro_astro_type_script_index_0_lang.BVX1J4A3.js","C:/Users/tikan/Documents/GitHub/plants-hub/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.BZs-2RF_.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/tikan/Documents/GitHub/plants-hub/src/pages/planta/[id].astro?astro&type=script&index=0&lang.ts","const o=JSON.parse(localStorage.getItem(\"quotationItems\")||\"[]\"),a=document.querySelectorAll(\".quote-btn\");a.forEach(e=>{o.includes(e.getAttribute(\"data-id\"))&&(e.textContent=\"Agregado\",e.classList.remove(\"bg-button\"),e.classList.add(\"bg-green-500\"),e.classList.add(\"hover:bg-green-600\")),e.addEventListener(\"click\",()=>{let t=JSON.parse(localStorage.getItem(\"quotationItems\")||\"[]\");const s=e.getAttribute(\"data-id\");t.includes(s)?t.splice(t.indexOf(s),1):t.push(s),localStorage.setItem(\"quotationItems\",JSON.stringify(t)),t.includes(s)?(e.textContent=\"Agregado\",e.classList.remove(\"bg-button\"),e.classList.add(\"bg-green-500\"),e.classList.add(\"hover:bg-green-600\")):(e.textContent=\"Cotizar\",e.classList.remove(\"bg-green-500\",\"hover:bg-green-600\"),e.classList.add(\"bg-button\"))})});"],["C:/Users/tikan/Documents/GitHub/plants-hub/src/pages/solicitar-cotizacion.astro?astro&type=script&index=0&lang.ts","const i=document.querySelectorAll(\".type-row\");i.forEach(e=>{const n=e.querySelector(\".delete-btn\"),t=e.querySelector(\".quantity\"),o=e.querySelector(\".type-price\"),c=e.querySelector(\".type-total\"),r=e.querySelector(\".minus-btn\"),l=e.querySelector(\".add-btn\");r&&t&&r.addEventListener(\"click\",()=>{const a=parseInt(t.textContent||\"0\");a>1&&(t.textContent=(a-1).toString(),s(o,t,c))}),l&&t&&l.addEventListener(\"click\",()=>{const a=parseInt(t.textContent||\"0\");t.textContent=(a+1).toString(),s(o,t,c)}),n&&n.addEventListener(\"click\",()=>{e.remove()})});const s=(e,n,t)=>{t&&e&&n&&(t.textContent=`$ ${(parseInt(e.getAttribute(\"data-price\")||\"0\")*parseInt(n.textContent||\"0\")).toString()}`)},u=()=>{const e=document.querySelectorAll(\".type-row\").length,n=document.getElementById(\"total-quantity-plants\");n&&(n.textContent=`(${e})`);const t=document.querySelectorAll(\".type-row\");let o=0;t.forEach(r=>{const l=r.querySelector(\".type-total\");l&&(o+=parseInt(l.textContent?.split(\"$\")[1]||\"0\"))});const c=document.getElementById(\"total-price-plants\");c&&(c.textContent=`$ ${o}`)};document.addEventListener(\"DOMContentLoaded\",u);"],["C:/Users/tikan/Documents/GitHub/plants-hub/src/components/PlantList.astro?astro&type=script&index=0&lang.ts","const n=()=>{document.getElementById(\"load-more\")?.addEventListener(\"click\",()=>{const t=document.querySelectorAll(\".plant-card.hidden\");if(Array.from(t).slice(0,9).forEach(e=>{e.classList.remove(\"hidden\")}),t.length<=9){const e=document.getElementById(\"load-more\");e&&(e.style.display=\"none\")}})};document.addEventListener(\"astro:page-load\",n);n();"],["C:/Users/tikan/Documents/GitHub/plants-hub/src/components/CardPlant.astro?astro&type=script&index=0&lang.ts","const c=()=>{document.querySelectorAll(\".quote-btn\").forEach(t=>{t.addEventListener(\"click\",()=>{let e=JSON.parse(localStorage.getItem(\"quotationItems\")||\"[]\");const s=t.getAttribute(\"data-id\"),n=e.findIndex(a=>a===s);n===-1?(e.push(s),localStorage.setItem(\"quotationItems\",JSON.stringify(e)),t.textContent=\"Agregado\",t.classList.remove(\"bg-button\"),t.classList.add(\"bg-green-500\"),t.classList.add(\"hover:bg-green-600\")):(e.splice(n,1),localStorage.setItem(\"quotationItems\",JSON.stringify(e)),t.textContent=\"Cotizar\",t.classList.remove(\"bg-green-500\",\"hover:bg-green-600\"),t.classList.add(\"bg-button\")),i()})})};function r(){const o=JSON.parse(localStorage.getItem(\"quotationItems\")||\"[]\");document.querySelectorAll(\".quote-btn\").forEach(e=>{const s=e.getAttribute(\"data-id\");o.some(a=>a===s)&&(e.textContent=\"Agregado\",e.classList.remove(\"bg-button\"),e.classList.add(\"bg-green-500\"),e.classList.add(\"hover:bg-green-600\"))})}function i(){const o=JSON.parse(localStorage.getItem(\"quotationItems\")||\"[]\"),t=document.querySelector(\".quotation-count\");console.log(o.length),t&&(t.textContent=o.length)}document.addEventListener(\"astro:page-load\",()=>{c(),i(),r()});"],["C:/Users/tikan/Documents/GitHub/plants-hub/src/components/Nav.astro?astro&type=script&index=0&lang.ts","function o(){const e=JSON.parse(localStorage.getItem(\"quotationItems\")||\"[]\"),t=document.querySelector(\".quotation-count\");t&&(t.textContent=e.length)}function n(){const t=document.getElementById(\"plant-search\").value;if(t){const a=document.querySelector(`option[value=\"${t}\"]`);a&&a.dataset.id&&(window.location.href=`/planta/${a.dataset.id}`)}}function i(){o();const e=document.getElementById(\"button-redirect-quotation\");e&&(e.removeEventListener(\"click\",c),e.addEventListener(\"click\",c));const t=document.getElementById(\"plant-search\");t&&(t.removeEventListener(\"input\",n),t.removeEventListener(\"change\",n),t.addEventListener(\"input\",n),t.addEventListener(\"change\",n))}function c(e){const t=JSON.parse(localStorage.getItem(\"quotationItems\")||\"[]\");t.length>0?e.target.setAttribute(\"href\",`/solicitar-cotizacion?ids=${t.join(\",\")}`):(e.preventDefault(),alert(\"No hay plantas seleccionadas\"))}i();document.addEventListener(\"DOMContentLoaded\",i);window.addEventListener(\"storage\",o);document.addEventListener(\"astro:page-load\",i);document.addEventListener(\"visibilitychange\",()=>{document.hidden||o()});setInterval(o,1e3);"]],"assets":["/_astro/logofinal.8Bow174M.jpg","/_astro/70296aaf-2158-4c92-8c9f-db8a7dd97f52.C3qfJGH-.jpg","/_astro/91983881-866a-4219-8e5c-f8cd2c588ee1.VRbY7iZt.jpg","/_astro/97cbcc33-edd0-48f5-98fb-357400686ec7.C2TN6DhB.jpg","/_astro/659b0f23-08f7-4fb5-be5b-20b5d19da4f8.9kTXfl5M.jpg","/_astro/4684002f-a174-4f3b-835e-5964aa60ce58.CxqKu0CK.jpg","/_astro/3da7c674-a29c-4b06-8768-71ecbc980831.DbEzktGc.jpg","/_astro/9d7dac50-da30-4089-8fd3-7b90db5b44e0.CDKn1ZSY.jpg","/_astro/09644b37-c43b-442a-a1b7-bc175c1a9938.B2UY_nbL.jpg","/_astro/7be39d9e-4694-4ead-8919-c42470e02c8a.M0f68RAd.jpg","/_astro/116507d5-f090-4af1-b84d-1abbff579473.CB-StcV7.jpg","/_astro/9feee11c-5d95-4888-bf88-99a47e8fd78c.CEhrFSea.jpg","/_astro/73f87a34-1d79-4d8e-a696-6f17e604ddfc.DtkI1wxP.jpg","/_astro/dc7126bd-3d1f-4ef5-9d4b-2f6b991b6cff.DjLVEEqw.jpg","/_astro/663f7ece-f6c0-4967-b5a1-84c3dd6d4515.BqXq6Uwc.jpg","/_astro/b793a314-dea2-4d18-a16d-606c89693b47.HPwU74i1.jpg","/_astro/bad09c09-fd20-455a-9f93-51fb50b4d3e8.BPBUilnl.jpg","/_astro/b1a458be-fb8c-46ee-8e3d-c34c3fc0873c.dkaLnAUD.jpg","/_astro/3e5c77d9-e575-446c-a45e-a766610ca685.BTulXo5N.jpg","/_astro/a97664b3-dfb6-42cb-9c86-2bb0076cd0a2.D9DXLOdc.jpg","/_astro/f86ffe0e-24a3-45d6-a0d7-b09831e2b789.BNziuoYz.jpg","/_astro/15080dc3-1e2a-4b29-882b-0989e90edff9._azxFQ6m.jpg","/_astro/e8353ef8-95d1-4d30-9529-1f432661ab2e.5i204N7V.jpg","/_astro/81f94552-b3bb-4a8c-ac07-d4967541f621.BStS8-k8.jpg","/_astro/47de4f97-d66b-4951-a6d9-15d9d808ffbb.B_0dibQ8.jpg","/_astro/d866a4c5-1208-4676-b83c-8bcb23cd97a6.fSUZTLZ9.jpg","/_astro/17a6a9fd-8347-4968-8b9e-fd5ba2c725d3.Cz50p-ef.jpg","/_astro/2bb6f38a-bf55-4e79-9ab8-fcc61313ffe1.BcMcz4DE.jpg","/_astro/46b91dec-0b9b-4d32-9ab0-e65dd15badf9.C2FoEtEU.jpg","/_astro/78c92a03-62bb-4ca0-86f0-98fd76f86481.CiZP9FYT.jpg","/_astro/97b984db-008f-4259-bf38-c54870a59fd4.QW0Qo1Cd.jpg","/_astro/8ed01697-ea2f-465f-8f24-1043c1e7945f.BH5aUp5w.jpg","/_astro/index.D9BFB6oc.css","/favicon.svg","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.BZs-2RF_.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"j169A8taylxeCGu0WAgUTc8s/MuE3E9rgbFaJEBgDVE="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
