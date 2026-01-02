import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGES } from '../constants/io.js';
import { CoachController } from './CoachController.js';

export class ProgramController {
  printProgramStart() {
    Console.print(OUTPUT_MESSAGES.PROGRAM_START);
  }

  getCoachNames() {
    const coachContoller = new CoachController();
    const coachNames = coachContoller.getCoachNames();
  }
}
