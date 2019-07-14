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
