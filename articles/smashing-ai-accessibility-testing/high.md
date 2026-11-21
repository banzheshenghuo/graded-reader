Lately, I've been thinking and writing a lot about what AI is doing to product development, and what that means for accessibility. The thing that has my wheels turning is a result from Level Access's 2026 accessibility report. Basically: AI is helping us hit fast-forward on the build, but testing practices haven't kept up.

We asked more than 2,500 professionals where they noticed AI was speeding up their work in the SDLC. Most said they noticed gains in planning (58%), design (61%), and development (51%). But QA and testing lagged behind: only 30% said AI had sped up that stage.

These results point to a two-speed workflow. AI has turbocharged design, planning, and development, while checking and validation are still running at a very different pace. This means a lot of teams are likely racing through the build, then must stop the moment someone has to answer a basic question: can people with disabilities actually use this?

It has always been treated as a slow point in QA, and AI is pushing far more work into it, faster. If your team already acts early, you're off to a good start. But AI has changed the order of the work, so even teams that act early need to work out where those first checks belong now.

This matters because right now the web is moving in the wrong direction. WebAIM's latest scan of the top million home pages found that automatically detected errors per home page rose 10.1% in a year, from 51 to 56.1 per page. WebAIM named AI-assisted coding as one possible cause.

So how do we get checking up to speed? How do we keep people making the calls as AI keeps pushing the pace?

**AI isn't the biggest differentiator**

We looked at the organizations that are improving across every accessibility metric they track (a group we call the "improvers") to find out what they're doing differently.

Here's what stood out: AI adoption made the smallest difference of anything we measured. Improvers use AI at a similar rate to everyone else we surveyed. Their edge shows up in how grown-up their wider habits are — training, communication, and a culture of caring about disabled users.

A quick caveat: this is survey data, so it only shows correlation, and mature programs may simply be better at tracking and reporting their wins. Even so, this result was hard to ignore.

And it got even more interesting. Professionals in mature accessibility programs were nearly six times as likely to say AI helps them prioritize issues. They were also nearly three times as likely to say it helps them deal with accessibility problems earlier.

In other words, AI works best as an amplifier of a strong program. With enough background, tests, and clear limits in place, agents can take on a large share of the work from first draft to running the system, and much of the time lost to waiting and passing work around goes away. People stay responsible for deciding what to build and for approving what ships.

So let me ask you: when it comes to accessibility, where does human judgment sit in your workflow today? Not sure? Here's a quick way to find out. Not sure? Here's a quick test. Pick a feature you shipped recently and trace it from the first Figma frame to production. Mark every moment a person decided whether it would work for someone using a keyboard, a screen reader, or a browser zoomed to 400%.

How many marks did you get? If most of them cluster at the end of creation, you're likely heading to one of two places: you'll either ship accessibility barriers or spend the time you saved early on fixing them later, when they're harder and take longer to fix.

**Build the judgment calls into your workflow**

As AI takes on more work, people need to stay involved at three points: finding issues, fixing them, and documenting the evidence. Each one plugs into a step your team already takes, like a handoff, a pull request, or a review, so nothing new gets added to the timeline.

**1. Find: catch issues while the work is still warm**

Fresh details are lost fast. Put the first checks as close to the building work as you can.

**2. Fix: act before the context goes cold**

Found the problem? Great. Fix it while it's fresh. When issues end up as tickets, make sure the context travels with them. They should carry the part of the page, how to repeat the problem, the WCAG rule it breaks, a suggested fix, and the link to the pull request.

**3. Prove: leave a receipt**

The worst time to start gathering evidence is when somebody's asking for it. Every check, fix and decision should ideally leave a mark. A fix is done only when a test fails if the problem comes back. Ask your AI assistant to write the test that guards the fix. That is the receipt.

A passing test shows a known issue hasn't returned. It does not show the experience works. For what a machine cannot check, add a short note to the pull request: what you tested, with which helping tool, and any decisions you made.

**Keep the speed: move the judgment with it**

AI has given digital creation a speed boost, but validating the work hasn't kept pace. Closing that gap isn't about adopting more AI in more places or abandoning the toolset that helped make your team faster. The opportunity is to build the practice around that toolset, so that human judgment is flagged, embedded and acted on earlier, and more often.
