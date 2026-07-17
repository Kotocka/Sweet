/**************** 
 * Sweet_T *
 ****************/


// store info about the experiment session:
let expName = 'sweet_t';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(assignmentRoutineBegin());
flowScheduler.add(assignmentRoutineEachFrame());
flowScheduler.add(assignmentRoutineEnd());
flowScheduler.add(welcome_1RoutineBegin());
flowScheduler.add(welcome_1RoutineEachFrame());
flowScheduler.add(welcome_1RoutineEnd());
flowScheduler.add(welcome_2RoutineBegin());
flowScheduler.add(welcome_2RoutineEachFrame());
flowScheduler.add(welcome_2RoutineEnd());
flowScheduler.add(welcome_3RoutineBegin());
flowScheduler.add(welcome_3RoutineEachFrame());
flowScheduler.add(welcome_3RoutineEnd());
flowScheduler.add(welcome_4RoutineBegin());
flowScheduler.add(welcome_4RoutineEachFrame());
flowScheduler.add(welcome_4RoutineEnd());
flowScheduler.add(beforeRoutineBegin());
flowScheduler.add(beforeRoutineEachFrame());
flowScheduler.add(beforeRoutineEnd());
flowScheduler.add(videoRoutineBegin());
flowScheduler.add(videoRoutineEachFrame());
flowScheduler.add(videoRoutineEnd());
flowScheduler.add(after_allRoutineBegin());
flowScheduler.add(after_allRoutineEachFrame());
flowScheduler.add(after_allRoutineEnd());
flowScheduler.add(after_alllRoutineBegin());
flowScheduler.add(after_alllRoutineEachFrame());
flowScheduler.add(after_alllRoutineEnd());
flowScheduler.add(after_allllRoutineBegin());
flowScheduler.add(after_allllRoutineEachFrame());
flowScheduler.add(after_allllRoutineEnd());
flowScheduler.add(open_responseRoutineBegin());
flowScheduler.add(open_responseRoutineEachFrame());
flowScheduler.add(open_responseRoutineEnd());
flowScheduler.add(debrief_group_1RoutineBegin());
flowScheduler.add(debrief_group_1RoutineEachFrame());
flowScheduler.add(debrief_group_1RoutineEnd());
flowScheduler.add(debrief_group_2RoutineBegin());
flowScheduler.add(debrief_group_2RoutineEachFrame());
flowScheduler.add(debrief_group_2RoutineEnd());
flowScheduler.add(debrief_group_3RoutineBegin());
flowScheduler.add(debrief_group_3RoutineEachFrame());
flowScheduler.add(debrief_group_3RoutineEnd());
flowScheduler.add(thanxRoutineBegin());
flowScheduler.add(thanxRoutineEachFrame());
flowScheduler.add(thanxRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

if (psychoJS.serverManager && psychoJS.serverManager._preloadQueue) {
  psychoJS.serverManager._preloadQueue.loadTimeout = 600000;
}

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: []
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2026.1.3';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var assignmentClock;
var condition;
var welcome_1Clock;
var welcome;
var key_resp_4;
var welcome_2Clock;
var welcome_5;
var key_resp_3;
var welcome_3Clock;
var welcome_6;
var key_resp_2;
var welcome_4Clock;
var welcome_7;
var key_resp;
var beforeClock;
var before_title;
var question_relaxation;
var baseline_relaxation;
var question_curiosity;
var baseline_curiosity;
var start_viewing_button;
var videoClock;
var filmClock;
var film;
var kinescopeEnded;
var kinescopePlayer;
var kinescopeFallbackHandler;
var KINESCOPE_VIDEO_URL = 'https://kinescope.io/vgBf24eNiMP3WitUU6SrnP';
var KINESCOPE_EMBED_URL = 'https://kinescope.io/embed/vgBf24eNiMP3WitUU6SrnP';


function loadKinescopeFactory() {
  if (window.Kinescope && window.Kinescope.IframePlayer) {
    return Promise.resolve(window.Kinescope.IframePlayer);
  }
  return new Promise(function (resolve, reject) {
    var existing = document.querySelector('script[data-kinescope-api]');
    if (existing) {
      existing.addEventListener('load', function () { resolve(window.Kinescope.IframePlayer); });
      existing.addEventListener('error', reject);
      return;
    }
    var script = document.createElement('script');
    script.src = 'https://player.kinescope.io/latest/iframe.player.js';
    script.async = true;
    script.dataset.kinescopeApi = '1';
    script.onload = function () { resolve(window.Kinescope.IframePlayer); };
    script.onerror = reject;
    document.head.appendChild(script);
  });
}


function isKinescopeEndedMessage(event) {
  if (!event || !event.origin || String(event.origin).indexOf('kinescope') === -1) {
    return false;
  }
  var data = event.data;
  if (!data) {
    return false;
  }
  var raw = typeof data === 'string' ? data : JSON.stringify(data);
  return /ended|complete/i.test(raw);
}


async function startKinescopeFilm() {
  kinescopeEnded = false;
  kinescopePlayer = null;

  var wrap = document.getElementById('kinescope-wrap');
  if (wrap) {
    wrap.remove();
  }

  wrap = document.createElement('div');
  wrap.id = 'kinescope-wrap';
  wrap.style.cssText = 'position:fixed;inset:0;z-index:10000;background:#000;';
  var host = document.createElement('div');
  host.id = 'kinescope-host';
  host.style.cssText = 'width:100%;height:100%;';
  wrap.appendChild(host);
  document.body.appendChild(wrap);

  kinescopeFallbackHandler = function (event) {
    if (isKinescopeEndedMessage(event)) {
      kinescopeEnded = true;
    }
  };
  window.addEventListener('message', kinescopeFallbackHandler);

  try {
    var factory = await loadKinescopeFactory();
    kinescopePlayer = await factory.create('kinescope-host', {
      url: KINESCOPE_VIDEO_URL,
      size: {width: '100%', height: '100%'},
      behavior: {
        autoPlay: true,
        playsInline: true,
        keyboard: false,
        localStorage: false,
        loop: false,
      },
    });
    kinescopePlayer.on(kinescopePlayer.Events.Ended, function () {
      kinescopeEnded = true;
    });
  } catch (err) {
    console.error('Kinescope API failed, falling back to plain iframe', err);
    host.innerHTML = '';
    var iframe = document.createElement('iframe');
    iframe.src = KINESCOPE_EMBED_URL;
    iframe.allow = 'autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write; screen-wake-lock';
    iframe.setAttribute('allowfullscreen', 'true');
    iframe.style.cssText = 'border:0;width:100%;height:100%;';
    host.appendChild(iframe);
  }
}


async function stopKinescopeFilm() {
  if (kinescopeFallbackHandler) {
    window.removeEventListener('message', kinescopeFallbackHandler);
    kinescopeFallbackHandler = null;
  }
  try {
    if (kinescopePlayer && typeof kinescopePlayer.destroy === 'function') {
      await kinescopePlayer.destroy();
    }
  } catch (err) {
    console.warn('Kinescope destroy error', err);
  }
  kinescopePlayer = null;
  var wrapEl = document.getElementById('kinescope-wrap');
  if (wrapEl) {
    wrapEl.remove();
  }
}


var after_allClock;
var save;
var after_title_2;
var question_time;
var baseline_time;
var question_self;
var baseline_self;
var after_alllClock;
var save_2;
var after_title;
var question_connectedness;
var baseline_connectedness;
var question_accomodation;
var baseline_accomodation;
var after_allllClock;
var save_3;
var after_title_3;
var question_body;
var baseline_body;
var question_understanding;
var baseline_understanding;
var open_responseClock;
var save_4;
var open_question;
var open_response_text;
var debrief_group_1Clock;
var debrief_title_1;
var reappraisal_group_1;
var save_5;
var debrief_group_2Clock;
var debrief_title;
var reappraisal_group_2;
var save_6;
var debrief_group_3Clock;
var debrief_title_2;
var reappraisal_group;
var save_7;
var thanxClock;
var finish;
var thank_text;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "assignment"
  assignmentClock = new util.Clock();
  // Run 'Begin Experiment' code from condition_assignment
  condition = Math.floor(Math.random() * 4) + 1;
  psychoJS.experiment.addData("condition", condition);
  // Initialize components for Routine "welcome_1"
  welcome_1Clock = new util.Clock();
  welcome = new visual.TextStim({
    win: psychoJS.window,
    name: 'welcome',
    text: 'Thank you for your time and interest.\nThis study explores how people experience a work of art.\nYou will watch a 30-minute film. The film cannot be paused or rewound, so please make sure you have enough uninterrupted time.\nBefore the film, you will answer two short questions. After the film, you will answer several more.\nThere are no right or wrong answers. Please respond based on your own experience.\nPress SPACE to proceed\n\nСпасибо за ваше время и интерес.\nЭто исследование посвящено восприятию художественного произведения.\nВам будет предложено посмотреть 30-минутный фильм. Его нельзя будет остановить или перемотать, поэтому убедитесь, что у вас есть достаточно времени без перерыва.\nПеред фильмом вам нужно будет ответить на два коротких вопроса, а после — ещё на несколько.\nЗдесь нет правильных или неправильных ответов. Пожалуйста, отвечайте, опираясь на собственное переживание.\nЧтобы продолжить, нажмите ПРОБЕЛ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "welcome_2"
  welcome_2Clock = new util.Clock();
  welcome_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'welcome_5',
    text: 'Thank you for your time and interest.\nThis study explores how people experience a work of art.\nYou will watch a 30-minute film. The film cannot be paused or rewound, so please make sure you have enough uninterrupted time.\nBefore the film, you will answer two short questions. After the film, you will answer several more.\nThere are no right or wrong answers. Please respond based on your own experience.\n\nThe film was assembled using a process sometimes described as “fatal editing”: the visual and sound samples were placed on the timeline largely at random. Their first arrangement was kept almost unchanged, as though the material had organised itself with minimal intervention from the artist.\nPress SPACE to proceed\n\nСпасибо за ваше время и интерес.\nЭто исследование посвящено восприятию художественного произведения.\nВам будет предложено посмотреть 30-минутный фильм. Его нельзя будет остановить или перемотать, поэтому убедитесь, что у вас есть достаточно времени без перерыва.\nПеред фильмом вам нужно будет ответить на два коротких вопроса, а после — ещё на несколько.\nЗдесь нет правильных или неправильных ответов. Пожалуйста, отвечайте, опираясь на собственное переживание.\n\nФильм был собран с помощью процесса, который иногда называют «фатальным монтажом»: визуальные и звуковые фрагменты были размещены на таймлайне случайным образом. Их первая композиция была сохранена почти без изменений — словно материал сам организовал себя при минимальном вмешательстве художника.\nЧтобы продолжить, нажмите ПРОБЕЛ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "welcome_3"
  welcome_3Clock = new util.Clock();
  welcome_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'welcome_6',
    text: 'Thank you for your time and interest.\nThis study explores how people experience a work of art.\nYou will watch a 30-minute film. The film cannot be paused or rewound, so please make sure you have enough uninterrupted time.\nBefore the film, you will answer two short questions. After the film, you will answer several more.\nThere are no right or wrong answers. Please respond based on your own experience.\n\nThe film is based on material recorded in real places and circumstances: the winter forest footage was filmed during a search for a missing person who was later found dead. The soundtrack includes an improvisation with an organist in a Lutheran church, crows in a Bosnian park, birds in Einstein’s Garden in Berlin, and the voices of visitors at an evening of Greek songs.\nPress SPACE to proceed\n\nСпасибо за ваше время и интерес.\nЭто исследование посвящено восприятию художественного произведения.\nВам будет предложено посмотреть 30-минутный фильм. Его нельзя будет остановить или перемотать, поэтому убедитесь, что у вас есть достаточно времени без перерыва.\nПеред фильмом вам нужно будет ответить на два коротких вопроса, а после — ещё на несколько.\nЗдесь нет правильных или неправильных ответов. Пожалуйста, отвечайте, опираясь на собственное переживание.\n\nФильм основан на материале, записанном в реальных местах и обстоятельствах: кадры зимнего леса были сняты во время поисков пропавшего человека, которого позже найдут мёртвым. В звуковой ряд вошли импровизация с органистом в лютеранской церкви, вороны в боснийском парке, птицы в берлинском саду Эйнштейна и голоса посетителей вечера греческой песни.\nЧтобы продолжить, нажмите ПРОБЕЛ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "welcome_4"
  welcome_4Clock = new util.Clock();
  welcome_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'welcome_7',
    text: 'Thank you for your time and interest.\nThis study explores how people experience a work of art.\nYou will watch a 30-minute film. The film cannot be paused or rewound, so please make sure you have enough uninterrupted time.\nBefore the film, you will answer two short questions. After the film, you will answer several more.\nThere are no right or wrong answers. Please respond based on your own experience.\n\nThe film is based on material recorded in real places and circumstances: the winter forest footage was filmed during a search for a missing person who was later found dead. The soundtrack includes an improvisation with an organist in a Lutheran church, crows in a Bosnian park, birds in Einstein’s Garden in Berlin, and the voices of visitors at an evening of Greek songs.\nThe film was assembled using a process sometimes described as “fatal editing”: the visual and sound samples were placed on the timeline largely at random. Their first arrangement was kept almost unchanged, as though the material had organised itself with minimal intervention from the artist.\nPress SPACE to proceed\n\nСпасибо за ваше время и интерес.\nЭто исследование посвящено восприятию художественного произведения.\nВам будет предложено посмотреть 30-минутный фильм. Его нельзя будет остановить или перемотать, поэтому убедитесь, что у вас есть достаточно времени без перерыва.\nПеред фильмом вам нужно будет ответить на два коротких вопроса, а после — ещё на несколько.\nЗдесь нет правильных или неправильных ответов. Пожалуйста, отвечайте, опираясь на собственное переживание.\n\nФильм основан на материале, записанном в реальных местах и обстоятельствах: кадры зимнего леса были сняты во время поисков пропавшего человека, которого позже найдут мёртвым. В звуковой ряд вошли импровизация с органистом в лютеранской церкви, вороны в боснийском парке, птицы в берлинском саду Эйнштейна и голоса посетителей вечера греческой песни.\nФильм был собран с помощью процесса, который иногда называют «фатальным монтажом»: визуальные и звуковые фрагменты были размещены на таймлайне случайным образом. Их первая композиция была сохранена почти без изменений — словно материал сам организовал себя при минимальном вмешательстве художника.\nЧтобы продолжить, нажмите ПРОБЕЛ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "before"
  beforeClock = new util.Clock();
  before_title = new visual.TextStim({
    win: psychoJS.window,
    name: 'before_title',
    text: 'Please answer two short questions before watching the film. \nПожалуйста, ответьте на два коротких вопроса перед просмотром.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.41], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  question_relaxation = new visual.TextStim({
    win: psychoJS.window,
    name: 'question_relaxation',
    text: 'How tense or relaxed do you feel right now?\nНасколько напряжённо или расслабленно вы чувствуете себя сейчас?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.26], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  baseline_relaxation = new visual.Slider({
    win: psychoJS.window, name: 'baseline_relaxation',
    startValue: undefined,
    size: [1.2, 0.06], pos: [0, 0.13], ori: 0.0, units: psychoJS.window.units,
    labels: ["Very tense / \u041e\u0447\u0435\u043d\u044c \u043d\u0430\u043f\u0440\u044f\u0436\u0451\u043d\u043d\u043e", "Completely relaxed / \u041f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u0440\u0430\u0441\u0441\u043b\u0430\u0431\u043b\u0435\u043d\u043d\u043e"], fontSize: 0.02, ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Noto Sans', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  question_curiosity = new visual.TextStim({
    win: psychoJS.window,
    name: 'question_curiosity',
    text: 'During the past week, how often did you stop to take a closer look at something that caught your attention?\nКак часто за последнюю неделю вы останавливались, чтобы внимательнее присмотреться к тому, что привлекло ваше внимание?',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.1)], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  baseline_curiosity = new visual.Slider({
    win: psychoJS.window, name: 'baseline_curiosity',
    startValue: undefined,
    size: [1.2, 0.06], pos: [0, (- 0.23)], ori: 0.0, units: psychoJS.window.units,
    labels: ["Never  /  \u041d\u0438 \u0440\u0430\u0437\u0443", "Every day /  \u041a\u0430\u0436\u0434\u044b\u0439 \u0434\u0435\u043d\u044c"], fontSize: 0.02, ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Noto Sans', bold: true, italic: false, depth: -4, 
    flip: false,
  });
  
  start_viewing_button = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'start_viewing_button',
    text: 'Start viewing ',
    font: 'Arvo',
    pos: [0, (- 0.4)],
    size: [0.32, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -5,
    letterHeight: 0.02,
    bold: true,
    italic: false,
  });
  start_viewing_button.clock = new util.Clock();
  
  // Initialize components for Routine "video"
  videoClock = new util.Clock();
  filmClock = new util.Clock();
  film = {
    name: 'film',
    status: PsychoJS.Status.NOT_STARTED,
    setAutoDraw: function () {},
    play: function () {
      this.status = PsychoJS.Status.STARTED;
      return startKinescopeFilm();
    },
    stop: function () {
      var self = this;
      return stopKinescopeFilm().then(function () {
        self.status = PsychoJS.Status.FINISHED;
      });
    },
  };
  // Initialize components for Routine "after_all"
  after_allClock = new util.Clock();
  save = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'save',
    text: 'Save',
    font: 'Arvo',
    pos: [0, (- 0.4)],
    size: [0.32, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: 0,
    letterHeight: 0.02,
    bold: true,
    italic: false,
  });
  save.clock = new util.Clock();
  
  after_title_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'after_title_2',
    text: 'To what extent would each statement describe your experience while watching the film?\nНасколько каждое из следующих утверждений описывает ваш опыт во время просмотра фильма?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.41], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  question_time = new visual.TextStim({
    win: psychoJS.window,
    name: 'question_time',
    text: 'My sense of time changed while watching the film.\nВо время просмотра фильма моё ощущение времени изменилось.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.26], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  baseline_time = new visual.Slider({
    win: psychoJS.window, name: 'baseline_time',
    startValue: undefined,
    size: [1.2, 0.06], pos: [0, 0.13], ori: 0.0, units: psychoJS.window.units,
    labels: ["Not at all / \u0421\u043e\u0432\u0441\u0435\u043c \u043d\u0435\u0442", "Very much / \u0412 \u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u0441\u0442\u0435\u043f\u0435\u043d\u0438"], fontSize: 0.02, ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Noto Sans', bold: true, italic: false, depth: -4, 
    flip: false,
  });
  
  question_self = new visual.TextStim({
    win: psychoJS.window,
    name: 'question_self',
    text: 'For a moment, my usual sense of myself faded into the background.\nВ какой-то момент моё привычное ощущение себя отошло на второй план.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.1)], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  baseline_self = new visual.Slider({
    win: psychoJS.window, name: 'baseline_self',
    startValue: undefined,
    size: [1.2, 0.06], pos: [0, (- 0.23)], ori: 0.0, units: psychoJS.window.units,
    labels: ["Not at all / \u0421\u043e\u0432\u0441\u0435\u043c \u043d\u0435\u0442", "Very much / \u0412 \u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u0441\u0442\u0435\u043f\u0435\u043d\u0438"], fontSize: 0.02, ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Noto Sans', bold: true, italic: false, depth: -6, 
    flip: false,
  });
  
  // Initialize components for Routine "after_alll"
  after_alllClock = new util.Clock();
  save_2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'save_2',
    text: 'Save',
    font: 'Arvo',
    pos: [0, (- 0.4)],
    size: [0.32, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: 0,
    letterHeight: 0.02,
    bold: true,
    italic: false,
  });
  save_2.clock = new util.Clock();
  
  after_title = new visual.TextStim({
    win: psychoJS.window,
    name: 'after_title',
    text: 'To what extent would each statement describe your experience while watching the film?\nНасколько каждое из следующих утверждений описывает ваш опыт во время просмотра фильма?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.41], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  question_connectedness = new visual.TextStim({
    win: psychoJS.window,
    name: 'question_connectedness',
    text: 'I felt connected to something larger than myself.\nЯ почувствовал(а) связь с чем-то большим, чем я сам(а).',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.26], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  baseline_connectedness = new visual.Slider({
    win: psychoJS.window, name: 'baseline_connectedness',
    startValue: undefined,
    size: [1.2, 0.06], pos: [0, 0.13], ori: 0.0, units: psychoJS.window.units,
    labels: ["Not at all / \u0421\u043e\u0432\u0441\u0435\u043c \u043d\u0435\u0442", "Very much / \u0412 \u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u0441\u0442\u0435\u043f\u0435\u043d\u0438"], fontSize: 0.02, ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Noto Sans', bold: true, italic: false, depth: -3, 
    flip: false,
  });
  
  question_accomodation = new visual.TextStim({
    win: psychoJS.window,
    name: 'question_accomodation',
    text: 'The experience felt larger than I could immediately make sense of.\nМне казалось, что происходящее больше, чем можно было сразу полностью понять.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.1)], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  baseline_accomodation = new visual.Slider({
    win: psychoJS.window, name: 'baseline_accomodation',
    startValue: undefined,
    size: [1.2, 0.06], pos: [0, (- 0.23)], ori: 0.0, units: psychoJS.window.units,
    labels: ["Not at all / \u0421\u043e\u0432\u0441\u0435\u043c \u043d\u0435\u0442", "Very much / \u0412 \u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u0441\u0442\u0435\u043f\u0435\u043d\u0438"], fontSize: 0.02, ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Noto Sans', bold: true, italic: false, depth: -5, 
    flip: false,
  });
  
  // Initialize components for Routine "after_allll"
  after_allllClock = new util.Clock();
  save_3 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'save_3',
    text: 'Save',
    font: 'Arvo',
    pos: [0, (- 0.4)],
    size: [0.32, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: 0,
    letterHeight: 0.02,
    bold: true,
    italic: false,
  });
  save_3.clock = new util.Clock();
  
  after_title_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'after_title_3',
    text: 'To what extent would each statement describe your experience while watching the film?\nНасколько каждое из следующих утверждений описывает ваш опыт во время просмотра фильма?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.41], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  question_body = new visual.TextStim({
    win: psychoJS.window,
    name: 'question_body',
    text: 'I noticed a physical response while watching (such as goosebumps, changes in breathing, warmth, chills, or muscle tension).\nВо время просмотра я заметил(а) у себя телесную реакцию (например, мурашки, изменение дыхания, ощущение тепла, холода или мышечного напряжения).',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.26], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  baseline_body = new visual.Slider({
    win: psychoJS.window, name: 'baseline_body',
    startValue: undefined,
    size: [1.2, 0.06], pos: [0, 0.13], ori: 0.0, units: psychoJS.window.units,
    labels: ["Not at all / \u0421\u043e\u0432\u0441\u0435\u043c \u043d\u0435\u0442", "Very much / \u0412 \u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u0441\u0442\u0435\u043f\u0435\u043d\u0438"], fontSize: 0.02, ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Noto Sans', bold: true, italic: false, depth: -4, 
    flip: false,
  });
  
  question_understanding = new visual.TextStim({
    win: psychoJS.window,
    name: 'question_understanding',
    text: 'Watching the film changed the way I understood what I was seeing.\nВо время просмотра изменилось моё понимание того, что я вижу.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.1)], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  baseline_understanding = new visual.Slider({
    win: psychoJS.window, name: 'baseline_understanding',
    startValue: undefined,
    size: [1.2, 0.06], pos: [0, (- 0.23)], ori: 0.0, units: psychoJS.window.units,
    labels: ["Not at all / \u0421\u043e\u0432\u0441\u0435\u043c \u043d\u0435\u0442", "Very much / \u0412 \u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u0441\u0442\u0435\u043f\u0435\u043d\u0438"], fontSize: 0.02, ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Noto Sans', bold: true, italic: false, depth: -6, 
    flip: false,
  });
  
  // Initialize components for Routine "open_response"
  open_responseClock = new util.Clock();
  save_4 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'save_4',
    text: 'Save',
    font: 'Arvo',
    pos: [0, (- 0.4)],
    size: [0.32, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: 0,
    letterHeight: 0.02,
    bold: true,
    italic: false,
  });
  save_4.clock = new util.Clock();
  
  open_question = new visual.TextStim({
    win: psychoJS.window,
    name: 'open_question',
    text: 'What, if anything, felt most significant to you while watching the film?\nБыло ли что-то, что во время просмотра казалось вам наиболее значимым?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.1], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  open_response_text = new visual.TextBox({
    win: psychoJS.window,
    name: 'open_response_text',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, (- 0.2)], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.5, 0.5],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  // Initialize components for Routine "debrief_group_1"
  debrief_group_1Clock = new util.Clock();
  debrief_title_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'debrief_title_1',
    text: 'Additional context / Дополнительный контекст\n\nThe film is based on material recorded in real places and circumstances: the winter forest footage was filmed during a search for a missing person who was later found dead. The soundtrack includes an improvisation with an organist in a Lutheran church, crows in a Bosnian park, birds in Einstein’s Garden in Berlin, and the voices of visitors at an evening of Greek songs.\nThe film was assembled using a process sometimes described as “fatal editing”: the visual and sound samples were placed on the timeline largely at random. Their first arrangement was kept almost unchanged, as though the material had organised itself with minimal intervention from the artist.\n\nTo what extent has this additional information changed the way you now perceive the film now?\n\nФильм основан на материале, записанном в реальных местах и обстоятельствах: кадры зимнего леса были сняты во время поисков пропавшего человека, которого позже найдут мёртвым. В звуковой ряд вошли импровизация с органистом в лютеранской церкви, вороны в боснийском парке, птицы в берлинском саду Эйнштейна и голоса посетителей вечера греческой песни.\nФильм был собран с помощью процесса, который иногда называют «фатальным монтажом»: визуальные и звуковые фрагменты были размещены на таймлайне случайным образом. Их первая композиция была сохранена почти без изменений — словно материал сам организовал себя при минимальном вмешательстве художника.\n\nНасколько эта дополнительная информация изменила то, как вы теперь воспринимаете фильм?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.1], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  reappraisal_group_1 = new visual.Slider({
    win: psychoJS.window, name: 'reappraisal_group_1',
    startValue: undefined,
    size: [1.2, 0.06], pos: [0, (- 0.23)], ori: 0.0, units: psychoJS.window.units,
    labels: ["Not at all / \u0421\u043e\u0432\u0441\u0435\u043c \u043d\u0435\u0442", "Completely / \u041f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u0438\u0437\u043c\u0435\u043d\u0438\u043b\u0430"], fontSize: 0.02, ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Noto Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  save_5 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'save_5',
    text: 'Save',
    font: 'Arvo',
    pos: [0, (- 0.4)],
    size: [0.32, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.02,
    bold: true,
    italic: false,
  });
  save_5.clock = new util.Clock();
  
  // Initialize components for Routine "debrief_group_2"
  debrief_group_2Clock = new util.Clock();
  debrief_title = new visual.TextStim({
    win: psychoJS.window,
    name: 'debrief_title',
    text: 'Additional context / Дополнительный контекст\n\nThe film is based on material recorded in real places and circumstances: the winter forest footage was filmed during a search for a missing person who was later found dead. The soundtrack includes an improvisation with an organist in a Lutheran church, crows in a Bosnian park, birds in Einstein’s Garden in Berlin, and the voices of visitors at an evening of Greek songs.\n\nTo what extent has this additional information changed the way you now perceive the film now?\n\nФильм основан на материале, записанном в реальных местах и обстоятельствах: кадры зимнего леса были сняты во время поисков пропавшего человека, которого позже найдут мёртвым. В звуковой ряд вошли импровизация с органистом в лютеранской церкви, вороны в боснийском парке, птицы в берлинском саду Эйнштейна и голоса посетителей вечера греческой песни.\n\nНасколько эта дополнительная информация изменила то, как вы теперь воспринимаете фильм?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.1], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  reappraisal_group_2 = new visual.Slider({
    win: psychoJS.window, name: 'reappraisal_group_2',
    startValue: undefined,
    size: [1.2, 0.06], pos: [0, (- 0.23)], ori: 0.0, units: psychoJS.window.units,
    labels: ["Not at all / \u0421\u043e\u0432\u0441\u0435\u043c \u043d\u0435\u0442", "Completely / \u041f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u0438\u0437\u043c\u0435\u043d\u0438\u043b\u0430"], fontSize: 0.02, ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Noto Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  save_6 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'save_6',
    text: 'Save',
    font: 'Arvo',
    pos: [0, (- 0.4)],
    size: [0.32, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.02,
    bold: true,
    italic: false,
  });
  save_6.clock = new util.Clock();
  
  // Initialize components for Routine "debrief_group_3"
  debrief_group_3Clock = new util.Clock();
  debrief_title_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'debrief_title_2',
    text: 'Additional context / Дополнительный контекст\n\nThe film was assembled using a process sometimes described as “fatal editing”: the visual and sound samples were placed on the timeline largely at random. Their first arrangement was kept almost unchanged, as though the material had organised itself with minimal intervention from the artist.\n\nTo what extent has this additional information changed the way you now perceive the film now?\n\nФильм был собран с помощью процесса, который иногда называют «фатальным монтажом»: визуальные и звуковые фрагменты были размещены на таймлайне случайным образом. Их первая композиция была сохранена почти без изменений — словно материал сам организовал себя при минимальном вмешательстве художника.\n\nНасколько эта дополнительная информация изменила то, как вы теперь воспринимаете фильм?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.1], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  reappraisal_group = new visual.Slider({
    win: psychoJS.window, name: 'reappraisal_group',
    startValue: undefined,
    size: [1.2, 0.06], pos: [0, (- 0.23)], ori: 0.0, units: psychoJS.window.units,
    labels: ["Not at all / \u0421\u043e\u0432\u0441\u0435\u043c \u043d\u0435\u0442", "Completely / \u041f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u0438\u0437\u043c\u0435\u043d\u0438\u043b\u0430"], fontSize: 0.02, ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Noto Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  save_7 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'save_7',
    text: 'Save',
    font: 'Arvo',
    pos: [0, (- 0.4)],
    size: [0.32, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.02,
    bold: true,
    italic: false,
  });
  save_7.clock = new util.Clock();
  
  // Initialize components for Routine "thanx"
  thanxClock = new util.Clock();
  finish = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'finish',
    text: 'Save',
    font: 'Arvo',
    pos: [0, (- 0.4)],
    size: [0.32, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: 0,
    letterHeight: 0.02,
    bold: true,
    italic: false,
  });
  finish.clock = new util.Clock();
  
  thank_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'thank_text',
    text: 'Thank you very much for your time and attention.\n\nYour responses have been saved. If you would like to receive information about the results of the study, you can save the contact details below.\n\nСпасибо большое за ваше время и внимание.\n\nВаши ответы сохранены. Если вы хотите получить информацию о результатах исследования, вы можете сохранить контактные данные ниже.\n\nmaggiproject@gmail.com',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.1], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var assignmentMaxDurationReached;
var assignmentMaxDuration;
var assignmentComponents;
function assignmentRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'assignment' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    assignmentClock.reset();
    routineTimer.reset();
    assignmentMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('assignment.started', globalClock.getTime());
    assignmentMaxDuration = null
    // keep track of which components have finished
    assignmentComponents = [];
    
    assignmentComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function assignmentRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'assignment' ---
    // get current time
    t = assignmentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    assignmentComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function assignmentRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'assignment' ---
    assignmentComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('assignment.stopped', globalClock.getTime());
    // the Routine "assignment" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var welcome_1MaxDurationReached;
var _key_resp_4_allKeys;
var welcome_1MaxDuration;
var welcome_1Components;
function welcome_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'welcome_1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    welcome_1Clock.reset();
    routineTimer.reset();
    welcome_1MaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from gate_welcome_1
    if (condition !== 1) {
        continueRoutine = false;
    }
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    psychoJS.experiment.addData('welcome_1.started', globalClock.getTime());
    welcome_1MaxDuration = null
    // keep track of which components have finished
    welcome_1Components = [];
    welcome_1Components.push(welcome);
    welcome_1Components.push(key_resp_4);
    
    welcome_1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function welcome_1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'welcome_1' ---
    // get current time
    t = welcome_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *welcome* updates
    if (t >= 0.0 && welcome.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welcome.tStart = t;  // (not accounting for frame time here)
      welcome.frameNStart = frameN;  // exact frame index
      
      welcome.setAutoDraw(true);
    }
    
    
    // if welcome is active this frame...
    if (welcome.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_4* updates
    if (t >= 0.0 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4.tStart = t;  // (not accounting for frame time here)
      key_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.clearEvents(); });
    }
    
    // if key_resp_4 is active this frame...
    if (key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_4.getKeys({
        keyList: typeof ['y','n','left','right','space'] === 'string' ? [['y','n','left','right','space']] : ['y','n','left','right','space'], 
        waitRelease: false
      });
      _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
      if (_key_resp_4_allKeys.length > 0) {
        key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
        key_resp_4.duration = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    welcome_1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function welcome_1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'welcome_1' ---
    welcome_1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('welcome_1.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_4.corr, level);
    }
    psychoJS.experiment.addData('key_resp_4.keys', key_resp_4.keys);
    if (typeof key_resp_4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_4.rt', key_resp_4.rt);
        psychoJS.experiment.addData('key_resp_4.duration', key_resp_4.duration);
        routineTimer.reset();
        }
    
    key_resp_4.stop();
    // the Routine "welcome_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var welcome_2MaxDurationReached;
var _key_resp_3_allKeys;
var welcome_2MaxDuration;
var welcome_2Components;
function welcome_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'welcome_2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    welcome_2Clock.reset();
    routineTimer.reset();
    welcome_2MaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from gate_welcome_2
    if (condition !== 2) {
        continueRoutine = false;
    }
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    psychoJS.experiment.addData('welcome_2.started', globalClock.getTime());
    welcome_2MaxDuration = null
    // keep track of which components have finished
    welcome_2Components = [];
    welcome_2Components.push(welcome_5);
    welcome_2Components.push(key_resp_3);
    
    welcome_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function welcome_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'welcome_2' ---
    // get current time
    t = welcome_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *welcome_5* updates
    if (t >= 0.0 && welcome_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welcome_5.tStart = t;  // (not accounting for frame time here)
      welcome_5.frameNStart = frameN;  // exact frame index
      
      welcome_5.setAutoDraw(true);
    }
    
    
    // if welcome_5 is active this frame...
    if (welcome_5.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_3* updates
    if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }
    
    // if key_resp_3 is active this frame...
    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({
        keyList: typeof ['y','n','left','right','space'] === 'string' ? [['y','n','left','right','space']] : ['y','n','left','right','space'], 
        waitRelease: false
      });
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        key_resp_3.duration = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    welcome_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function welcome_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'welcome_2' ---
    welcome_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('welcome_2.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_3.corr, level);
    }
    psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
    if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
        psychoJS.experiment.addData('key_resp_3.duration', key_resp_3.duration);
        routineTimer.reset();
        }
    
    key_resp_3.stop();
    // the Routine "welcome_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var welcome_3MaxDurationReached;
var _key_resp_2_allKeys;
var welcome_3MaxDuration;
var welcome_3Components;
function welcome_3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'welcome_3' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    welcome_3Clock.reset();
    routineTimer.reset();
    welcome_3MaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from gate_welcome_3
    if (condition !== 3) {
        continueRoutine = false;
    }
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    psychoJS.experiment.addData('welcome_3.started', globalClock.getTime());
    welcome_3MaxDuration = null
    // keep track of which components have finished
    welcome_3Components = [];
    welcome_3Components.push(welcome_6);
    welcome_3Components.push(key_resp_2);
    
    welcome_3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function welcome_3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'welcome_3' ---
    // get current time
    t = welcome_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *welcome_6* updates
    if (t >= 0.0 && welcome_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welcome_6.tStart = t;  // (not accounting for frame time here)
      welcome_6.frameNStart = frameN;  // exact frame index
      
      welcome_6.setAutoDraw(true);
    }
    
    
    // if welcome_6 is active this frame...
    if (welcome_6.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }
    
    // if key_resp_2 is active this frame...
    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({
        keyList: typeof ['y','n','left','right','space'] === 'string' ? [['y','n','left','right','space']] : ['y','n','left','right','space'], 
        waitRelease: false
      });
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        key_resp_2.duration = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    welcome_3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function welcome_3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'welcome_3' ---
    welcome_3Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('welcome_3.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_2.corr, level);
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        psychoJS.experiment.addData('key_resp_2.duration', key_resp_2.duration);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "welcome_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var welcome_4MaxDurationReached;
var _key_resp_allKeys;
var welcome_4MaxDuration;
var welcome_4Components;
function welcome_4RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'welcome_4' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    welcome_4Clock.reset();
    routineTimer.reset();
    welcome_4MaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from gate_welcome_4
    if (condition !== 4) {
        continueRoutine = false;
    }
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    psychoJS.experiment.addData('welcome_4.started', globalClock.getTime());
    welcome_4MaxDuration = null
    // keep track of which components have finished
    welcome_4Components = [];
    welcome_4Components.push(welcome_7);
    welcome_4Components.push(key_resp);
    
    welcome_4Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function welcome_4RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'welcome_4' ---
    // get current time
    t = welcome_4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *welcome_7* updates
    if (t >= 0.0 && welcome_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welcome_7.tStart = t;  // (not accounting for frame time here)
      welcome_7.frameNStart = frameN;  // exact frame index
      
      welcome_7.setAutoDraw(true);
    }
    
    
    // if welcome_7 is active this frame...
    if (welcome_7.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    // if key_resp is active this frame...
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({
        keyList: typeof ['y','n','left','right','space'] === 'string' ? [['y','n','left','right','space']] : ['y','n','left','right','space'], 
        waitRelease: false
      });
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    welcome_4Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function welcome_4RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'welcome_4' ---
    welcome_4Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('welcome_4.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "welcome_4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var beforeMaxDurationReached;
var beforeMaxDuration;
var beforeComponents;
function beforeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'before' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    beforeClock.reset();
    routineTimer.reset();
    beforeMaxDurationReached = false;
    // update component parameters for each repeat
    baseline_relaxation.reset()
    baseline_curiosity.reset()
    // reset start_viewing_button to account for continued clicks & clear times on/off
    start_viewing_button.reset()
    psychoJS.experiment.addData('before.started', globalClock.getTime());
    beforeMaxDuration = null
    // keep track of which components have finished
    beforeComponents = [];
    beforeComponents.push(before_title);
    beforeComponents.push(question_relaxation);
    beforeComponents.push(baseline_relaxation);
    beforeComponents.push(question_curiosity);
    beforeComponents.push(baseline_curiosity);
    beforeComponents.push(start_viewing_button);
    
    beforeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function beforeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'before' ---
    // get current time
    t = beforeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *before_title* updates
    if (t >= 0.0 && before_title.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      before_title.tStart = t;  // (not accounting for frame time here)
      before_title.frameNStart = frameN;  // exact frame index
      
      before_title.setAutoDraw(true);
    }
    
    
    // if before_title is active this frame...
    if (before_title.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *question_relaxation* updates
    if (t >= 0.0 && question_relaxation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      question_relaxation.tStart = t;  // (not accounting for frame time here)
      question_relaxation.frameNStart = frameN;  // exact frame index
      
      question_relaxation.setAutoDraw(true);
    }
    
    
    // if question_relaxation is active this frame...
    if (question_relaxation.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *baseline_relaxation* updates
    if (t >= 0.0 && baseline_relaxation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      baseline_relaxation.tStart = t;  // (not accounting for frame time here)
      baseline_relaxation.frameNStart = frameN;  // exact frame index
      
      baseline_relaxation.setAutoDraw(true);
    }
    
    
    // if baseline_relaxation is active this frame...
    if (baseline_relaxation.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *question_curiosity* updates
    if (t >= 0.0 && question_curiosity.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      question_curiosity.tStart = t;  // (not accounting for frame time here)
      question_curiosity.frameNStart = frameN;  // exact frame index
      
      question_curiosity.setAutoDraw(true);
    }
    
    
    // if question_curiosity is active this frame...
    if (question_curiosity.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *baseline_curiosity* updates
    if (t >= 0.0 && baseline_curiosity.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      baseline_curiosity.tStart = t;  // (not accounting for frame time here)
      baseline_curiosity.frameNStart = frameN;  // exact frame index
      
      baseline_curiosity.setAutoDraw(true);
    }
    
    
    // if baseline_curiosity is active this frame...
    if (baseline_curiosity.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *start_viewing_button* updates
    if (t >= 0 && start_viewing_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      start_viewing_button.tStart = t;  // (not accounting for frame time here)
      start_viewing_button.frameNStart = frameN;  // exact frame index
      
      start_viewing_button.setAutoDraw(true);
    }
    
    
    // if start_viewing_button is active this frame...
    if (start_viewing_button.status === PsychoJS.Status.STARTED) {
    }
    
    if (start_viewing_button.status === PsychoJS.Status.STARTED) {
      // check whether start_viewing_button has been pressed
      if (start_viewing_button.isClicked) {
        if (!start_viewing_button.wasClicked) {
          // store time of first click
          start_viewing_button.timesOn.push(start_viewing_button.clock.getTime());
          // store time clicked until
          start_viewing_button.timesOff.push(start_viewing_button.clock.getTime());
        } else {
          // update time clicked until;
          start_viewing_button.timesOff[start_viewing_button.timesOff.length - 1] = start_viewing_button.clock.getTime();
        }
        if (!start_viewing_button.wasClicked) {
          
        }
        // if start_viewing_button is still clicked next frame, it is not a new click
        start_viewing_button.wasClicked = true;
      } else {
        // if start_viewing_button is clicked next frame, it is a new click
        start_viewing_button.wasClicked = false;
      }
    } else {
      // keep clock at 0 if start_viewing_button hasn't started / has finished
      start_viewing_button.clock.reset();
      // if start_viewing_button is clicked next frame, it is a new click
      start_viewing_button.wasClicked = false;
    }
    // Run 'Each Frame' code from validate_before
    if ((((baseline_relaxation.getRating() !== null) && (baseline_curiosity.getRating() !== null)) && start_viewing_button.isClicked)) {
        continueRoutine = false;
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    beforeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function beforeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'before' ---
    beforeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('before.stopped', globalClock.getTime());
    psychoJS.experiment.addData('baseline_relaxation.response', baseline_relaxation.getRating());
    psychoJS.experiment.addData('baseline_relaxation.rt', baseline_relaxation.getRT());
    psychoJS.experiment.addData('baseline_curiosity.response', baseline_curiosity.getRating());
    psychoJS.experiment.addData('baseline_curiosity.rt', baseline_curiosity.getRT());
    psychoJS.experiment.addData('start_viewing_button.numClicks', start_viewing_button.numClicks);
    psychoJS.experiment.addData('start_viewing_button.timesOn', start_viewing_button.timesOn);
    psychoJS.experiment.addData('start_viewing_button.timesOff', start_viewing_button.timesOff);
    // the Routine "before" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var videoMaxDurationReached;
var videoMaxDuration;
var videoComponents;
function videoRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'video' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    videoClock.reset();
    routineTimer.reset();
    videoMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('video.started', globalClock.getTime());
    videoMaxDuration = null
    kinescopeEnded = false;
    // keep track of which components have finished
    videoComponents = [];
    videoComponents.push(film);
    
    videoComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function videoRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'video' ---
    // get current time
    t = videoClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *film* updates (Kinescope iframe)
    if (t >= 0.0 && film.status === PsychoJS.Status.NOT_STARTED) {
      film.tStart = t;
      film.frameNStart = frameN;
      film.setAutoDraw(true);
      film.play();
    }

    if (kinescopeEnded) {
      film.status = PsychoJS.Status.FINISHED;
    }

    if (film.status === PsychoJS.Status.FINISHED) {
        continueRoutine = false;
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    videoComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function videoRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'video' ---
    videoComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('video.stopped', globalClock.getTime());
    await film.stop();  // remove Kinescope iframe
    // the Routine "video" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var after_allMaxDurationReached;
var after_allMaxDuration;
var after_allComponents;
function after_allRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'after_all' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    after_allClock.reset();
    routineTimer.reset();
    after_allMaxDurationReached = false;
    // update component parameters for each repeat
    // reset save to account for continued clicks & clear times on/off
    save.reset()
    baseline_time.reset()
    baseline_self.reset()
    psychoJS.experiment.addData('after_all.started', globalClock.getTime());
    after_allMaxDuration = null
    // keep track of which components have finished
    after_allComponents = [];
    after_allComponents.push(save);
    after_allComponents.push(after_title_2);
    after_allComponents.push(question_time);
    after_allComponents.push(baseline_time);
    after_allComponents.push(question_self);
    after_allComponents.push(baseline_self);
    
    after_allComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function after_allRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'after_all' ---
    // get current time
    t = after_allClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *save* updates
    if (t >= 0 && save.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      save.tStart = t;  // (not accounting for frame time here)
      save.frameNStart = frameN;  // exact frame index
      
      save.setAutoDraw(true);
    }
    
    
    // if save is active this frame...
    if (save.status === PsychoJS.Status.STARTED) {
    }
    
    if (save.status === PsychoJS.Status.STARTED) {
      // check whether save has been pressed
      if (save.isClicked) {
        if (!save.wasClicked) {
          // store time of first click
          save.timesOn.push(save.clock.getTime());
          // store time clicked until
          save.timesOff.push(save.clock.getTime());
        } else {
          // update time clicked until;
          save.timesOff[save.timesOff.length - 1] = save.clock.getTime();
        }
        if (!save.wasClicked) {
          
        }
        // if save is still clicked next frame, it is not a new click
        save.wasClicked = true;
      } else {
        // if save is clicked next frame, it is a new click
        save.wasClicked = false;
      }
    } else {
      // keep clock at 0 if save hasn't started / has finished
      save.clock.reset();
      // if save is clicked next frame, it is a new click
      save.wasClicked = false;
    }
    // Run 'Each Frame' code from validate_before_2
    if ((((baseline_time.getRating() !== null) && (baseline_self.getRating() !== null)) && save.isClicked)) {
        continueRoutine = false;
    }
    
    
    // *after_title_2* updates
    if (t >= 0.0 && after_title_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      after_title_2.tStart = t;  // (not accounting for frame time here)
      after_title_2.frameNStart = frameN;  // exact frame index
      
      after_title_2.setAutoDraw(true);
    }
    
    
    // if after_title_2 is active this frame...
    if (after_title_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *question_time* updates
    if (t >= 0.0 && question_time.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      question_time.tStart = t;  // (not accounting for frame time here)
      question_time.frameNStart = frameN;  // exact frame index
      
      question_time.setAutoDraw(true);
    }
    
    
    // if question_time is active this frame...
    if (question_time.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *baseline_time* updates
    if (t >= 0.0 && baseline_time.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      baseline_time.tStart = t;  // (not accounting for frame time here)
      baseline_time.frameNStart = frameN;  // exact frame index
      
      baseline_time.setAutoDraw(true);
    }
    
    
    // if baseline_time is active this frame...
    if (baseline_time.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *question_self* updates
    if (t >= 0.0 && question_self.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      question_self.tStart = t;  // (not accounting for frame time here)
      question_self.frameNStart = frameN;  // exact frame index
      
      question_self.setAutoDraw(true);
    }
    
    
    // if question_self is active this frame...
    if (question_self.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *baseline_self* updates
    if (t >= 0.0 && baseline_self.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      baseline_self.tStart = t;  // (not accounting for frame time here)
      baseline_self.frameNStart = frameN;  // exact frame index
      
      baseline_self.setAutoDraw(true);
    }
    
    
    // if baseline_self is active this frame...
    if (baseline_self.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    after_allComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function after_allRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'after_all' ---
    after_allComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('after_all.stopped', globalClock.getTime());
    psychoJS.experiment.addData('save.numClicks', save.numClicks);
    psychoJS.experiment.addData('save.timesOn', save.timesOn);
    psychoJS.experiment.addData('save.timesOff', save.timesOff);
    psychoJS.experiment.addData('baseline_time.response', baseline_time.getRating());
    psychoJS.experiment.addData('baseline_time.rt', baseline_time.getRT());
    psychoJS.experiment.addData('baseline_self.response', baseline_self.getRating());
    psychoJS.experiment.addData('baseline_self.rt', baseline_self.getRT());
    // the Routine "after_all" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var after_alllMaxDurationReached;
var after_alllMaxDuration;
var after_alllComponents;
function after_alllRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'after_alll' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    after_alllClock.reset();
    routineTimer.reset();
    after_alllMaxDurationReached = false;
    // update component parameters for each repeat
    // reset save_2 to account for continued clicks & clear times on/off
    save_2.reset()
    baseline_connectedness.reset()
    baseline_accomodation.reset()
    psychoJS.experiment.addData('after_alll.started', globalClock.getTime());
    after_alllMaxDuration = null
    // keep track of which components have finished
    after_alllComponents = [];
    after_alllComponents.push(save_2);
    after_alllComponents.push(after_title);
    after_alllComponents.push(question_connectedness);
    after_alllComponents.push(baseline_connectedness);
    after_alllComponents.push(question_accomodation);
    after_alllComponents.push(baseline_accomodation);
    
    after_alllComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function after_alllRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'after_alll' ---
    // get current time
    t = after_alllClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *save_2* updates
    if (t >= 0 && save_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      save_2.tStart = t;  // (not accounting for frame time here)
      save_2.frameNStart = frameN;  // exact frame index
      
      save_2.setAutoDraw(true);
    }
    
    
    // if save_2 is active this frame...
    if (save_2.status === PsychoJS.Status.STARTED) {
    }
    
    if (save_2.status === PsychoJS.Status.STARTED) {
      // check whether save_2 has been pressed
      if (save_2.isClicked) {
        if (!save_2.wasClicked) {
          // store time of first click
          save_2.timesOn.push(save_2.clock.getTime());
          // store time clicked until
          save_2.timesOff.push(save_2.clock.getTime());
        } else {
          // update time clicked until;
          save_2.timesOff[save_2.timesOff.length - 1] = save_2.clock.getTime();
        }
        if (!save_2.wasClicked) {
          
        }
        // if save_2 is still clicked next frame, it is not a new click
        save_2.wasClicked = true;
      } else {
        // if save_2 is clicked next frame, it is a new click
        save_2.wasClicked = false;
      }
    } else {
      // keep clock at 0 if save_2 hasn't started / has finished
      save_2.clock.reset();
      // if save_2 is clicked next frame, it is a new click
      save_2.wasClicked = false;
    }
    
    // *after_title* updates
    if (t >= 0.0 && after_title.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      after_title.tStart = t;  // (not accounting for frame time here)
      after_title.frameNStart = frameN;  // exact frame index
      
      after_title.setAutoDraw(true);
    }
    
    
    // if after_title is active this frame...
    if (after_title.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *question_connectedness* updates
    if (t >= 0.0 && question_connectedness.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      question_connectedness.tStart = t;  // (not accounting for frame time here)
      question_connectedness.frameNStart = frameN;  // exact frame index
      
      question_connectedness.setAutoDraw(true);
    }
    
    
    // if question_connectedness is active this frame...
    if (question_connectedness.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *baseline_connectedness* updates
    if (t >= 0.0 && baseline_connectedness.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      baseline_connectedness.tStart = t;  // (not accounting for frame time here)
      baseline_connectedness.frameNStart = frameN;  // exact frame index
      
      baseline_connectedness.setAutoDraw(true);
    }
    
    
    // if baseline_connectedness is active this frame...
    if (baseline_connectedness.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *question_accomodation* updates
    if (t >= 0.0 && question_accomodation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      question_accomodation.tStart = t;  // (not accounting for frame time here)
      question_accomodation.frameNStart = frameN;  // exact frame index
      
      question_accomodation.setAutoDraw(true);
    }
    
    
    // if question_accomodation is active this frame...
    if (question_accomodation.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *baseline_accomodation* updates
    if (t >= 0.0 && baseline_accomodation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      baseline_accomodation.tStart = t;  // (not accounting for frame time here)
      baseline_accomodation.frameNStart = frameN;  // exact frame index
      
      baseline_accomodation.setAutoDraw(true);
    }
    
    
    // if baseline_accomodation is active this frame...
    if (baseline_accomodation.status === PsychoJS.Status.STARTED) {
    }
    
    // Run 'Each Frame' code from validate_before_3
    if ((((baseline_connectedness.getRating() !== null) && (baseline_accomodation.getRating() !== null)) && save_2.isClicked)) {
        continueRoutine = false;
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    after_alllComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function after_alllRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'after_alll' ---
    after_alllComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('after_alll.stopped', globalClock.getTime());
    psychoJS.experiment.addData('save_2.numClicks', save_2.numClicks);
    psychoJS.experiment.addData('save_2.timesOn', save_2.timesOn);
    psychoJS.experiment.addData('save_2.timesOff', save_2.timesOff);
    psychoJS.experiment.addData('baseline_connectedness.response', baseline_connectedness.getRating());
    psychoJS.experiment.addData('baseline_connectedness.rt', baseline_connectedness.getRT());
    psychoJS.experiment.addData('baseline_accomodation.response', baseline_accomodation.getRating());
    psychoJS.experiment.addData('baseline_accomodation.rt', baseline_accomodation.getRT());
    // the Routine "after_alll" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var after_allllMaxDurationReached;
var after_allllMaxDuration;
var after_allllComponents;
function after_allllRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'after_allll' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    after_allllClock.reset();
    routineTimer.reset();
    after_allllMaxDurationReached = false;
    // update component parameters for each repeat
    // reset save_3 to account for continued clicks & clear times on/off
    save_3.reset()
    baseline_body.reset()
    baseline_understanding.reset()
    psychoJS.experiment.addData('after_allll.started', globalClock.getTime());
    after_allllMaxDuration = null
    // keep track of which components have finished
    after_allllComponents = [];
    after_allllComponents.push(save_3);
    after_allllComponents.push(after_title_3);
    after_allllComponents.push(question_body);
    after_allllComponents.push(baseline_body);
    after_allllComponents.push(question_understanding);
    after_allllComponents.push(baseline_understanding);
    
    after_allllComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function after_allllRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'after_allll' ---
    // get current time
    t = after_allllClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *save_3* updates
    if (t >= 0 && save_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      save_3.tStart = t;  // (not accounting for frame time here)
      save_3.frameNStart = frameN;  // exact frame index
      
      save_3.setAutoDraw(true);
    }
    
    
    // if save_3 is active this frame...
    if (save_3.status === PsychoJS.Status.STARTED) {
    }
    
    if (save_3.status === PsychoJS.Status.STARTED) {
      // check whether save_3 has been pressed
      if (save_3.isClicked) {
        if (!save_3.wasClicked) {
          // store time of first click
          save_3.timesOn.push(save_3.clock.getTime());
          // store time clicked until
          save_3.timesOff.push(save_3.clock.getTime());
        } else {
          // update time clicked until;
          save_3.timesOff[save_3.timesOff.length - 1] = save_3.clock.getTime();
        }
        if (!save_3.wasClicked) {
          
        }
        // if save_3 is still clicked next frame, it is not a new click
        save_3.wasClicked = true;
      } else {
        // if save_3 is clicked next frame, it is a new click
        save_3.wasClicked = false;
      }
    } else {
      // keep clock at 0 if save_3 hasn't started / has finished
      save_3.clock.reset();
      // if save_3 is clicked next frame, it is a new click
      save_3.wasClicked = false;
    }
    // Run 'Each Frame' code from validate_before_4
    if ((((baseline_body.getRating() !== null) && (baseline_understanding.getRating() !== null)) && save_3.isClicked)) {
        continueRoutine = false;
    }
    
    
    // *after_title_3* updates
    if (t >= 0.0 && after_title_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      after_title_3.tStart = t;  // (not accounting for frame time here)
      after_title_3.frameNStart = frameN;  // exact frame index
      
      after_title_3.setAutoDraw(true);
    }
    
    
    // if after_title_3 is active this frame...
    if (after_title_3.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *question_body* updates
    if (t >= 0.0 && question_body.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      question_body.tStart = t;  // (not accounting for frame time here)
      question_body.frameNStart = frameN;  // exact frame index
      
      question_body.setAutoDraw(true);
    }
    
    
    // if question_body is active this frame...
    if (question_body.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *baseline_body* updates
    if (t >= 0.0 && baseline_body.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      baseline_body.tStart = t;  // (not accounting for frame time here)
      baseline_body.frameNStart = frameN;  // exact frame index
      
      baseline_body.setAutoDraw(true);
    }
    
    
    // if baseline_body is active this frame...
    if (baseline_body.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *question_understanding* updates
    if (t >= 0.0 && question_understanding.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      question_understanding.tStart = t;  // (not accounting for frame time here)
      question_understanding.frameNStart = frameN;  // exact frame index
      
      question_understanding.setAutoDraw(true);
    }
    
    
    // if question_understanding is active this frame...
    if (question_understanding.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *baseline_understanding* updates
    if (t >= 0.0 && baseline_understanding.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      baseline_understanding.tStart = t;  // (not accounting for frame time here)
      baseline_understanding.frameNStart = frameN;  // exact frame index
      
      baseline_understanding.setAutoDraw(true);
    }
    
    
    // if baseline_understanding is active this frame...
    if (baseline_understanding.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    after_allllComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function after_allllRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'after_allll' ---
    after_allllComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('after_allll.stopped', globalClock.getTime());
    psychoJS.experiment.addData('save_3.numClicks', save_3.numClicks);
    psychoJS.experiment.addData('save_3.timesOn', save_3.timesOn);
    psychoJS.experiment.addData('save_3.timesOff', save_3.timesOff);
    psychoJS.experiment.addData('baseline_body.response', baseline_body.getRating());
    psychoJS.experiment.addData('baseline_body.rt', baseline_body.getRT());
    psychoJS.experiment.addData('baseline_understanding.response', baseline_understanding.getRating());
    psychoJS.experiment.addData('baseline_understanding.rt', baseline_understanding.getRT());
    // the Routine "after_allll" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var open_responseMaxDurationReached;
var open_responseMaxDuration;
var open_responseComponents;
function open_responseRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'open_response' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    open_responseClock.reset();
    routineTimer.reset();
    open_responseMaxDurationReached = false;
    // update component parameters for each repeat
    // reset save_4 to account for continued clicks & clear times on/off
    save_4.reset()
    open_response_text.setText('');
    open_response_text.refresh();
    psychoJS.experiment.addData('open_response.started', globalClock.getTime());
    open_responseMaxDuration = null
    // keep track of which components have finished
    open_responseComponents = [];
    open_responseComponents.push(save_4);
    open_responseComponents.push(open_question);
    open_responseComponents.push(open_response_text);
    
    open_responseComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var typed_response;
function open_responseRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'open_response' ---
    // get current time
    t = open_responseClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *save_4* updates
    if (t >= 0 && save_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      save_4.tStart = t;  // (not accounting for frame time here)
      save_4.frameNStart = frameN;  // exact frame index
      
      save_4.setAutoDraw(true);
    }
    
    
    // if save_4 is active this frame...
    if (save_4.status === PsychoJS.Status.STARTED) {
    }
    
    if (save_4.status === PsychoJS.Status.STARTED) {
      // check whether save_4 has been pressed
      if (save_4.isClicked) {
        if (!save_4.wasClicked) {
          // store time of first click
          save_4.timesOn.push(save_4.clock.getTime());
          // store time clicked until
          save_4.timesOff.push(save_4.clock.getTime());
        } else {
          // update time clicked until;
          save_4.timesOff[save_4.timesOff.length - 1] = save_4.clock.getTime();
        }
        if (!save_4.wasClicked) {
          
        }
        // if save_4 is still clicked next frame, it is not a new click
        save_4.wasClicked = true;
      } else {
        // if save_4 is clicked next frame, it is a new click
        save_4.wasClicked = false;
      }
    } else {
      // keep clock at 0 if save_4 hasn't started / has finished
      save_4.clock.reset();
      // if save_4 is clicked next frame, it is a new click
      save_4.wasClicked = false;
    }
    // Run 'Each Frame' code from validate_before_5
    typed_response = String(open_response_text.text || '').trim();
    if (((typed_response !== "") && save_4.isClicked)) {
        continueRoutine = false;
    }
    
    
    // *open_question* updates
    if (t >= 0.0 && open_question.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      open_question.tStart = t;  // (not accounting for frame time here)
      open_question.frameNStart = frameN;  // exact frame index
      
      open_question.setAutoDraw(true);
    }
    
    
    // if open_question is active this frame...
    if (open_question.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *open_response_text* updates
    if (t >= 0.0 && open_response_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      open_response_text.tStart = t;  // (not accounting for frame time here)
      open_response_text.frameNStart = frameN;  // exact frame index
      
      open_response_text.setAutoDraw(true);
    }
    
    
    // if open_response_text is active this frame...
    if (open_response_text.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    open_responseComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function open_responseRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'open_response' ---
    open_responseComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('open_response.stopped', globalClock.getTime());
    psychoJS.experiment.addData('save_4.numClicks', save_4.numClicks);
    psychoJS.experiment.addData('save_4.timesOn', save_4.timesOn);
    psychoJS.experiment.addData('save_4.timesOff', save_4.timesOff);
    psychoJS.experiment.addData('open_response_text.text',open_response_text.text)
    // the Routine "open_response" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var debrief_group_1MaxDurationReached;
var debrief_group_1MaxDuration;
var debrief_group_1Components;
function debrief_group_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'debrief_group_1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    debrief_group_1Clock.reset();
    routineTimer.reset();
    debrief_group_1MaxDurationReached = false;
    // update component parameters for each repeat
    reappraisal_group_1.reset()
    // reset save_5 to account for continued clicks & clear times on/off
    save_5.reset()
    // Run 'Begin Routine' code from gate_welcome
    if (condition !== 1) {
        continueRoutine = false;
    }
    psychoJS.experiment.addData('debrief_group_1.started', globalClock.getTime());
    debrief_group_1MaxDuration = null
    // keep track of which components have finished
    debrief_group_1Components = [];
    debrief_group_1Components.push(debrief_title_1);
    debrief_group_1Components.push(reappraisal_group_1);
    debrief_group_1Components.push(save_5);
    
    debrief_group_1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function debrief_group_1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'debrief_group_1' ---
    // get current time
    t = debrief_group_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *debrief_title_1* updates
    if (t >= 0.0 && debrief_title_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      debrief_title_1.tStart = t;  // (not accounting for frame time here)
      debrief_title_1.frameNStart = frameN;  // exact frame index
      
      debrief_title_1.setAutoDraw(true);
    }
    
    
    // if debrief_title_1 is active this frame...
    if (debrief_title_1.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *reappraisal_group_1* updates
    if (t >= 0.0 && reappraisal_group_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      reappraisal_group_1.tStart = t;  // (not accounting for frame time here)
      reappraisal_group_1.frameNStart = frameN;  // exact frame index
      
      reappraisal_group_1.setAutoDraw(true);
    }
    
    
    // if reappraisal_group_1 is active this frame...
    if (reappraisal_group_1.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *save_5* updates
    if (t >= 0 && save_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      save_5.tStart = t;  // (not accounting for frame time here)
      save_5.frameNStart = frameN;  // exact frame index
      
      save_5.setAutoDraw(true);
    }
    
    
    // if save_5 is active this frame...
    if (save_5.status === PsychoJS.Status.STARTED) {
    }
    
    if (save_5.status === PsychoJS.Status.STARTED) {
      // check whether save_5 has been pressed
      if (save_5.isClicked) {
        if (!save_5.wasClicked) {
          // store time of first click
          save_5.timesOn.push(save_5.clock.getTime());
          // store time clicked until
          save_5.timesOff.push(save_5.clock.getTime());
        } else {
          // update time clicked until;
          save_5.timesOff[save_5.timesOff.length - 1] = save_5.clock.getTime();
        }
        if (!save_5.wasClicked) {
          
        }
        // if save_5 is still clicked next frame, it is not a new click
        save_5.wasClicked = true;
      } else {
        // if save_5 is clicked next frame, it is a new click
        save_5.wasClicked = false;
      }
    } else {
      // keep clock at 0 if save_5 hasn't started / has finished
      save_5.clock.reset();
      // if save_5 is clicked next frame, it is a new click
      save_5.wasClicked = false;
    }
    // Run 'Each Frame' code from validate_before_6
    if (((reappraisal_group_1.getRating() !== null) && save_5.isClicked)) {
        continueRoutine = false;
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    debrief_group_1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function debrief_group_1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'debrief_group_1' ---
    debrief_group_1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('debrief_group_1.stopped', globalClock.getTime());
    psychoJS.experiment.addData('reappraisal_group_1.response', reappraisal_group_1.getRating());
    psychoJS.experiment.addData('reappraisal_group_1.rt', reappraisal_group_1.getRT());
    psychoJS.experiment.addData('save_5.numClicks', save_5.numClicks);
    psychoJS.experiment.addData('save_5.timesOn', save_5.timesOn);
    psychoJS.experiment.addData('save_5.timesOff', save_5.timesOff);
    // the Routine "debrief_group_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var debrief_group_2MaxDurationReached;
var debrief_group_2MaxDuration;
var debrief_group_2Components;
function debrief_group_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'debrief_group_2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    debrief_group_2Clock.reset();
    routineTimer.reset();
    debrief_group_2MaxDurationReached = false;
    // update component parameters for each repeat
    reappraisal_group_2.reset()
    // reset save_6 to account for continued clicks & clear times on/off
    save_6.reset()
    // Run 'Begin Routine' code from gate_welcome_5
    if (condition !== 2) {
        continueRoutine = false;
    }
    psychoJS.experiment.addData('debrief_group_2.started', globalClock.getTime());
    debrief_group_2MaxDuration = null
    // keep track of which components have finished
    debrief_group_2Components = [];
    debrief_group_2Components.push(debrief_title);
    debrief_group_2Components.push(reappraisal_group_2);
    debrief_group_2Components.push(save_6);
    
    debrief_group_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function debrief_group_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'debrief_group_2' ---
    // get current time
    t = debrief_group_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *debrief_title* updates
    if (t >= 0.0 && debrief_title.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      debrief_title.tStart = t;  // (not accounting for frame time here)
      debrief_title.frameNStart = frameN;  // exact frame index
      
      debrief_title.setAutoDraw(true);
    }
    
    
    // if debrief_title is active this frame...
    if (debrief_title.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *reappraisal_group_2* updates
    if (t >= 0.0 && reappraisal_group_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      reappraisal_group_2.tStart = t;  // (not accounting for frame time here)
      reappraisal_group_2.frameNStart = frameN;  // exact frame index
      
      reappraisal_group_2.setAutoDraw(true);
    }
    
    
    // if reappraisal_group_2 is active this frame...
    if (reappraisal_group_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *save_6* updates
    if (t >= 0 && save_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      save_6.tStart = t;  // (not accounting for frame time here)
      save_6.frameNStart = frameN;  // exact frame index
      
      save_6.setAutoDraw(true);
    }
    
    
    // if save_6 is active this frame...
    if (save_6.status === PsychoJS.Status.STARTED) {
    }
    
    if (save_6.status === PsychoJS.Status.STARTED) {
      // check whether save_6 has been pressed
      if (save_6.isClicked) {
        if (!save_6.wasClicked) {
          // store time of first click
          save_6.timesOn.push(save_6.clock.getTime());
          // store time clicked until
          save_6.timesOff.push(save_6.clock.getTime());
        } else {
          // update time clicked until;
          save_6.timesOff[save_6.timesOff.length - 1] = save_6.clock.getTime();
        }
        if (!save_6.wasClicked) {
          
        }
        // if save_6 is still clicked next frame, it is not a new click
        save_6.wasClicked = true;
      } else {
        // if save_6 is clicked next frame, it is a new click
        save_6.wasClicked = false;
      }
    } else {
      // keep clock at 0 if save_6 hasn't started / has finished
      save_6.clock.reset();
      // if save_6 is clicked next frame, it is a new click
      save_6.wasClicked = false;
    }
    // Run 'Each Frame' code from validate_before_7
    if (((reappraisal_group_2.getRating() !== null) && save_6.isClicked)) {
        continueRoutine = false;
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    debrief_group_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function debrief_group_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'debrief_group_2' ---
    debrief_group_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('debrief_group_2.stopped', globalClock.getTime());
    psychoJS.experiment.addData('reappraisal_group_2.response', reappraisal_group_2.getRating());
    psychoJS.experiment.addData('reappraisal_group_2.rt', reappraisal_group_2.getRT());
    psychoJS.experiment.addData('save_6.numClicks', save_6.numClicks);
    psychoJS.experiment.addData('save_6.timesOn', save_6.timesOn);
    psychoJS.experiment.addData('save_6.timesOff', save_6.timesOff);
    // the Routine "debrief_group_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var debrief_group_3MaxDurationReached;
var debrief_group_3MaxDuration;
var debrief_group_3Components;
function debrief_group_3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'debrief_group_3' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    debrief_group_3Clock.reset();
    routineTimer.reset();
    debrief_group_3MaxDurationReached = false;
    // update component parameters for each repeat
    reappraisal_group.reset()
    // reset save_7 to account for continued clicks & clear times on/off
    save_7.reset()
    // Run 'Begin Routine' code from gate_welcome_6
    if (condition !== 3) {
        continueRoutine = false;
    }
    psychoJS.experiment.addData('debrief_group_3.started', globalClock.getTime());
    debrief_group_3MaxDuration = null
    // keep track of which components have finished
    debrief_group_3Components = [];
    debrief_group_3Components.push(debrief_title_2);
    debrief_group_3Components.push(reappraisal_group);
    debrief_group_3Components.push(save_7);
    
    debrief_group_3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function debrief_group_3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'debrief_group_3' ---
    // get current time
    t = debrief_group_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *debrief_title_2* updates
    if (t >= 0.0 && debrief_title_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      debrief_title_2.tStart = t;  // (not accounting for frame time here)
      debrief_title_2.frameNStart = frameN;  // exact frame index
      
      debrief_title_2.setAutoDraw(true);
    }
    
    
    // if debrief_title_2 is active this frame...
    if (debrief_title_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *reappraisal_group* updates
    if (t >= 0.0 && reappraisal_group.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      reappraisal_group.tStart = t;  // (not accounting for frame time here)
      reappraisal_group.frameNStart = frameN;  // exact frame index
      
      reappraisal_group.setAutoDraw(true);
    }
    
    
    // if reappraisal_group is active this frame...
    if (reappraisal_group.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *save_7* updates
    if (t >= 0 && save_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      save_7.tStart = t;  // (not accounting for frame time here)
      save_7.frameNStart = frameN;  // exact frame index
      
      save_7.setAutoDraw(true);
    }
    
    
    // if save_7 is active this frame...
    if (save_7.status === PsychoJS.Status.STARTED) {
    }
    
    if (save_7.status === PsychoJS.Status.STARTED) {
      // check whether save_7 has been pressed
      if (save_7.isClicked) {
        if (!save_7.wasClicked) {
          // store time of first click
          save_7.timesOn.push(save_7.clock.getTime());
          // store time clicked until
          save_7.timesOff.push(save_7.clock.getTime());
        } else {
          // update time clicked until;
          save_7.timesOff[save_7.timesOff.length - 1] = save_7.clock.getTime();
        }
        if (!save_7.wasClicked) {
          
        }
        // if save_7 is still clicked next frame, it is not a new click
        save_7.wasClicked = true;
      } else {
        // if save_7 is clicked next frame, it is a new click
        save_7.wasClicked = false;
      }
    } else {
      // keep clock at 0 if save_7 hasn't started / has finished
      save_7.clock.reset();
      // if save_7 is clicked next frame, it is a new click
      save_7.wasClicked = false;
    }
    // Run 'Each Frame' code from validate_before_8
    if (((reappraisal_group.getRating() !== null) && save_7.isClicked)) {
        continueRoutine = false;
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    debrief_group_3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function debrief_group_3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'debrief_group_3' ---
    debrief_group_3Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('debrief_group_3.stopped', globalClock.getTime());
    psychoJS.experiment.addData('reappraisal_group.response', reappraisal_group.getRating());
    psychoJS.experiment.addData('reappraisal_group.rt', reappraisal_group.getRT());
    psychoJS.experiment.addData('save_7.numClicks', save_7.numClicks);
    psychoJS.experiment.addData('save_7.timesOn', save_7.timesOn);
    psychoJS.experiment.addData('save_7.timesOff', save_7.timesOff);
    // the Routine "debrief_group_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var thanxMaxDurationReached;
var thanxMaxDuration;
var thanxComponents;
function thanxRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'thanx' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    thanxClock.reset();
    routineTimer.reset();
    thanxMaxDurationReached = false;
    // update component parameters for each repeat
    // reset finish to account for continued clicks & clear times on/off
    finish.reset()
    psychoJS.experiment.addData('thanx.started', globalClock.getTime());
    thanxMaxDuration = null
    // keep track of which components have finished
    thanxComponents = [];
    thanxComponents.push(finish);
    thanxComponents.push(thank_text);
    
    thanxComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function thanxRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'thanx' ---
    // get current time
    t = thanxClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *finish* updates
    if (t >= 0 && finish.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      finish.tStart = t;  // (not accounting for frame time here)
      finish.frameNStart = frameN;  // exact frame index
      
      finish.setAutoDraw(true);
    }
    
    
    // if finish is active this frame...
    if (finish.status === PsychoJS.Status.STARTED) {
    }
    
    if (finish.status === PsychoJS.Status.STARTED) {
      // check whether finish has been pressed
      if (finish.isClicked) {
        if (!finish.wasClicked) {
          // store time of first click
          finish.timesOn.push(finish.clock.getTime());
          // store time clicked until
          finish.timesOff.push(finish.clock.getTime());
        } else {
          // update time clicked until;
          finish.timesOff[finish.timesOff.length - 1] = finish.clock.getTime();
        }
        if (!finish.wasClicked) {
          // end routine when finish is clicked
          continueRoutine = false;
          
        }
        // if finish is still clicked next frame, it is not a new click
        finish.wasClicked = true;
      } else {
        // if finish is clicked next frame, it is a new click
        finish.wasClicked = false;
      }
    } else {
      // keep clock at 0 if finish hasn't started / has finished
      finish.clock.reset();
      // if finish is clicked next frame, it is a new click
      finish.wasClicked = false;
    }
    
    // *thank_text* updates
    if (t >= 0.0 && thank_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      thank_text.tStart = t;  // (not accounting for frame time here)
      thank_text.frameNStart = frameN;  // exact frame index
      
      thank_text.setAutoDraw(true);
    }
    
    
    // if thank_text is active this frame...
    if (thank_text.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    thanxComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function thanxRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'thanx' ---
    thanxComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('thanx.stopped', globalClock.getTime());
    psychoJS.experiment.addData('finish.numClicks', finish.numClicks);
    psychoJS.experiment.addData('finish.timesOn', finish.timesOn);
    psychoJS.experiment.addData('finish.timesOff', finish.timesOff);
    // the Routine "thanx" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }

  try {
    await sendDataToGoogleSheets(isCompleted);
  } catch (err) {
    console.error('Google Sheets save failed:', err);
  }

  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}


function flattenTrialRows(trials) {
  const merged = {};
  for (const row of trials) {
    for (const key of Object.keys(row)) {
      const value = row[key];
      if (value === undefined || value === null || value === '') {
        continue;
      }
      if (!(key in merged) || merged[key] === '' || merged[key] === null || merged[key] === undefined) {
        merged[key] = value;
      }
    }
  }
  return merged;
}


async function sendDataToGoogleSheets(isCompleted) {
  const url = (window.EXPERIMENT_CONFIG && window.EXPERIMENT_CONFIG.googleSheetsUrl) || '';
  if (!url) {
    console.warn('EXPERIMENT_CONFIG.googleSheetsUrl is empty — данные в Google Sheets не отправлены');
    return;
  }

  const trials = psychoJS.experiment._trialsData || [];
  const flat = flattenTrialRows(trials);

  const payload = Object.assign({}, flat, {
    isCompleted: Boolean(isCompleted),
    submittedAt: new Date().toISOString(),
    userAgent: window.navigator.userAgent,
    nTrials: trials.length,
    trials_json: JSON.stringify(trials),
  });

  await fetch(url, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify({ rows: [payload] }),
  });
}
