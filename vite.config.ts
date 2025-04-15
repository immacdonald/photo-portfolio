import type { UserConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
    if (command === 'serve') {
        return devConfig();
    } else if (command === 'build') {
        return prodConfig();
    }
});

const baseConfig = {
    plugins: [tsconfigPaths(), svgr(), react()]
};

function devConfig(): UserConfig {
    return {
        ...baseConfig
    };
}

function prodConfig(): UserConfig {
    return {
        ...baseConfig
    };
}
