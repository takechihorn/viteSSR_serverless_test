import {_ as __vitePreload} from "./index.0c3d4ef8.js";
import {h as defineAsyncComponent, i as reactive, c as createBlock, a as createVNode, t as toDisplayString, u as unref, F as Fragment, g as withScopeId, p as pushScopeId, j as popScopeId, o as openBlock} from "./vendor.987337bb.js";
var _imports_0 = "/assets/logo.03d6d6da.png";
var Home_vue_vue_type_style_index_0_scoped_true_lang = "\nh1[data-v-7c50d99c],\na[data-v-7c50d99c] {\n  color: green;\n}\n";
const _withId = /* @__PURE__ */ withScopeId("data-v-7c50d99c");
pushScopeId("data-v-7c50d99c");
const _hoisted_1 = /* @__PURE__ */ createVNode("h1", null, "Home", -1);
const _hoisted_2 = /* @__PURE__ */ createVNode("p", null, [
  /* @__PURE__ */ createVNode("img", {
    src: _imports_0,
    alt: "logo"
  })
], -1);
popScopeId();
const _sfc_main = {
  expose: [],
  setup(__props) {
    const Foo = defineAsyncComponent(() => __vitePreload(() => __import__("./Foo.a28ea4ba.js"), true ? ["/assets/Foo.a28ea4ba.js","/assets/Foo.6ac8e7a5.css","/assets/vendor.987337bb.js"] : void 0).then((mod) => mod.Foo));
    const state = reactive({count: 0});
    return /* @__PURE__ */ _withId((_ctx, _cache) => {
      return openBlock(), createBlock(Fragment, null, [
        _hoisted_1,
        _hoisted_2,
        createVNode("button", {
          onClick: _cache[1] || (_cache[1] = ($event) => state.count++)
        }, "count is: " + toDisplayString(state.count), 1),
        createVNode(unref(Foo))
      ], 64);
    });
  }
};
_sfc_main.__scopeId = "data-v-7c50d99c";
export default _sfc_main;
