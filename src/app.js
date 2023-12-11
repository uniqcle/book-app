import { MainView } from "./views/main/main.js";
import { FavsView } from "./views/favs/favs.js";

class App {
  routes = [
    { path: "", view: MainView },
    { path: "#favourites", view: FavsView },
  ];

  appState = {
    favourites: [],
  };

  constructor() {
    window.addEventListener("hashchange", this.route.bind(this));
    this.route();
  }

  route() {
    if (this.currentView) {
      this.currentView.destroy();
    }
    const view = this.routes.find((r) => r.path === location.hash).view;

    this.currentView = new view(this.appState);
    this.currentView.render();
  }
}

new App();
