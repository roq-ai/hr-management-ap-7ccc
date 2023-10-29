import * as yup from 'yup';

export const hrManagerValidationSchema = yup.object().shape({
  hire_date: yup.date().required(),
  hr_manager_department: yup.string().required(),
  job_title: yup.string().required(),
  hr_manager_salary: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
  organization_id: yup.string().nullable().required(),
});
