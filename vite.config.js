import { defineConfig } from 'vite'
import twig from 'vite-plugin-twig'
import { resolve } from 'path'

export default defineConfig( ({ command, mode }) => {
    return {
        base : './',
        build : {
            rollupOptions: {
                input: {
                    main:   resolve(__dirname, "./index.html"),
                    nested: resolve(__dirname, './home.html')
                }
            },
        },

        plugins : [
            twig()
        ]
    }
})