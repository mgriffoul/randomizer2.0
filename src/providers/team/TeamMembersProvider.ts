import { TeamConfig, TeamMember } from "@/team.config";

const TEAM = "TEAM";

export default class TeamMembersProvider {
  public fetchTeam = (): TeamMember[] => {
    return localStorage.getItem(TEAM)
      ? (JSON.parse(localStorage.getItem("TEAM") as string) as TeamMember[])
      : TeamConfig.getTeam();
  };

  public storeInLocalStorage = (team: TeamMember[]): void => {
    localStorage.setItem(TEAM, JSON.stringify(team));
  };
}
