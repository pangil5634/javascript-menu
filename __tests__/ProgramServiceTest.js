import { OUTPUT_MESSAGES } from "../src/constants/io";
import { ProgramService } from "../src/Services/ProgramService";

describe("ProgramController Test", () => {
  test("프로그램 시작 문구 테스트", () => {
    const programService= new ProgramService();

    console.log = jest.fn(); 
    programService.printProgramStart(); 
    
    expect(console.log).toHaveBeenCalledWith(OUTPUT_MESSAGES.PROGRAM_START);
  })
})