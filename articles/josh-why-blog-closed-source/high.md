One of my New Year's resolutions this year was to blog more. I rebuilt the blog from the ground up. Here is a before/after.

There were a lot of goals in this rebuild, but the main one was to give me a platform I could use in a more serious way. Even though it's still a personal blog, I wanted it to feel more like a community resource, something people come to trust as a good source of quality tutorials and articles.

A big part of this goal is to publish regularly! I've set a goal of at least 1 post a week. Since launch, I've managed to keep to this goal, and I'm hoping to keep the trend going. This current self-indulgent blog post in particular doesn't count towards that goal 😅

Most of the changes have been embraced by my readers, there's been one change that has surprised a few people: my new blog is not open-source. I've gotten a lot of questions about this, and thought it would be good to address this, and share some of my reasoning.

## Lower friction

A big part of it is about friction. To keep my speed of new posts high, I need publishing to be as easy and smooth as possible. Having an open-source blog would add friction in a few ways.

## Source control

My blog uses MDX, a special version of Markdown that lets me embed React parts. The posts are kept in a Git repository rather than stored in a CMS.

Each post has an isPublished boolean in its frontmatter. At any given moment, I have between 1 and 5 draft posts. Sometimes a draft lasts for weeks before I finish it and publish it!

If this blog was open-source, all those drafts would be public. I don't like that. I want to control when a post goes live!

There are solutions for this; I could keep the posts in a separate repo, or use Git submodules. It would complicate my process. And the more complicated the process is, the less motivated I'll be to work on it.

## Code standards

For an upcoming post, I built a small Venn diagram component.

This component is not particularly well-built. It only takes two circles, and I can't control the ratio between them. I haven't tested it with long or short strings.

Since it's closed-source, none of that matters to me. But if it was open, people would want to grab it to use in their own projects. I'd feel a responsibility to make sure it works well, or at least to write down what it does badly. And I don't want that right now.

## Copycats

A while ago, I offered to review developer portfolios for people early in their careers on social media. I got several hundred requests.

I discovered a trend: some developers were blatantly copying popular portfolios. For example, check out this beautiful portfolio by Brittany Chiang.

I got three submissions that were identical to this. I don't mean they were just inspired. I mean they copied the code, swapped the name and projects, and called it done.

The code has a MIT license, so these copycats weren't violating any rules or laws. But it makes me sad to see someone else take credit for the amazing work Brittany did. Even if you add a note saying 'made by Brittany', most people will never see it. The problem with putting a whole project on Github is that it's so easy to copy it, change a few things, and ship it. I could use a strict license, but do I really want to track and enforce that?

It's strange, because I actually like the idea of people taking parts of this website. For example, I have a small component that lets me add moving sparkles to any text, and I wrote a post that shares how it works. It's been great to see that some people take this effect and use it in their own work. But it's different when it's literally the whole project.

I offered to review portfolios in the first place because it's something I've learned quite a bit about. I've been involved in hiring for several companies, and I've worked part-time for a couple years as a career coach.

I've compiled everything I've learned into a 70-page book aimed at helping aspiring developers land their first or second job in the field.

## Security

When I relaunched my blog, it came with a cute feature: the ability to "like" articles.

Like claps on Medium, you can "like" an article multiple times, up to 16 times.

I added this feature because I thought it would be cute; it doesn't really do anything. Unlike on a platform like Medium, I'm the only author here, so there's no algorithm I'm trying to game in order to give my posts a leg up.

A couple of days after the launch, I woke up to something startling:

The post had only received a few hundred visitors, so this number made no sense. I dug into the data, only to find I had been hacked!

Remarkably, the culprit was prolific feature-uncoverer, rogue hacker, and all-around badass Jane Manchun Wong!

This was a delightful surprise, but it was a little eye-opening. I use serverless functions for all the behind-the-scenes code, and I pay per use. Someone could cost me a lot of money if they decided to attack my servers!

I did some research and added some safeguards, but this is not my area of expertise. If I did open-source the code, it would make it easier for bad actors to find weak spots in my servers.

## The workaround

For these reasons, I'm going to keep my blog closed-source. But, if you spot something on this blog and want to know how it works, I have good news for you! I've enabled sourcemaps.

If you're not familiar, sourcemaps allow the browser to load the original unminified code.

In Chrome, you can open the developer tools and go to the Sources tab. You can either look through the files like you would on your own computer, or search for a file by name.

If you have any questions about how something works, feel free to reach out on Bluesky or contact me. I can't promise I'll be able to offer a detailed answer, but I'll try to point you in the right direction.
