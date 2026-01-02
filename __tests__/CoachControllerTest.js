jest.mock('../src/View/InputView.js', () => ({
  InputView: {
    getOriginCoachNames: jest.fn(),
  },
}));


import { CoachController } from "../src/Controllers/CoachController";
import { Coach } from "../src/Models/Coach";
import { InputView } from '../src/View/InputView';

describe("ProgramController Test", () => {
  test("코치 이름 정상 테스트 - 1", async () =>
  {
    InputView.getOriginCoachNames.mockResolvedValue('포비,광일');

    const coachController = new CoachController();
    const result = await coachController.getCoachNames();
    expect(result).toEqual(['포비', '광일']);
      
  })
})

describe('createCoachList', () => {
  test('이름 배열을 전달하면 Coach 객체 배열이 생성된다', () => {
    const names = ['포비', '광일'];

    const coachController = new CoachController();
    const coachList = coachController.createCoachList(names);

    expect(coachList).toHaveLength(2);
    expect(coachList.every((coach) => coach instanceof Coach)).toBe(true);
  });

  test('각 Coach 객체는 전달된 이름을 가진다', () => {
    const names = ['포비', '광일'];

    const coachController = new CoachController();
    const coachList = coachController.createCoachList(names);

    expect(coachList.map((coach) => coach.name)).toEqual(names);
  });
});



