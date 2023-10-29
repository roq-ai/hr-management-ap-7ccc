import * as yup from 'yup';

export const ownerValidationSchema = yup.object().shape({
  established_date: yup.date().required(),
  industry: yup.string().required(),
  total_employees: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
  organization_id: yup.string().nullable().required(),
});
