import * as yup from 'yup';

export const administratorValidationSchema = yup.object().shape({
  hire_date: yup.date().required(),
  administrator_department: yup.string().required(),
  job_title: yup.string().required(),
  administrator_salary: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
  organization_id: yup.string().nullable().required(),
});
