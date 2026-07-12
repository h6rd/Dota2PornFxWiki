# Is it safe?

## Is it safe to use mods?
**Yes, using cosmetic mods is safe.** Valve allows the use of modifications that only change local client files (models, textures, icons, sound effects) — this is documented [here](https://dota2.fandom.com/wiki/Ban#Exceptions).

::: tip Note
Cosmetic modifications affect only your local client. They provide no gameplay advantages and do not change the game logic on the server.
:::

---

## Comparison with other changers
There are various approaches to modifying Dota 2. Understanding how these tools work will help you make an informed choice in favor of safety.

| Modification type | Method | Risk |
| :--- | :--- | :--- |
| **.vpk resources (our method)** | Uses the game's standard resource-loading system (vpk only) | Minimal |
| .vpk and signature modification | Modifies dota.signatures and gameinfo files | Low |
| Process injection | Injects code directly into the game's memory | High |

::: tip Note
Even though popular changers work by modifying signatures, no bans have been recorded over 8-9 years of use.
:::

### Features of our approach
Most third-party item changers modify the `items_game.txt` file. This requires manipulating signatures, which Valve may classify as tampering.

**Advantages of our mods:**
* We don't touch the game's executable files or modify signatures.
* Our mods don't stop working after Dota 2 updates, since they aren't tied to hardcoded addresses.
* Modifications load similarly to official localization packages (voiceovers), using vpk.