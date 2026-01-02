import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGES } from '../constants/io.js';
import { FOOD_CATEGORY, HEADER_COLS } from '../constants/etc.js';

export class ProgramService {
  printProgramStart() {
    Console.print(OUTPUT_MESSAGES.PROGRAM_START);
  }

  printProgramEnd() {
    Console.print(OUTPUT_MESSAGES.PROGRAM_END);
  }

  printRow(cols) {
    Console.print(
      `[ ${cols[0]} | ${cols[1]} | ${cols[2]} | ${cols[3]} | ${cols[4]} | ${cols[5]} ]`,
    );
  }

  printProgramResult(categories, coachList) {
    Console.print(OUTPUT_MESSAGES.PROGRAM_RESULT);
    this.printHeader();
    this.printCategories(categories);
    this.printCoachRows(coachList);
    console.log();
  }

  printHeader() {
    this.printRow(HEADER_COLS);
  }

  printCategories(categories) {
    const categoriesCols = ['카테고리'];

    for (const categoryIndex of categories) {
      categoriesCols.push(FOOD_CATEGORY[categoryIndex]);
    }
    this.printRow(categoriesCols);
  }

  printCoachRows(coachList) {
    for (const coach of coachList) {
      const coachMenuRow = [coach.name, ...coach.selectMenus];
      this.printRow(coachMenuRow);
    }
  }
}
