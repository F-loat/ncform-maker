<template>
  <div id="app">
    <NcformMaker v-model="schema">
      <template v-slot:headerTools>
        <el-radio-group
          class="language-switch"
          v-model="curLang"
          size="mini"
          @change="switchLang"
        >
          <el-radio-button
            v-for="(l, i) in lang"
            :key="i"
            :label="l.lang"
          >
              {{ l.text }}
          </el-radio-button>
        </el-radio-group>        
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
import curLang, { switchLang } from './locale'

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
      },
      lang: [
        {
          text: '简体中文',
          lang: 'zh-CN'
        },
        {
          text: 'English',
          lang: 'en'
        }
      ],
      curLang
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
    },
    switchLang (lang) {
      return switchLang(lang)
    },
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

.language-switch {
  height: 43px;
  display: flex;
  align-items: center;
  margin: 12px 10px 0 0;
}
</style>
