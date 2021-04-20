<template>
  <div class="header">
    <div class="title cursor-pointer" @click="routeTo('/')">
      <span class="title-label title-label-top">
        SCRUM
      </span>
      <span class="title-label title-label-bot">
        TOOLBOX
      </span>
    </div>
    <div class="header-full-height">
      <img
        class="cursor-pointer"
        :src="require('@/assets/shuffle.svg')"
        alt="shuffle"
        @click="routeTo('dsm')"
      />
    </div>
    <div class="header-full-height">
      <img
        class="cursor-pointer"
        :src="require('@/assets/report.svg')"
        alt="shuffle"
        @click="routeTo('report')"
      />
    </div>

    <div class="login">
      <LoginForm
        @login-send="loadData($event)"
        v-if="!isUserLogged"
      ></LoginForm>
      <UserInfo v-if="isUserLogged"></UserInfo>
    </div>
  </div>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
import SprintGeneratorService from "@/components/report-generator/service/SprintGenerator.service";
import { computed, reactive, toRefs } from "vue";
import LoginForm from "@/commons/shared-component/LoginForm.vue";
import { useStore } from "vuex";
import UserInfo from "@/commons/shared-component/UserInfo.vue";

export default {
  name: "HeaderComponent",
  components: { UserInfo, LoginForm },
  setup() {
    const sprintReportService = new SprintGeneratorService();
    const router = useRouter();
    const store = useStore();
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

    const isUserLogged = computed(() => {
      return store.getters.getUser?.login && store.getters.getUser?.password;
    });

    const routeTo = (path: string) => {
      router.push(path);
    };

    const loadData = async (e: any) => {
      sprint.value = await sprintReportService.getSprint(e.login, e.password);
    };

    return {
      routeTo,
      loadData,
      isUserLogged
    };
  }
};
</script>

<style lang="scss">
@import "./header";
</style>
