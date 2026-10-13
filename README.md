# What Should I Watch?

Live page: https://claude.ai/artifact/9Gpo8MSeckWPfQdiYDxhya (private until you share it)

## Files
- `index.html` — the page. **All question wording is in the `QUESTIONS` block at the top of the script.** Change labels (`l`) and descriptions (`d`) freely; the `v` values are what titles are tagged with.
- `catalog.json` — 226 titles with mood/genre/setting tags, Rotten Tomatoes critics score, awards, and US streaming availability (checked on JustWatch, dated in `catalogDate`).
  - `img` — poster or title-card image from Wikipedia (199 titles; `null` shows an initials placeholder). Claude's artifact viewer blocks outside images, so posters only appear on the Vercel site.
  - `stars` — up to 3 "Featured stars": top-billed actors/directors who've won or been nominated for an Oscar or Emmy (`n` name, `r` role, `a` highest honor). Spot-checked against Wikipedia, October 2026.
- `build.js` / `vercel.json` — Vercel build step that wraps `index.html` in a full HTML page.

## How picks are chosen
1. **Filters:** how much time you have (30 min = short-episode series, 1 hr = series with up to 65-min episodes, movie = movies, all night = anything). Half-watching removes subtitled and very complex titles. Anything you've thumbed or skipped is removed.
2. **Score:** matches on how you want to feel (strongest), your genre and setting picks, and your vibe; plus RT score, awards, easy "comfort" picks when half-watching, a boost for titles on your services, and what you've taught it with 👍/👎.
3. **Variety:** the three picks avoid repeating the same genre, unless that's the genre you asked for.
4. **Thumbs:** 👍 "loved it" and 👎 "not for me" replace the card and shift future picks toward or away from similar tags. Memory is per device and browser.

## Group mode (Multiviewer)
Tap **👥 Group** (or "Try Group mode" under question 1) to decide with 2–4 people on one phone.
1. **Who's watching?** Pick 2–4 people and (optionally) names.
2. **Answers.** The phone is passed around; each person answers the 5 questions privately.
3. **The 15.** Built for everyone at once. The shortest time and lowest attention anyone chose are hard limits. Each title is scored for each person and averaged, minus a penalty for disagreement, so polarizing picks drop. Variety rules keep it from being all one genre.
4. **Voting.** Each person votes 👍 Yes / 😐 Meh / 👎 No (or 👀 Seen it) on all 15, privately.
5. **Top 5.** Happiness score per title: 👍 +2, 😐 +0.5, 👎 −4, seen 0. Ties go to fewer 👎. Titles everyone said no to never appear. Each pick shows how everyone voted, and "Everyone's happy ✓" when nobody voted 👎.
6. **Vote on 15 more** starts a fresh round with no repeats.

The group session is saved in the browser (`wtw.group`), so refreshing mid-vote picks up where you left off. It's one plain object (people, answers, votes, candidates), so a future "join from your own phone" version only needs to sync it through a small online database. Group votes never change your solo thumbs history.

## Refreshing
Streaming deals change monthly. Ask Claude to "refresh the watch catalog" to re-check availability, and to add titles.
