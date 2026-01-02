import { CoachService } from '../Services/CoachService.js';

export class CoachController {
  #coachService;
  constructor() {
    this.#coachService = new CoachService();
  }
  async getCoachNames() {
    // 1. 코치 이름 입력받기
    const originCoachNames = await this.#coachService.getOriginCoachNames();

    // 2. 코치 이름 분리하기
    const coachNames =
      this.#coachService.parseOriginCoachNames(originCoachNames);

    // 3. 코치 이름 검증하기
    this.#coachService.validateCoachNames(coachNames);

    // 4. 코치 이름 반환하기
    return coachNames;
  }
}
