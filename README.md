# sweet_t (PsychoPy / PsychoJS)

Онлайн-версия эксперимента для GitHub Pages с сохранением ответов в Google Sheets.

## Сайт

После включения GitHub Pages:

**https://kotocka.github.io/Experiment/**

## Быстрый старт

1. Подключите Google Sheets — см. [google-apps-script/README.md](google-apps-script/README.md)
2. Вставьте URL веб-приложения в [`config.js`](config.js)
3. В репозитории: **Settings → Pages → Deploy from branch `main` / root**

## Что сохраняется

В конце эксперимента в таблицу уходит **одна строка участника** со всеми полями PsychoJS, в том числе:

- `participant`, `session`, `date`, `expName`, `psychopyVersion`, `OS`, `frameRate`
- `condition` (1–4)
- все рейтинги (`baseline_*`, `reappraisal_*`)
- открытый ответ `open_response_text.text`
- тайминги рутин и ответы клавиш/кнопок
- `isCompleted`, `submittedAt`, `userAgent`
- `trials_json` — полный JSON всех строк эксперимента (на случай потери поля)

Заголовки в листе `data` создаются автоматически.

## Файлы

| Файл | Назначение |
|------|------------|
| `index.html` | Точка входа |
| `sweet_t.js` | Эксперимент (современные браузеры) |
| `sweet_tooth.mp4` | Стимул |
| `lib/` | PsychoJS 2026.1.3 |
| `config.js` | URL Google Apps Script |
| `google-apps-script/` | Код для таблицы |

## Локальный просмотр

Нужен простой HTTP-сервер (модули ES не открываются как `file://`):

```bash
npx serve .
```
