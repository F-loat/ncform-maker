<template>
  <div id="app">
    <NcformMaker v-model="schema">
      <template v-slot:headerTools>
        <NcmakerFormClear
          :schema="schema"
          @clear="clearComp"
        />
        <NcmakerFormPreview
          :formSchema="schema"
        />
        <NcmakerFormEditor
          :schema="schema"
          @edit="changeSchema"
        />
        <NcmakerFormSave
          :schema="schema"
          type="form"
          icon="el-icon-s-promotion"
        />
      </template>
    </NcformMaker>
  </div>
</template>

<script>
import { NcformMaker, NcformMakerToolComps } from 'ncform-maker'

export default {
  components: {
    NcformMaker,
    ...NcformMakerToolComps
  },
  data () {
    return {
      schema: {
        type: 'object',
        properties: {}
      }
    }
  },
  methods: {
    clearComp () {
      this.schema = {
        type: 'object',
        properties: {}
      }
    },
    changeSchema (schema) {
      this.schema = schema
    }
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
}

#app {
  height: 100vh;
}

.inner-item .el-button {
  display: none;
}
</style>
