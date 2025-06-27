import { c as createComponent, a as createAstro, m as maybeRenderHead, e as addAttribute, b as renderScript, r as renderComponent, f as renderTransition, d as renderTemplate } from '../chunks/astro/server_DJh7TYu4.mjs';
import 'kleur/colors';
import { g as getCollection, $ as $$Layout } from '../chunks/Layout_Jh9Ca571.mjs';
import '../chunks/index_DfOMS8cV.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_BBBg1htr.mjs';
import { l as logoFinal } from '../chunks/logofinal_CjgwJIAg.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$CardPlant = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardPlant;
  const { medias, name, price, type, images, _id, slug } = Astro2.props;
  let firstImage = null;
  if (medias.length > 0) {
    firstImage = medias[0].filename;
  }
  const groupedTypes = type.reduce((acc, curr, i) => {
    if (i % 2 === 0) {
      acc.push([curr]);
    } else {
      acc[acc.length - 1].push(curr);
    }
    return acc;
  }, []);
  return renderTemplate`${maybeRenderHead()}<div class="relative h-full max-h-[40vh]"> <div class="h-full"> <a${addAttribute(`/planta/${slug}`, "href")}> ${firstImage ? renderTemplate`${renderComponent($$result, "Image", $$Image, { "class": "aspect-3/3 object-cover rounded-lg h-full w-full drop-shadow-xl", "src": firstImage, "alt": name, "width": 400, "height": 300, "data-astro-transition-scope": renderTransition($$result, "hfuyzgnb", "", `${slug}-img`) })}` : renderTemplate`${renderComponent($$result, "Image", $$Image, { "class": "aspect-3/3 object-cover rounded-lg h-full w-full drop-shadow-xl", "src": logoFinal, "alt": name, "width": 400, "height": 300, "data-astro-transition-scope": renderTransition($$result, "qghn2ma7", "", `${slug}-img`) })}`} </a> </div> <div class="absolute bottom-0 w-full h-40 backdrop-blur-md bg-gradient-to-tr from-secondary/90 to-primary/50 backdrop-opacity-90 rounded-b-lg border-t border-white/20"> <div class="flex flex-col justify-between h-full py-2 px-4 gap-2"> <div> <a${addAttribute(`/planta/${slug}`, "href")} class="text-white font-semibold text-2xl">${name}</a> </div> <div> <h3 class="text-accent text-xl"> ${Number(price).toLocaleString("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  })} </h3> </div> <div class="flex justify-between h-10"> <div class="flex gap-4"> ${groupedTypes.map((group) => renderTemplate`<div class="flex flex-col"> ${group.map((t) => renderTemplate`<div class="flex gap-2 text-accent text-sm"> <span>${t.name}</span> <span>-</span> <span> ${Number(t.price).toLocaleString("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  })} </span> </div>`)} </div>`)} </div> <div> <button class="quote-btn text-base px-4 py-2 text-white bg-button rounded-xl border-primary shadow hover:bg-button/50 cursor-pointer"${addAttribute(`${_id}`, "data-id")}>Cotizar</button> </div> </div> </div> </div> </div> ${renderScript($$result, "C:/Users/tikan/Documents/GitHub/plants-hub/src/components/CardPlant.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/tikan/Documents/GitHub/plants-hub/src/components/CardPlant.astro", "self");

const $$PlantList = createComponent(async ($$result, $$props, $$slots) => {
  const allPlants = await getCollection("plants");
  const plants = allPlants.sort((a, b) => {
    const aHasMedias = a.data.medias && Array.isArray(a.data.medias) && a.data.medias.length > 0;
    const bHasMedias = b.data.medias && Array.isArray(b.data.medias) && b.data.medias.length > 0;
    if (aHasMedias && !bHasMedias) return -1;
    if (!aHasMedias && bHasMedias) return 1;
    return 0;
  });
  const itemsPerPage = 9;
  const totalItems = plants.length;
  return renderTemplate`${maybeRenderHead()}<div class="container mx-auto px-2 lg:px-0"> <div id="plants-grid" class="grid grid-cols md:grid-cols-2 xl:grid-cols-3 gap-8"> ${plants.map((plant, index) => renderTemplate`<div${addAttribute(`plant-card ${index >= itemsPerPage ? "hidden" : ""}`, "class")}> ${renderComponent($$result, "CardPlant", $$CardPlant, { ...plant.data, "slug": plant.slug })} </div>`)} </div> ${totalItems > itemsPerPage && renderTemplate`<div class="flex justify-center mt-8 pb-36"> <button id="load-more" class="bg-button text-white px-6 py-3 rounded-lg hover:bg-button/50 transition-colors cursor-pointer">
Ver más
</button> </div>`} </div> ${renderScript($$result, "C:/Users/tikan/Documents/GitHub/plants-hub/src/components/PlantList.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/tikan/Documents/GitHub/plants-hub/src/components/PlantList.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Alto Jardin | Vivero" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PlantList", $$PlantList, {})} ` })}`;
}, "C:/Users/tikan/Documents/GitHub/plants-hub/src/pages/index.astro", void 0);

const $$file = "C:/Users/tikan/Documents/GitHub/plants-hub/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
