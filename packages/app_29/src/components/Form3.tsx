import { useForm, SubmitHandler } from 'react-hook-form';

type FormData = {
  email: string;
  password: string;
};

const Form1 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid, submitCount },
    trigger,
    reset,
    getValues,
  } = useForm<FormData>({
    defaultValues: { email: 'example', password: '' },
  });
  const onSubmit: SubmitHandler<FormData> = (data) => console.log({ ...data });

  return (
    <>
      <h1>Form(React Hook Form、その他)</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email3">Email：</label>
          <input
            id="email3"
            {...register('email', {
              required: {
                value: true,
                message: '必須項目です',
              },
            })}
          />
          {errors.email && <div>{errors.email.message}</div>}
        </div>
        <div>
          <label htmlFor="password3">Password：</label>
          <input
            id="password3"
            type="password"
            {...register('password', {
              required: {
                value: true,
                message: '必須項目です',
              },
              minLength: {
                value: 8,
                message: '8文字以上入力してください',
              },
              pattern: {
                value: /^[A-Za-z]+$/,
                message: 'アルファベットのみ入力してください。',
              },
            })}
          />
          {errors.password && <div>{errors.password.message}</div>}
        </div>
        <div>
          <button type="submit" disabled={!isDirty || !isValid}>
            ログイン
          </button>
        </div>
        <div>
          {/* 手動でバリデーションを実行 */}
          <button onClick={() => trigger()}>バリデーション</button>
        </div>
        <div>
          {/* 初期値に戻す */}
          <button onClick={() => reset()}>リセット</button>
        </div>
        <div>SubmitCount：{submitCount}</div>
        <div>getValues：{`Email：${getValues('email')} Password：${getValues('password')}`}</div>
      </form>
    </>
  );
};

export default Form1;
