'use client';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import Link from 'next/link';
import * as Yup from 'yup';

import useRegister from "./_hooks/useRegister";

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

const SignUp = () => {
  const { mutateAsync: register, isPending } = useRegister();

  const loginSchema = Yup.object().shape({
    name: Yup.string().required("Name is required").min(3),
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
                  <div className='font-bold text-2xl'>Sign Up</div>
                </div>
              </CardHeader>
              <CardContent>
                <Formik
                  initialValues={{ name: '', email: '', password: '' }}
                  validationSchema={loginSchema}
                  onSubmit={async (values) => {
                    await register(values);
                  }}
                >
                  <Form>
                    <div className='flex flex-col gap-2'>
                      <div className='grid gap-2'>
                        <Label htmlFor='name'>Email Address</Label>
                        <Field
                          name='name'
                          as={Input}
                          type='text'
                          placeholder='Your Name'
                          required
                          className='bg-white'
                        />
                        <ErrorMessage
                          name='name'
                          component='div'
                          className='text-red-500 text-sm'
                        />
                      </div>
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
                      <div className='grid gap-2'>
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
                    </div>
                    <Button
                      type='submit'
                      disabled={isPending}
                      className='w-full mt-5 hover:bg-neutral-700 active:bg-black'
                    >
                      {isPending ? (
                        <Loader className='animate-spin' />
                      ) : (
                        'Register'
                      )}
                    </Button>
                  </Form>
                </Formik>
              </CardContent>
              <CardFooter className='flex-col'>
                <div className='flex mr-auto gap-2 mt-2'>
                  <p className='text-sm text-gray-600'>
                    Already have an account?
                  </p>
                  <Link href={'/sign-in'} className='text-sm font-bold'>
                    Sign In
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

export default SignUp;
