export interface TeamMember {
  firstName: string;
  avatarFileName: string;
  presence: boolean;
  order: number;
}

export class TeamConfig {
  getTeamMemberList = (): TeamMember[] => {
    return [
      {
        firstName: "Charles",
        avatarFileName: "charles.png",
        presence: true,
        order: 0
      },
      {
        firstName: "Anthony",
        avatarFileName: "anthony.png",
        presence: true,
        order: 0
      },
      {
        firstName: "Benoit",
        avatarFileName: "benoit.png",
        presence: true,
        order: 0
      },
      {
        firstName: "Benjamin",
        avatarFileName: "benjamin.png",
        presence: true,
        order: 0
      },
      {
        firstName: "Christophe",
        avatarFileName: "christophe.png",
        presence: true,
        order: 0
      },
      {
        firstName: "Geoffrey",
        avatarFileName: "geoffrey.png",
        presence: true,
        order: 0
      },
      {
        firstName: "Jimmy",
        avatarFileName: "jimmy.png",
        presence: true,
        order: 0
      },
      {
        firstName: "Julien",
        avatarFileName: "julien.png",
        presence: true,
        order: 0
      },
      {
        firstName: "Mathieu",
        avatarFileName: "mathieu.jpg",
        presence: true,
        order: 0
      },
      {
        firstName: "Minh",
        avatarFileName: "minh.jpg",
        presence: true,
        order: 0
      },
      {
        firstName: "Ouzzin",
        avatarFileName: "ouzzin.png",
        presence: true,
        order: 0
      },
      {
        firstName: "Rémi/Tristan/Hugo",
        avatarFileName: "pos.png",
        presence: true,
        order: 0
      },
      {
        firstName: "Regis",
        avatarFileName: "regis.png",
        presence: true,
        order: 0
      },
      {
        firstName: "Serge",
        avatarFileName: "serge.png",
        presence: true,
        order: 0
      },
      {
        firstName: "William",
        avatarFileName: "william.png",
        presence: true,
        order: 0
      }
    ];
  };
}
