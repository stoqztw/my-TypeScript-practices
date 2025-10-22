export interface Order {
	address: string;
}

interface TelephoneOrder extends Order {
	callerNumber: string;
}

interface InternetOrder extends Order {
	email: string;
}

type PossibleOrders = TelephoneOrder | InternetOrder | undefined;

function isAnInternetOrder(order: PossibleOrders): order is InternetOrder {
	return !!order && "email" in order;
}

function isAnTelephoneOrder(order: PossibleOrders): order is TelephoneOrder {
	return !!order && "callerNumber" in order;
}

function makeOrder(order: PossibleOrders) {
	if (isAnInternetOrder(order)) {
		console.log(order.email);
	} else if (isAnTelephoneOrder(order)) {
		console.log(order.callerNumber);
	}
}

