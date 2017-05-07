import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import DevTools from 'containers/DevTools';
import configureStore from './CreateStore';

jest.mock('redux', () => ({
  createStore: jest.fn(() => 'mockCreateStore'),
  compose: jest.fn(() => 'mockCompose'),
  applyMiddleware: jest.fn(() => 'applyMiddleware'),
}));
jest.mock('containers/DevTools', () => ({
  instrument: jest.fn(() => 'mockInstrument'),
}));
jest.mock('redux-thunk', () => 'redux-thunk');

describe('CreateStore', () => {
  describe('development mode', () => {
    beforeEach(() => {
      process.env.NODE_ENV = 'development';
    });

    it('should instrument the DevTools', () => {
      const mockRootReducer = {};
      const store = configureStore(mockRootReducer);
      expect(DevTools.instrument).toHaveBeenCalled();
      expect(createStore).toHaveBeenCalledWith(mockRootReducer, 'mockCompose');
      expect(store).toBe('mockCreateStore');
    });
  });

  describe('production mode', () => {
    it('should create the store and return it', () => {
      const mockRootReducer = {};
      const store = createStore(mockRootReducer);
      expect(createStore).toHaveBeenCalled();
      expect(store).toBe('mockCreateStore');
    });
  });

  describe('middlewares', () => {
    it('should apply the thunk middlewares', () => {
      const mockRootReducer = {};
      createStore(mockRootReducer);
      expect(applyMiddleware).toHaveBeenCalledWith(thunk);
    });
  });
});
