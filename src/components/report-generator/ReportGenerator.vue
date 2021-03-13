<template>
  <div class="rapport" v-if="!loading">
    Dernier sprint acitf : SprintBacklogValue :
    {{ sprint.value.sprintBacklog }} Remain : {{ sprint.value.remain }} Done :
    {{ sprint.value.done }}
    <div>
      <h1>FUNCTIONAL</h1>
      <div
        v-for="story in sprint.value.sprintStories.functionalStories"
        :key="story.id"
        v-bind:class="story.status"
        data-test="functionalStories"
      >
        <h1 data-test="story">------</h1>
        <span>{{ story.key }} </span><span> {{ story.summary }}</span>
        <p>storyPoints : {{ story.storyPoint }}</p>
        <p>refinedStory Points : {{ story.refinedStoryPoint }}</p>
      </div>
      <h1>TECHNICAL</h1>
      <div
        v-for="story in sprint.value.sprintStories.technicalStories"
        :key="story.id"
        v-bind:class="story.status"
        data-test="technicalStories"
      >
        <h1>------</h1>
        <span>{{ story.key }} </span><span> {{ story.summary }}</span>
        <p>storyPoints : {{ story.storyPoint }}</p>
        <p>refinedStory Points : {{ story.refinedStoryPoint }}</p>
      </div>
      <h1>BUGS</h1>
      <div
        v-for="story in sprint.value.sprintStories.bugs"
        :key="story.id"
        v-bind:class="story.status"
        data-test="bugs"
      >
        <h1>------</h1>
        <span>{{ story.key }} </span><span> {{ story.summary }}</span>
        <p>storyPoints : {{ story.storyPoint }}</p>
        <p>refinedStory Points : {{ story.refinedStoryPoint }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, reactive, ref, toRefs } from "vue";
import SprintGeneratorService from "@/components/report-generator/service/SprintGenerator.service";

export default {
  name: "ReportGenerator",
  setup: function() {
    const sprintReportService = new SprintGeneratorService();
    const loading = ref(true);
    const sprint: any = toRefs(
      reactive({
        sprintStories: {
          technicalStories: [],
          functionalStories: [],
          bugs: []
        },
        done: 0,
        remain: 0,
        sprintBacklog: 0
      })
    );

    onMounted(async () => {
      sprint.value = await sprintReportService.getSprint();
      console.log(sprint.value);
      loading.value = false;
    });

    return {
      sprint,
      loading
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
