export const user = {
    id: 123,
    admin: false,
    becomeAdmin: function () {
        this.admin = true;
    },
};
function myClickHandler(event) {
    this.disabled = true;
}
