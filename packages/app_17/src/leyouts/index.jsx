import {
  Link,
  NavLink,
  useResolvedPath,
  useMatch,
  Outlet,
  useLocation,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';

const CustomLink = ({ children, to }) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link style={{ color: match ? 'skyblue' : '' }} to={to}>
        {children}
      </Link>
    </div>
  );
};

const LayoutDefault = () => {
  const navigate = useNavigate();
  const [, setSearchParams] = useSearchParams();

  console.log({ useLocation: useLocation() });

  return (
    <>
      <h1>Layout</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              // 対象のURLの場合、isActive=trueとなる
              console.log({ isActive });
              return isActive ? { color: 'red' } : undefined;
            }}
            to="/"
          >
            Home(NavLink＋style)
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)} to="/">
            Home(NavLink＋class)
          </NavLink>
        </li>
        <li>
          <CustomLink to="/">Home(CustomLink)</CustomLink>
        </li>
        <li>
          <NavLink
            to={{
              pathname: '/',
              search: '?hello=world&foo=bar',
            }}
            state={{
              hello: 'world',
              foo: 'bar',
            }}
          >
            Home(search・state)
          </NavLink>
        </li>
        <li>
          <Link to="/props">Props渡し</Link>
        </li>
        <li>
          <Link to="/posts">ネスト化</Link>
        </li>
      </ul>
      <div>
        <div>
          <span>関数でNavigate</span>
          <button onClick={() => navigate('/')}>Click</button>
        </div>
        <div>
          <span>search・state</span>
          <button
            onClick={() =>
              navigate('/?hello=world&foo=bar', {
                state: {
                  hello: 'world',
                  foo: 'bar',
                },
              })
            }
          >
            Click
          </button>
        </div>
        <div>
          <span>クエリパラメータ変更</span>
          <button onClick={() => setSearchParams({ yyy: 'zzz' })}>Click</button>
        </div>
      </div>
      <h1>Content</h1>
      <Outlet />
    </>
  );
};

export default LayoutDefault;
