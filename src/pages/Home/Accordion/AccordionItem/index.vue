<template>
  <div class="accordion-item" :class="{'is-active': item.active}" :id="groupId + '-' + item.id">
    <dt class="accordion-item-title">
      <button @click="toggle" class="accordion-item-trigger">
        <h4 class="accordion-item-title-text">{{item.question}}</h4>
        <span class="accordion-item-trigger-icon">{{item.active ? '-' : '+'}}</span>
      </button>
    </dt>
    <transition
      name="accordion-item"
      @enter="startTransition"
      @after-enter="endTransition"
      @before-leave="startTransition"
      @after-leave="endTransition"
    >
      <dd v-if="item.active" class="accordion-item-details">
        <div class="accordion-item-details-inner">
          <p>{{item.answer}}</p>
        </div>
      </dd>
    </transition>
  </div>
</template>

<script>
export default {
  name: "AccordionItem",
  props: ["item", "multiple", "groupId"],
  methods: {
    toggle(event) {
      if (this.multiple) this.item.active = !this.item.active;
      else {
        this.$parent.$children.forEach((item, index) => {
          if (
            item.$el.id === event.currentTarget.parentElement.parentElement.id
          )
            item.item.active = !item.item.active;
          else item.item.active = false;
        });
      }
    },
    startTransition(el) {
      el.style.height = el.scrollHeight + "px";
    },
    endTransition(el) {
      el.style.height = "";
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/constants/constants.scss";

.accordion-item {
  box-shadow: 0 3px 30px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  background-color: #ffffff;
  margin-bottom: 36px;
}

.accordion-item-trigger {
  cursor: pointer;
}

.accordion-item-trigger,
.accordion-item-details-inner {
  padding: 0.75rem 1.25rem;
}

.accordion-item-title {
  position: relative;
  height: 70px;
  display: flex;
  align-items: center;
  cursor: pointer;

  h4 {
    font-size: 1.25rem;
    margin-bottom: 0;
    padding-right: 1.25rem;
    margin: 0;
    color: #000000;
    font-family: Poppins;
    font-size: 20px;
    font-weight: 600;
  }
}

.accordion-item-trigger {
  width: 100%;
  text-align: left;
  background-color: transparent;
  border: none;
}

.accordion-item-trigger-icon {
  display: block;
  position: absolute;
  top: 0;
  right: 1.25rem;
  color: #000000;
  font-size: 25px;
  font-weight: 400;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.2s ease;
}

.accordion-item-details {
  overflow: hidden;
  margin: 0;
  padding: 0 23px 23px 23px;
  background-color: #ffffff;
}

.accordion-item-details-inner {
  padding: 0;

  p {
    text-align: justify;
    color: #949494;
    font-family: Rubik;
    font-size: 16px;
    font-weight: 400;
    line-height: 29px;
    margin: 0;
  }
}

.accordion-item-enter-active,
.accordion-item-leave-active {
  will-change: height;
  transition: height 0.2s ease;
}
.accordion-item-enter,
.accordion-item-leave-to {
  height: 0 !important;
}
</style>