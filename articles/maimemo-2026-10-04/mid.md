# The Purple App: One Strange Night

## Three hundred families

My grandma's little purple app now lives in three hundred homes. Every morning it says, "Good morning! Time for your medicine." Every evening it says, "Bobby wants his walk." Bobby still loves to chase cats, and the walk is still never boring.

My brother came to visit last week. He is a nurse in another city, and he arrived with one big bag and a one-way ticket. "I want to see the famous product," he laughed. I put clean sheets on the bed for him, and he opened his baggage: shirts, pants, underwear, a belt, a warm coat — and, at the bottom, one small spoon. "That is Grandma's," he said. "She put it in my bag with an apple." Grandma believes that food and spoons travel together.

She cooked a big dinner that night: rice, milk, roast chicken, and a small steak for my brother, because he is too thin. "Yum," he said, and everyone laughed. After dinner he excused himself and went to bed early; he had carried medicine to sick people all week at the hospital. Moreover, Grandma's cough was better, but she still had a check on Monday, so we all needed sleep.

## Two o'clock in the morning

At two in the morning, my phone woke me up. The console of my little server was full of red lines — a cluster of errors, growing every second. I sat up in bed, cold wind coming through the open window.

First, I spotted the anomaly: five hundred requests in one minute, all from the same place, all with wrong credentials. Somebody was trying to open doors with a box of wrong keys. My first thought was short and dark: leak. Did we leak the passwords of three hundred families? I assumed the worst. My heart was beating fast. It felt like a nightmare, part two.

I called my brother. He appeared on the screen in a T-shirt and shorts, half awake. "Talk," he said. I showed him the numbers: a quantity of requests too big, too fast. When I said, "I will close the app for everyone," he objected at once. "No. Think about the old people first. Some of them wait for that voice in the morning. You ought to be specific, not loud. Handle it like a nurse: quiet, clean, complete."

So we worked. I turned over the log files, page by page, and combed through them. I decrypted the backup from last week and compared. I took a sample of the strange requests and read them like a doctor reads blood. Probably it was a robot, knocking and knocking. Slowly I derived my conclusion: nobody got in. Our authentication held — five hundred wrong keys, and not one door opened. The door was strong. There was no leak. Moreover, the knocking came from a faraway place, and it stopped at three.

"But why was the door so weak?" my brother asked. Good question. The old architecture trusted everyone — an implicit trust, like family. That had to change. But here was the constraint: our primary users are seventy and eighty years old. A long password would frustrate them. Grandma cannot see small keyboard letters without her glasses, and she is almost blind at night. Safety that grandma cannot use is not safety. Every trade-off between simple and safe had to land on her side.

We wrote a short specification, drew the new schema on paper, then built the protocol together: three quiet steps that work in the background. The app itself does the hard work, with no help from the user — unsupervised, like a night nurse — and sends everything along one safe route. The new code is also more efficient; it sends a small quantity of data every hour, not a river of it. By four in the morning it was ready, and the change landed on three hundred phones before sunrise. I wrote one line as the name of the work: "Keep grandmas safe." Then I made the commit and sent it to the public repository.

That morning, a contributor left a message in the repository: "Strange traffic on my side too. Your fix works. Thank you." The project is open; anyone can read the code, and now anyone can check the door.

## The hospital front desk

On Monday I took Grandma to the hospital for her cough. Grandma was nervous before the check, as always. At the front desk, a friendly secretary with gray hair found her file in one minute. "Your new prescription is ready," she said. "The message will come to your phone. The link is safe — only your family can open it." Grandma turned her head and looked at me. "She was fast," she whispered. "I was a secretary for thirty years, and I was never that fast."

We waited twenty minutes for the doctor. Grandma's feet were tired, so I found her a chair. The doctor said her cough was almost gone, her sleep quality was good, and the new prescription was working. The message arrived on her phone; I helped her decrypt it, and there was the medicine plan, clear and simple. On the way home we stopped at the store for milk, rice and bread; the app still knew what was fresh in the refrigerator. Grandma paid with cash from her old wallet, because she says cards are for rich people. Her phone battery was almost empty, as always. At home she plugged it in, sat down in her cozy chair, and a small bell animation moved across the bright, responsive screen. "Time for your pills," said the warm voice, following its evening protocol. Nothing about the strange night had touched her. The app automates the small things; love does the rest. That, I thought, is the whole point.

## Small things

Before my brother left, we read the numbers one more time. "Quality is up," he said. "Fewer wrong words in the reminders. And the app is an efficient little thing now — it drinks less power." He is a nurse, but he talks like an engineer. My theory is simple: in a family, skills migrate from head to head, like birds.

At the station, Grandma gave him a bag for the road: bread, two apples, and — we found this later — one more spoon. "She gives herself away every time," I said. "It is an implicit rule in our family: a spoon means come back soon." He laughed and waved. "Bye-bye!" he shouted like a child, and the train took him north. In her living room, the old encyclopedia stands next to the new phone, and the box of my grandpa's instruments still sits behind the sofa. The old app lacked a guard; the new one keeps one, quietly, like the spare key Grandma hides under her flowerpot — for family only.

That night I closed my laptop. In its dark screen I looked at myself for a long moment and smiled. The nightmare had knocked on our door, and three hundred families slept through it. Moreover, there was roast chicken in the refrigerator, and tomorrow was Sunday.

Bobby chased his own tail twice, then slept. The best software does not shout. It sits quietly, it watches the door, and it speaks only with love — like a good secretary, like a night nurse, like Grandma.
