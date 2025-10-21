// Partner mode content - for couples
const partnerContent = {
    1: { 
        type: 'assignment',
        mild: 'Tonight, create a playlist of 5 songs that make you think of romance. Share it and listen together.',
        medium: 'Create a playlist of songs that remind you of your most passionate moments. Share it and slow dance together in dim lighting.',
        hot: 'Create a playlist of songs that capture raw desire. Dance together, bodies close, letting the music guide your movements and touches.'
    },
    2: { type: 'dice' },
    3: { 
        type: 'story',
        mild: 'Write a short story about two people who share an unexpectedly romantic moment at a coffee shop.',
        medium: 'Write a steamy encounter between two people who meet by chance in an art gallery after hours. Build the tension slowly.',
        hot: 'Write an intensely passionate scene: two people trapped alone in a penthouse during a thunderstorm. The electricity isn\'t the only thing in the air.'
    },
    4: { 
        type: 'suggestion',
        mild: 'Light some candles and give each other a gentle shoulder and back massage.',
        medium: 'Light candles throughout your space and give each other a slow, sensual full-body massage with warm oil.',
        hot: 'Transform your space with candlelight. Take turns giving each other an unhurried, exploratory massage that can go anywhere the mood takes you.'
    },
    5: { 
        type: 'assignment',
        mild: 'Send two flirty texts during the day hinting at a romantic evening together.',
        medium: 'Send three texts throughout the day describing what you want to do later. Build anticipation with each message.',
        hot: 'Throughout the day, send increasingly explicit messages about your desires. Make them detailed. Make them wait.'
    },
    6: { type: 'dice' },
    7: { 
        type: 'story',
        mild: 'Write about two people who reconnect at a high school reunion and rediscover their chemistry.',
        medium: 'Imagine you\'re strangers meeting at a masquerade ball. Write about the mysterious attraction and a stolen kiss in a private garden.',
        hot: 'Masked strangers at an exclusive ball. They don\'t exchange names, only heated glances and whispered promises before finding a secluded room.'
    },
    8: { 
        type: 'suggestion',
        mild: 'Share a relaxing bubble bath together with soft music playing.',
        medium: 'Take a long bath together. Let your hands wander. No rushing.',
        hot: 'Bath time turns into body worship. Soapy hands, slippery skin, endless attention to every curve and contour.'
    },
    9: { 
        type: 'assignment',
        mild: 'Write down three things you appreciate about your partner and share them.',
        medium: 'Each write a short letter describing your favorite memory together. Read them aloud to each other.',
        hot: 'Write down your deepest fantasy involving your partner. Exchange letters. Tonight, make one come true.'
    },
    10: { type: 'dice' },
    11: { 
        type: 'story',
        mild: 'Two people share a cozy evening watching the stars from a blanket on the grass.',
        medium: 'Write about a moonlit skinny dip in a secluded lake. The water is warm, the night is electric.',
        hot: 'Under the stars, far from anywhere, they have nothing but each other and no reason to hold back. Write what happens next.'
    },
    12: { 
        type: 'suggestion',
        mild: 'Cook a meal together and feed each other bites.',
        medium: 'Prepare a meal together wearing minimal clothing. Kitchen foreplay is encouraged.',
        hot: 'Forget the meal. Use whipped cream, chocolate, strawberries. Turn your bodies into the feast.'
    },
    13: { 
        type: 'assignment',
        mild: 'Take turns describing what you find most attractive about each other.',
        medium: 'Show each other, with touch and whispers, what drives you wild.',
        hot: 'Tonight, take control or surrender completely. Explore dominance and submission in whatever way feels right.'
    },
    14: { type: 'dice' },
    15: { 
        type: 'story',
        mild: 'Write about two people slow dancing in their living room to their favorite song.',
        medium: 'Describe a private dance where one person performs a sultry strip tease for the other.',
        hot: 'Write about a night where they recreate their wildest fantasy together. Spare no details.'
    },
    16: { 
        type: 'suggestion',
        mild: 'Spend 20 minutes making out like teenagers—nothing more, just kissing.',
        medium: 'Blindfold your partner. Feed them different foods and tease them between bites.',
        hot: 'Restraints optional. Blindfold mandatory. Let anticipation and sensation take over.'
    },
    17: { 
        type: 'assignment',
        mild: 'Plan a date night at home: dress up, set the mood, make it special.',
        medium: 'Set up a sexy scavenger hunt with surprises in each room.',
        hot: 'Establish a safe word. Tonight, push boundaries and explore what you\'ve been curious about.'
    },
    18: { type: 'dice' },
    19: { 
        type: 'story',
        mild: 'Write about two people meeting again after a summer apart, and how happy they are to be reunited.',
        medium: 'Write about a reunion between lovers separated for months. Capture the intensity, the urgent kisses, the need.',
        hot: 'They\'ve been apart too long. The door barely closes before clothes start coming off. Write those first desperate moments.'
    },
    20: { 
        type: 'suggestion',
        mild: 'Create a simple scavenger hunt with sweet notes leading to a romantic surprise.',
        medium: 'Create a scavenger hunt with flirty clues leading to different rooms. Each location has a surprise. The final prize? You decide.',
        hot: 'Leave a trail of provocative notes. Each one more explicit than the last. Each location has a task to complete. The final destination is your bedroom.'
    },
    21: { 
        type: 'assignment',
        mild: 'Tell your partner three things you find most attractive about them.',
        medium: 'Share your most secret turn-on that you\'ve never mentioned before. Ask for theirs in return.',
        hot: 'Confess your darkest desire. The thing you\'ve been too shy to say. Tonight, no judgment—only exploration.'
    },
    22: { type: 'dice' },
    23: { 
        type: 'story',
        mild: 'Write about two people sharing an umbrella in the rain and finding unexpected romance.',
        medium: 'Caught in a rainstorm, two people take shelter in a doorway. Close quarters, wet clothes, rising heat.',
        hot: 'Warm rain, no shelter needed. They get soaked together. Wet fabric clings to skin. They stop pretending the rain is why they\'re breathless.'
    },
    24: { 
        type: 'suggestion',
        mild: 'Tonight, exchange meaningful gifts and spend the evening cuddling by candlelight.',
        medium: 'Tonight is about slow seduction. Spend at least an hour on foreplay. Tease, whisper, explore every inch.',
        hot: 'Tonight, there are no rules and no limits. This is your night to unleash everything you\'ve been holding back. Be completely uninhibited. Leave nothing unexplored.'
    }
};

// Single mode content - for self-love and personal exploration
const singleContent = {
    1: {
        type: 'assignment',
        mild: 'Light a candle and write down five things you love about yourself.',
        medium: 'Dress in something that makes you feel powerful and beautiful—just for you.',
        hot: 'Seduce yourself in the mirror. Move like you\'re your own greatest admirer.'
    },
    2: { type: 'dice' },
    3: {
        type: 'story',
        mild: 'Write a short fantasy where you discover a secret sanctuary just for you.',
        medium: 'Write a scene where you\'re treated like royalty in a spa made entirely for your pleasure.',
        hot: 'Imagine a world where your deepest desires are catered to by a mystery figure—write how they worship you.'
    },
    4: {
        type: 'suggestion',
        mild: 'Take a warm bath with calming music. Focus on how good it feels to be at peace.',
        medium: 'Give yourself a luxurious oil massage. Let each movement say "I deserve this."',
        hot: 'Turn your bath or shower into a full-body celebration. Take your time—worship every inch.'
    },
    5: {
        type: 'assignment',
        mild: 'Create a playlist that makes you feel dreamy and light.',
        medium: 'Curate a playlist that makes you feel empowered and magnetic.',
        hot: 'Build a playlist that makes you want to move your hips and own every step you take.'
    },
    6: { type: 'dice' },
    7: {
        type: 'story',
        mild: 'Write a scene where you find a magical place that reflects your inner beauty.',
        medium: 'Imagine a night where the city lights reflect your glow and you walk like a legend.',
        hot: 'Write about being the center of attention at a masquerade, radiating raw, irresistible energy.'
    },
    8: {
        type: 'suggestion',
        mild: 'Wrap yourself in your softest blanket and breathe deeply for ten minutes.',
        medium: 'Spend extra time moisturizing and touching your skin with intention.',
        hot: 'Dance slowly in your room with low lights and let your hands wander like they\'ve never touched you before.'
    },
    9: {
        type: 'assignment',
        mild: 'Make a list of your favorite physical features and why you adore them.',
        medium: 'Take photos that make *you* feel like art. Keep them private, or don\'t.',
        hot: 'Stage a private photoshoot with bold poses and smoldering looks—own your heat.'
    },
    10: { type: 'dice' },
    11: {
        type: 'story',
        mild: 'Write a letter to your future self full of admiration and hope.',
        medium: 'Imagine being sent love letters every day by someone who knows your soul intimately. Write one.',
        hot: 'Create a scene where your own touch is magic—every sensation amplified, every whisper sacred.'
    },
    12: {
        type: 'suggestion',
        mild: 'Cook your favorite comfort food and eat it slowly, with gratitude.',
        medium: 'Set the table just for you. Music, candles, the works. You are the honored guest.',
        hot: 'Feed yourself with your fingers. Eat dessert in bed, indulgent and sensual.'
    },
    13: {
        type: 'assignment',
        mild: 'Write a letter of thanks to your body for all it\'s done for you.',
        medium: 'List the ways you\'ve grown in strength, sensuality, and self-love this year.',
        hot: 'Write your most intimate fantasy starring *you* as the one who knows exactly what you crave.'
    },
    14: { type: 'dice' },
    15: {
        type: 'story',
        mild: 'Write a cozy scene where you curl up and fall asleep in total safety and warmth.',
        medium: 'You\'re in a thunderstorm, alone in a gorgeous cabin. The tension builds. What do you do?',
        hot: 'Power\'s out, candles lit. You explore your body by firelight like it\'s a sacred ritual. Write it.'
    },
    16: {
        type: 'suggestion',
        mild: 'Put on something silky and lounge luxuriously. Let the world wait.',
        medium: 'Choreograph a private slow-dance. Move to music like the world is your stage.',
        hot: 'Give yourself a striptease. Enjoy your own performance. You are the fantasy.'
    },
    17: {
        type: 'assignment',
        mild: 'Plan a solo date night. Movies? Stargazing? Make it intentional.',
        medium: 'Take yourself out. Dress up. You\'re the most enchanting person in the room.',
        hot: 'Stay in and set the mood: candles, music, touch. Make this a night to remember—for you.'
    },
    18: { type: 'dice' },
    19: {
        type: 'story',
        mild: 'Write about finding a hidden garden where you feel at home in your own skin.',
        medium: 'Write about locking eyes with a version of yourself in the mirror who dares you to be bold.',
        hot: 'Write about meeting your wild twin in a dream. They show you a new side of yourself—and you love it.'
    },
    20: {
        type: 'suggestion',
        mild: 'Create a cozy reading or journaling nook. Indulge in what you love.',
        medium: 'Build a "you shrine" with mementos, affirmations, and objects that make you feel powerful.',
        hot: 'Leave provocative notes around your space addressed to yourself. Pick one to act on.'
    },
    21: {
        type: 'assignment',
        mild: 'Make a list of ten things you love doing just for you.',
        medium: 'Record a voice note to yourself saying the kindest things you wish you\'d hear more often.',
        hot: 'Record a voice memo in your most sultry tone—reading poetry, whispering affirmations, or just breathing.'
    },
    22: { type: 'dice' },
    23: {
        type: 'story',
        mild: 'Describe the moment you realize you are enough, just as you are.',
        medium: 'Write about entering a room and owning it. All eyes on you—because you deserve it.',
        hot: 'Write about being admired, adored, and desired—but by your own reflection. And loving it.'
    },
    24: {
        type: 'suggestion',
        mild: 'Tonight, speak aloud one kind thing to yourself for each day of the calendar.',
        medium: 'Look in the mirror and repeat: "I am whole. I am worthy. I am desire." Until you believe it.',
        hot: 'Celebrate the sensual soul you are. Touch, tease, move—let this be a ritual of devotion to yourself.'
    }
};

// Dice roll options
const activities = [
    'Sensual massage', 'Slow dancing', 'Passionate kissing', 
    'Whispered desires', 'Silk & satin', 'Teasing touches',
    'Body exploration', 'Fantasy roleplay'
];

const locations = [
    'Bedroom', 'Living room', 'Bathroom', 'Kitchen',
    'By the window', 'On the couch', 'Guest room', 'Wherever you are'
];
