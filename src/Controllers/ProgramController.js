import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGES } from '../constants/io.js';
import { CoachController } from './CoachController.js';

export class ProgramController {
  #coachList = [];
  #coachController;
  constructor() {
    this.#coachController = new CoachController();
  }
  printProgramStart() {
    Console.print(OUTPUT_MESSAGES.PROGRAM_START);
  }

  async createCoach() {
    const coachNames = await this.#coachController.getCoachNames();
    this.#coachList = this.#coachController.createCoachList(coachNames);
  }

  async saveHateMenus() {
    for (const coach of this.#coachList) {
      const hateMenus = await this.#coachController.getHateMenus(coach.name);
      coach.hateMenus = hateMenus;
    }
  }
}
