import { Random } from '@woowacourse/mission-utils';
import { MENU } from '../constants/menu.js';

export class MenuController {
  createCategoryList() {
    const categories = [];
    while (categories.length < 5) {
      // 1. 난수 뽑기
      const category = Random.pickNumberInRange(0, 4);

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

  createMenuList(hateMenus, categories) {
    const menuList = [];

    for (const category of categories) {
      let selectMenu = '';

      // 1. 카테고리의 메뉴 불러오기
      const menus = MENU[category];

      // 2. 해당 카테고리의 개수 구하기
      const menuIndexList = Array.from({ length: menus.length }, (_, i) => i);

      do {
        // 3. 셔플해서 숫자 하나 뽑기
        const menuIndex = Random.shuffle(menuIndexList)[0];
        // 4. 해당 메뉴가 못 먹는 메뉴에 있는지 확인하기
        selectMenu = menus[menuIndex];
      } while (hateMenus.some((n) => n === selectMenu));

      // 5. 메뉴 추가하기
      menuList.push(selectMenu);
    }

    // 6. 메뉴 목록 반환
    return menuList;
  }
}
