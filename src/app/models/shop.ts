import { Good } from './good';

export interface Shop{
	id: number;
	company: string;
	email: string;
	street: string;
	suite: string;
	city: string;
	phone: string;
	website: string;
	geo: any;
	goods: Good[]
}