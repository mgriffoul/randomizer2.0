import { TeamMember } from "@/team.config";

export default class RandomizeService {
  private ticksNumber: number;
  private team: TeamMember[];

  constructor() {
    this.ticksNumber = 1;
    this.team = [];
  }

  public randomize = (team: TeamMember[]): TeamMember[] => {
    this.ticksNumber = 1;
    this.team = team;
    setTimeout(() => this.manageTicks(), 1000);
    return team;
  };

  private manageTicks = (): void => {
    this.calculateNewOrder();
    if (this.ticksNumber <= 120) {
      setTimeout(() => this.manageTicks(), 700 / this.ticksNumber);
    } else {
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
    this.team.sort(this.compare);
  };

  private compare(first: TeamMember, second: TeamMember): number {
    return first.order - second.order;
  }
}
