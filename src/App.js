import { ProgramController } from './Controllers/ProgramController.js';

class App {
  async run() {
    const programController = new ProgramController();
    try {
      programController.printProgramStart();
      await programController.createCoach();
      await programController.saveHateMenus();
      programController.createCategories();
      programController.saveMenusPerCoach();
      programController.printProgramResult();
      programController.printProgramEnd();
    } catch (error) {
      console.error(error);
    }
  }
}

export default App;
