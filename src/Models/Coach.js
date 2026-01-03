export class Coach {
  #name;
  #hateMenus;
  #selectMenus;
  constructor(name) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }
}
