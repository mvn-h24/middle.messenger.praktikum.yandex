 import {defineConfig} from "vite";
import {resolve} from "node:path";
 import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    plugins: [tsconfigPaths()],
});
