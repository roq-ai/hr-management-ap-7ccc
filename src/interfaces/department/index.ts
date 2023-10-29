import { GetQueryInterface } from 'interfaces';

export interface DepartmentInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface DepartmentGetQueryInterface extends GetQueryInterface {
  id?: string;
}
