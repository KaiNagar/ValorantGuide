

export const gameService = {
    getCategories,
}

const categories = [
    {name:'Agents',imgUrl:''},
    {name:'Buddies',imgUrl:''},
    {name:'Bundles',imgUrl:''},
    {name:'Ceremonies',imgUrl:''},
    {name:'Competitive Tiers',imgUrl:''},
    {name:'Content Tiers',imgUrl:''},
    {name:'Contracts',imgUrl:''},
    {name:'Currencies',imgUrl:''},
    {name:'Events',imgUrl:''},
    {name:'Gamemodes',imgUrl:''},
    {name:'Gear',imgUrl:''},
    {name:'Level Borders',imgUrl:''},
    {name:'Maps',imgUrl:''},
    {name:'Player Cards',imgUrl:''},
    {name:'Player Titles',imgUrl:''},
    {name:'Seasons',imgUrl:''},
    {name:'Sprays',imgUrl:''},
    {name:'Themes',imgUrl:''},
    {name:'Weapons',imgUrl:''},
    {name:'Vesion',imgUrl:''},
    {name:'About',imgUrl:''},
]

function getCategories(){
    return categories
}