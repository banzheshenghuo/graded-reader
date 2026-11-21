Lately, I’ve been thinking and writing a lot about what AI is doing to product development, and what that means for accessibility. The thing that has my wheels turning is a finding from Level Access’s 2026 State of Digital Accessibility Report. Basically: AI is helping us hit fast-forward on the build, but testing practices haven’t kept up.

We asked more than 2,500 professionals where they noticed AI was speeding up their work in the SDLC. Most said they noticed gains in planning (58%), design (61%), and development (51%). But QA and testing lagged behind: Only 30% said AI had sped up that stage.

These results point to a two-speed workflow. AI has turbocharged design, planning, and development, while checking and validation are still running at a very different pace. This means a lot of teams are likely racing through the build, then being forced to hit the brakes the moment someone has to answer a pretty fundamental question: Is this thing actually accessible?

Accessibility has historically been treated as a QA bottleneck, and AI is pushing far more work into it, faster. If your team has already shifted left on accessibility, you’re off to a good start. But AI has reshuffled the workflow, so even proactive teams need to work out where those early checks belong now.

This matters because right now, the web is moving in the wrong direction. WebAIM’s latest scan of the top million home pages found that automatically detected errors per home page rose 10.1% in a year, from 51 to 56.1 per page. WebAIM cited AI-assisted coding as one possible contributing factor.

So how do we get validation out of first gear? How do we build human judgment into the workflow as AI keeps pushing the pace?


## AI Isn’t The Biggest Differentiator

We looked at the organizations that are improving across every accessibility metric they track (a group we call the “improvers”) to find out what they’re doing differently.

Here’s what stood out: AI adoption made the smallest difference of anything we measured. Improvers use AI at a similar rate to everyone else we surveyed. Their edge shows up in the maturity of their surrounding accessibility practices — things like training, communication, and a culture of accessibility.

A quick caveat: This is survey data, so it only shows correlation, and mature programs may simply be better at tracking and reporting their wins. Even so, this finding was hard to ignore.

And it got even more interesting. Professionals in mature accessibility programs were nearly six times as likely to say AI helps them prioritize issues. They were also nearly three times as likely to say it helps them tackle accessibility more proactively in development.

In other words, AI works best as an amplifier of a strong program. With context, testing, environments, and guardrails in place, agents can take on a large share of the work from drafting through to operations, and much of the time lost to waiting and handoffs goes away. People stay responsible for deciding what to build and for approving what ships.

So let me ask you: When it comes to accessibility, where does human judgment sit in your workflow today?

Not sure? Here’s a quick way to find out.

Pick a feature you shipped recently and trace it from the first Figma frame to production. Mark every moment a person decided whether it would work for someone using a keyboard, a screen reader, or their browser at 400% zoom.

How many marks did you get? If most of them cluster at the end of creation, you’re likely heading to one of two places: You’ll either ship accessibility barriers or spend the time you saved upstream fixing them later, when they’re harder and costlier to fix.

Here’s how to avoid both outcomes by building the right accessibility checks and judgment calls into the work your team is already doing.


## Build The Judgment Calls Into Your Workflow

As AI takes on more work, people need to stay involved at three points: finding issues, fixing them, and documenting the evidence. Each one plugs into a step your team already takes, like a handoff, a pull request, or a review, so nothing new gets added to the timeline, and accessibility keeps pace with the work that’s in motion.


### 1. Find: Catch Issues While The Work Is Still Warm

Context fades fast. Put the first judgment checkpoints as close to the creation work as you can:


### 2. Fix: Act Before The Context Goes Cold

Found the issue? Great. Fix it while it’s fresh. When issues end up as tickets, make sure the context travels with them. They should carry the element, the repro, the related WCAG criterion, a suggested fix, and the PR link, so context doesn’t leak.


### 3. Prove: Leave A Receipt

The worst time to start gathering evidence is when somebody’s asking for it.

Every check, fix, and judgment call throughout the process described above should ideally leave a trail. A fix isn’t done until something fails if the issue comes back. Ask your AI assistant to write the regression test with the fix and put the finding link and any judgment call in the PR description. That’s the receipt.

A passing test shows a known issue hasn’t returned. It doesn’t show the experience works. For what automation can’t cover, add a short note to the PR: what you tested, with which assistive technology, and any judgment calls you made.


## Keep The Speed: Move The Judgment With It

AI has given digital creation a speed boost, but broadly speaking, validating the work hasn’t kept pace. Closing that gap isn’t about adopting more AI in more places or abandoning the toolset that helped make your team faster.

According to our data, the opportunity in front of teams is to build the practice around that toolset, so that human judgment is flagged, embedded, and acted on earlier, and more often.

We’ve only scratched the surface of what our data tells us about AI and accessibility. If you’re curious about what else we found, check out the 2026 State of Digital Accessibility Report. There’s plenty more to unpack.