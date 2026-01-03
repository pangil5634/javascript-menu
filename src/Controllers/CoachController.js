import { Coach } from '../Models/Coach.js';
import { CoachService } from '../Services/CoachService.js';
import { InputView } from '../View/InputView.js';

export class CoachController {
  #coachService;
  constructor() {
    this.#coachService = new CoachService();
  }
  async getCoachNames() {
    // 1. 코치 이름 입력받기
    const originCoachNames = await InputView.getOriginCoachNames();
    console.log('');

    // 2. 코치 이름 분리하기
    const coachNames =
      this.#coachService.parseOriginCoachNames(originCoachNames);

    // 3. 코치 이름 검증하기
    this.#coachService.validateCoachNames(coachNames);

    // 4. 코치 이름 반환하기
    return coachNames;
  }

  createCoachList(coachNames) {
    const coachList = coachNames.map((name) => new Coach(name));
    return coachList;
  }

  async getHateMenus(name) {
    // 1. 못 먹는 메뉴 입력받기
    const originHateMenus = await InputView.getOriginHateMenus(name);
    console.log('');

    // 2. 메뉴 분리하기
    const hateMenus = this.#coachService.parseOriginHateMenus(originHateMenus);

    // 3. 메뉴 검증하기
    this.#coachService.validateHateMenus(hateMenus);

    // 4. 메뉴 반환하기
    return hateMenus;
  }
}
