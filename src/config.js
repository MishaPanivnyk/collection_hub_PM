const CONFIG = {
  // General
  name: 'Misha',
  imageBackground: false,
  openInNewTab: true,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: 'Good morning!',
  greetingAfternoon: 'Good afternoon,',
  greetingEvening: 'Good evening,',
  greetingNight: 'Go to Sleep!',

  // Layout
  bentoLayout: 'bento',

  // Weather
  weatherKey: '5c8709ff03ca48a1a8591e3c79b130d8',
  weatherIcons: 'OneDark',
  weatherUnit: 'C',
  lang: 'en',

  trackLocation: true,
  defaultLatitude: '50.447731',
  defaultLongitude: '30.542721',

  // Autochange
  autoChangeTheme: true,

  // Autochange by OS
  changeThemeByOS: true,

  changeThemeByHour: true,
  hourDarkThemeActive: '18:30',
  hourDarkThemeInactive: '07:00',

  firstButtonsContainer: [
    {
      id: '1',
      name: 'file-search',
      icon: 'file-search',
      link: 'https://mishapanivnyk.github.io/goit-js-hw-11/',
    },
    {
      id: '2',
      name: 'Todolist',
      icon: 'list-checks',
      link: '',
    },
    {
      id: '3',
      name: 'Calculator',
      icon: 'calculator',
      link: 'https://mishapanivnyk.github.io/calculator/',
    },
    {
      id: '4',
      name: 'Calendar',
      icon: 'calendar-days',
      link: 'https://calendarpm.netlify.app/',
    },
    {
      id: '5',
      name: 'Music-player',
      icon: 'music',
      link: '',
    },
  ],

  firstlistsContainer: [
    {
      icon: 'music',
      id: '1',
      links: [
        {
          name: 'Inspirational',
          link: 'https://youtu.be/pN6hirA6AUA',
        },
        {
          name: 'Classic',
          link: 'https://youtu.be/CrPtbFMAPmg',
        },
        {
          name: 'Oldies',
          link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        },
        {
          name: 'Bass',
          link: 'https://youtu.be/lsxbkTZIlyA',
        },
      ],
    },
    {
      icon: 'coffee',
      id: '2',
      links: [
        {
          name: 'Linkedin',
          link: 'https://www.linkedin.com/in/misha-panivnyk/',
        },
        {
          name: 'Telegram',
          link: 'https://t.me/Mishapanivnyk',
        },
        {
          name: 'Email',
          link: 'https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvnrmKvXzThTFbTsWzpMNbgKnrMvvDbHkTLpZCslCbrcpMtMTdVHtmsqDHszwjpqvZZlxq',
        },
        {
          name: 'Slack',
          link: 'https://www.slack.com',
        },
      ],
    },
  ],
};
