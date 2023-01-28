

export const gameService = {
    getCategories,
}

const categories = [
    { name: 'Agents', imgUrl: 'https://prod.assets.earlygamecdn.com/images/12-Valorant-agents.png?x=0.5&y=0.5' },
    { name: 'Buddies', imgUrl: 'https://prod.assets.earlygamecdn.com/images/12-Valorant-agents.png?x=0.5&y=0.5' },
    { name: 'Bundles', imgUrl: 'https://prod.assets.earlygamecdn.com/images/12-Valorant-agents.png?x=0.5&y=0.5' },
    { name: 'Ceremonies', imgUrl: 'https://prod.assets.earlygamecdn.com/images/12-Valorant-agents.png?x=0.5&y=0.5' },
    { name: 'Competitive Tiers', imgUrl: 'https://prod.assets.earlygamecdn.com/images/12-Valorant-agents.png?x=0.5&y=0.5' },
    { name: 'Content Tiers', imgUrl: 'https://prod.assets.earlygamecdn.com/images/12-Valorant-agents.png?x=0.5&y=0.5' },
    { name: 'Contracts', imgUrl: 'https://prod.assets.earlygamecdn.com/images/12-Valorant-agents.png?x=0.5&y=0.5' },
    { name: 'Currencies', imgUrl: 'https://prod.assets.earlygamecdn.com/images/12-Valorant-agents.png?x=0.5&y=0.5' },
    { name: 'Events', imgUrl: 'https://prod.assets.earlygamecdn.com/images/12-Valorant-agents.png?x=0.5&y=0.5' },
    { name: 'Gamemodes', imgUrl: 'https://prod.assets.earlygamecdn.com/images/12-Valorant-agents.png?x=0.5&y=0.5' },
    { name: 'Gear', imgUrl: 'https://prod.assets.earlygamecdn.com/images/12-Valorant-agents.png?x=0.5&y=0.5' },
    { name: 'Level Borders', imgUrl: 'https://prod.assets.earlygamecdn.com/images/12-Valorant-agents.png?x=0.5&y=0.5' },
    { name: 'Maps', imgUrl: 'https://prod.assets.earlygamecdn.com/images/12-Valorant-agents.png?x=0.5&y=0.5' },
    { name: 'Player Cards', imgUrl: 'https://prod.assets.earlygamecdn.com/images/12-Valorant-agents.png?x=0.5&y=0.5' },
    { name: 'Player Titles', imgUrl: 'https://prod.assets.earlygamecdn.com/images/12-Valorant-agents.png?x=0.5&y=0.5' },
    { name: 'Seasons', imgUrl: 'https://prod.assets.earlygamecdn.com/images/12-Valorant-agents.png?x=0.5&y=0.5' },
    { name: 'Sprays', imgUrl: 'https://prod.assets.earlygamecdn.com/images/12-Valorant-agents.png?x=0.5&y=0.5' },
    { name: 'Themes', imgUrl: 'https://prod.assets.earlygamecdn.com/images/12-Valorant-agents.png?x=0.5&y=0.5' },
    { name: 'Weapons', imgUrl: 'https://prod.assets.earlygamecdn.com/images/12-Valorant-agents.png?x=0.5&y=0.5' },
    { name: 'Vesion', imgUrl: 'https://prod.assets.earlygamecdn.com/images/12-Valorant-agents.png?x=0.5&y=0.5' },
    { name: 'About', imgUrl: 'https://prod.assets.earlygamecdn.com/images/12-Valorant-agents.png?x=0.5&y=0.5' },
]

function getCategories() {
    return categories
}