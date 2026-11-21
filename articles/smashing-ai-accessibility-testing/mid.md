Lately I have been thinking and writing a lot about what AI is doing to product development, and what that means for disabled users. What keeps me thinking is a result from Level Access's 2026 accessibility report. Basically: AI is helping us hit fast-forward on the build, but testing practices have not kept up.

We asked more than 2,500 professionals where they noticed AI speeding up their work. Most said planning (58%), design (61%) and development (51%). But QA and testing lagged behind: only 30% said AI had sped up that stage.

These results point to two speeds of work. AI has turbocharged design, planning and development, while checking and reviewing run at a very different pace. Many teams race through the build, then must stop the moment someone has to answer a basic question: can people with disabilities actually use this?

It has always been treated as a slow point in QA, and AI is pushing far more work into it, faster. If your team already acts early, you are off to a good start. But AI has changed the order of the work, so even teams that act early need to work out where those first checks belong now.

This matters, because the web is getting worse. WebAIM's latest scan of the top million home pages found that automatically detected errors per page rose 10.1% in a year, from 51 to 56.1. WebAIM named AI-assisted coding as one possible cause.

So how do we get checking up to speed? How do we keep people making the calls as AI keeps pushing the pace?

**AI isn't the biggest differentiator**

We looked at the teams that are improving on every measure they track, a group we call the "improvers", to find out what they do differently.

Here is what stood out: AI adoption made the smallest difference of anything we measured. Improvers use AI at a similar rate to everyone else. Their edge shows up in how grown-up their wider habits are — training, communication, and a culture that cares about disabled users.

A quick caveat: this is survey data, so it only shows correlation, and mature programs may simply be better at tracking and reporting their wins. Even so, this result was hard to ignore.

It got even more interesting. Professionals in strong programs were nearly six times as likely to say AI helps them prioritize issues. They were also nearly three times as likely to say it helps them deal with those problems earlier.

In other words, AI works best when the program is already strong. With enough background, tests and clear limits in place, agents can take on a large share of the work, and much of the time lost to waiting and passing work around goes away. People stay responsible for deciding what to build and for approving what ships.

So let me ask you: where do people make the calls about disabled users today?

Not sure? Here is a quick way to find out. Pick a feature you shipped recently and follow it from the first design step to production. Mark every moment a person decided whether it would work for someone using a keyboard, a screen reader, or a browser at 400% zoom.

How many marks did you get? If most of them cluster at the end, you are likely heading to one of two places: you will ship pages that keep people out, or you will spend the time you saved early on fixing them later, when they are harder and take longer to fix.

**Build the decisions into your work**

As AI takes on more work, people need to stay involved at three points: finding problems, fixing them, and writing down the proof. Each one fits into a step your team already takes, like a pull request or a review, so nothing new gets added to the schedule.

**1. Find: catch issues while the work is still warm**

Fresh details are lost fast. Put the first checks as close to the building work as you can.

**2. Fix: act before the context goes cold**

Found the problem? Fix it while it is fresh. When issues end up as tickets, make sure the context travels with them. They should carry the part of the page, how to repeat the problem, the WCAG rule it breaks, a suggested fix, and the link to the pull request.

**3. Prove: leave a receipt**

The worst time to start gathering evidence is when somebody is asking for it. Every check should leave a mark. A fix is done only when a test fails if the problem comes back. Ask your AI assistant to write the test that guards the fix. That is the receipt.

A passing test shows a known problem has not come back. It does not show the experience works. For what a machine cannot check, add a short note to the pull request: what you tested, with which assistive technology, and any judgment calls you made.

**Keep the speed: move the judgment with it**

AI has sped up building, but checking the work has not kept up. Closing that gap is not about adopting more AI or abandoning the tools that made your team faster. The chance is to build the habit around those tools, so that people make the calls earlier, and more often.
