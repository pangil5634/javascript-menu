import { CoachController } from './CoachController.js';
import { MenuController } from './MenuController.js';
import { ProgramService } from '../Services/ProgramService.js';

export class ProgramController {
  #coachList = [];
  #categories;
  #coachController;
  #menuController;
  #programService;
  constructor() {
    this.#coachController = new CoachController();
    this.#menuController = new MenuController();
    this.#programService = new ProgramService();
  }

  // main1
  async playCoach() {
    this.#programService.printProgramStart();
    await this.createCoach();
    await this.saveHateMenus();
  }

  // main2
  playCategory() {
    this.createCategories();
    this.saveMenusPerCoach();
  }

  // main3
  playResult() {
    this.#programService.printProgramResult(this.#categories, this.#coachList);
    this.#programService.printProgramEnd();
  }

  // other functions
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

  createCategories() {
    const categories = this.#menuController.createCategoryList();
    this.#categories = categories;
  }

  saveMenusPerCoach() {
    for (const coach of this.#coachList) {
      const menuList = this.#menuController.createMenuList(
        coach.hateMenus,
        this.#categories,
      );

      coach.selectMenus = menuList;
    }
  }
}
