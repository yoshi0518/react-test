import { Routes, Route } from 'react-router-dom';
import LayoutDefault from './leyouts';
import Home from './routes/Home';
import Props from './routes/Props';
import Posts from './routes/Posts';
import PostIndex from './routes/PostIndex';
import Post from './routes/Post';
import NoMatch from './routes/Nomatch';
import './App.css';

const App = () => {
  return (
    <div>
      <h1>React Router v6</h1>
      <Routes>
        <Route element={<LayoutDefault />}>
          <Route path="/" element={<Home />} />
          <Route path="/props" element={<Props message="Hello Props" />} />
          <Route path="/posts" element={<Posts />}>
            <Route index element={<PostIndex />} />
            <Route path=":postId" element={<Post />} />
          </Route>
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
};

export default App;
