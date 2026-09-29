# Local Testing on an iPhone

I have a confession to make: for the longest time, I didn't test my web applications on mobile devices very often. A few years ago, I decided to figure out the easiest, most reliable way to test my development code on real mobile devices. Then I wrote this blog post, so that I had a useful reference for how to do it.

This tutorial shows you how to work with localhost on an iPhone. We'll discover a smooth way of working to make sure our products are rock-solid on iOS. It might be easier than you think! This guide is for Mac users — sorry Windows folks, though much of this will still apply.

## The Horizontal Scrollburglar

I was finally pushed over the edge when I ran into everybody's least favourite troublemaker, the horizontal scrollburglar. It has stolen so many hours of my time! The bad dream was extra annoying because the bug wasn't reproducible on my computer. Not even when emulating the phone in the browser!

I needed to check it out on a real phone to see what was happening. My plan had two steps: load localhost:3000 on my mobile device, then use the developer tools to inspect the DOM and figure out the culprit. Here's how I did it.

## Accessing localhost on the phone

My initial strategy was to put my phone and computer on the same network, find my computer's IP, and visit it directly. I got this to work eventually, but it took some tinkering, and it requires tool-specific settings: you need to host your test server on 0.0.0.0 instead of 127.0.0.1. I wanted something that works everywhere.

Next, I looked into network sharing — there's supposed to be a way to give a USB-connected phone internet access. That process was a hot mess, full of scary messages. I'll save you the long story, but even after agreeing to all of them, I didn't find success.

Happily, there's a brighter path. We can expose a specific port to the internet and access it like any other page! There are lots of tools for this, but my favourite is ngrok.

## What is ngrok?

ngrok is known as a tunnelling service. You run some software on your computer, and it burrows through the firewall and your router settings and makes a specific port open to the internet while the process is running.

There are several services like this. In my experience, ngrok has been the most reliable. There's a paid version, but the free version is more than enough for what we need.

## Getting Set Up with ngrok

Here are the steps: sign up for a free account. On the ngrok site, locate your secret token and copy it to the clipboard. Download the desktop client and unzip it — unlike many programs, this one doesn't need to be installed. It's one small file; most developers keep it in their home folder. Open a terminal, cd to where it is, and authenticate with your token.

With this, you're all set up to reach the outside world!

## Using ngrok

We can open up our local development server with one command: `./ngrok http 8000`. The first part is the protocol — it supports HTTP and HTTPS, depending on the site. The second part is the port; my blog is a Gatsby site, so it runs on port 8000.

You should see the address ngrok gives you. On my iPhone, I can now visit that address, and it opens my local blog — bugs included!

## Debugging on an iPhone

Being able to access localhost is a great start, because we can verify that an issue is real. But it doesn't help us fix it! We need to look under the hood. In my case, I wanted to find which element was stretching the bounds of the container. You might want to view console logs and errors, clear local storage, or profile performance on a real device.

Sadly, every browser on an iPhone is really Safari — yes, even Chrome, it's all a lie — so the Chrome/Firefox developer tools we know and love won't work here. Happily, Safari's devtools are actually pretty decent, and they're similar enough that you can learn them quickly.

## One-Time Setup

On the phone, go to Settings › Safari › Advanced and make sure Web Inspector is enabled. Then, on your computer, turn on the Develop menu: go to Safari's settings › Advanced and check the box at the bottom.

## Connecting and Testing

For Safari on the computer to reach Safari on the phone, connect the phone with a cable. I always forget this step — don't be like me! Unlock your phone so the computer can access it. A few annoying windows may pop up; be ready.

With everything connected, open the ngrok address on the phone. In Safari on the computer, choose Develop › Your iPhone Name › the ngrok page. Remote developer tools will open!

## Building the Habit

Once everything is set up, mobile debugging gets much shorter: connect the phone, run ngrok, visit the address on the phone, and open the tools from the Develop menu.

It's important to build the habit of testing on mobile early and often. This solution is low-friction enough that I expect I'll use it quite often!

## iOS Simulating

A couple of folks told me about something neat: Xcode's iOS Simulator can serve the same purpose, including debugging with Safari's devtools on the computer.

It has trade-offs. The pros: it works even if you don't own a phone; you can test different screen sizes; there's no cable and no ngrok, so it may be quicker. The cons: some problems won't show up in the simulator; a phone with touch feels very different from a screen with a mouse; and it tells you nothing about real on-device performance.

These two tools serve slightly different purposes, but both are worth keeping in the toolbox!

## Next Steps

Most of the world uses Android phones, not iPhones. I recently ordered a Xiaomi Redmi 7A, a popular entry-level smartphone in India, and I'll be writing a companion piece for Android — subscribe if you're interested!
