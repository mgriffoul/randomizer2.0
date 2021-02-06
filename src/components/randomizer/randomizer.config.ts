import { TeamMember } from "@/components/randomizer/TeamMember";

export class RandomizerConfig {
  getTeamMemberList = (): TeamMember[] => {
    return [
      { firstName: "Charles", avatar: "./fkjslfksd", presence: true, order: 0 },
      { firstName: "Anthony", avatar: "./fkjslfksd", presence: true, order: 0 },
      { firstName: "Benoit", avatar: "./fkjslfksd", presence: true, order: 0 },
      {
        firstName: "Benjamin",
        avatar: "./fkjslfksd",
        presence: true,
        order: 0
      },
      {
        firstName: "Christophe",
        avatar: "./fkjslfksd",
        presence: true,
        order: 0
      },
      {
        firstName: "Geoffrey",
        avatar: "./fkjslfksd",
        presence: true,
        order: 0
      },
      { firstName: "Jimmy", avatar: "./fkjslfksd", presence: true, order: 0 },
      { firstName: "Julien", avatar: "./fkjslfksd", presence: true, order: 0 },
      { firstName: "Mathieu", avatar: "./fkjslfksd", presence: true, order: 0 },
      { firstName: "Minh", avatar: "./fkjslfksd", presence: true, order: 0 },
      { firstName: "Ouzzin", avatar: "./fkjslfksd", presence: true, order: 0 },
      {
        firstName: "Tristan / Hugo / Rémi",
        avatar: "./fkjslfksd",
        presence: true,
        order: 0
      },
      { firstName: "Regis", avatar: "./fkjslfksd", presence: true, order: 0 },
      { firstName: "Serge", avatar: "./fkjslfksd", presence: true, order: 0 },
      { firstName: "William", avatar: "./fkjslfksd", presence: true, order: 0 }
    ];
  };
}
