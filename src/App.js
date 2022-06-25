// import logo from './logo.svg';
import './App.css';
import {Axios, GlobalAnimation, SelfLoading} from  '../src/components/Axios'

const loadingBox = {
  position: 'relative',
  width: '200px',
  height: '200px',
}

function App() {
  return (
    <div className="App">
      <Axios/>
      <h3>全局loading样式（版本2.1.12配置）, count建议在5-20，time -10s，  默认颜色#333333, 大小固100px，下个版本修复</h3>
      <div style={loadingBox}>
        <GlobalAnimation/>
      </div>
      <div style={loadingBox}>
        <SelfLoading/>
      </div>
     
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
        </p>
      </header>
    </div>
  );
}

export default App;
