import { store, setScreen } from './redux-store.js';
import { EPPZScrollTo } from './EPPZScrollTo.js';

const scrollKeyPossitions = [
  [
    {
      maxHeight: 285,
      offset: -437
    },
    {
      maxHeight: 378,
      offset: -361
    },
    {
      maxHeight: 462,
      offset: -322
    },
    {
      maxHeight: 595,
      offset: -252
    },
    {
      maxHeight: 728,
      offset: -189
    },
    {
      maxHeight: 855,
      offset: -102
    },
    {
      maxHeight: 900,
      offset: -46
    },
    {
      maxHeight: 'infinite',
      offset: 0
    }
  ],
  [
    {
      maxHeight: 840,
      offset: 38
    },
    {
      maxHeight: 'infinite',
      offset: 160
    }
  ],
  [
    {
      maxHeight: 600,
      offset: -197
    },
    {
      maxHeight: 660,
      offset: -152
    },
    {
      maxHeight: 730,
      offset: -122
    },
    {
      maxHeight: 850,
      offset: -91
    },
    {
      maxHeight: 960,
      offset: 0
    },
    {
      maxHeight: 'infinite',
      offset: 77
    }
  ],
  [
    {
      maxHeight: 670,
      offset: -441
    },
    {
      maxHeight: 765,
      offset: -396
    },
    {
      maxHeight: 950,
      offset: -324
    },
    {
      maxHeight: 'infinite',
      offset: -230
    }
  ],
  [
    {
      maxHeight: 'infinite',
      offset: 0
    }
  ],
];

const getScrollOffset = (screen) => {
  let offset = scrollKeyPossitions[screen][0].offset || 0;
  for (let offsets of scrollKeyPossitions[screen])
    if (offsets.maxHeight !== 'infinite' && offsets.maxHeight > document.body.clientHeight) {
      offset = offsets.offset;
      break;
    } else {
      offset = offsets.offset;
    }
  return offset;
}

const scrollHandler = (currentSection) => {
  if (!currentSection) {
    const scrollTop = window.pageYOffset;
    const sections = document.querySelectorAll('section');
    if (sections.length === 0)
      return;
    currentSection = sections[0];
    for (let section of sections) {
      if (scrollTop + document.body.offsetHeight * 3/4 > section.offsetTop) {
        currentSection = section;
      }
    }
  }
  const lastScreen = store.getState().screen;
  let offset = 0;
  switch (currentSection.id) {
    case 'name-section':
      setScreen(0);
      offset = getScrollOffset(0);
      break;
    case 'stack-section':
      setScreen(1);
      offset = getScrollOffset(1);
      break;
    case 'projects-section':
      setScreen(2);
      offset = getScrollOffset(2);
      break;
    case 'person-section':
      setScreen(3);
      offset = getScrollOffset(3);
      break;
    case 'messenger-section':
      setScreen(4);
      offset = getScrollOffset(4);
      break;
  }
  if (lastScreen !== store.getState().screen && currentSection.id && store.getState().scrollReactions) {
    console.log('scroll to #' + currentSection.id + ' with offset ' + offset);
    EPPZScrollTo.scrollVerticalToElementById(currentSection.id, offset);
  }
}
setTimeout(() => scrollHandler(document.querySelector('#name-section')), 0);
export { scrollHandler };