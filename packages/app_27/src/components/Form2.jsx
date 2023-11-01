import { useForm } from 'react-hook-form';

const Form2 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    getValues,
    watch,
  } = useForm({ criteriaMode: 'all', defaultValues: { email: 'test@example.com', password: '1234' } });

  const onSubmit = (data) => {
    console.log({ data });
  };

  return (
    <>
      <h1>useFormによるForm</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">Email：</label>
          <input
            id="email"
            {...register('email', {
              required: {
                value: true,
                message: '必須項目です',
              },
              minLength: {
                value: 8,
                message: '8文字以上入力してください',
              },
            })}
          />
          {errors.email && <div>{errors.email.message}</div>}
        </div>
        <div>
          <label htmlFor="password">パスワード：</label>
          <input id="password" type="password" {...register('password')} />
        </div>
        <div>
          <button type="submit" disabled={!isDirty}>
            ログイン
          </button>
        </div>
        <div>
          <p>getValues：{getValues('email')}</p>
          <p>watch：{watch('email')}</p>
        </div>
      </form>
    </>
  );
};

export default Form2;
