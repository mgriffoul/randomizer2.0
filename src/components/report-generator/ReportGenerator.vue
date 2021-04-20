<template>
  <LoginError v-if="!isUserLogged" />
  <div class="rapport" v-if="!loading">
    Dernier sprint acitf : SprintBacklogValue :
    {{ sprint.value.sprintBacklog }} Remain : {{ sprint.value.remain }} Done :
    @{{ sprint.value.done }}
    <div>
      <h1>FUNCTIONAL</h1>
      <div
        v-for="story in sprint.value.sprintStories.functionalStories"
        :key="story.id"
        v-bind:class="story.status"
        data-test="functionalStories"
      >
        <h1 data-test="story">------</h1>
        d <span>{{ story.key }} </span><span> {{ story.summary }}</span>
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
import { computed, reactive, ref, toRefs, watch } from "vue";
import SprintGeneratorService from "@/components/report-generator/service/SprintGenerator.service";
import { useStore } from "vuex";
import LoginError from "@/commons/shared-component/LoginError.vue";

export default {
  name: "ReportGenerator",
  components: { LoginError },
  setup: function() {
    const store = useStore();
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

    const user = computed(() => store.getters.getUser);
    const isUserLogged = computed(
      () => user.value.login && user.value.password
    );

    const loadData = async () => {
      sprint.value = await sprintReportService.getSprint(
        user.value.login,
        user.value.password
      );
      loading.value = false;
    };

    if (isUserLogged.value) {
      loadData();
    }

    watch(
      () => user.value,
      async () => {
        await loadData();
      }
    );

    return {
      sprint,
      loading,
      user,
      isUserLogged
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
