import { DivComponent } from "../../common/div-component.js";
import { Card } from "../card/card.js";

import "./cardlist.css";
// import { Card } from "../../card/card.js";

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
			<h3>Founded books – ${this.parentState.numFound}</h3>
		`;

    const cardGrid = document.createElement("div");
    cardGrid.classList.add("card_grid");
    this.el.append(cardGrid);

    if (this.parentState.list) {
      for (let card of this.parentState.list) {
        if (!card.cover_edition_key) {
          //console.log(card.cover_edition_key);
          continue;
        } else {
          cardGrid.append(new Card(this.appState, card).render());
        }
      }
    }

    // const cardGrid = document.createElement("div");
    // cardGrid.classList.add("card_grid");
    // this.el.append(cardGrid);
    return this.el;
  }
}
