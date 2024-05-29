<script setup lang="ts">
import type { _FormRef } from 'uview-plus/types/comps/form'

const form1 = ref<_FormRef | null>(null)
const showSex = ref(false)
const model1 = ref({
  userInfo: {
    name: 'uview-plus UI',
    sex: '',
  },
})
const actions = ref([
  {
    name: '男',
  },
  {
    name: '女',
  },
  {
    name: '保密',
  },
])

const rules = ref(
  {
    'userInfo.name': {
      type: 'string',
      required: true,
      message: '请填写姓名',
      trigger: ['blur', 'change'],
    },
    'userInfo.sex': {
      type: 'string',
      max: 1,
      required: true,
      message: '请选择男或女',
      trigger: ['blur', 'change'],
    },
  },
)

const radiolist1 = ref(
  [{
    name: '苹果',
    disabled: false,
  }, {
    name: '香蕉',
    disabled: false,
  }, {
    name: '橙子',
    disabled: false,
  }, {
    name: '榴莲',
    disabled: false,
  }],
)
// u-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
const radiovalue1 = ref('苹果')

function openSex() {
  showSex.value = true
}

function sexSelect(e: typeof actions.value[number]) {
  model1.value.userInfo.sex = e.name
  form1.value?.validateField('userInfo.sex')
}

// eslint-disable-next-line unused-imports/no-unused-vars
function groupChange(n: typeof radiolist1.value[number]['name']) {
  // console.log('groupChange', n)
}

// eslint-disable-next-line unused-imports/no-unused-vars
function radioChange(n: typeof radiolist1.value[number]['name']) {
  // console.log('radioChange', n)
}
</script>

<template>
  <view>
    <!-- 注意，如果需要兼容微信小程序，最好通过setRules方法设置rules规则 -->
    <u-form
      ref="form1"
      label-position="left"
      :model="model1"
      :rules="rules"
    >
      <u-form-item
        label="姓名"
        prop="userInfo.name"
        border-bottom
      >
        <u-input
          v-model="model1.userInfo.name"
          border="none"
        />
      </u-form-item>
      <u-form-item
        label="性别"
        prop="userInfo.sex"
        border-bottom
        @click="openSex"
      >
        <text>{{ model1.userInfo.sex || '请选择性别' }}</text>
        <template #right>
          <u-icon
            name="arrow-right"
          />
        </template>
      </u-form-item>
      <u-form-item
        label="苹果、香蕉和橙子哪个最甜？"
        prop="radiovalue1"
        border-bottom
      >
        <u-radio-group
          v-model="radiovalue1"
          placement="column"
          @change="groupChange"
        >
          <u-radio
            v-for="(item, index) in radiolist1"
            :key="index"
            :custom-style="{ marginBottom: '8px' }"
            :label="item.name"
            :name="item.name"
            @change="radioChange"
          />
        </u-radio-group>
      </u-form-item>
    </u-form>
    <u-action-sheet
      :show="showSex"
      :actions="actions"
      title="请选择性别"
      description="如果选择保密会报错"
      @close="showSex = false"
      @select="sexSelect"
    />
  </view>
</template>
