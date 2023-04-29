export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  ein: string;
  birthDate: string;
  image: string;
  company: Company;
  address: Address;
};

type Address = {
  city: string;
  state: string;
  address: string;
  postalCode: string;
};

type Company = {
  address: Address;
  department: string;
  name: string;
  title: string;
};
