import { useForm, SubmitHandler } from 'react-hook-form';

type FormData = {
  email: string;
  password: string;
};

const Form1 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    trigger,
  } = useForm<FormData>({
    // mode: 'onChange', // バリデーションタイミング
    // reValidateMode: 'onSubmit', // 2回目以降のバリデーションタイミング
    criteriaMode: 'all', // 複数のバリデーション結果を取得
  });
  const onSubmit: SubmitHandler<FormData> = (data) => console.log({ ...data });

  return (
    <>
      <h1>Form(React Hook Form)</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email2">Email：</label>
          <input
            id="email2"
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
          <label htmlFor="password2">Password：</label>
          <input
            id="password2"
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
          <button type="submit" disabled={!isDirty}>
            ログイン
          </button>
        </div>
        <div>
          {/* 手動でバリデーションを実行 */}
          <button onClick={() => trigger()}>バリデーション</button>
        </div>
      </form>
    </>
  );
};

export default Form1;
