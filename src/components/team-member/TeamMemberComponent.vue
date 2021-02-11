<template>
  <div class="team-member" v-if="shouldDisplayMember">
    <label>
      <input
        type="checkbox"
        v-model="isPresent"
        @click="handleCheck"
        v-show="!isAppReady"
      />
    </label>
    <img
      class="avatar"
      :src="require(`@/assets/avatar/${avatarFileName}`)"
      :alt="firstName"
    />
    <span class="first-name">{{ firstName }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "TeamMemberComponent",
  data: function() {
    return {
      isPresent: this.presence as boolean
    };
  },
  emits: {
    check(payload: { id: number; isPresent: boolean }) {
      return payload;
    }
  },
  props: {
    presence: { type: Boolean, required: true },
    firstName: { type: String, required: true },
    avatarFileName: { type: String, required: true },
    id: { type: Number, required: true }
  },
  methods: {
    handleCheck(): void {
      this.$emit("check", { id: this.id, isPresent: !this.isPresent });
    }
  },
  computed: {
    shouldDisplayMember(): boolean {
      if (!this.isAppReady) {
        return true;
      }
      return this.isPresent;
    },
    ...mapGetters(["isAppReady"])
  }
});
</script>

<style lang="scss">
@import "./_team-member.scss";
</style>
