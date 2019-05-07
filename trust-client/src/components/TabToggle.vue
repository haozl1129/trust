<template>
	<div>
		<ul class="tab clearfix" :class="tabkey">
			<li v-for="(item, index) in tabTitles" :class="{'tab-active': isActive(index)}" :key="`${tabkey}${index}`" @click="toggleTab(index)">{{item.text}}</li>
		</ul>
	</div>
</template>
<script>
export default {
  name: "TabToggle",
  data() {
    return {};
  },
  methods: {
    toggleTab: function(idx) {
      this.$emit("getActiveIdx", { tabkey: this.tabkey, idx });
    },
    isActive: function(idx) {
      if (idx == this.activeIdx) {
        return true;
      } else {
        return false;
      }
    }
  },
  props: ["tabTitles", "activeIdx", "tabkey"]
};
</script>