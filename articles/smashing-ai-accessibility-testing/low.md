AI is speeding up the work of building things. But testing has not kept up.

I looked at a survey of more than 2,500 people who work in tech. They told us where they felt AI was saving time. Planning was 58%, design was 61%, building things was 51%. But quality checking (QA) was only 30%.

So work is moving at two speeds. AI sped up design, planning, and coding. But checking has not sped up. Many teams rush through the build. Then they have to stop the moment someone asks: "Can people with limited ability use this?"

Making pages easy for everyone has always been slow work. AI pushes much more work into it. Even teams that already act early need to think again: where should the first checks go now?

This matters because the web is getting worse for people with limited ability. WebAIM (a group that checks web pages) looked at the top one million pages. The number of errors found by their tools went up 10.1% in a year, from 51 to 56.1 per page. One possible reason, they said, is AI-assisted programming.

So how do we get checking moving faster? How do we keep human decisions in the process while AI keeps speeding things up?

**AI is not the big difference**

We looked at the companies that are getting better at everything they measure (call them the "improvers"). We wanted to know what they do differently.

Here is the surprise. Using AI made the smallest difference of all. Improvers use AI about the same as everyone else. Their edge is in how strong their wider habits are — training, sharing, and caring about making pages easy.

A quick note: this is survey data, so it only shows a link, not a reason. But even so, this was hard to ignore.

It gets better. People in strong teams were almost six times as likely to say AI helps them pick which problems to fix first. They were almost three times as likely to say it helps them act earlier.

In other words, AI works best when the program is already strong. With clear rules and tests, AI can do much of the work. That runs from the first try to running the system. Much of the time lost to waiting and passing work around goes away. People still decide what to build and what to ship.

**Do people decide things early in your process?**

Not sure? Here is a quick test.

Pick a feature you shipped recently and follow it from the first design to the finished product. Mark every moment a person decided whether it would work for someone using a keyboard, a screen reader, or their browser at 400% zoom.

How many marks did you get? If most of them sit at the end, you will likely land in one of two places: you will ship barriers for people with limited ability, or you will spend the time you saved early on fixing them later — when it is harder and takes more time to fix.

**Build the decisions into your process**

As AI takes on more work, people need to stay involved at three points: finding problems, fixing them, and leaving a record. Each one fits into a step your team already takes — a pull request or a review. So nothing new gets added to the schedule.

**1. Find: catch problems while the work is still fresh**
Fresh details are lost fast. Put the first decisions as close to the building work as you can.

**2. Fix: act before the context goes cold**
Found the problem? Fix it while it is fresh. When problems become tickets (small tasks), make sure the context travels with them. They should carry the part of the page, how to repeat the problem, the rule it breaks, a suggested fix, and the link to the pull request.

**3. Prove: leave a receipt**
The worst time to start collecting facts is when somebody asks for them. Every check should leave a mark. A fix is done only when a test fails if the problem comes back. Ask your AI assistant to write the test that keeps the fix in place. That is the receipt.

A passing test shows a known problem has not returned. It does not show the experience works. For what a machine can't check, add a short note to the pull request: what you tested, with which assistive technology (tools that help people with limited ability use a computer).

AI has sped up building, but checking the work hasn't kept up. Closing that gap is not about using more AI. It is not about giving up the tools that made your team faster. The chance is to build a habit around those tools. Then people decide earlier and more often.
