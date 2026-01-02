import { OUTPUT_MESSAGES } from "../src/constants/io";
import { ProgramController } from "../src/Controllers/ProgramController"

describe("ProgramController Test", () => {
  test("프로그램 시작 문구 테스트", () => {
    const programController = new ProgramController();

    console.log = jest.fn(); 
    programController.printProgramStart(); 
    
    expect(console.log).toHaveBeenCalledWith(OUTPUT_MESSAGES.PROGRAM_START);
  })
})