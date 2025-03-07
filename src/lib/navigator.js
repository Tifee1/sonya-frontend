class Navigator {
  constructor() {
    this.navigate = null
  }

  setNavigate(nav) {
    this.navigate = nav
  }

  getNavigate() {
    return this.navigate
  }
}

export const navigator = new Navigator()
