One of my New Years resolutions this year was to blog more. I rebuilt the blog from the ground up. Here's a before/after:

There were a lot of goals in this rebuild, but the main one was to give me a platform I could use in a more serious way. Even though it's still a personal blog, I wanted it to feel more like a community resource, something people come to trust as a good source of quality tutorials and articles.

A big part of this goal is to publish regularly! I've set a goal of at least 1 post a week. Since launch, I've managed to keep to this goal, and I'm hoping to keep the trend going.*This current self-indulgent blog post in particular doesn't count towards that goal 😅 I launched “Incredimental Builds” earlier this week!

While most of the changes have been embraced by my readers, there's been one change that has surprised a few people: my new blog is not open-source. I've gotten a lot of questions about this, and thought it would be good to address this, and share some of my reasoning 🙂


## Link to this headingLower friction

A big part of it is around friction. In order to keep my velocity of new posts high, I need publishing to be as effortless and friction-free as possible. Having an open-source blog would add friction in a few ways.


### Link to this headingSource control

My blog uses MDX(opens in new tab), a fancy version of Markdown which lets me embed React components. The posts are checked into the Git repository rather than stored in a CMS.

Each post has an isPublished boolean in its frontmatter. At any given moment, I have between 1 and 5 draft posts. Sometimes a draft lasts for weeks before I get around to finishing and publishing it!

If this blog was open-source, all of those drafts would be public. I don't like this idea 😅 I want to control when a post is publicly available!

There are solutions for this; I could keep the posts in a separate repo, or use Git submodules**shudder*. It would complicate my process though. And the more complicated the process is, the less motivated I'll be to work on it.


### Link to this headingCode standards

For an upcoming post, I built a little VennDiagram component:

This component is not particularly well-built; for one thing, it's not very flexible. It only takes 2 circles, and I can't control the ratio between them. I haven't tested it with long or short strings.

Since it's closed-source, none of that matters to me. But if it was open, folks would want to grab it to use in their own projects. I'd feel a certain responsibility to make sure that it works well, or at least to make sure that its shortcomings are well-documented. And I don't want that responsibility right now.


## Link to this headingCopycats

A while ago, I offered to review developer portfolio websites for folks early in their career on social media. I got several hundred requests 😬

I discovered a trend: some developers were blatantly copying popular portfolios. For example, check out this beautiful portfolio(opens in new tab) by Brittany Chiang:

I got three developer submissions that were identical to this. I don't mean that they were heavily inspired, I mean that they forked the repo, swapped out the name and projects, and called it done.

The repo(opens in new tab) has an MIT license, so these portfolio copycats weren't violating any rules or laws or anything… But it makes me sad to see someone else try to take credit for the amazing work Brittany did (even if you add attribution on Github or in the site's footer or something, most folks will never see that).

The problem with dumping a whole project on Github is that it's so easy to fork it, change a few things, and ship it. I could use a restrictive license, but do I really want to try to track / enforce license violations?

It's ironic, because I actually really like the idea of people taking and using parts of this website; for example, I have a nifty lil’ component which allows me to add animated sparkles to any chunk of text, and I wrote a blog post that shares exactly how it works. It’s been awesome seeing that some folks will grab this effect and use it in their own work! But it's different when it's literally the whole project.

I offered to review portfolio websites in the first place because it's something I've learned quite a bit about. I've been involved in hiring for several companies, and I've worked part-time for a couple years as a career coach.

I've compiled everything I've learned into a 70-page book aimed at helping aspiring developers land their first or second job in the field. You can read it for free(opens in new tab).

There's also the fact that a forked open-source repo is forever out of your control, which can be problematic. Blogger Tania Rascia(opens in new tab) has written:

I'm realizing that having my entire website including all my writing public and open source in a single repo you can fork was a bad idea, based on how many people fork the site and just leave all my posts and personal information in there.

People can still create copies of the pages on my blog, but forking makes it way easier / more likely (and those forks are public by default).


## Link to this headingSecurity

When I relaunched my blog, it came with a nifty feature: the ability to “like” articles:

Like Medium claps, you can “like” an article multiple times, up to 16 times.

I added this feature because I thought it would be cute; it doesn't really do anything. Unlike on a platform like Medium, I'm the only author here, so there's no algorithm I'm trying to game in order to give my posts a leg up. I suppose it does help me learn which posts are valuable to you folks, though I suspect the signal-to-noise ratio is very low (if my post starts trending on link aggregators, for example, the like-ratio plummets).


### Link to this headingHacked!

A couple days after the launch, I woke up to something rather startling:

The post had only received a few hundred visitors, so this number made no sense. I dug into the data, only to find that I had been hacked!

Remarkably, the culprit was prolific feature-uncoverer, rogue hacker(opens in new tab), and all-around badass Jane Manchun Wong!

This was a delightful surprise, but it was a little eye-opening; I'm using serverless functions for all backend code, and I pay per-invocation (both in terms of the functions and the database calls). Someone could cost me quite a bit of money if they decided to DDOS my endpoints!

I did some research and added some safeguards, but this is not my area of expertise; if I did open-source the codebase, it would make it easier for bad actors to find potential flaws in my API endpoints.


## Link to this headingThe workaround

For these reasons, I'm going to keep my blog closed-source. But, if you spot something on this blog and want to know how it works, I have good news for you! I’ve enabled sourcemaps. 😄

If you’re not familiar, sourcemaps allow the browser to load the original unminified code:

In Chrome, you can open the developer tools and navigate to the “Sources” pane. You can either browse the files like you would in your local filesystem, or you can search for a file by name using Ctrl + O.

If you have any questions about how something works, feel free to reach out on Bluesky(opens in new tab) or contact me(opens in new tab). I can't promise I'll be able to offer a detailed answer, but I'll try to point you in the right direction.


### Last updated on

September 26th, 2026


### # of hits