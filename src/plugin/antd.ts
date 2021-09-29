import {
   Table,
   Form,
   Input,
   Button,
   Card,
   DatePicker,
   Row,
   Col,
   ConfigProvider,
} from 'ant-design-vue'
import { App } from 'vue'

const components = [
  Table,
  Form,
  Input,
  Button,
  Card,
  DatePicker,
  Row,
  Col,
  ConfigProvider,
]

export default {
    install: (vm: App): void => {
        const app = vm
        components.forEach(component => app.use(component))
    },
}
