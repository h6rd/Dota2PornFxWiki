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