import { List, Map, fromJS } from 'immutable';

export function mergeDeeplyElements(page1, page2) {
  return List(fromJS(page1).mergeDeep(fromJS(page2)).values());
}
