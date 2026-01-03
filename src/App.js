import { ProgramController } from './Controllers/ProgramController.js';

class App {
  async run() {
    const programController = new ProgramController();
    try {
      // 코치 정보 생성
      await programController.playCoach();

      // 카테고리 생성
      programController.playCategory();

      // 메뉴 결과 출력
      programController.playResult();
    } catch (error) {
      console.error(error);
    }
  }
}

export default App;
