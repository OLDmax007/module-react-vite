export interface UserJSPHModel {
	id: number;
	name: string;
	username: string;
	email: string;
	address: UserJSPHModelAddress;
	phone: string;
	website: string;
	company: UserJSPHModelCompany;
}
export interface UserJSPHModelAddressGeo {
	lat: string;
	lng: string;
}
export interface UserJSPHModelAddress {
	street: string;
	suite: string;
	city: string;
	zipcode: string;
	geo: UserJSPHModelAddressGeo;
}
export interface UserJSPHModelCompany {
	name: string;
	catchPhrase: string;
	bs: string;
}