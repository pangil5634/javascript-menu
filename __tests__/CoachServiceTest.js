import { CoachController } from "../src/Controllers/CoachController";
import { CoachService } from "../src/Services/CoachService";
import { ERROR_MESSAGES } from "../src/constants/errors.js"

describe("CoachService Test", () => {
  describe("[1] parseOriginCoachNames", () => {
    test("1. 원본 이름 분리 정상 테스트 - 1", () => {
      const coachService = new CoachService();
      expect(coachService.parseOriginCoachNames('포비,광일')).toStrictEqual(['포비', '광일']);
    })
  });

  describe("[2] validateCoachNamesLength", () => {
    test("2-1. 이름 개수 범위 정상 테스트 - 1", () => {
      const coachService = new CoachService();
      expect(() => coachService.validateCoachNamesLength(['포비', '광일'])).not.toThrow();
    });
    
    test("2-2-1. 이름 개수 범위 비정상 테스트 - 1", () => {
      const coachService = new CoachService();
      expect(() => coachService.validateCoachNamesLength(['포비'])).toThrow(ERROR_MESSAGES.FEW_NAMES);
    });
    test("2-2-2. 이름 개수 범위 비정상 테스트 - 2", () => {
      const coachService = new CoachService();
      expect(() => coachService.validateCoachNamesLength(['포비', '광일', '솔미', '민지', '현중', '현민'])).toThrow(ERROR_MESSAGES.MANY_NAMES);
    });
    test("2-2-3. 이름 개수 범위 비정상 테스트 - 3", () => {
      const coachService = new CoachService();
      expect(() => coachService.validateCoachNamesLength([])).toThrow(ERROR_MESSAGES.EMPTY_NAMES);
    });
  });

  describe("[3] validateCoachNameLength", () => {
    test("3-1. 이름 길이 범위 비정상 테스트 - 1", () => {
      const coachService = new CoachService();
      expect(() => coachService.validateCoachNameLength('포비')).not.toThrow();
    });

    test("3-2-1. 이름 길이 범위 비정상 테스트 - 1", () => {
      const coachService = new CoachService();
      expect(() => coachService.validateCoachNameLength('포')).toThrow(ERROR_MESSAGES.SHORT_NAME);
    });

    test("3-2-2. 이름 길이 범위 비정상 테스트 - 2", () => {
      const coachService = new CoachService();
      expect(() => coachService.validateCoachNameLength('크라이스트포비')).toThrow(ERROR_MESSAGES.LONG_NAME);
    });
  });

  describe("[4] parseOriginCoachNames", () => {
    test("4. 원본 메뉴 분리 정상 테스트 - 1", () => {
      const coachService = new CoachService();
      expect(coachService.parseOriginCoachNames('치킨,바나나')).toStrictEqual(['치킨', '바나나']);
    })
  });
  
  describe("[5] validateHateMenus", () => {
    test("5-1. 메뉴 개수 범위 정상 테스트 - 1", () => {
      const coachService = new CoachService();
      expect(() => coachService.validateHateMenus([])).not.toThrow();
    });
    
    test("5-2. 메뉴 개수 범위 정상 테스트 - 2", () => {
      const coachService = new CoachService();
      expect(() => coachService.validateHateMenus(['치킨'])).not.toThrow();
    });

    test("5-3. 메뉴 개수 범위 정상 테스트 - 3", () => {
      const coachService = new CoachService();
      expect(() => coachService.validateHateMenus(['치킨', '바나나'])).not.toThrow();
    });
    
    
    test("5-2-1. 메뉴 개수 범위 비정상 테스트 - 1", () => {
      const coachService = new CoachService();
      expect(() => coachService.validateHateMenus(['치킨', '바나나', '과자'])).toThrow(ERROR_MESSAGES.MANY_MENUS);
    });
  });

})
