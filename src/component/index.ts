import { App } from 'vue'
import myComponent from './my-component.vue'
const components = [myComponent]

export default {
    install: (vm: App): void => {
        const app = vm
        components.forEach(component => app.component(component.name, component))
    },
}
