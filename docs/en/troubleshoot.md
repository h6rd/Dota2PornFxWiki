# Troubleshooting

## Issues with terrains
Terrains come in two types, each requiring its own installation method:

* **Custom:** Installed like regular mods by moving the `.vpk` file into the language folder.
* **Standard (from Dota 2):** Installed by moving the `maps` folder, which contains `dota.vpk`, into the language folder.

::: warning IMPORTANT
* **Do not move or rename** the `dota.vpk` file inside the `maps` folder.
* Standard terrains only display **in matches**. They don't work in "Demo" mode.
* Make sure to **disable the Dota+ terrain** in the game settings, otherwise it will conflict with the mod.
:::


## No changes visible / mod not working
If mods don't show up after installation, follow these steps:

### 1. Prepare the folder
1. In Steam: right-click Dota 2 → **Manage** → **Browse local files**.
2. Go to the `game` directory.
3. Create folder `dota_123`.

### 2. Check file names
Move your `.vpk` files into `dota_123`. Make sure they follow the naming rules:
* Valid range: `pak01_dir.vpk` — `pak99_dir.vpk`.
* **Not allowed:** arbitrary names (e.g., `mod.vpk`, `pak120_dir.vpk`) or special characters (exclamation marks, etc.).
* If you have more than 100 mods and run out of numbers, use the [VPKMerge](https://h6rd.github.io/Dota2PornFxWeb/?category=tools&mod=VPKMerge+-+Combine+VPKs) tool.

### 3. Launch options
Make sure the correct command is set in Dota 2's launch options:
1. In Steam: right-click Dota 2 → **Properties** → **General**.
2. In the "Launch Options" field, enter: `-language 123`
3. Make sure this command comes first and is the only one (unless you're using other required parameters).

*Compare the result with the image below:*
![Settings screenshot](/files.png)


## VAC error
If a **VAC** error message appears when launching the game or searching for a match, don't panic. This is a Dota bug and is not caused by using mods.

**How to fix:**
1. Open **Steam**.
2. Right-click Dota 2 → **Properties**.
3. Go to the **Installed Files** tab.
4. Click **Verify integrity of game files**.

Once the check is complete, restart the game.

## Site download freezes

### If the download stalls, try:
* Using a VPN
* Using one of the site mirrors: [**Netlify**](https://d2pfx.netlify.app/), [**Vercel**](https://d2pfx.vercel.app/), [**Onrender**](https://d2pfx.onrender.com/)

### If that doesn't help:
1. Refresh the page
2. Open the console with `Ctrl + Shift + J`
3. Start the download via the cart
4. Wait for the download to finish, or for it to freeze again
5. Copy the console output and send it to [**Discord**](https://discord.gg/PBvG8D9MxT) along with a description of the issue


## Website won't load

### If the site does not load, try:
* Using a VPN
* Using one of the site mirrors: [**Netlify**](https://d2pfx.netlify.app/), [**Vercel**](https://d2pfx.vercel.app/), [**Onrender**](https://d2pfx.onrender.com/)
> [Mirror status checker](https://github.com/h6rd/Dota2PornFxStatus#live-status)