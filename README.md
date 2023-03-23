# EF Digital - Maria Gromovaja's Frontend Technical Test

## My Approach

I've started by working on a layout & making the data show up on the page. Step by step, I got the program result cards to come together, and then moved on to filtering. At that point, I was pretty content with how it was coming together, as the functionality, styling & testing was moving along hand in hand.

Then I looked at the time and the adrenaline kicked in. Eventually, I managed to finish what I started but I certainly wish I had done more.

Now, looking at the mobile version does make my eyes bleed. As it was mentioned in the brief that the majority of the userbase in on desktop, I started with a desktop-first approach and, regrettably, ran out of time before I could tackle smaller resolutions.

Sorting was the last feature that I tried to tackle, evident by no styling nor tests for it, as well as the messy code. I had very little time left for it (15 min?) and decided to just make it work before it all comes to an end. I think I did.

### Testing

I tested components as I was making them, making it easy to keep on top of it. If I had more time, I would have done more component testing (sorting in particular), including unit tests for my hooks, as well as integration/e-to-e testing.

### To Improve On

- Finish my work on sorting (tests & styling)
- `sortedPrograms` in `Programs.tsx` needs some love (refactoring & extraction) as it was done in a haste
- Responsiveness of the page!
- `clearSort` function
- Lacking in accessibility
- Pagination
- Having i18next module and using `t(element.label)` in order to provide room for another languages
- CI/CD

### Conclusion

It was a fun test and I thoroughly enjoyed the challenges I've encountered. I don't think I've felt this much adrenaline in awhile, as I wanted to do way more but was running out of time. I am fairly happy with the result (if that's ever possible), though very regretful I couldn't do a few features mentioned in the brief.

P.S. I hope writing the readme doesn't count towards the test's time limits, I got a bit carried away :)

## Instructions

1. Install the dependencies
2. `node backend/index.js` to run backend
3. `npm start` to run the app in dev
4. [http://localhost:3000](http://localhost:3000) to view it in the browser
