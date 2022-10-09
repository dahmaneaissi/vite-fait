import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig( ({ command, mode }) => {
    return {
        plugins : [
            createHtmlPlugin({
                minify: true,
                pages: [
                    {
                        entry: 'main.js',
                        filename: 'index.html',
                        template: 'index.html',
                        injectOptions: {
                            data: {
                                title: 'index home',
                            }
                        },
                    }
                ]
            })
        ]
    }
})