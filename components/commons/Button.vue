<template>
  <component :is="props.to ? 'NuxtLink' : 'button'" v-bind="bindType" class=""
    :class="buttonClass({ size: props.size, color: props.color })">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { tv } from 'tailwind-variants'

const buttonClass = tv({
  base: 'border-2 border-transparent dark:bg-custom-black-2 rounded-3xl transition-colors duration-500 shadow-lg dark:shadow-gray-900',
  variants: {
    size: {
      md: 'text-sm px-7 py-[9px]',
    },
    color: {
      primary: 'border-primary hover:bg-primary hover:text-white',
      white: 'border-gray-300 dark:border-white dark:hover:bg-white hover:text-black hover:bg-zinc-200'
    }
  }
})

interface ButtonProps {
  color?: 'primary' | 'white'
  size?: 'md'
  to?: String | Object
}

const props = withDefaults(defineProps<ButtonProps>(), {
  size: 'md',
  color: 'white'
})

const bindType = computed(() => {
  if (props.to) return {
    to: props.to
  }
  else { }
})
</script>