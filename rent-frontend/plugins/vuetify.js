import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import "@mdi/font/css/materialdesignicons.min.css";

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        components,
        directives,
        icons: {
            iconFont: "md",
        },
        theme: {
            defaultTheme: "dark",
            colors: {

                primary: '#4caf50',
                secondary: '#ff8c00',
                accent: '#9c27b0'

            }
        }
    })

    nuxtApp.vueApp.use(vuetify)
})