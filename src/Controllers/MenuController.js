import { Random } from '@woowacourse/mission-utils';

export class MenuController {
  createCategoryList() {
    const categories = [];
    while (categories.length < 5) {
      // 1. 난수 뽑기
      const category = Random.pickNumberInRange(1, 5);

      // 2. 뽑은 난수의 숫자가 기존 배열에 몇 개 있는지 구하기
      const count = categories.filter((n) => n === category);

      // 3. 2개 미만이면, 삽입
      if (count < 2) {
        categories.push(category);
      }
    }

    // 4. 생성된 카테고리 리스트 반환
    return categories;
  }
}
