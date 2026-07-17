# How to Install Mods?

There are several ways to install mods from the website. Choose the option that is most suitable for you:

1. [Manual installation of each mod individually](#manual-single)
2. [Manual installation via cart (without VPKMerge)](#manual-cart-no-merge)
3. [Manual installation via cart (with VPKMerge)](#manual-cart-merge)
4. [Automatic installation via cart (with VPKMerge)](#auto-install-merge)

---

## 1. Manual Installation of Each Mod Individually {#manual-single}

This method is suitable if you only need to install one or a few mods.

1. Click on the mod you are interested in on the website to download it. Repeat this for all the required mods.
2. Open **Steam**, right-click (RMB) on **Dota 2** → **Manage** → **Browse local files**.
3. Navigate to the `game` directory.
4. Open the folder corresponding to your game language (for example, `dota_russian` for Russian, or `dota_123` for English (which you will need to create)).
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

## 4. Automatic Installation via Cart (Using VPKMerge) {#auto-install-merge}

The easiest and fastest installation method that does everything for you.

1. In the website settings, pre-select your game language and operating system.
2. Hover over the mod card and click the **plus (+)** icon in the upper-right corner for each mod you want.
3. Open the cart and click the **Download** button.
4. Wait for the archive to download, then extract it to your desktop.
5. Run the **Auto-Install** executable file from the extracted folder.
6. Wait for the installation process to finish.