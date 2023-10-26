import Tooltip from './components/Tooltip';
import Content from './components/Content';

const App = () => {
  return (
    <div>
      <h1>Reactで初めてのTooltip実装</h1>
      <div style={{ width: '500px', margin: '0 auto' }}>
        <Tooltip content={<Content />} location="right">
          <button>Tooltip</button>
        </Tooltip>
        <div>ここから文書は続きます</div>
      </div>
    </div>
  );
};

export default App;
