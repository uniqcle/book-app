import { DivComponent } from "../../common/div-component";
import "./header.css";

export class Header extends DivComponent {
  constructor(appState) {
    super();
    this.appState = appState;
  }

  render() {
    this.el.innerHTML = "";
    this.el.classList.add("header");
    this.el.innerHTML = `
		<div class="logo">
      <a href="/">
			<img class="" src='/static/logo.png' alt='logo' />
      </a>
		</div>
    <div class="menu">
      <a class="menu__item" href="#">
        <img src='/static/search.svg' alt='Search' />
        Search Books
      </a>

            <a class="menu__item" href="#favourites">
        <img src='/static/favorites.svg' alt='favourites' />
        Favourites

        <div class="menu__counter">
          ${this.appState.favourites.length}
        </div>
      </a>
    </div>
		`;
    return this.el;
  }
}
