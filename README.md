# PokemonCardSearch
A child-safe app that allows you to search for cards from the most recent Pokemon TCG set and see prices.
<div>

<h3 align="center">
<a href='https://github.com/kwatts949/PokemonCardSearch/blob/main/README.md#Tech'> Tech </a> <span> · </span>
<a href='https://github.com/kwatts949/PokemonCardSearch/blob/main/README.md#Spec'> Spec </a> <span> · </span>
<a href='https://github.com/kwatts949/PokemonCardSearch/blob/main/README.md#requirements'> Requirements </a> <span> · </span>
<a href='https://github.com/kwatts949/PokemonCardSearch/blob/main/README.md#Installation'> Installation </a><span> · </span>
<a href='https://github.com/kwatts949/PokemonCardSearch/blob/main/README.md#Running-locally'> Running locally</a>
<h3>

</div>

# Tech
![Image](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Image](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Image](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white)
![Image](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)
![Image](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Image](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

# Spec

A very simple app built for my son, who is a Pokemon Card game fanatic. He is always asking how much certain cards are, so that he can expand his collection. I wanted to create a safe environment for him to check card prices and see certain information about each card.
  
The app uses fetch requests to retrieve card data information. I have also built in a currency converter which fetches current exchange rate data to convert EUR to GBP so that prices are displayed in the appropriate currency.
  
<div align='center'>
<img src="/public/images/V1.png" width="50%" height="60%" />
</div>
  
# Requirements
  
* Able to search for cards by Pokemon name.
* Can see image of card.
* Can see cards from current set only.
* Can see rarity of card.
* Can see price of card.
* Can see card name.
  
# To do
  
* Error handling
* Option to sort by set
* Add to wishlist - req DB

# Installation

[Clone this repo](https://github.com/kwatts949/PokemonCardSearch)

In terminal (Mac), run:

```
cd PokemonCardSearch
npm install
```

# Running locally

```
cd PokemonCardSearch
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

