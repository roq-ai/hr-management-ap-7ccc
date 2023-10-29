import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface AdministratorInterface {
  id?: string;
  user_id: string;
  organization_id: string;
  hire_date: any;
  administrator_department: string;
  job_title: string;
  administrator_salary: number;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {};
}

export interface AdministratorGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  organization_id?: string;
  administrator_department?: string;
  job_title?: string;
}
