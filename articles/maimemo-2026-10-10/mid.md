# The Kitchen Guard

We came home from the foreign city late on Friday night. The flight left with a two-hour delay, and the taxi fare doubled after midnight. Bobby slept in my arms through all of it. He never opened his eyes for the elevator, the lobby, or our quiet street.

Grandma knocked at nine on Saturday morning. She carried a bag of vegetables and had already made arrangements for the whole weekend: soup today, a family dinner tomorrow. She had even called the restaurant and made a reservation for six. She is a retired secretary, and years of work as a secretary taught her one thing: every good plan starts as a list.

"I also came to complain," she said. "Three complaints. My sink drains slowly. My refrigerator is warm. And my new pills say, keep below eight degrees." She showed me the prescription from the doctor. The paper was clear. Unfortunately, her nineteen-year-old refrigerator had never learned to read.

"Start with the sink," she said, so I did. The layout of her kitchen is simple: sink on the left, refrigerator on the right, one small table in the middle. I rolled up my sleeves, lay down under the sink, and found the problem in a minute: grey fat, hard as candle wax. The fix was straightforward but not pretty. Hot water, soap, a long rinse, again and again. The work was a pain in the shoulders and the smell was worse. The fat was the bottleneck, one narrow point holding everything back.

"There is a better approach," I said, still on the floor. "Not just for today. Give me one Saturday, and your kitchen will report its own problems."

Bobby approved of the plan in his own way. He sat on the carpet and hit his toy instruments: a small piano, a drum, a bell. Three instruments, six tunes a minute, every tune louder than the last. Grandma tapped her foot to the noise, as if she were at a concert. Then Bobby pushed the piano over and crawled after his toy rabbit. He chased it under my chair. The rabbit always slid one hand ahead of him. He never caught it, and he never stopped laughing.

While he played, I opened my laptop and created a new repository. The plan had a name now: the kitchen guard. One sensor for water under the sink. One sensor for temperature inside the refrigerator. A small program to watch them both. I committed myself to finishing before dinner. Grandma's vision of the future was simple: no more surprises.

I built it on the same framework I use at work. A tiny agent reads the sensors every minute and sends the numbers through her home router to my server. A small bundle of code turns the numbers into a red line on a screen. Her rule was short: "Please, no new holes in my wall." So that became the one constraint.

The first hour found several problems, one after another. The architecture was simple enough: watch, send, draw. A small transformer brought the power down to five volts, and the code had one dependency only. But the first protocol I tried dropped half the messages, and the proxy between the sensor and the router said no to everything it did not know. I changed one variable, wrote the setup in plainer words, and compiled the code again. The second approach worked on the first try, and the new protocol was quieter too. I pushed the fix to the repository, tagged it "v1, works", and closed the lid for a minute.

In theory, one sensor is enough. I set up two and accepted a trade-off: more checks, slower code. The workflow settled at one report a minute. The two sensors agreed within a margin of one degree, which felt like good consistency. The data load stayed small; at that rate, a full year of numbers is smaller than one photo. The bottleneck was no longer the pipe. It was my typing.

"Theory is fine," said Grandma, watching the screen over my shoulder. "Is the work boring?"

"Not to me," I said. "At the office you typed reports about other people's work. This time you can watch the work happen."

"Moreover," she said, "it is my kitchen." Her trust in me was implicit. She never asked what the numbers would look like. Her phone rang, and she excused herself to answer it in the hall.

I put the first sensor inside her refrigerator, behind the milk. The second one sat on the balcony, where the afternoon sun hits the wall and the heat comes off it in slow waves. Each sensor carried a small tag with a number, like a name card. The screen drew the line one pixel at a time, and I sat back to await the first full hour. It arrived with one short gap when the balcony door stood open and warm air rolled in. The first batch of numbers covered sixty minutes. I translated the line into words for Grandma: cold, good, cold, good.

At noon she took her pill. The prescription said, after lunch, but she never waits. She put the pill on her tongue, made a sour face, and swallowed it with cold water. "The doctor says they are small," she said, "but they fight like bears."

In the late afternoon we walked to the park, because every small person needs a swing. Bobby wore his sun hat and lost one sock under the seat. I pushed the swing gently. His shoes pointed the opposite way from the swing, and his courage grew with every push. Near the fence, wooden lions and monkeys watched us with old paint eyes. Bobby tried to stand up in the swing, bumped his forehead against mine, and found this so funny that he did it again on purpose. His nose still kept a little color from last week's sunburn.

On the way home we bought shrimp for tomorrow's dinner. The fish man called Grandma "Madam" and gave Bobby a paper hat, which he ate, a little.

Dinner was simple: rice, eggs, and yogurt for Bobby. Grandma said the eggs were delicious, and she was right. Bobby chewed his shrimp with deep care, held his fork like a hammer, and swallowed a small piece of apple whole. Then, unfortunately, the travel week caught up with him, and he fell asleep in his chair between two bites. Grandma washed the dishes, I dried them, and outside the window the night came down over the street.

Before bed we looked at the sightseeing photos from the trip. In one of them, Bobby sat on my shoulders in a crowd of foreign accents and strange signs, waving at everyone. I posted it online with no words, and out of context it looked like a holiday. A friend wrote: "You look tired." My face had given me away. At the conference, every second talk was about neural networks. My kitchen guard had no neural parts at all, just water and heat, and a broken pipe caught one week early.

At the door, Bobby turned and waved. "Daddy," he said, and said it again. Grandma read her Sunday list one more time and put on her coat. Inside the refrigerator, behind the milk, the small guard watched the cold and said nothing. It would have numbers for her in the morning: the milk at four degrees, the pills at six, all night, every hour.
