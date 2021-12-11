import { defineComponent, reactive } from 'vue'
import Child from '@/pages/Child'
// import Child from '../Child'

export default defineComponent({
  setup() {
    const state = reactive({
      name: 'Main-组件'
    })

    return () => (
      <div>
        <Child v-model:name={state.name}></Child>
        <Child>
          {{
            header: () => '789'
          }}
        </Child>
      </div>
    )
  }
})
