export interface UserDMJSModel {
	id: number;
	firstName: string;
	lastName: string;
	maidenName: string;
	age: number;
	gender: string;
	email: string;
	phone: string;
	username: string;
	password: string;
	birthDate: string;
	image: string;
	bloodGroup: string;
	height: number;
	weight: number;
	eyeColor: string;
	hair: UserDMJSModelHair;
	ip: string;
	address: UserDMJSModelAddress;
	macAddress: string;
	university: string;
	bank: UserDMJSModelBank;
	company: UserModelCompany;
	ein: string;
	ssn: string;
	userAgent: string;
	crypto: UserModelCrypto;
	role: string;
}
export interface UserDMJSModelHair {
	color: string;
	type: string;
}
export interface UserDMJSModelAddressCoordinates {
	lat: number;
	lng: number;
}
export interface UserDMJSModelAddress {
	address: string;
	city: string;
	state: string;
	stateCode: string;
	postalCode: string;
	coordinates: UserDMJSModelAddressCoordinates;
	country: string;
}
export interface UserDMJSModelBank {
	cardExpire: string;
	cardNumber: string;
	cardType: string;
	currency: string;
	iban: string;
}
export interface UserDMJSModelCompanyAddressCoordinates {
	lat: number;
	lng: number;
}
export interface UserDMJSModelCompanyAddress {
	address: string;
	city: string;
	state: string;
	stateCode: string;
	postalCode: string;
	coordinates: UserDMJSModelCompanyAddressCoordinates;
	country: string;
}
export interface UserModelCompany {
	department: string;
	name: string;
	title: string;
	address: UserDMJSModelCompanyAddress;
}
export interface UserModelCrypto {
	coin: string;
	wallet: string;
	network: string;
}