import { Coach } from '../src/Models/Coach.js';

describe('Coach Model', () => {
  test('Coach 객체가 이름과 함께 정상 생성된다', () => {
    const coach = new Coach('포비');

    expect(coach).toBeInstanceOf(Coach);
    expect(coach.name).toBe('포비');
  });
});
