<template>
  <div class="rapport" v-if="sprint">
    Dernier sprint acitf :
    <div>
      <h1>FUNCTIONAL</h1>
      <div
        v-for="story in sprint.functionalStories"
        :key="story.id"
        v-bind:class="story.status"
        data-test="functionalStories"
      >
        <H1 data-test="story">------</H1>
        <span>{{ story.key }} </span><span> {{ story.summary }}</span>
        <p>storyPoints : {{ story.storyPoint }}</p>
        <p>refinedStory Points : {{ story.refinedStoryPoint }}</p>
      </div>
      <h1>TECHNICAL</h1>
      <div
        v-for="story in sprint.technicalStories"
        :key="story.id"
        v-bind:class="story.status"
        data-test="technicalStories"
      >
        <H1>------</H1>
        <span>{{ story.key }} </span><span> {{ story.summary }}</span>
        <p>storyPoints : {{ story.storyPoint }}</p>
        <p>refinedStory Points : {{ story.refinedStoryPoint }}</p>
      </div>
      <h1>BUGS</h1>
      <div
        v-for="story in sprint.bugs"
        :key="story.id"
        v-bind:class="story.status"
        data-test="bugs"
      >
        <H1>------</H1>
        <span>{{ story.key }} </span><span> {{ story.summary }}</span>
        <p>storyPoints : {{ story.storyPoint }}</p>
        <p>refinedStory Points : {{ story.refinedStoryPoint }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, ref } from "vue";
import { Sprint } from "./model/Sprint";
import Story from "./model/Story";
import SprintGeneratorService from "@/components/report-generator/service/SprintGenerator.service";

export default {
  name: "ReportGenerator",
  setup: function() {
    const sprintReportService = new SprintGeneratorService();

    const sprint = ref<Sprint>({
      technicalStories: [] as Story[],
      functionalStories: [] as Story[],
      bugs: [] as Story[]
    });

    onMounted(async () => {
      sprint.value = await sprintReportService.getSprintStories();
    });

    return {
      sprint: sprint
    };
  }
};
</script>

<style lang="scss">
.rapport {
  font-size: 10px;
  text-align: left;
  color: white;
}
.todo {
  background-color: blue;
}
.workInProgress {
  background-color: red;
}
.done {
  background-color: green;
}
</style>
