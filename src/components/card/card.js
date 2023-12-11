import { DivComponent } from "../../common/div-component";
import "./card.css";

export class Card extends DivComponent {
  constructor(appState, cardState) {
    super();
    this.appState = appState;
    this.cardState = cardState;
	}

	#addToFav() {
		this.appState.favourites.push(this.cardState); 
	}
	
	#deleteFromFav() {
		this.appState.favourites = this.appState.favourites.filter( b => b.key !== this.cardState.key)
	}

  render() {
    this.el.classList.add("card");
    const existInFav = this.appState.favourites.find(
      (b) => b.key == this.cardState.key
    );

    //console.log(this.cardState.key);

    this.el.setAttribute("id", this.cardState.key);

    this.el.innerHTML = `
			<div class="card__image">
				<img src="https://covers.openlibrary.org/b/olid/${
          this.cardState.cover_edition_key
        }-M.jpg" alt="Обложка" />
			</div>
			<div class="card__info">
				<div class="card__tag">
					${this.cardState.subject ? this.cardState.subject[0] : "Title by default"}
				</div>
				<div class="card__name">
					${this.cardState.title}
				</div>
				<div class="card__author">
					${
            this.cardState.author_name
              ? this.cardState.author_name[0]
              : "Author by default"
          }
				</div>
				<div class="card__footer">
					<button class="button__add ${existInFav ? "button__active" : ""}">
						${
              existInFav
                ? '<img src="/static/favorites.svg" />'
                : '<img src="/static/favorites_white.svg" />'
            }
					</button>
				</div>
			</div>
		`;

    if (existInFav) {
      this.el
        .querySelector(".button__add")
        .addEventListener("click", this.#deleteFromFav.bind(this));
    } else {
      this.el
        .querySelector(".button__add")
        .addEventListener("click", this.#addToFav.bind(this));
    }

    return this.el;
  }
    
 
}
