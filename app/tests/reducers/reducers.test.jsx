var expect = require('expect');
var df     = require('deep-freeze-strict');

// df = Deep Freeze allow reducers modify arguments
// reducers are pure functions

var reducers = require('reducers');

describe('Reducers', () => {

  describe('searchTextReducer', () => {

    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };
      var res = reducers.searchTextReducer(df(''), df(action));
      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {

    it('should toggle showCompleted', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED',
      };
      var res = reducers.showCompletedReducer(df(false), df(action));
      expect(res).toEqual(true);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        text: 'Walk the dog'
      };
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    });

    it('should toggle todo', () => {
      var action = {
        type: 'TOGGLE_TODO',
        id:   1
      }
      var todos = [
        {
          id: 1,
          text: 'Fix my bike',
          completed: false,
          createdAt: 0,
          completedAt: undefined
        }, {
          id: 2,
          text: 'Make the best',
          completed: false,
          createdAt: 0,
          completedAt: undefined
        }
      ];
      var res = reducers.todosReducer( df(todos), df(action) );

      expect(res.length).toEqual(2);
      expect(res[0].completed).toEqual(true);
      expect(res[0].completedAt).toNotEqual(undefined);
    });
  });

});
