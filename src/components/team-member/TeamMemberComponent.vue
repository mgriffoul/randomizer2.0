<template>
  <div class="team-member">
    <img
      class="avatar"
      :src="require(`@/assets/avatar/${avatarFileName}`)"
      :alt="firstName"
    />
    <span class="first-name">{{ firstName }}</span>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

class TeamMemberProps {
  firstName = "";
  avatarFileName = "";
}

@Options({})
export default class TeamMemberComponent extends Vue.with(TeamMemberProps) {}
</script>

<style lang="scss">
@import "./_team-member.scss";
</style>
