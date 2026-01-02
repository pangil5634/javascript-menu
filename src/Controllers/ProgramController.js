import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGES } from '../constants/io.js';
import { CoachController } from './CoachController.js';
import { MenuController } from './MenuController.js';

export class ProgramController {
  #coachList = [];
  #categories;
  #coachController;
  #menuController;
  constructor() {
    this.#coachController = new CoachController();
    this.#menuController = new MenuController();
  }
  printProgramStart() {
    Console.print(OUTPUT_MESSAGES.PROGRAM_START);
  }

  printProgramResult() {
    Console.print(OUTPUT_MESSAGES.PROGRAM_RESULT);
    this.printHeader();
    this.printCategories();
    this.printCoachRows();
    console.log();
  }

  printProgramEnd() {
    Console.print(OUTPUT_MESSAGES.PROGRAM_END);
  }

  printHeader() {
    const headerCols = [
      '구분',
      '월요일',
      '화요일',
      '수요일',
      '목요일',
      '금요일',
    ];
    this.printRow(headerCols);
  }

  printCategories() {
    const categoriesCols = ['카테고리'];
    const CATEGORY = ['일식', '한식', '중식', '아시안', '양식'];
    for (const categoryIndex of this.#categories) {
      categoriesCols.push(CATEGORY[categoryIndex]);
    }
    this.printRow(categoriesCols);
  }

  printCoachRows() {
    for (const coach of this.#coachList) {
      const coachMenuRow = [coach.name, ...coach.selectMenus];
      this.printRow(coachMenuRow);
    }
  }

  printRow(cols) {
    Console.print(
      `[ ${cols[0]} | ${cols[1]} | ${cols[2]} | ${cols[3]} | ${cols[4]} | ${cols[5]} ]`,
    );
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
