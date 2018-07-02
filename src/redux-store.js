import { createStore } from 'redux'

const setScreen = (screen) =>
  store.dispatch({
    type: 'CHANGE_SCREEN',
    screen
  });
const setMsgStatus = (status) =>
  store.dispatch({
    type: 'CHANGE_MSG_STATUS',
    status
  });
const openPic = (imageID) =>
  store.dispatch({
    type: 'OPEN_IMAGE',
    image: imageID
  });
const setScrollReactions = (enabled) =>
  store.dispatch({
    type: 'CHANGE_SCROLL_REACTIONS',
    scrollReactions: enabled
  });

const reducer = (state={screen: -1, openedImage: '', msgStatus: 'empty', scrollReactions: true}, action) => {
  switch (action.type) {
    case 'CHANGE_SCREEN':
      return {screen: action.screen, openedImage: state.openedImage, msgStatus: state.msgStatus, scrollReactions: state.scrollReactions};
    case 'OPEN_IMAGE':
      return {screen: state.screen, openedImage: action.image, msgStatus: state.msgStatus, scrollReactions: state.scrollReactions};
    case 'CHANGE_MSG_STATUS':
      return {screen: state.screen, openedImage: state.openedImage, msgStatus: action.status, scrollReactions: state.scrollReactions};
    case 'CHANGE_SCROLL_REACTIONS':
      return {screen: state.screen, openedImage: state.openedImage, msgStatus: state.msgStatus, scrollReactions: action.scrollReactions};
  }
  return state;
}

const store = createStore(reducer);

export {setScreen, openPic, setMsgStatus, setScrollReactions, store};