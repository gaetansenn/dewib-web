<script>
export default {
  functional: true,
  props: {
    attribute: {
      type: String,
      default: 'h1'
    }
  },
  render (h, context) {
    return h(context.props.attribute, {
      class: {
        heading: true,
        [`${context.data.staticClass}`]: true
      }
    }, context.children)
  }
}
</script>

<style lang="scss">
.heading {
  @apply relative inline-block z-10;

  &:after {
    @apply absolute w-full left-0;
    content: '';
    height: 30px;
    background-image: url('~assets/images/dots.png');
    background-repeat: repeat;
    z-index: -1;
    bottom: -10px;
  }
}
</style>
