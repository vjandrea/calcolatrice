# Calcolatrice

A time calculator that recognizes different formats:

11:22:33.444 = parsed as hh:mm:ss.ddd (11 hours, 22 minutes, 33 seconds, 444 milliseconds)
1:22:33.444  = parsed as h:mm:ss.ddd (1 hour, 22 minutes, 33 seconds, 444 milliseconds)
11:22:33.44  = parsed as hh:mm:ss.ddd (11 hours, 22 minutes, 33 seconds, 440 milliseconds)
1:22:33.44   = parsed as h:mm:ss.dd (1 hour, 22 minutes, 33 seconds, 440 milliseconds)
11:22:33.4   = parsed as hh:mm:ss.d (1 hour, 22 minutes, 33 seconds, 400 milliseconds)
1:22:33.4    = parsed as h:mm:ss.d (11 hours, 22 minutes, 33 seconds, 400 milliseconds)
11:22:33     = parsed as hh:mm:ss (11 hours, 22 minutes, 33 seconds)
1:22:33      = parsed as h:mm:ss (1 hour, 22 minutes, 33 seconds)
22:33        = parsed as mm:ss (22 minutes, 33 seconds)
22:3         = parsed as mm:s (22 minutes, 3 seconds)
2:33         = parsed as m:ss (2 minutes, 33 seconds)
2:3          = parsed as m:s (2 minutes, 3 seconds)
22.33        = parsed as mm.ss (22 minutes, 33 seconds) /// TODO: notazione non standard
2.33         = parsed as m.ss (2 minutes, 33 seconds) /// TODO: notazione non standard
12233        = parsed as hmmss (1 hour, 22 minutes, 33 seconds)
2233         = parsed as mmss (22 minutes, 33 seconds)
233          = parsed as mss (2 minutes, 33 seconds)
99           = parsed as ss and adjusted (1 minute, 39 seconds)
33           = parsed as ss (33 seconds)
3            = parsed as s (3 seconds)

## Usage

Type the value or paste it (Ctrl+v / Cmd+v), when you push [+] or [Enter] the value is added to the total.
To reset just type '0' and then [+] or [Enter].

## Installation

```bash
git clone https://github.com/vjandrea/Calcolatrice
cd calcolatrice
npm install && npm start
```

## Roadmap

v1.0 Quick and dirty, it just works

In the next versions:
- better regexp patterns to clean up the conditionals
- add a ticker to show the values log to the user
- add support for subtractions
- format the user input on the fly to match always the format 'hh:mm:ss' and 'hh:mm:ss.ddd' when he enters a '.'


#### License [CC0 (Public Domain)](LICENSE.md)
