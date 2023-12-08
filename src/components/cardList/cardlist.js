import { DivComponent } from "../../common/div-component.js";
import "./cardlist.css";

export class CardList extends DivComponent {
  constructor(appState, parentState) {
    super();
    this.appState = appState;
    this.parentState = parentState;
  }

  render() {
    if (this.parentState.loading) {
      this.el.innerHTML = `<div class="card_list__loading"> Loading... </div>`;
      return this.el;
    }
    this.el.innerHTML = `
			<h3>Founded books – ${this.parentState.list.length}</h3>
		`;

    // const cardGrid = document.createElement("div");
    // cardGrid.classList.add("card_grid");
    // this.el.append(cardGrid);
    return this.el;
  }
}
