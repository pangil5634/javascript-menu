jest.mock('../src/View/InputView.js', () => ({
  InputView: {
    getOriginCoachNames: jest.fn(),
  },
}));


import { CoachController } from "../src/Controllers/CoachController";
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


