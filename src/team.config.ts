export interface TeamMember {
  id: number;
  firstName: string;
  avatarFileName: string;
  presence: boolean;
  order: number;
}

export class TeamConfig {
  public static getTeam = (): TeamMember[] => {
    return [
      {
        firstName: "Anthony",
        avatarFileName: "anthony.png",
        presence: true,
        order: 0,
        id: 1
      },
      {
        firstName: "Benoit",
        avatarFileName: "benoit.png",
        presence: true,
        order: 0,
        id: 2
      },
      {
        firstName: "Benjamin",
        avatarFileName: "benjamin.png",
        presence: true,
        order: 0,
        id: 3
      },
      {
        firstName: "Charles",
        avatarFileName: "charles.png",
        presence: true,
        order: 0,
        id: 4
      },
      {
        firstName: "Christophe",
        avatarFileName: "christophe.png",
        presence: true,
        order: 0,
        id: 5
      },
      {
        firstName: "Geoffrey",
        avatarFileName: "geoffrey.png",
        presence: true,
        order: 0,
        id: 6
      },
      {
        firstName: "Jimmy",
        avatarFileName: "jimmy.png",
        presence: true,
        order: 0,
        id: 7
      },
      {
        firstName: "Julien",
        avatarFileName: "julien.png",
        presence: true,
        order: 0,
        id: 8
      },
      {
        firstName: "Mathieu",
        avatarFileName: "mathieu.jpg",
        presence: true,
        order: 0,
        id: 9
      },
      {
        firstName: "Minh",
        avatarFileName: "minh.jpg",
        presence: true,
        order: 0,
        id: 10
      },
      {
        firstName: "Ouzzin",
        avatarFileName: "ouzzin.png",
        presence: true,
        order: 0,
        id: 11
      },
      {
        firstName: "Rémi/Tristan/Hugo",
        avatarFileName: "pos.png",
        presence: true,
        order: 0,
        id: 12
      },
      {
        firstName: "Regis",
        avatarFileName: "regis.png",
        presence: true,
        order: 0,
        id: 13
      },
      {
        firstName: "Serge",
        avatarFileName: "serge.png",
        presence: true,
        order: 0,
        id: 14
      },
      {
        firstName: "William",
        avatarFileName: "william.png",
        presence: true,
        order: 0,
        id: 15
      },
      {
        firstName: "Bertrand",
        avatarFileName: "bertrand.png",
        presence: true,
        order: 0,
        id: 16
      }
    ];
  };
}
