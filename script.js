const compliments = [
    "You're incredibly smart",
    "You have amazing confidence",
    "You're surprisingly talented",
    "You have a great personality",
    "You're genuinely impressive"
];

const insults = [
    "for someone who makes questionable decisions",
    "considering how often you're wrong",
    "even though your brain takes frequent holidays",
    "despite your questionable life choices",
    "for someone who probably needs Google for everything"
];

function generateRoast() {

    const name = document.getElementById("name").value;

    if (name === "") {
        document.getElementById("result").textContent =
            "Enter your name first! 😂";
        return;
    }

    const compliment =
        compliments[Math.floor(Math.random() * compliments.length)];

    const insult =
        insults[Math.floor(Math.random() * insults.length)];

    document.getElementById("result").textContent =
        `${name}, ${compliment} ${insult}.`;
}
