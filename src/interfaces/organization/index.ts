import { AdministratorInterface } from 'interfaces/administrator';
import { EmployeeInterface } from 'interfaces/employee';
import { HrManagerInterface } from 'interfaces/hr-manager';
import { OwnerInterface } from 'interfaces/owner';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  administrator?: AdministratorInterface[];
  employee?: EmployeeInterface[];
  hr_manager?: HrManagerInterface[];
  owner?: OwnerInterface[];
  user?: UserInterface;
  _count?: {
    administrator?: number;
    employee?: number;
    hr_manager?: number;
    owner?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
