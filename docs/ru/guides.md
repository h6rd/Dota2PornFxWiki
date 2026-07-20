# Гайды
::: tip Информация
Все игровые ресурсы упакованы в файл `pak01_dir.vpk`.
**Путь:** `Steam/steamapps/common/dota 2 beta/game/dota/`
:::

## Замена изображений (vtex)
Изображения в Dota 2 используют формат `.vtex_c`.

### Основные директории
Все изображения хранятся в подпапках `panorama/images/`. Основные пути:

| Тип ресурса | Путь |
| :--- | :--- |
| **Иконки способностей** | `panorama/images/spellicons/` |
| **Иконки героев** | `panorama/images/heroes/` |
| **Иконки рангов** | `panorama/images/rank_tier_icons/` |
| **Иконки предметов** | `panorama/images/items/` |

### Инструменты
* **Декомпиляция/Просмотр:** [Source2Viewer](https://valveresourceformat.github.io/)
* **Редактирование:** Photoshop, [miniPaint](https://viliusle.github.io/miniPaint/) или любой другой графический редактор.
* **Компиляция:** [Compiler](https://h6rd.github.io/Dota2PornFxWeb/?category=tools&mod=Compiler)
* **Упаковка:** [VPKTool](https://h6rd.github.io/Dota2PornFxWeb/?category=tools&mod=VPKTool+-+Extract+%26+Pack+VPKs)

### Пример: замена иконки способности
Рассмотрим замену иконки `Shallow Grave` у дазлика:

1.  Перейдите по пути `panorama/images/spellicons/` внутри pak01_dir.vpk.
2.  Найдите и декомпилируйте файл `dazzle_shallow_grave_png.vtex_c` с помощью **Source2Viewer**.
3.  Откройте полученное изображение в графическом редакторе, внесите изменения и сохраните файл в формате `.png`.
4.  Используйте **Compiler**, чтобы скомпилировать изображение в формат `.vtex_c`.
5.  Создайте папку с путем `panorama/images/spellicons/` и поместите туда ваш скомпилированный файл.
6.  Используйте **VPKTool**, чтобы создать архив `.vpk` из этой папки.
7.  Переместите готовый `.vpk` файл в папку с языком игры.


## Замена звуков (vsnd)
Звуки в Dota 2 используют формат `.vsnd_c`.

### Основные директории
Все звуки хранятся в подпапках `sounds/`. Основные пути:

| Тип ресурса | Путь |
| :--- | :--- |
| **Звуки предметов** | `sounds/items/` |
| **Звуки способностей героев** | `sounds/weapons/hero/` |
| **Фразы героев** | `sounds/vo/` (игнорируйте announcer_dlc_) |
| **Музыка** | `sounds/music/` |

### Инструменты
* **Декомпиляция/Просмотр:** [Source2Viewer](https://valveresourceformat.github.io/)
* **Редактирование:** [Tenacity](https://tenacityaudio.org/) или любой другой аудио редактор.
* **Компиляция:** [Compiler](https://h6rd.github.io/Dota2PornFxWeb/?category=tools&mod=Compiler)
* **Упаковка:** [VPKTool](https://h6rd.github.io/Dota2PornFxWeb/?category=tools&mod=VPKTool+-+Extract+%26+Pack+VPKs)

### Пример: замена звука предмета
Рассмотрим замену звука `Force Staff`:

1.  Найдите любой звук в формате `.mp3` или `wav`.
2.  Отредактируйте его если это необходимо.
3.  Используйте **Compiler**, чтобы скомпилировать файл в формат `.vsnd_c`.
4.  Переименуйте файл в `force_staff.vsnd_c`
5.  Создайте папку с путем `sounds/items/` и поместите туда ваш скомпилированный файл.
6.  Используйте **VPKTool**, чтобы создать архив `.vpk` из этой папки.
7.  Переместите готовый `.vpk` файл в папку с языком игры.


## Редактирование стилей (vcss)
Стили в Dota 2 используют формат `.vcss_c`.

### Основные директории
Все стили хранятся в подпапках `panorama/styles/`.

### Инструменты
* **Декомпиляция/Просмотр:** [Source2Viewer](https://valveresourceformat.github.io/)
* **Редактирование:** [gram](https://gram-editor.com/) или любой другой текстовый редактор.
* **Компиляция** + **Упаковка:** [Minify](https://github.com/Egezenn/dota2-minify)

### Пример: изменение стиля кнопки «Играть»
#### 1. Включение режима разработчика
В параметрах запуска Dota 2 (Steam → ПКМ по Dota 2 → **Свойства** → **Общие**) впишите: `-dev -language english`

Запустите игру.

#### 2. Поиск нужного элемента через Panorama Debugger
1. После загрузки главного меню нажмите `F6`, откроется **Panorama Debugger**.
2. Нажмите на кнопку **Play Dota**, в дереве элементов автоматически выделится нужный компонент.
3. В правой колонке отображаются применяемые к элементу стили, там же можно временно менять значения в реальном времени, чтобы сразу увидеть результат.
4. Кнопка имеет атрибут `#PlayButton`. Рядом будет указан файл, в котором объявлен этот стиль — `play.css`.

::: tip Совет
Правки в Panorama Debugger не сохраняются и сбрасываются при перезапуске игры — это лишь способ быстро подобрать нужные значения перед тем, как перенести их в файл мода.
:::

#### 3. Извлечение и редактирование исходного файла стиля
1. В **Source2Viewer** откройте `pak01_dir.vpk` и найдите файл `play.vcss_c` по пути `panorama/styles/`.
2. Декомпилируйте и откройте файл.
3. Найдите в нём селектор `.PlayButton` и отредактируйте нужные свойства. Пример изменения фона, стиля шрифта кнопки:

```css
.PlayButton
{
    width: 330px;
    max-height: 49px;
    margin-bottom: 21px;
    margin-right: 58px;
    padding: 4px 12px 4px 12px;
    background-color: #6d47bf; /* фиолетовый фон [!code focus]*/
    font-style: italic; /* стиля шрифта [!code focus]*/
    box-shadow: fill #5eff6e 1px 1px 8px 1px; /* зеленая тень [!code focus] */
    opacity: 1.0;
    transition-property: box-shadow, background-color, opacity, transform;
    transition-delay: 0.0s;
    transition-duration: 0.2s;
    transition-timing-function: ease-in-out;
}
```

#### 4. Подготовка мода через Minify
1. Скачайте [Minify](https://github.com/Egezenn/dota2-minify) и перейдите в его папку `mods`.
2. Скопируйте папку `User Styles` и переименуйте копию, например, в `Play Button`.
3. Внутри новой папки переименуйте файл `_styling.css` в `styling.css` и откройте его.
4. Полностью очистите содержимое файла и вставьте следующий код, указав в комментарии путь к оригинальному ресурсу и применив измененный селектор:

```css
/* g:panorama/styles/play */
#PlayButton {
    width: 330px;
    max-height: 49px;
    margin-bottom: 21px;
    margin-right: 58px;
    padding: 4px 12px 4px 12px;
    background-color: #6d47bf;
    font-style: italic;
    box-shadow: fill #5eff6e 1px 1px 8px 1px;
    opacity: 1.0;
    transition-property: box-shadow, background-color, opacity, transform;
    transition-delay: 0.0s;
    transition-duration: 0.2s;
    transition-timing-function: ease-in-out;
}
```

::: tip Совет
Про css можете прочитать [тут](https://www.w3schools.com/html/html_css.asp), или воспользуйтесь нейронкой
:::

#### 5. Компиляция и установка
1. Запустите **Minify**, выберите созданный мод (`Play Button`) и нужный язык игры.
2. Нажмите **Patch** и дождитесь завершения процесса.
3. Запустите доту.

![Скриншот](/css.png)


## Замена моделей
<lite-youtube videoid="QJ993E-RB1s"></lite-youtube>


## Замена и редактирование эффектов
<lite-youtube videoid="xx8x77X6qRY"></lite-youtube>


<!-- ## Прикрепление эффектов к модели
::: tip Важно
Это упрощенный гайд, он не охватывает анимации и не учитывает физику ткани
:::
<lite-youtube videoid="2T66IYouIpQ"></lite-youtube> -->


## Замена текста
Текст в Dota 2 хранится в формате `.txt`.

### Основные директории
Все файлы локализации находятся в папке `resource/localization/`.

| Тип текста | Файл |
| :--- | :--- |
| **Интерфейс игры** | `dota_<language>.txt` |
| **Способности** | `abilities_<language>.txt` |
| **Настройки** | `gameui_<language>.txt` |

Вместо `<language>` используется язык игры, например `russian` или `english`.

### Инструменты
* **Просмотр/извлечение:** [Source2Viewer](https://valveresourceformat.github.io/)
* **Редактирование:** Notepad++, VS Code или любой текстовый редактор.
* **Упаковка:** [VPKTool](https://h6rd.github.io/Dota2PornFxWeb/?category=tools&mod=VPKTool+-+Extract+%26+Pack+VPKs)

### Пример: изменение текста победы и поражения
Для примера изменим текст "Победа" и "Поражение" в истории матчей.

1. Откройте `pak01_dir.vpk` через **Source2Viewer**.
2. Перейдите в папку `resource/localization/`.
3. Извлеките файл `dota_russian.txt` (или файл вашего языка).
4. Найдите строки:

```text
"dota_profile_recent_game_result_win" "Победа"
"dota_profile_recent_game_result_loss" "Поражение"
```

5. Измените текст:

```text
"dota_profile_recent_game_result_win" "НИХУЯ"
"dota_profile_recent_game_result_loss" "50%"
```

6. Сохраните файл.
7. Создайте папку с путем `resource/localization/` и поместите туда измененный файл.
8. Создайте `.vpk` архив с помощью **VPKTool**.
9. Переместите готовый `.vpk` в папку с языком игры (папка с вашим языком игры).

![Скриншот](/ru-text.png)

::: warning Важно
Valve регулярно обновляет файлы локализации, иногда даже без выхода патча. После такого обновления ваши изменения могут перестать работать или часть текста станет некорректной.

В этом случае необходимо заново извлечь актуальный файл и повторить замену либо воспользоваться автоматическим способом ниже.
:::

### Автоматическая замена с помощью скрипта
Этот способ автоматически применяет ваши изменения к актуальному файлу локализации после каждого обновления игры.

#### 1. Установка
Установите:
- [Python](https://www.python.org/downloads/)
- модуль `vpk`:
```bash
pip install vpk
```

Скачайте [архив](/ru-text.zip) со скриптом и распакуйте его.

#### 2. Настройка
Откройте `main.py` и укажите необходимые пути:
```python
VPK_PATH = r"C:\Program Files (x86)\Steam\steamapps\common\dota 2 beta\game\dota\pak01_dir.vpk"
INTERNAL_FILE_PATH = "resource/localization/dota_russian.txt"
REPLACE_FILE = "replace.txt"
OUTPUT_VPK = "pak02_dir.vpk"
```

Параметры:
- `VPK_PATH` — путь к оригинальному `pak01_dir.vpk`.
- `INTERNAL_FILE_PATH` — путь к файлу локализации внутри архива.
- `REPLACE_FILE` — файл с вашими заменами.
- `OUTPUT_VPK` — имя создаваемого мода.

#### 3. Добавление замен
Откройте `replace.txt` и добавьте строки, которые хотите заменить:

```text
"dota_profile_recent_game_result_win" "НИХУЯ"
"dota_profile_recent_game_result_loss" "50%"
```

#### 4. Создание мода
Откройте командную строку в папке со скриптом и выполните:

```bash
python main.py
```

После завершения появится файл `pak02_dir.vpk`.

Переместите его в папку с языком игры.

::: tip Совет
После каждого обновления Dota 2 достаточно снова запустить `python main.py`. Скрипт автоматически возьмет новую версию файла локализации и повторно применит все замены из `replace.txt`.
:::


## Замена шрифта
Шрифты в Dota 2 хранятся в виде обычных файлов `.ttf`/`.otf`, поэтому для их замены не нужны Source2Viewer и VPKTool, достаточно подготовить файлы шрифта и подложить их в нужную папку.

### Основные директории
Шрифты хранятся в папке `panorama/fonts/`. 

Игра использует два основных шрифта:

| Название шрифта | Файл |
| :--- | :--- |
| **Radiance** | `radiance-light.otf` |
| **Reaver** | `reaver-regular.otf` |

### Инструменты
* **Редактирование шрифтов:** [FontForge](https://fontforge.org/en-US/downloads/)
* **Поиск шрифтов:** [online-fonts](https://online-fonts.com/) или любой другой сайт со шрифтами

### Пример: замена основного шрифта интерфейса
1. Найдите и скачайте понравившийся шрифт, например на [online-fonts](https://online-fonts.com/). 

При выборе рекомендуется вставлять в поле предпросмотра следующий текст, чтобы сразу оценить, как шрифт выглядит на кириллице, цифрах и спецсимволах:
```text
BrownЧёрный123./?!
```
2. Скачайте файл шрифта и сделайте его копию, вам понадобятся два одинаковых файла: 
один станет заменой Radiance, другой - заменой Reaver.

3. Откройте **FontForge** и откройте в нем первый файл шрифта.

4. Перейдите в **Element → Font Info** и укажите:
   - **Fontname:** `Radiance-Light`
   - **Family Name:** `Radiance`
![Скриншот](/font-rename.png)   

5. Нажмите **OK**, затем **File → Generate Fonts**.

6. Выберите формат **OpenType (CFF)**, укажите имя файла `Radiance-Light` и нажмите **Generate** (если появится предупреждение - нажмите **Yes**, если возникнет ошибка — жмите **Generate**).
![Скриншот](/font-gen.png) 

7. Повторите шаги 3–6 со вторым (скопированным) файлом шрифта, но укажите другие значения:
   - **Fontname:** `Reaver-Regular`
   - **Family Name:** `Reaver`
   - **Имя файла:** `Reaver-Regular`

8. Перейдите в папку с установленными шрифтами:
```text
Steam\steamapps\common\dota 2 beta\game\dota\panorama\fonts
```

::: tip Совет
Перед изменениями скопируйте папку `fonts` на рабочий стол — это позволит быстро вернуть всё в исходное состояние.
:::

9. Удалите в этой папке все файлы, кроме `grenze-bold` и `creepster-regular`, и поместите туда два сгенерированных файла (`Radiance-Light.otf` и `Reaver-Regular.otf`).
10. Запустите доту.

::: warning Как вернуть всё обратно
Чтобы откатить изменения, удалите папку `fonts` и перенесите на её место ранее скопированную папку с рабочего стола. Если копии не осталось — удалите папку `fonts` и запустите проверку целостности файлов.
:::