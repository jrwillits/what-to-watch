# What Should We Watch?

Live page: https://claude.ai/artifact/9Gpo8MSeckWPfQdiYDxhya (private until you share it)

## Files
- `index.html` — the page. **All question wording is in the `QUESTIONS` block at the top of the script.** Change labels (`l`) and descriptions (`d`) freely; the `v` values are what titles are tagged with.
- `catalog.json` — 226 titles with mood/genre/setting tags, Rotten Tomatoes critics score, awards, and US streaming availability (checked on JustWatch, dated in `catalogDate`).

## How picks are chosen
1. **Filters:** how much time you have (30 min = short-episode series, 1 hr = series with up to 65-min episodes, movie = movies, all night = anything). Half-watching removes subtitled and very complex titles. Anything you've thumbed or skipped is removed.
2. **Score:** matches on how you want to feel (strongest), your genre and setting picks, and your vibe; plus RT score, awards, easy "comfort" picks when half-watching, a boost for titles on your services, and what you've taught it with 👍/👎.
3. **Variety:** the three picks avoid repeating the same genre, unless that's the genre you asked for.
4. **Thumbs:** 👍 "loved it" and 👎 "not for me" replace the card and shift future picks toward or away from similar tags. Memory is per device and browser.

## Refreshing
Streaming deals change monthly. Ask Claude to "refresh the watch catalog" to re-check availability, and to add titles.
