# The Purple App for Grandma

## A memory made of paper

My grandma is seventy-eight years old. For thirty years she worked as a secretary in a middle school, and her memory was the best in our family. "Ask Grandma," we always said. "She remembers everything."

Last month she caught a bad cough. The doctor gave her a prescription: three pills a day, after every meal, for two weeks. "You ought to take them at the right time," he told her. But she often forgot. So she wrote paper notes and put them on the refrigerator. Notes on the door. Notes on the table. Notes everywhere. Moreover, her old dog Bobby — he loves to chase cats — needed a walk at six every evening, and sometimes she forgot that too.

I write software for a living. One Sunday I watched her look for her glasses for twenty minutes. I decided to build her a small app: a friendly little product that would remember everything for her.

## The nightmare weekend

The theory behind the app was simple. The primary goal comes first. Old people do not need twenty buttons; they need three or four big ones. Every extra function is a trade-off: more power, but more trouble. I said no to every fancy idea, and fun ideas went out of scope. I wrote a short specification on one page and assumed it was an easy weekend project. I was wrong.

First I designed the data schema: pills, walks, shopping. Then I added a layer for alarms. The architecture was clean and simple — in theory. But when I compiled the first version and deployed it to her phone, it was a nightmare. The alarms came at midnight. The battery died in three hours. I sat up until two in the morning, reading a cluster of error messages in the console, calm on the outside but tired inside.

At three I finally spotted the problem: a wrong number in an array of times. I opened an open-source repository online and combed through the pages for hours. One contributor there had the same problem. "You probably forgot to close the connection," he wrote. Probably? I did. I fixed the timing protocol. Alarm times need precision, and now they had it.

## Passwords are not for everyone

One hard question was left: authentication. Every app wants a password. But Grandma was nervous. "I worked as a secretary for thirty years," she laughed, "and I still cannot remember a password." Moreover, her eyes are weak now. Without her glasses she is almost blind, and small keyboard buttons frustrate her. So I removed that step. The design is implicit now: three big purple buttons, and no training needed. The screen is bright and responsive, like paper that talks back.

I chose purple because it is her favorite color. She painted her kitchen purple last spring and even touched it up again in summer. The app matches her kitchen. When she first held the phone, she was nervous; her hands, so fast at typing thirty years ago, now shook a little. Then the screen lit up: PILLS, WALK, CALL FAMILY. A small animation of a bell moved across the screen. She touched PILLS. A warm voice said, "Time for your medicine." She laughed like a young girl. She tried to look calm, but she gave herself away: her eyes were shining.

## One Sunday

The app automates everything now. Every morning at seven, the phone says, "Good morning! Time for your medicine." At six in the evening it says, "Bobby wants his walk." Bobby loves to chase the cats in the garden, so the walk is never boring. When Grandma goes to the store, the app remembers her list: milk, rice, bread, eggs. It even tells her what is still fresh in the refrigerator. And if something is up — a missed pill, a strange silence — the app sends me a message at once. She plugs it in every night and carries it in her pocket all day.

Last Sunday the whole family took the train to her town. The train was late, and my mother's boots were wet from the rain. My uncle, a bus driver by occupation, met us at the station with his car. Grandma cooked her famous Sunday roast: roast chicken with rice. The kitchen smelled warm. "Yum," said my little cousin, and everyone laughed.

After dinner Grandma excused herself and came back with a heavy old book — her encyclopedia from 1980. "This was my internet," she said. She turned the pages slowly, then turned over her new phone and put it on the book. "And this is my new encyclopedia. But this one talks."

My father, quiet behind his newspaper, turned his head and asked, "Several years ago you said no to computers. What changed?" Grandma smiled. "The teacher. The teacher is patient now." Everyone laughed again. Later, on the train home, I recalled her words, and I thought: my product lacked nothing that day — except, maybe, a bigger table.

Before we left, I changed the sheets on her bed and cleaned the kitchen. In her old cupboard I found my grandpa's leather belt and his box of instruments. She keeps them like treasure, in a case with a broken zipper. My mother wanted to buy her a new case, but Grandma said no. Old things carry old love.

## The warmest thing I ever built

That night the house was quiet and cozy. The wind moved gently outside. On the kitchen door one old paper note still hung: "Bobby — 6 p.m." She keeps it for luck, she says. The app will never take that note down, and that is fine. Maybe the best helper is a hybrid: a smart app and one paper note.

Earlier this week I put the app in a public repository, and three hundred people started using it in three days. One user wrote, "My mother was blind to phones for years. Now she checks her medicine herself." Blind to phones — I love that. I left a spare plug and cable at Grandma's home, and the project that began as a nightmare is now the warmest thing I have ever built. Every year, birds migrate south; this month, my little app migrated to three hundred new phones.

The best software does not shout. It sits quietly in a pocket. It waits. And it speaks only when someone needs it — like a good secretary.
