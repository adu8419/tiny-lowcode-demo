import path from 'node:path'
import { defineConfig, mergeConfig, loadEnv } from 'vite'
import { useTinyEngineBaseConfig } from '@opentiny/tiny-engine-vite-config'

export default defineConfig((configEnv) => {
  const baseConfig = useTinyEngineBaseConfig({
    viteConfigEnv: configEnv,
    root: __dirname,
    iconDirs: [path.resolve(__dirname, './node_modules/@opentiny/tiny-engine/assets/')],
    useSourceAlias: false,
    envDir: './env',
    resolve: {
      alias: {
        // 解决 @local 解析问题
        '@local/my-component': path.resolve(__dirname, 'src/components/MyComponent'),
        '@': path.resolve(__dirname, './src')
      }
    }
  })

  const customConfig = {
    envDir: './env',
    publicDir: path.resolve(__dirname, './public'),
    server: {
      port: 8090
    }
  }

  return mergeConfig(baseConfig, customConfig)
})
