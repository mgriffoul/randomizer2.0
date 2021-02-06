<template>
  <div class="randomizer">
    <button class="randomize-button" @click="attributeOrder">
      <span class="blink_me">RANDOMIZE =></span>
    </button>
    <ul>
      <li v-for="teamMember in teamMemberList" :key="teamMember.id">
        <span> {{ teamMember.firstName }} </span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { TeamMember } from "@/components/randomizer/TeamMember";
import { RandomizerConfig } from "@/components/randomizer/randomizer.config";

@Options({})
export default class Randomizer extends Vue {
  teamMemberList: TeamMember[] = [];

  mounted() {
    this.teamMemberList = new RandomizerConfig().getTeamMemberList();
    this.teamMemberList.map(value => console.log(value));
  }
}
</script>

<style lang="scss">
@import "./randomizer";
</style>
