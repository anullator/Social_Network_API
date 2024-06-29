const users = [
    {
        username: 'StarryEyes92',
        email: 'StarryEyes92@gmail.com',
    },
    {
        username: 'CrimsonSkyline',
        email: 'CrimsonSkyline@gmail.com',
    },
    {
        username:'WhisperingWillow',
        email: 'WhisperingWillow@gmail.com',
    },
    {
        username: 'NeonNebula',
        email: 'NeonNebula@gmail.com',
    },
    {
        username: 'AzurePhoenix',
        email: 'AzurePhoenix@gmail.com',
    },
    {
        username: 'LunarGlimmer',
        email: 'LunarGlimmer@gmail.com',
    },
    {
        username: 'MysticEcho',
        email: 'MysticEcho@gmail.com',
    },
    {
        username: 'EmberShadow',
        email: 'EmberShadow@gmail.com',
    },
    {
        username: 'VelvetSunrise',
        email: 'VelvetSunrise@gmail.com',
    },
    {
        username: 'SapphireSerenade',
        email: 'SapphireSerenade@gmail.com',
    },
];

const thoughtList = [
    "Finding joy in the little things makes life extraordinary.",
    "In a world full of noise, silence can be the greatest refuge.",
    "Embrace change, for it is the only constant in life.",
    "Kindness costs nothing but means everything.",
    "Dream big, work hard, and never lose faith in yourself.",
    "Take a deep breath and remind yourself how far you've come.",
    "Today is a gift; that's why it's called the present.",
    "Gratitude turns what we have into enough.",
    "The best view comes after the hardest climb.",
    "Love fiercely and forgive freely.",
    "Creativity is intelligence having fun.",
    "Every day is a new opportunity to create something amazing.",
    "Celebrate progress, no matter how small.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "Make each day your masterpiece.",
    "Small acts of kindness can change the world.",
    "Believe you can and you're halfway there.",
    "Let your smile change the world, but never let the world change your smile.",
    "Chase your dreams; you might catch one.",
    "Grateful hearts attract abundance.",
];

const reactionList = [
    "Agreed! It's the little things that matter.",
    "Thanks, needed that reminder today.",
    "Silence is golden amidst the chaos.",
    "Change is tough but essential.",
    "Kindness is a powerful force.",
    "Hard work pays off!",
    "Taking a moment to breathe.",
    "Grateful for every moment.",
    "Celebrate every step forward.",
    "Living in the present moment.",
    "Creativity keeps life interesting.",
    "What will you create today?",
    "Progress over perfection!",
    "Believe in yourself!",
    "Your smile brightens my day.",
    "Chase your dreams!",
    "Small acts, big impact.",
    "Positive thoughts, positive life.",
    "Keep dreaming big!",
    "Gratitude changes everything.",
];

// Get random item from an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomReactions = (int) => {
    let reactions = [];
    for (let i = 0; i < int; i++) {
        reactions.push({
            reactionBody: getRandomArrItem(reactionList),
            username: getRandomArrItem(users)
            // TODO: Do I need to add reactionId and createdAt?
        });
    }
    return reactions;
}

const getRandomThoughts = (int) => {
    let thoughts = [];
    for (let i = 0; i < int; i++) {
        thoughts.push({
            thoughtText: getRandomArrItem(thoughtList),
            username: getRandomArrItem(users),
            reactions: [...getRandomReactions(3)],
        })
        // TODO: Do I need to add createdAt?
    }
    return thoughts;
}

module.exports = { getRandomReactions, getRandomThoughts };