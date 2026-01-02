import { ProgramController } from './Controllers/ProgramController.js';

class App {
  async run() {
    const programController = new ProgramController();
    try {
      programController.printProgramStart();
      await programController.createCoach();
      await programController.saveHateMenus();
    } catch (error) {
      console.error(error);
    }
  }
}

export default App;
