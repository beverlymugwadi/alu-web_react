// setupTests for task_5: configure Enzyme adapter if available
try {
  const Enzyme = require('enzyme');
  const Adapter = require('enzyme-adapter-react-16');
  Enzyme.configure({ adapter: new Adapter() });
  // expose shallow globally (tests may use it)
  global.shallow = Enzyme.shallow;
  global.mount = Enzyme.mount;
} catch (e) {
  // Enzyme or adapter may not be compatible; swallow error to keep tests running
  // keep silent if Enzyme is not available or incompatible
}
