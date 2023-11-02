import './Button.css';

type Props = {
  children: React.ReactNode;
  color?: 'default' | 'primary' | 'danger';
  size?: 'base' | 'small' | 'large';
  onClick?: () => void;
};

const Button = ({ children, color = 'default', size = 'base', onClick = () => console.log('click') }: Props) => {
  return (
    <button className={`${color} ${size}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
