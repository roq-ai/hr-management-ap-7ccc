import { GetQueryInterface } from 'interfaces';

export interface SalaryInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface SalaryGetQueryInterface extends GetQueryInterface {
  id?: string;
}
