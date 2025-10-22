function isAnInternetOrder(order) {
    return !!order && "email" in order;
}
function isAnTelephoneOrder(order) {
    return !!order && "callerNumber" in order;
}
function makeOrder(order) {
    if (isAnInternetOrder(order)) {
        console.log(order.email);
    }
    else if (isAnTelephoneOrder(order)) {
        console.log(order.callerNumber);
    }
}
export {};
