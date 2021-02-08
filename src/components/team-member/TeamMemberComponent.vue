<template>
  <div class="team-member">
    <img
      class="avatar"
      src="'@/commons/img/avatar/' + {{ firstName }} + '.png'"
    />
    <span class="first-name">{{ firstName }}</span>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

class TeamMemberProps {
  firstName = "";
  avatarSrc = "";
}

@Options({})
export default class TeamMemberComponent extends Vue.with(TeamMemberProps) {
  mounted() {
    console.log(this.avatarSrc);
  }
}
</script>

<style>
@import "./_team-member.scss";
</style>
