import {k as defineComponent, a as createVNode, b as createTextVNode} from "./vendor.987337bb.js";
var foo = ".jsx {\n  color: blue;\n}";
const Foo = defineComponent({
  name: "foo",
  setup() {
    return () => createVNode("div", {
      class: "jsx"
    }, [createTextVNode("from JSX")]);
  }
});
export {Foo};
