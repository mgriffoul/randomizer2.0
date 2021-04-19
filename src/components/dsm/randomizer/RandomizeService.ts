import { TeamMember } from "@/team.config";

export default class RandomizeService {
  private ticksNumber: number;
  private team: TeamMember[];

  constructor() {
    this.ticksNumber = 1;
    this.team = [];
  }

  public randomize = (team: TeamMember[]): Promise<TeamMember[]> => {
    return new Promise<TeamMember[]>(resolve => {
      this.ticksNumber = 1;
      this.team = team;
      setTimeout(() => this.manageTicks(resolve), 1000);
    });
  };

  private manageTicks = (resolve: Function): void => {
    this.calculateNewOrder();
    if (this.ticksNumber <= 120) {
      setTimeout(() => this.manageTicks(resolve), 700 / this.ticksNumber);
    } else {
      resolve(this.team);
      return;
    }
    this.ticksNumber++;
  };

  private calculateNewOrder = (): void => {
    const minIndex = Math.ceil(1);
    const maxIndex = Math.floor(this.team.length);
    const attributedIndexes: number[] = [];

    while (attributedIndexes.length < this.team.length) {
      const currentIndex =
        Math.floor(Math.random() * (maxIndex - minIndex + 1)) + minIndex;
      if (!attributedIndexes.includes(currentIndex)) {
        attributedIndexes.push(currentIndex);
      }
    }
    let count = 0;
    this.team.forEach((teamMember: { order: number }) => {
      teamMember.order = attributedIndexes[count];
      count++;
    });
    this.team.sort(RandomizeService.compareByOrder);
  };

  private static compareByOrder(first: TeamMember, second: TeamMember): number {
    return first.order - second.order;
  }
}
