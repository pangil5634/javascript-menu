import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES } from '../constants/io.js';

export class CoachService {
  // 사용자로부터 코치 이름 입력 받기
  getOriginCoachNames() {
    return Console.readLineAsync(INPUT_MESSAGES.COACH_NAMES + '\n');
  }

  // 원본 이름을 배열로 분리하기
  parseOriginCoachNames(originCoachNames) {
    const coachNames = originCoachNames.split(',').map((n) => n.trim());
    return coachNames;
  }

  // 분리한 배열 검증하기
  validateCoachNames(coachNames) {
    if (coachNames.length < 2) {
      throw new Error('최소 2명의 코치 이름을 입력해야 합니다.');
    }
    if (coachNames.length > 5) {
      throw new Error('최대 5명의 코치 이름만 입력해야 합니다.');
    }
  }
}
