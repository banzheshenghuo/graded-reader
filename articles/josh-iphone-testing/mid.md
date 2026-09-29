# How to Open localhost on an iPhone and Debug It

Here is a truth about me: for the longest time, I didn't test my websites on mobile devices very often. A few years ago, I decided to find the easiest, most reliable way to test my development code on real phones. Then I wrote this tutorial, so I would always have a useful reference.

This tutorial shows you how to open localhost on an iPhone. We'll find a smooth way of working to make sure our products work well on iOS. It might be easier than you think! One note: this guide is for Mac users — Windows users may need extra steps.

## The Horizontal Scrollburglar

I was finally pushed over the edge when I met everybody's least favourite pain: the scrollburglar. It has stolen many hours of my time! The worst part was that the problem never showed up on my computer. Even when the browser pretended to be a phone, it wasn't there.

I needed to see it on a real phone. My plan had two steps: open localhost:3000 on the mobile device, then open the developer tools and find the code that caused it. Here's how I did it.

## Opening localhost on the Phone

My first idea was simple: put the phone and the computer on the same network, find the computer's IP address, and visit it directly. I got it working in the end, but it took a lot of trying, and it needs special settings in your test site. I wanted something that works everywhere.

Next, I tried the network sharing option — a way to give a USB-connected phone internet access. That process was a hot mess, full of scary messages. I'll save you the long story: even after agreeing to everything, it didn't work.

Happily, there's a better path. A tool can push one of your ports onto the public internet, and your phone can open it like any other page. My favourite tool for this is ngrok.

## What is ngrok?

ngrok is what people call a tunnelling service. You run a small program on your computer, and it goes through the firewall and your router settings and gives one port a public web address while it runs.

There are other services like it, but in my experience ngrok is the most reliable. It has a paid plan, but the free version is more than enough for this.

## Setting Up ngrok

Setting it up is short. Make a free account and copy your secret token from the ngrok site. Download the program — it's a single file, and you don't have to set anything up. Open a terminal, go to where you put it, and run the start line with that key. Done — you're ready to reach the outside world!

## Using ngrok

Start your local site, then run `./ngrok http 8000`. The first part tells ngrok what kind of address to make; the number is your server's port. My blog is a Gatsby site, so it runs on port 8000.

ngrok prints a web address. Type it into the browser on your phone, and your local site opens there. Now the bug should appear too.

## Debugging on the iPhone

Seeing the site on your phone is a good start, because you can check that the problem is real. But it doesn't help you fix it! You need to look inside the page: read console errors, clear local storage, or check how fast the page really is.

Here's a sad truth: every browser on an iPhone is really Safari, even Chrome. So the Chrome or Firefox developer tools won't work here. Happily, Safari's own tools are pretty good, and they feel familiar, so you can learn them quickly.

## Getting the Tools Ready

On the phone, go to Settings, then Safari, then the Advanced section, and turn on Web Inspector. On your computer, open the Safari settings, choose the extra settings, and check the Develop box at the bottom of the list.

## Connecting and Testing

Now connect the phone to the computer with a cable — I always forget this step! Don't be like me. Unlock the phone so the computer can reach it, and be ready for a few annoying windows on the screen.

With everything connected, open the ngrok address on the phone. Then, in Safari on the computer, pick Develop › Your iPhone Name › the ngrok page. The developer tools will open, and they control the page on your phone!

## Building the Habit

After the first time, testing on a phone is much shorter: connect the phone, run ngrok, open the address on the phone, and pick the page from the Develop menu.

Test on real devices early and often. This way is so quick that you'll actually use it.

## What About a Phone Inside the Computer?

Some readers told me about another option: the iOS Simulator. It can act like an iPhone with a different screen size, right on your computer, and you can debug it with Safari on the computer too.

Its good points: you don't need to own a phone, there's nothing to connect, and you can test different screen sizes. Its weak points: it's still not a real phone, touch feels different from a mouse, and it can't tell you the app's true speed on a real device.

In my view, the two tools serve slightly different purposes — keep both close!

## Next Steps

Most of the world uses Android phones. I recently ordered a cheap Xiaomi phone, and I'll write a second guide for Android soon — sign up for updates if you're interested!
