import { defineConfig } from "rollup";

//this compiles the javascript to run in the browser, as an example web javascript and node.js javascript are not the same
export default defineConfig({
    base:"./",
    build:{
        minify:"terser",
    },
});