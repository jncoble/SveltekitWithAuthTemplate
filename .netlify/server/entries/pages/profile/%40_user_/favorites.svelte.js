var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Favorites,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_c63d4b3a = require("../../../../chunks/index-c63d4b3a.js");
var import_load_a61c61e7 = require("../../../../chunks/_load-a61c61e7.js");
var import_index_987f0ee2 = require("../../../../chunks/index-987f0ee2.js");
var import_stores_cb76d12e = require("../../../../chunks/stores-cb76d12e.js");
const load = (0, import_load_a61c61e7.c)("favorites");
const Favorites = (0, import_index_c63d4b3a.c)(($$result, $$props, $$bindings, slots) => {
  let { articles } = $$props;
  if ($$props.articles === void 0 && $$bindings.articles && articles !== void 0)
    $$bindings.articles(articles);
  return `${(0, import_index_c63d4b3a.v)(import_index_987f0ee2.A, "ArticleList").$$render($$result, { articles }, {}, {})}`;
});
