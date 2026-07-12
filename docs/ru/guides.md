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
7.  Переместите готовый `.vpk` файл в директорию с модификациями (папка с вашим языком игры).


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
7.  Переместите готовый `.vpk` файл в директорию с модификациями (папка с вашим языком игры).


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
    background-color: #6d47bf; /* фиолетовый фон */
    font-style: italic; /* стиля шрифта */
    box-shadow: fill #5eff6e 1px 1px 8px 1px; /* зеленая тень */
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