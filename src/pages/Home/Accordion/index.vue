<template>
  <dl class="accordion box" role="presentation">
    <AccordionItem
      v-for="item in content"
      :multiple="multiple"
      :item="item"
      :groupId="groupId"
      :key="item.id"
    />
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
  }
};
</script>

<style lang="scss" scoped>
.accordion {
  padding: 0;
  width: 706px;
  margin: 30px auto 0;

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