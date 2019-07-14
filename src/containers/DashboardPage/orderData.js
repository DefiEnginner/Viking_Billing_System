const orderData = [];

const cpName = [
	"Blanda Group",
	"Draysey",
	"Ullrich-Dibbert",
	"Goldner-Lehner",
	"Ullrich-Dibbert",
	"Evangeline Cure",
	"Gleason,Kub"
];
const payment = ["Bank transfer", "Cash on delivery", "Check payments", "Credit Card"];
const status = ["Credit", "Paid", "Not Paid"];
const delivery = ["Pending", "In transit", "Delivered"];
for (let i = 0; i < 7; i += 1) {
	const innerData = [
		{
			nameProduct: "RFScada32",
			goldnerLehner: "Ullrich-Dibbert",
			qty: 10,
			creditCard: "Check payments",
			price: 100,
			totalPrice: 1000
		},
		{
			nameProduct: "RFSCADA16 V3.1",
			goldnerLehner: "Goldner-Lehner",
			qty: 6,
			creditCard: "Cash on deliver",
			price: 100,
			totalPrice: 600
		}
	];
	const order = {
		orderID: parseInt(Math.random() * 13472345764 + 23124512346),
		date: new Date(2019, 5, 1),
		companyName: cpName[i],
		qty: parseInt(Math.random() * 20 + 1),
		paymentType: payment[parseInt(Math.random() * 4)],
		paymentStatus: status[parseInt(Math.random() * 3)],
		deliveryStatus: delivery[parseInt(Math.random() * 3)],
		address: "3038 Trailsway Junction",
		totalPrice: parseInt(Math.random() * 2000),
		innerData
	};
	orderData.push(order);
}

export default orderData;
