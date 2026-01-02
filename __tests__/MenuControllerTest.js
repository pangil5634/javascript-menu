import { MenuController } from "../src/Controllers/MenuController";

describe("MenuController Test1", () => {
  test('5개의 카테고리를 생성한다', () => {
    const menuController = new MenuController();
    const result = menuController.createCategoryList();

    expect(result).toHaveLength(5);
  });

  test('카테고리 값은 0~4 사이이다', () => {
    const menuController = new MenuController();
    const result = menuController.createCategoryList();

    result.forEach((category) => {
      expect(category).toBeGreaterThanOrEqual(0);
      expect(category).toBeLessThanOrEqual(4);
    });
  });

  test('각 카테고리는 최대 2번까지만 등장한다', () => {
    const menuController = new MenuController();
    const result = menuController.createCategoryList();

    const countMap = {};
    result.forEach((c) => {
      countMap[c] = (countMap[c] || 0) + 1;
    });

    Object.values(countMap).forEach((count) => {
      expect(count).toBeLessThanOrEqual(2);
    });
  });
})

describe("MenuController Test2", () => {
  test('5개의 메뉴를 생성한다', () => {
    const menuController = new MenuController();

    const categories = [0, 1, 2, 3, 4];
    const hateMenus = []; 

    const result = menuController.createMenuList(hateMenus, categories);
    expect(result).toHaveLength(5);
  });



  test('각 메뉴는 중복되지 않게 등장한다.', () => {
    const menuController = new MenuController();

    const categories = [0, 1, 2, 1, 2];
    const hateMenus = []; 

    const result = menuController.createMenuList(hateMenus, categories);

    const countMap = {};
    result.forEach((c) => {
      countMap[c] = (countMap[c] || 0) + 1;
    });

    Object.values(countMap).forEach((count) => {
      expect(count).toBeLessThanOrEqual(1);
    });
  });
})



