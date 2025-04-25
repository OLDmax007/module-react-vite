export interface UserModel {
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
	hair: UserModelHair;
	ip: string;
	address: UserModelAddress;
	macAddress: string;
	university: string;
	bank: UserModelBank;
	company: UserModelCompany;
	ein: string;
	ssn: string;
	userAgent: string;
	crypto: UserModelCrypto;
	role: string;
}
export interface UserModelHair {
	color: string;
	type: string;
}
export interface UserModelAddressCoordinates {
	lat: number;
	lng: number;
}
export interface UserModelAddress {
	address: string;
	city: string;
	state: string;
	stateCode: string;
	postalCode: string;
	coordinates: UserModelAddressCoordinates;
	country: string;
}
export interface UserModelBank {
	cardExpire: string;
	cardNumber: string;
	cardType: string;
	currency: string;
	iban: string;
}
export interface UserModelCompanyAddressCoordinates {
	lat: number;
	lng: number;
}
export interface UserModelCompanyAddress {
	address: string;
	city: string;
	state: string;
	stateCode: string;
	postalCode: string;
	coordinates: UserModelCompanyAddressCoordinates;
	country: string;
}
export interface UserModelCompany {
	department: string;
	name: string;
	title: string;
	address: UserModelCompanyAddress;
}
export interface UserModelCrypto {
	coin: string;
	wallet: string;
	network: string;
}