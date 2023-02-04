export interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

export interface ICompany {
  name: string;
}

export interface IUserData {
  id: string;
  username: string;
  name: string;
  email: string;
  phone: string;
  website: string;
  address: IAddress;
  company: ICompany;
  isLiked: boolean;
}
