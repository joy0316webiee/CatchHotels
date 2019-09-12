<template>
  <dl class="accordion box" role="presentation">
    <AccordionItem v-for="item in content" :item="item" :groupId="groupId" :key="item.id" />
  </dl>
</template>

<script>
import AccordionItem from "./AccordionItem";

export default {
  name: "Accordion",
  components: {
    AccordionItem
  },
  props: {
    content: {
      type: Array,
      required: true
    },
    multiple: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      groupId: null
    };
  },
  mounted() {
    this.groupId = this.$el.id;
    this.content.sort((a, b) => a.order - b.order);
  }
};
</script>

<style lang="scss" scoped>
@import "@/constants/constants.scss";

.accordion {
  padding: 0;
  width: 706px;
  margin: 30px auto 0;

  @include screen-md {
    margin: 20px auto 0;
    width: 550px;
  }
  @include screen-sm {
    width: 400px;
  }
  @include screen-xs {
    width: 300px;
  }

  div:not(:last-child) {
    border-bottom: 1px solid rgba(10, 10, 10, 0.1);
  }

  div:last-child .accordion-item-details {
    border-radius: 5px;
  }

  dd {
    margin-left: 0;
  }
}
</style>