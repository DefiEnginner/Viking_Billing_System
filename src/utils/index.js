export const createActionTypes = (base, actions = []) =>
	actions.reduce((acc, type) => {
		acc[type] = `${base}_${type}`;

		return acc;
	}, {});

export const roles = {
	SUPERADMIN: "superAdmin",
	DISTRIBUTOR: "distributor",
	CUSTOMER: "customer"
};

export const backendUrl = "http://192.168.1.21:3000";
export const TOKEN_TIME = 2592000;
