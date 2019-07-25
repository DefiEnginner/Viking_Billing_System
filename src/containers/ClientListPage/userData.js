const userData = [];

const cpName = [
	"Blanda Group",
	"Draysey",
	"Ullrich-Dibbert",
	"Goldner-Lehner",
	"Ullrich-Dibbert",
	"Evangeline Cure",
	"Gleason,Kub"
];
const status = ["pending", "archive", "active"];
const role = ["customer", "distributor"];
for (let i = 0; i < 7; i += 1) {
	const statu = status[parseInt(Math.random() * 3)];
	const user = {
		contractNumber: parseInt(Math.random() * 13472345764 + 23124512346),
		companyName: cpName[i],
		email: "company" + i + "@gmail.com",
		phoneNumber: 1908107624 + i * 10011,
		role: statu === "pending" ? "customer" : role[parseInt(Math.random() * 2)],
		status: statu,
		added: new Date()
	};
	userData.push(user);
}

export default userData;
