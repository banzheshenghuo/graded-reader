One of my New Year's resolutions this year was to write more blog posts. So I rebuilt the blog from the ground up. Here is a before and after.

There were many goals in this rebuild, but the main one was to give me a platform I could use in a more serious way. Even though it is still a personal blog, I wanted it to feel more like a community resource, something people come to trust as a good source of quality tutorials and articles.

A big part of this goal is to publish regularly. I set myself a goal of at least one post a week. Since launch, I have managed to keep to this goal, and I hope to keep the trend going. This current post does not count towards that goal!

Most of the changes have been well received by my readers. But there has been one change that surprised a few people: my new blog is not open-source. I have gotten a lot of questions about this, so I thought I would address it and share some of my reasons.

## Make it smooth

A big part of it is about friction. In order to keep my speed of new posts high, I need publishing to be as easy and smooth as possible. An open-source blog would make things harder in a few ways.

## Source control

My blog uses MDX, a special version of Markdown that lets me put React parts right into my posts. The posts are kept in a Git repository rather than in a content system.

Each post has a "published" flag. At any moment, I have between one and five draft posts. Sometimes a draft sits for weeks before I finish it and publish it.

If this blog was open-source, all those drafts would be public. I do not like that. I want to control when a post goes live!

There are ways to fix this. I could keep posts in a separate place, or use Git submodules. But that makes my process more complex. The more complex it is, the less I feel like working on it.

## Code quality

For an upcoming post, I built a small Venn diagram part.

This part is not particularly well-built. It only takes two circles, and I cannot control the size between them. I have not tested it with long or short text.

Since it is closed-source, none of that matters to me. But if it was open, people would want to take it for their own work. I would feel responsible to make sure it works well, or at least to write down what it does badly. I do not want that right now.

## Copycats

A while ago, I offered to review developer portfolios for people early in their careers on social media. I got several hundred requests.

I found a trend: some developers were openly copying popular sites. For example, check out this beautiful portfolio by Brittany Chiang.

I got three submissions that were identical to this. I do not mean they were just inspired. I mean they copied the whole code, changed the name and projects, and called it done.

The code has a MIT license, so these people were not breaking any rules. But it makes me sad to see someone take credit for the amazing work Brittany did. Even if you add a note saying "made by Brittany", most people will never see it.

The problem with putting a whole project on Github is that it is so easy to copy it, change a few things, and ship it. I could use a strict license, but do I really want to track and enforce that?

It is a twist, because I actually like the idea of people taking parts of this website. For example, I have a small piece that lets me add moving sparkles to any text, and I wrote a post that shares how it works. It has been great to see that some people take this effect and use it in their own work. But it is different when it is literally the whole project.

## Security

When I relaunched my blog, it came with a fun feature: the ability to like articles.

Like claps on Medium, you can like an article many times, up to 16 times.

I added it because I thought it would be cute. It does not really do anything. Unlike Medium, I am the only author here, so there is no ranking system I am trying to game to lift my posts.

A couple of days after the launch, I woke up to something startling. My article had received tens of thousands of likes. The post had only received a few hundred visitors, so this number made no sense. I dug into the data, only to find I had been hacked.

The culprit was the notorious feature-hunter, hacker, and all-around badass Jane Manchun Wong!

This was a delightful surprise, but it was also a little eye-opening. I use serverless functions for all the behind-the-scenes code, and I pay per use. Someone could cost me a lot of money if they decided to attack my servers!

I did some research and added some safeguards, but this is not my area of expertise. If I did open-source the code, it would make it easier for bad actors to find weak spots in my servers.

## The workaround

For these reasons, I am going to keep my blog closed-source. But if you spot something on this blog and want to know how it works, I have good news for you. I have enabled sourcemaps.

If you are not familiar, sourcemaps let the browser load the original, un-minified code.

In Chrome, you can open the developer tools and go to the Sources tab. You can either look through the files like you would on your own computer, or search for a file by name.

If you have any questions about how something works, feel free to reach out on Bluesky or contact me. I cannot promise a full answer, but I will try to point you in the right direction.
