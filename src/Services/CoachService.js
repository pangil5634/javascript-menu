import { ERROR_MESSAGES } from '../constants/errors';

export class CoachService {
  // 원본 이름을 배열로 분리하기
  parseOriginCoachNames(originCoachNames) {
    const coachNames = originCoachNames.split(',').map((n) => n.trim());
    return coachNames;
  }

  // 분리한 배열 검증하기
  validateCoachNames(coachNames) {
    this.validateCoachNamesLength(coachNames);

    for (const name of coachNames) {
      validateCoachNameLength(name);
    }
  }

  validateCoachNamesLength(coachNames) {
    if (coachNames.length === 0) {
      throw new Error(ERROR_MESSAGES.EMPTY_NAMES);
    }
    if (coachNames.length < 2) {
      throw new Error(ERROR_MESSAGES.FEW_NAMES);
    }
    if (coachNames.length > 5) {
      throw new Error(ERROR_MESSAGES.MANY_NAMES);
    }
  }
  validateCoachNameLength(name) {
    if (name.length < 2) {
      throw new Error(ERROR_MESSAGES.SHORT_NAME);
    }
    if (name.length > 4) {
      throw new Error(ERROR_MESSAGES.LONG_NAME);
    }
  }
}
