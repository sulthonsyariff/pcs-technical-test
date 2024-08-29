
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { 
  faClock,
  faClockRotateLeft,
  faHouseChimney,
  faReceipt,
  faGear,
  faRightFromBracket,
  faArrowLeft,
  faCheck,
  faX,
  faRightLong
} from '@fortawesome/free-solid-svg-icons';

import { 
  faBell as farBell,
  faClock as farClock,
  faCalendarCheck as farCalendarCheck
} from '@fortawesome/free-regular-svg-icons';

const solidIcons = [
  faClock,
  faClockRotateLeft,
  faHouseChimney,
  faReceipt,
  faGear,
  faRightFromBracket,
  faArrowLeft,
  faCheck,
  faX,
  faRightLong
];

const regularIcons = [
  farBell,
  farClock,
  farCalendarCheck
];

/* add icons to the library */
library.add(
  ...solidIcons,
  ...regularIcons
);

export default FontAwesomeIcon;