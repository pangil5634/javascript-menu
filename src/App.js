import { ProgramController } from './Controllers/ProgramController.js';

class App {
  async run() {
    const programController = new ProgramController();
    try {
      programController.printProgramStart();
      await programController.createCoach();
      await programController.saveHateMenus();
      programController.createCategories();
    } catch (error) {
      console.error(error);
    }
  }
}

export default App;
