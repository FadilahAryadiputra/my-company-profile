'use client';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import Link from 'next/link';
import * as Yup from 'yup';

import useLogin from './_hooks/useLogin';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader } from 'lucide-react';

const SignIn = () => {
  const { mutateAsync: login, isPending } = useLogin();

  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password have minimum 8 characters')
      .max(25, 'Password have maximum 25 characters')
      .required('Password is required'),
  });

  return (
    <main>
      <section className='bg-second min-h-[calc(100vh-80px-297px)] w-full'>
        <div className='container mx-auto p-4 text-white'>
          <div className='flex flex-col items-center my-16 gap-12 p-4 mx-0 lg:mx-20'>
            <Card className='w-full max-w-sm bg-gray-300 border-none shadow-none'>
              <CardHeader>
                <div className='flex flex-row items-center gap-2 justify-between'>
                  <div className='flex gap-2 items-center'>
                    <div className='bg-black rounded-full size-[18px]'></div>
                    <h4 className='font-normal text-2xl'>ARIA</h4>
                  </div>
                  <div className='font-bold text-2xl'>Sign In</div>
                </div>
              </CardHeader>
              <CardContent>
                <Formik
                  initialValues={{
                    email: '',
                    password: '',
                  }}
                  validationSchema={loginSchema}
                  onSubmit={async (values) => {
                    await login({
                      login: values.email,
                      password: values.password,
                    });
                  }}
                >
                  <Form>
                    <div className='flex flex-col'>
                      <div className='grid gap-2'>
                        <Label htmlFor='email'>Email Address</Label>
                        <Field
                          name='email'
                          as={Input}
                          type='email'
                          placeholder='youremail@example.com'
                          required
                          className='bg-white'
                        />
                        <ErrorMessage
                          name='email'
                          component='div'
                          className='text-red-500 text-sm'
                        />
                      </div>
                      <div className='grid gap-2 mt-4'>
                        <div className='flex items-center'>
                          <Label htmlFor='password'>Password</Label>
                        </div>
                        <Field
                          name='password'
                          as={Input}
                          type='password'
                          placeholder='**********'
                          required
                          className='bg-white'
                        />
                        <ErrorMessage
                          name='password'
                          component='div'
                          className='text-red-500 text-sm'
                        />
                      </div>
                      <div className='flex items-center gap-2 mt-2'>
                        <Checkbox id='rememberMe' className='bg-white' />
                        <Label htmlFor='rememberMe'>Remember me</Label>
                      </div>
                    </div>
                    <Button
                      type='submit'
                      disabled={isPending}
                      className='w-full mt-5 hover:bg-neutral-700 active:bg-black'
                    >
                      {isPending ? (
                        <Loader className='animate-spin' />
                      ) : (
                        'Login'
                      )}
                    </Button>
                  </Form>
                </Formik>
              </CardContent>
              <CardFooter className='flex-col'>
                <div className='flex mr-auto gap-2 mt-2'>
                  <p className='text-sm text-gray-600'>
                    Don&apos;t have an account?
                  </p>
                  <Link href={'/sign-up'} className='text-sm font-bold'>
                    Sign Up
                  </Link>
                </div>
                <div className='flex mr-auto'>
                  <Link href={'#'} className='text-sm font-medium'>
                    Forgot Password
                  </Link>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SignIn;
