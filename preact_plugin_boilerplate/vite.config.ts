// @ts-nocheck
import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import obfuscatorPlugin from 'vite-plugin-javascript-obfuscator';

export default defineConfig(({ mode }) => {
  let isProd = mode === 'production';
  //console.log(`Building for ${mode} mode. Obfuscation is ${isProd ? 'enabled' : 'disabled'}.`);
  //console.log('Last npm command:', process.env.npm_lifecycle_event);
  const command = process.env.npm_lifecycle_event;
  if (command.includes('dev')) {
	  	isProd = false;
  }
  console.log(`Building for ${mode} mode. Obfuscation is ${isProd ? 'enabled' : 'disabled'}.`);

  return {
    plugins: [
      preact(),
      // Only obfuscate in production
      isProd
        ? obfuscatorPlugin({
            options: {
              compact: true,
              rotateStringArray: true,
              stringArray: true,
              stringArrayEncoding: ['base64'],
              stringArrayThreshold: 0.75,
            },
          })
        : null,
    ].filter(Boolean),
    build: {
      outDir: 'dist',
      sourcemap: !isProd,       // source maps in dev
      assetsDir: 'assets',
      emptyOutDir: true,
      cssCodeSplit: false,      // merge all CSS
      rollupOptions: {
        output: {
          // Force demo-[name] for all files
          entryFileNames: 'assets/demo-[name].js',
          chunkFileNames: 'assets/demo-[name].js',
          assetFileNames: 'assets/demo-[name].[ext]',
          manualChunks: undefined, // prevent extra chunk splitting
        },
      },
    },
  };
});
