import { CoachController } from "../src/Controllers/CoachController";
import { CoachService } from "../src/Services/CoachService";
import { ERROR_MESSAGES } from "../src/constants/errors.js"

describe("ProgramController Test", () => {
  // test("코치 이름 정상 테스트 - 1", () => {
  //   const coachContoller = new CoachController();
  //   expect(coachContoller.getCoachNames()).toStrictEqual(['포비', '광일']);
      
  //   // console.log = jest.fn(); 
  //   // programController.printProgramStart(); 
    
  //   // expect(console.log).toHaveBeenCalledWith('점심 메뉴 추천을 시작합니다.');
  // })

  test("원본 이름 분리 정상 테스트 - 1", () => {
    const coachService = new CoachService();
    expect(coachService.parseOriginCoachNames('포비,광일')).toStrictEqual(['포비', '광일']);
  })
  test("이름 범위 정상 테스트 - 1", () => {
    const coachService = new CoachService();
    expect(() => coachService.validateCoachNames(['포비', '광일'])).not.toThrow();
  });

  test("이름 범위 비정상 테스트 - 1", () => {
    const coachService = new CoachService();
    expect(() => coachService.validateCoachNames(['포비'])).toThrow(ERROR_MESSAGES.FEW_NAMES);
  });
  test("이름 범위 비정상 테스트 - 2", () => {
    const coachService = new CoachService();
    expect(() => coachService.validateCoachNames(['포비', '광일', '솔미', '민지', '현중', '현민'])).toThrow(ERROR_MESSAGES.MANY_NAMES);
  });
})
