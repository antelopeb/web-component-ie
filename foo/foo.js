class FlagIcon extends HTMLElement {
	constructor(props) {
		super(props);
		this.countryCode = null;
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
		const shadow = this.attachShadow({mode: 'open'}),
			style = document.createElement('style'),
			currentDoc = document.querySelector( 'link[href$="foo.html"]').import,
			template = currentDoc.querySelector('#template'),
			country = document.createElement("p"),
			clone = document.importNode(template.content, true);

		style.textContent = 'p.country {color:red}; p.text {color: black}';

		country.innerHTML = this.countryCode
		country.setAttribute('class', 'country')
		shadow.appendChild(style);
		shadow.appendChild(clone);
		shadow.appendChild(country);


		this.updateRendering();
	}

	// is called when the element is removed.
	disconnectedCallback() {

	}

	// render method
	updateRendering() {

		// Left as an exercise for the reader. But, you'll probably want to
		// check this.ownerDocument.defaultView to see if we've been
		// inserted into a document with a browsing context, and avoid
		// doing any work if not.
	}

}
customElements.define("flag-icon", FlagIcon);
