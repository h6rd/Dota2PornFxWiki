# Guides
::: tip Info
All in-game resources are packed into the `pak01_dir.vpk` file.
**Path:** `Steam/steamapps/common/dota 2 beta/game/dota/`
:::

## Replacing images (vtex)
Images in Dota 2 use the `.vtex_c` format.

### Main directories
All images are stored in subfolders of `panorama/images/`. Main paths:

| Resource type | Path |
| :--- | :--- |
| **Ability icons** | `panorama/images/spellicons/` |
| **Hero icons** | `panorama/images/heroes/` |
| **Rank icons** | `panorama/images/rank_tier_icons/` |
| **Item icons** | `panorama/images/items/` |

### Tools
* **Decompiling/Viewing:** [Source2Viewer](https://valveresourceformat.github.io/)
* **Editing:** Photoshop, [miniPaint](https://viliusle.github.io/miniPaint/), or any other graphics editor.
* **Compiling:** [Compiler](https://h6rd.github.io/Dota2PornFxWeb/?category=tools&mod=Compiler)
* **Packing:** [VPKTool](https://h6rd.github.io/Dota2PornFxWeb/?category=tools&mod=VPKTool+-+Extract+%26+Pack+VPKs)

### Example: replacing an ability icon
Let's replace Dazzle's `Shallow Grave` icon:

1.  Navigate to `panorama/images/spellicons/` inside pak01_dir.vpk.
2.  Find and decompile the `dazzle_shallow_grave_png.vtex_c` file using **Source2Viewer**.
3.  Open the resulting image in a graphics editor, make your changes, and save the file as `.png`.
4.  Use **Compiler** to compile the image into `.vtex_c` format.
5.  Create a folder with the path `panorama/images/spellicons/` and place your compiled file inside.
6.  Use **VPKTool** to create a `.vpk` archive from this folder.
7.  Move the resulting `.vpk` file to the mods directory (your game's language folder).


## Replacing sounds (vsnd)
Sounds in Dota 2 use the `.vsnd_c` format.

### Main directories
All sounds are stored in subfolders of `sounds/`. Main paths:

| Resource type | Path |
| :--- | :--- |
| **Item sounds** | `sounds/items/` |
| **Hero ability sounds** | `sounds/weapons/hero/` |
| **Hero voice lines** | `sounds/vo/` (ignore announcer_dlc_) |
| **Music** | `sounds/music/` |

### Tools
* **Decompiling/Viewing:** [Source2Viewer](https://valveresourceformat.github.io/)
* **Editing:** [Tenacity](https://tenacityaudio.org/) or any other audio editor.
* **Compiling:** [Compiler](https://h6rd.github.io/Dota2PornFxWeb/?category=tools&mod=Compiler)
* **Packing:** [VPKTool](https://h6rd.github.io/Dota2PornFxWeb/?category=tools&mod=VPKTool+-+Extract+%26+Pack+VPKs)

### Example: replacing an item sound
Let's replace the `Force Staff` sound:

1.  Find any sound in `.mp3` or `.wav` format.
2.  Edit it if needed.
3.  Use **Compiler** to compile the file into `.vsnd_c` format.
4.  Rename the file to `force_staff.vsnd_c`
5.  Create a folder with the path `sounds/items/` and place your compiled file inside.
6.  Use **VPKTool** to create a `.vpk` archive from this folder.
7.  Move the resulting `.vpk` file to the mods directory (your game's language folder).


## Editing styles (vcss)
Styles in Dota 2 use the `.vcss_c` format.

### Main directories
All styles are stored in subfolders of `panorama/styles/`.

### Tools
* **Decompiling/Viewing:** [Source2Viewer](https://valveresourceformat.github.io/)
* **Editing:** [gram](https://gram-editor.com/) or any other text editor.
* **Compiling** + **Packing:** [Minify](https://github.com/Egezenn/dota2-minify)

### Example: changing the "Play" button style
#### 1. Enabling developer mode
In Dota 2's launch options (Steam → right-click Dota 2 → **Properties** → **General**), enter: `-dev -language english`

Launch the game.

#### 2. Finding the element via Panorama Debugger
1. After the main menu loads, press `F6` to open **Panorama Debugger**.
2. Click the **Play Dota** button — the corresponding component will be automatically highlighted in the element tree.
3. The right-hand column shows the styles applied to the element; you can also temporarily edit values there in real time to see the result immediately.
4. The button has the `#PlayButton` attribute. Next to it, the file where this style is declared will be shown — `play.css`.

::: tip Tip
Edits made in Panorama Debugger aren't saved and reset when the game restarts — this is just a way to quickly dial in the values you want before transferring them to your mod file.
:::

#### 3. Extracting and editing the source style file
1. In **Source2Viewer**, open `pak01_dir.vpk` and find the `play.vcss_c` file at `panorama/styles/`.
2. Decompile and open the file.
3. Find the `.PlayButton` selector in it and edit the properties you want. Example of changing the background and font style of the button:

```css
.PlayButton
{
    width: 330px;
    max-height: 49px;
    margin-bottom: 21px;
    margin-right: 58px;
    padding: 4px 12px 4px 12px;
    background-color: #6d47bf; /* purple background */
    font-style: italic; /* font style */
    box-shadow: fill #5eff6e 1px 1px 8px 1px; /* green glow */
    opacity: 1.0;
    transition-property: box-shadow, background-color, opacity, transform;
    transition-delay: 0.0s;
    transition-duration: 0.2s;
    transition-timing-function: ease-in-out;
}
```

#### 4. Preparing the mod via Minify
1. Download [Minify](https://github.com/Egezenn/dota2-minify) and go to its `mods` folder.
2. Copy the `User Styles` folder and rename the copy, for example, to `Play Button`.
3. Inside the new folder, rename the `_styling.css` file to `styling.css` and open it.
4. Clear the file's contents entirely and paste the following code, specifying the path to the original resource in the comment and using the adjusted selector:

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

::: tip Tip
You can read more about CSS [here](https://www.w3schools.com/html/html_css.asp), or use an AI.
:::

#### 5. Compiling and installing
1. Launch **Minify**, select the mod you created (`Play Button`) and the desired game language.
2. Click **Patch** and wait for the process to finish.
3. Launch Dota.
![Screenshot](/css.png)


## Replacing Models
<lite-youtube videoid="QJ993E-RB1s"></lite-youtube>


## Replacing and Editing Effects
<lite-youtube videoid="xx8x77X6qRY"></lite-youtube>


<!-- ## Attaching effects to model
::: tip Important
This is a simplified guide, it does not cover animations or cloth physics
:::
<lite-youtube videoid="2T66IYouIpQ"></lite-youtube> -->


## Text Replacement
Text in Dota 2 is stored in `.txt` files.

### Main Directories
All localization files are located in the `resource/localization/` folder.

| Text Type | File |
| :--- | :--- |
| **Game interface** | `dota_<language>.txt` |
| **Ability text** | `abilities_<language>.txt` |
| **Settings** | `gameui_<language>.txt` |

Replace `<language>` with your game language, for example `english`.

### Tools
* **Extract/View:** [Source2Viewer](https://valveresourceformat.github.io/)
* **Editing:** Notepad++, VS Code, or any text editor.
* **Packaging:** [VPKTool](https://h6rd.github.io/Dota2PornFxWeb/?category=tools&mod=VPKTool+-+Extract+%26+Pack+VPKs)

### Example: Changing Match Result Text
In this example, we'll change the "Win" and "Loss" text shown in the match history.

1. Open `pak01_dir.vpk` using **Source2Viewer**.
2. Navigate to `resource/localization/`.
3. Extract `dota_english.txt` (or the file for your language).
4. Find these lines:

```text
"dota_profile_recent_game_result_win" "Win"
    "dota_profile_recent_game_result_loss" "Loss"
```

5. Replace the text:

```text
"dota_profile_recent_game_result_win" "HELL YEAH"
    "dota_profile_recent_game_result_loss" "50%"
```

6. Save the file.
7. Create the folder `resource/localization/` and place the edited file inside it.
8. Create a `.vpk` archive using **VPKTool**.
9. Move the finished `.vpk` file into your game's language folder.

![Screenshot](/en-text.png)

::: warning Important
Valve frequently updates localization files, sometimes even without releasing a game patch. After an update, your changes may stop working or some text may become incorrect.

If this happens, extract the updated localization file again and repeat your changes, or use the automatic method below.
:::

### Automatic Replacement with a Script
This method automatically reapplies your changes to the latest localization file after every Dota 2 update.

#### 1. Installation
Install:

- [Python](https://www.python.org/downloads/)
- the `vpk` module:

```bash
pip install vpk
```

Download the [archive](/en-text.zip) containing the script and extract it.

#### 2. Configuration
Open `main.py` and set the required paths:

```python
VPK_PATH = r"C:\Program Files (x86)\Steam\steamapps\common\dota 2 beta\game\dota\pak01_dir.vpk"
INTERNAL_FILE_PATH = "resource/localization/dota_english.txt"
REPLACE_FILE = "replace.txt"
OUTPUT_VPK = "pak02_dir.vpk"
```

Parameters:
- `VPK_PATH` — path to the original `pak01_dir.vpk`.
- `INTERNAL_FILE_PATH` — path to the localization file inside the archive.
- `REPLACE_FILE` — file containing your custom replacements.
- `OUTPUT_VPK` — name of the generated mod.

#### 3. Adding Replacements
Open `replace.txt` and add the lines you want to replace:

```text
"dota_profile_recent_game_result_win" "HELL YEAH"
"dota_profile_recent_game_result_loss" "50%"
```

#### 4. Building the Mod
Open a command prompt in the script folder and run:

```bash
python main.py
```

When the script finishes, it will generate `pak02_dir.vpk`.

Move it to your game's language folder.

::: tip Tip
After every Dota 2 update, simply run `python main.py` again. The script will automatically use the latest localization file and reapply all replacements from `replace.txt`.
:::