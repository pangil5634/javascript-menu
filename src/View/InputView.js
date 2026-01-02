import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES } from '../constants/io.js';

export class InputView {
  // 사용자로부터 코치 이름 입력 받기
  static getOriginCoachNames() {
    return Console.readLineAsync(INPUT_MESSAGES.COACH_NAMES + '\n');
  }
}
