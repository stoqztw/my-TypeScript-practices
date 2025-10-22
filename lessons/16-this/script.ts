export const user = {
	id: 123,
	admin: false,
	becomeAdmin: function () {
		this.admin = true;
	},
};

function myClickHandler(this: HTMLButtonElement, event: Event) {
	this.disabled = true;
}