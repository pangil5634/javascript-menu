import { ProgramController } from './Controllers/ProgramController.js';

class App {
  async run() {
    const programController = new ProgramController();
    programController.printProgramStart();
    programController.getCoachNames();
  }
}

export default App;
