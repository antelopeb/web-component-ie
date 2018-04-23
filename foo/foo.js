class FlagIcon extends HTMLElement {
	constructor() {
		super();
		this.countryCode = null;

		const shadow = this.attachShadow({mode: 'open'});
		const style = document.createElement('style');
		let paragraph = document.createElement('p');

		const country = this.getAttribute('country');
		paragraph.textContent = country;

		style.textContent = 'p {color:red}';

		shadow.appendChild(style);
		shadow.appendChild(paragraph);
	}

	// returns only the observed attributes
	static get observedAttributes() { return ["country"]; }

	// is called when an observed attribute is changed.
	attributeChangedCallback(name, oldValue, newValue) {

		// name will always be "country" due to observedAttributes
		this.countryCode = newValue;
		this.updateRendering();
	}

	// is called when the element is created.
	connectedCallback() {
		this.updateRendering();
	}

	// is called when the element is removed.
	disconnectedCallback() {

	}

	// render method
	updateRendering() {
		this.innerHTML = this.countryCode;
		// Left as an exercise for the reader. But, you'll probably want to
		// check this.ownerDocument.defaultView to see if we've been
		// inserted into a document with a browsing context, and avoid
		// doing any work if not.
	}

}
customElements.define("flag-icon", FlagIcon);
