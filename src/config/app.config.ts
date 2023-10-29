interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: [],
  tenantRoles: ['Owner', 'HR Manager', 'Administrator', 'Employee'],
  tenantName: 'Organization',
  applicationName: 'HR Management Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage salary information',
    'Manage job positions',
    'Manage performance reviews',
    'Manage schedules',
    'Manage roles',
    'Manage departments',
    'Manage users',
    'Manage organizations',
    'Manage employees',
    'Manage HR managers',
    'Manage administrators',
    'Manage owners',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/a0cad9f7-7ab7-48f5-86da-a325a75d625e',
};
