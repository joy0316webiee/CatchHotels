<template>
  <div class="accordion-item" :class="{'is-active': active}" :id="groupId + '-' + item.id">
    <dt class="accordion-item-title">
      <button @click="toggle" class="accordion-item-trigger">
        <h4 class="accordion-item-title-text">{{item.title}}</h4>
        <span class="accordion-item-trigger-icon">{{active ? '-' : '+'}}</span>
      </button>
    </dt>
    <transition
      name="accordion-item"
      @enter="startTransition"
      @after-enter="endTransition"
      @before-leave="startTransition"
      @after-leave="endTransition"
    >
      <dd v-if="active" class="accordion-item-details">
        <div class="accordion-item-details-inner">
          <p>{{item.explanation}}</p>
        </div>
      </dd>
    </transition>
  </div>
</template>

<script>
export default {
  name: "AccordionItem",
  props: ["item", "groupId"],
  data() {
    return {
      active: false
    };
  },
  methods: {
    toggle(event) {
      this.active = !this.active;
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

  @include screen-md {
    margin-bottom: 28px;
  }
  @include screen-sm {
    margin-bottom: 25px;
  }
  @include screen-xs {
    margin-bottom: 20px;
  }
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

  @include screen-md {
    height: 60px;
  }
  @include screen-xs {
    height: 50px;
  }

  h4 {
    font-size: 1.25rem;
    margin-bottom: 0;
    padding-right: 1.25rem;
    margin: 0;
    color: #000000;
    font-family: Poppins;
    font-size: 20px;
    font-weight: 600;

    @include screen-md {
      font-size: 16px;
    }
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

  @include screen-md {
    font-size: 23px;
  }
}

.accordion-item-details {
  overflow: hidden;
  margin: 0;
  padding: 0 23px 23px 23px;
  background-color: #ffffff;

  @include screen-md {
    padding: 0 18px 18px 18px;
  }
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

    @include screen-md {
      font-size: 14px;
    }
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