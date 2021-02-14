import { TeamConfig, TeamMember } from "@/team.config";
import { useStore } from "@/store";

const store = useStore();

export default class TeamMemberRepository {
  public fetchTeam = (): TeamMember[] => {
    const storeTeam = store.getters.GET_TEAM;
    const localStorageTeam = localStorage.getItem("TEAM");

    if (storeTeam) {
      return storeTeam;
    }
    if (localStorageTeam) {
      return JSON.parse(localStorageTeam as string) as TeamMember[];
    }

    return TeamConfig.getTeam();
  };
}
