# How to Upload Your Mod

## Mod Requirements
For your mod to be published on the website, it must meet the following requirements.

### 1. Authorship
**You must be the author of the mod.**

You are considered the author if you made the mod from scratch. If you took someone else's ready-made files and simply modified them to suit yourself, you are not the author, and the original author's permission is required for publication.

You may use part of someone else's mod only with the author's permission—proof is required (a screenshot of the conversation, a comment, etc.).
- The second author is listed as a co-author. **Provided that the author agrees to this**

::: tip Mod from dota2skinchanger
If the mod is taken from dota2skinchanger, the original author will be listed on the page, while you will be credited as the modder.
:::

::: warning Not Accepted
Mods created by Darkness (dota2skinchanger) are not accepted for publication.
:::

::: tip Duplicate Submissions
If the same mod is submitted by two people, the earlier submission will be uploaded, or the more complete one.
:::

#### Modified Versions of Other Authors' Mods
Minor edits to someone else's mod do not count as original work. These include:
- changing the color, hue, brightness, or saturation of effects, models, or textures (recoloring);
- replacing a few textures, icons, or sounds in a finished mod;
- renaming the mod or its files, or repackaging the archive without substantial changes.

::: warning Not Accepted
Mods that are someone else's work with minor edits (above all, recolors) are not accepted as original, **even if you credit the original author**, unless you have their permission.
:::

If you want to publish a recolor or an extension of someone else's mod:
1. Get the original author's permission and keep proof of it (a screenshot of the conversation, a comment, etc.).
2. Attach the proof in the [pull request](https://github.com/h6rd/Dota2PornFxData/pulls) for your mod, or send it in a DM to the Discord server owner.
3. The mod will be published with the original author credited, and you will be listed as co-author / modder.

An extension counts as substantial if you made a significant original contribution: new models, effects, animations, or other original content. The moderation team makes the final decision.

#### Mods Built with Builders
If a mod is assembled with a builder (an online service or program) that outputs a ready-made `.vpk`, for example dota-studio, the author of the builder is considered the author of the mod. Choosing images, settings, or ready-made presets in a builder is not the same as making a mod.

- The mod page will credit the builder's author, and you will be credited as the modder (the same as for mods from dota2skinchanger).
- Presenting such a mod as your own work is a violation of the authorship rules.

#### Simple Works (CSS, buttons, etc.)
For small works, such as a play button made of a single CSS file, it is hard to prove copying, so the result is judged rather than the intent. If a work differs from an already published one only in color values, sizes, or other minor parameters, it is treated as a recolor and is not accepted without the original author's permission. Works with a clearly different design are accepted: a different shape, structure, animation, or behavior.

The moderation team may ask for proof of authorship.

::: warning Consequences
Passing off someone else's mod as your own will result in the submission being rejected. If this is discovered after publication, the mod will be removed.
:::

::: danger Respect Others' Work
A mod is hours, sometimes days, of work. It's really frustrating to spend that much time on a mod, only for someone to recolor it and pass it off as their own. That is a direct sign of disrespect toward the author.

Every case like this makes people less willing to share their work, and the whole community loses out. If you like a mod, message the author, ask for permission to edit it, and say thanks. It takes a minute. And if you make something of your own, you'll have something to be proud of instead of someone else's work in a different color.
:::

### 2. Name
The mod name must be in English.

If the mod is intended for a hero, such as a model, sound, or effect mod, the hero's name must be included in the mod name.


### 3. Preview
The mod must have a preview image.

Previews must be consistent in style with the works already published on the website. Previews of hero mods must not contain unrelated images/elements (if the hero doesn't fit on the screen, a screenshot from a demo with `hud_toggle_visible` is allowed).

| Mod Type | Preview Requirement |
| :--- | :--- |
| Hero mod | In-game screenshot without UI elements, as shown on the website |
| Sound mod | Video demonstrating the change, preferably |


### 4. File Cleanliness
The mod must not contain unnecessary or uncompiled files.

::: warning Not Accepted
Mods containing the `items_game.txt` file will not be accepted.
:::

#### Advertising and Watermarks
Advertising in mods is prohibited, including links, Telegram usernames, and any other contact details.

The exception is an author watermark used to protect against theft. It is allowed only in the hero's loadout menu and must not appear in the game itself.

### 5. Functionality
The mod must be functional and free of major bugs.

- If the item is simple, it must include visual effects on the model (see the guides section for how to do this).
- If the item or set changes ability icons and effects, these must also be included in the mod and function correctly.

It is recommended to test the mod several times before submitting it, so that it won't need to be updated later.

Each mod is reviewed individually, and the moderation team reserves the right to reject a mod with a reason provided.

---

## Preparing the Mod: PreMod Script
For easier packaging, I recommend using the **[PreMod](https://github.com/h6rd/PreMod/releases)** script.

::: tip How to Use
1. Place the mod image and `.vpk` file next to the script.
2. Run the script - it will ask you to enter the mod name.
3. The result will be a ready-made `.zip` archive.
:::

## Uploading the Mod

Mods are uploaded through the website:

1. Go to the [link](https://h6rd.github.io/Dota2PornFxWeb/upload.html).
2. Fill in the required fields.