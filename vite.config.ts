 import {defineConfig} from "vite";
import {resolve} from "node:path";

export default defineConfig({
    resolve: {
        alias: {
            '@/shared': resolve(__dirname, './src/shared'),
            '@/app': resolve(__dirname, './src/app'),
            '@/pages': resolve(__dirname, './src/pages'),
        }
    }
});
