let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes = 
[
    '“You should name a variable using the same care with which you name a first-born child.” — Robert C. Martin',
    '“A long descriptive name is better than a short enigmatic name. A long descriptive name is better than a long descriptive comment.”—Robert C. Martin',
    '“Code that communicates its purpose is very important. I often refactor just when I’m reading some code. That way, as I gain understanding about the program, I embed that understanding into the code for later so I don’t forget what I learned.” — Martin Fowler',
    '"If you have to spend effort looking at a fragment of code and figuring out what it’s doing, then you should extract it into a function and name the function after the what.” — Martin Fowler',
    '“Any code of your own that you haven’t looked at for six or more months might as well have been written by someone else.” — Eagleson’s Law',
    '“Every time you write a comment, you should grimace and feel the failure of your ability of expression.” — Robert C. Martin',
    '“When you see commented-out code, delete it! — Robert C. Martin',
    '"Obsolete comments are worse than no comments.” — Douglas Crockford',
    '“Comments are often lies waiting to happen. Code should speak for itself whenever possible.” — Michael Toppa',
    '“Programmers must avoid leaving false clues that obscure the meaning of code.” — Robert C. Martin',
    '“Clean code always looks like it was written by someone who cares.” — Robert C. Martin',
    '“Simplicity is prerequisite for reliability.” — Edsger W. Dijkstra',
    '“If you’re good at the debugger it means you spent a lot of time debugging. I don’t want you to be good at the debugger.” — Robert C. Martin',
    '“Clean code is not written by following a set of rules. You don’t become a software craftsman by learning a list of heuristics. Professionalism and craftsmanship come from values that drive disciplines.” — Robert C. Martin',
    '“There are two parts to learning craftsmanship: knowledge and work. You must gain the knowledge of principles, patterns, practices, and heuristics that a craftsman knows, and you must also grind that knowledge into your fingers, eyes, and gut by working hard and practicing.” — Robert C. Martin',
    '“Your obligation is that of active participation. You should not act as knowledge-absorbing sponges, but as whetstones on which we can all sharpen our wits.” — Edsger W. Dijkstra',
    '“Practice, Practice, Practice! Musicians don’t only play when they are on stage in front of an audience.”— Michael Toppa',
    '“You are responsible for the quality of your code. Not your client. Not your boss. […] You don’t go to the doctor and say: You know what doc? I’m in a hurry, why won’t you skip washing your hands?”— Michael Toppa',
    '“So much complexity in software comes from trying to make one thing do two things.” — Ryan Singer',
    '“The secret of getting ahead is getting started. The secret of getting started is breaking your complex overwhelming tasks into small manageable tasks, and then start on the first one.” — Mark Twain',
    '“You want it in one line? Does it have to fit in 80 columns?” — Larry Wall',
    '“Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.” — John Woods',
    '“Leaving nots in a conditional like that twists my mind around at a painful angle.”— Martin Fowler',
    '“Clean code is simple and direct. Clean code reads like well-written prose. Clean code never obscures the designers’ intent but rather is full of crisp abstractions and straightforward lines of control.” — Grady Booch',
    '“There’s nothing more permanent than a temporary hack.” — Kyle Simpson',
];

btn.addEventListener('click', function(){
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote;
}
)