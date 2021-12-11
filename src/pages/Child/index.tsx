import { defineComponent, reactive } from 'vue'

export default defineComponent({
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  setup(props, { emit, slots }) {
    const state = reactive({
      name: 'component'
    })

    const changeName = (val: any) => {
      console.log('[ val ] ->', val)
      console.log('[ props.name ] ->', props.name)
      emit('update:name', 'new')
    }

    return () => (
      <div>
        hello world
        <div>{props.name}</div>
        <el-button type="primary" onclick={() => changeName(window.event)}>
          改变name
        </el-button>
        <div>
          {slots.default ? slots.default() : 'foo'}
          <h1> {slots.header?.()} </h1>
        </div>
      </div>
    )
  }
})
