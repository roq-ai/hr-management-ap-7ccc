import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { useRoqClient } from 'lib/roq';
import * as RoqTypes from 'lib/roq/types';

import { ownerValidationSchema } from 'validationSchema/owners';
import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { OwnerInterface } from 'interfaces/owner';

function OwnerCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const roqClient = useRoqClient();
  const handleSubmit = async (values: OwnerInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await roqClient.owner.create({ data: values as RoqTypes.owner });
      resetForm();
      router.push('/owners');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<OwnerInterface>({
    initialValues: {
      established_date: new Date(new Date().toDateString()),
      industry: '',
      total_employees: 0,
      user_id: (router.query.user_id as string) ?? null,
      organization_id: (router.query.organization_id as string) ?? null,
    },
    validationSchema: ownerValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Owners',
              link: '/owners',
            },
            {
              label: 'Create Owner',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Owner
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <FormControl id="established_date" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Established Date
            </FormLabel>
            <DatePicker
              selected={formik.values?.established_date ? new Date(formik.values?.established_date) : null}
              onChange={(value: Date) => formik.setFieldValue('established_date', value)}
            />
          </FormControl>

          <TextInput
            error={formik.errors.industry}
            label={'Industry'}
            props={{
              name: 'industry',
              placeholder: 'Industry',
              value: formik.values?.industry,
              onChange: formik.handleChange,
            }}
          />

          <NumberInput
            label="Total Employees"
            formControlProps={{
              id: 'total_employees',
              isInvalid: !!formik.errors?.total_employees,
            }}
            name="total_employees"
            error={formik.errors?.total_employees}
            value={formik.values?.total_employees}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('total_employees', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <AsyncSelect<UserInterface>
            formik={formik}
            name={'user_id'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={() => roqClient.user.findManyWithCount({})}
            labelField={'email'}
          />
          <AsyncSelect<OrganizationInterface>
            formik={formik}
            name={'organization_id'}
            label={'Select Organization'}
            placeholder={'Select Organization'}
            fetcher={() => roqClient.organization.findManyWithCount({})}
            labelField={'name'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/owners')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'owner',
    operation: AccessOperationEnum.CREATE,
  }),
)(OwnerCreatePage);
