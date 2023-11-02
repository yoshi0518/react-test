import { useForm, SubmitHandler } from 'react-hook-form';
import * as z from 'zod';

const loginSchema = z.object({
  email: z
    .string()
    .email({ message: 'メールアドレスの形式ではありません' })
    .min(1, { message: '1文字以上入力する必要があります' }),
  password: z.string().min(1, { message: '1文字以上入力する必要があります' }),
});

type typeLogin = z.infer<typeof loginSchema>;

const Form1 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<typeLogin>({ mode: 'onChange' });
  const onSubmit: SubmitHandler<typeLogin> = (data) => console.log({ ...data });

  return (
    <>
      <h1>Form(React Hook Form＋Zod)</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email4">Email：</label>
          <input id="email4" {...register('email')} />
          {errors.email && <div>{errors.email.message}</div>}
        </div>
        <div>
          <label htmlFor="password4">Password：</label>
          <input id="password4" type="password" {...register('password')} />
          {errors.password && <div>{errors.password.message}</div>}
        </div>
        <div>
          <button type="submit" disabled={!isDirty || !isValid}>
            ログイン
          </button>
        </div>
      </form>
    </>
  );
};

export default Form1;
