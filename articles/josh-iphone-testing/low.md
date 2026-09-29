# Test Your Website on a Real Phone

Here is a little secret: for a long time, I did not test my websites on real phones very often. A few years ago, I decided to find the easiest way to test my work on a real phone. Then I wrote this guide, so I could always look back at it.

This guide shows you how to open your test website on an iPhone. It is probably easier than you think! One note: I use a Mac. Windows users may need extra steps.

## The Side-to-Side Problem

One day I finally had enough. My website had a strange problem on phones: the whole page could move to the side, and nobody had built it that way. I call it the sideways scroll problem. It has stolen many hours of my life!

The worst part: the problem did not show up on my computer. Even when I made the computer pretend to be a phone, everything looked fine. I needed to look at a real phone to see what was happening.

My plan had two steps. First, open my test website on the phone. Second, use some special tools, so I could find the code that caused the problem. Here is how I did it.

## Step 1: Open Your Test Site on the Phone

At first, I tried the simple way: put the phone and the computer on the same network, find the computer's address, and visit it from the phone. This worked in the end, but it took a long time, and it needs special settings in your test site. I wanted an easier way.

Then I tried the "network sharing" setting on my computer. That was a mess, with many scary messages. I will save you the story. Even after saying yes to all the messages, it did not work.

Happily, there is a better way. A tool can give your test website a public web address, so your phone can open it like any other page. My favourite tool for this is ngrok.

## What is ngrok?

ngrok is a small program that helps. You run it on your computer, and it goes through the network walls for you. It gives your test website a public web address. The address works while the program is running.

There are other tools like this, but in my experience ngrok is the most reliable one. It has a paid version, but the free one is enough for us.

## Setting Up ngrok

Here is how to set it up. First, make a free account. On the ngrok site, find your secret key and copy it. Next, download the ngrok program. You do not need to set anything up; it is just one file. Put the file somewhere safe. Open the Terminal program, go to that place, and run the start line with your secret key. That is all!

## Using ngrok

Now start your test website, and run `./ngrok http 8000` in the Terminal. The first word tells ngrok what kind of address you want. The number at the end is the port of your test website. My blog runs on port 8000.

ngrok will show you a web address. Type it into the web app on your phone, and your test website will open! Now the problem should show up too.

## Step 2: Find the Problem

Opening the site on the phone is a good start, because now you can see the problem. But seeing it does not fix it! You need to look inside the page. Maybe you want to read the error messages, clear saved data, or check how fast the page really is on a phone.

Here is a sad fact: every web app on one of these phones is really Safari inside. Even Chrome! So the tools you know from Chrome or Firefox will not work here. Happily, the Safari tools are quite good, and they feel similar, so you will learn them fast.

## Getting the Tools Ready

On the phone, open the Settings app. Find Safari, then the extra settings, and turn on "Web Inspector".

On your computer, open the Safari settings, find the extra settings, and turn on the "Develop" menu at the bottom.

## Connect and Test

Connect the phone to the computer with a cable. I always forget this step! Do not be like me. Unlock the phone so the computer can see it. A few windows may pop up. Be ready for that.

Now open your test website on the phone. In Safari on the computer, open the Develop menu, choose your phone, and choose the ngrok address. The tools will open on your computer, but they will control the page on your phone!

## Make It a Habit

After the first time, testing on a phone is quick: connect the phone again, run ngrok, open the address on the phone, and open the tools from the Develop menu.

Test on real phones early and often. This way of testing is so easy that I use it all the time now.

## What About a Phone Inside the Computer?

Some readers told me about another way: a program that acts like a phone on your computer, and you can use the Safari tools with it too.

It has good points: you do not need to own a phone, and you do not need to connect anything. But it is still not a real phone. A phone with your fingers feels very different from a window and a mouse. And it cannot show you the real speed of your app.

I think both ways are useful. Keep them both close!

## What Is Next?

Most people in the world use Android phones. I ordered a cheap Android phone, and I plan to write a guide for it too!
