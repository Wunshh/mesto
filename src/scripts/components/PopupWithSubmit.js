import Popup from "./Popup.js";

export default class PopupWithSubmit extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._botton = this._popup.querySelector(".popup__save-button");
    }

    handleFormDelete(occasion) {
        this._handleFormSubmit = occasion;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popup.addEventListener("submit", (evt) => {
            evt.preventDefault();

            this.renderLoading(true);

            this._handleFormSubmit();
        });
    }

    renderLoading(isLoading) {
        if (isLoading) {
            this._botton.textContent = "Удаление..."
        } else {
            this._botton.textContent = "Да"
        }
    }
}