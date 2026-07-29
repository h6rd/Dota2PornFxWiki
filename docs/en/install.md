# How to Install Mods?

There are several ways to install mods from the website. Choose the option that is most suitable for you:

1. [Manual installation of each mod individually](#manual-single)
2. [Manual installation via cart (without VPKMerge)](#manual-cart-no-merge)
3. [Manual installation via cart (with VPKMerge)](#manual-cart-merge)
4. [Automatic installation via Mod Manager](#auto-mod-manager)
5. [Installation via Minify](#minify) `BETA`

::: tip English game language
Dota won't pick up custom language folders like `dota_123`, `dota_minify`, and so on. For the English game language, use **Minify** version **v1.14rc5**:

1. Download and launch [**Minify v1.14rc5**](https://github.com/Egezenn/dota2-minify/releases/tag/Minify-v1.14rc5).
2. Download [the mod](https://github.com/Egezenn/dota2-minify-community/releases/download/_/English.Fix.zip) and move its contents into the `mods` folder inside Minify.
3. In Minify, at the bottom of the window, select any language other than `minify` (for example, `russian`).
4. Click the **Patch** button.
5. Drop all other mods from the website into the folder for the language you selected in Minify.
> Video guide: https://www.youtube.com/watch?v=Q_CGKRFoDn8
:::

---

## 1. Manual Installation of Each Mod Individually {#manual-single}

This method is suitable if you only need to install one or a few mods.

1. Click on the mod you are interested in on the website to download it. Repeat this for all the required mods.
2. Open **Steam**, right-click (RMB) on **Dota 2** → **Manage** → **Browse local files**.
3. Navigate to the `game` directory.
4. Open the folder corresponding to your game language (for example, `dota_russian` for Russian).
5. Move all downloaded mod files into this folder.

::: danger IMPORTANT
Mod file names must be strictly in the range of `pak01_dir.vpk` to `pak99_dir.vpk`. Otherwise, the game may crash or the mods simply won't work.
:::

---

## 2. Manual Installation via Cart (Without VPKMerge) {#manual-cart-no-merge}

Convenient if you want to download a pack of mods without using VPKMerge.

1. Hover over the mod card on the website and click the **plus (+)** icon in the upper-right corner. Add all the mods you need this way.
2. Open the cart and click the **Download** button.
3. Wait for the pack compilation and archive download to finish.
4. Extract the downloaded archive and move the folder inside it to your desktop.
5. Open **Steam**, right-click on **Dota 2** → **Manage** → **Browse local files**.
6. Navigate to the `game` directory, then open your game language folder (for example, `dota_russian`).
7. Move all mod files from the extracted `mods` folder into your game language folder.

::: warning PLEASE NOTE
You may end up with files named like `!pak01_dir.vpk` or `pak99_dir_1.vpk`. You must rename them:
* Files containing the `!` symbol have the highest priority. Rename them so that the number in the name is smaller than the rest of the files (for example, `pak01_dir.vpk`).
* Files named like `pak99_dir.vpk`, `pak99_dir_1.vpk`, etc., must be merged into a single common file using the **VPKTool** program. The final file must be named `pak99_dir.vpk`.
:::

---

## 3. Manual Installation via Cart (Using VPKMerge) {#manual-cart-merge}

Using VPKMerge allows you to automatically combine mods into a few files, avoiding conflicts and the need to manually rename multiple files.

1. Hover over the mod card on the website and click the **plus (+)** icon in the upper-right corner. Build your mod list.
2. Go to the cart and click the **Download** button.
3. Wait for the archive download to complete.
4. Extract the downloaded archive to your desktop.
5. Open the `mods` folder inside the extracted archive and launch **VPKMerge**.
6. The program will automatically merge the files and create archives named `pak10_dir.vpk`, `pak10_000.vpk`, `pak10_001.vpk`, etc.
7. Open **Steam**, right-click on **Dota 2** → **Manage** → **Browse local files**.
8. Navigate to the `game` directory → your language folder (for example, `dota_russian`).
9. Move **all** generated files starting with `pak10` (including the `.vpk` and numbered parts) from the `mods` folder to the game language folder.

---

## 4. Automatic Installation via Mod Manager {#auto-mod-manager}

The easiest and fastest method: the app downloads, installs, and updates the mods you need on its own — no manual archives, no juggling folders.

1. Download and install [Mod Manager](https://thefleece.github.io/dota2-mod-manager/).
2. Open the settings and set the language used by your game.
3. Find the mod you want in the list, click on it, and confirm the install with the **Install** button.
4. Сlick **Play**.

---

## 5. Installation via Minify `BETA` {#minify}
 
1. Download and install the latest RC version of [Minify](https://github.com/Egezenn/dota2-minify/releases/tag/Minify-v1.14rc5).
2. At the bottom of the Minify window, click the `D2PFX` icon next to the language selector — this opens the built-in mod store.
3. Find the mods you want and click **Install** to download them.
4. Open the `Select Mods` section and check the mods you want to use.
5. Click **Patch** — Minify will merge the selected mods and apply them to the game.
::: tip
This method is currently in `BETA` status, so not all mods work correctly
:::