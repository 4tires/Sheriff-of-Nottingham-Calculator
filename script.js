const goods_type = ['apple', 'cheese', 'bread', 'chicken']

const cards = {
    'apple': {
        'num_three_players': 48,
        'num_four_players': 48,
        'gold_value': 2,
        'penalty': 2,
        'goods_amount': 1,
        'goods_type': "apple",
    },
    'cheese': {
        'num_three_players': 36,
        'num_four_players': 36,
        'gold_value': 3,
        'penalty': 2,
        'goods_amount': 1,
        'goods_type': "cheese",
    },
    'bread': {
        'num_three_players': 0,
        'num_four_players': 36,
        'gold_value': 3,
        'penalty': 2,
        'goods_amount': 1,
        'goods_type': "bread",
    },
    'chicken': {
        'num_three_players': 24,
        'num_four_players': 24,
        'gold_value': 4,
        'penalty': 2,
        'goods_amount': 1,
        'goods_type': "chicken",
    },    
    'pepper': {
        'num_three_players': 18,
        'num_four_players': 22,
        'gold_value': 6,
        'penalty': 4,
        'goods_amount': 1,
        'goods_type': "contraband",
    },
    'mead': {
        'num_three_players': 16,
        'num_four_players': 21,
        'gold_value': 7,
        'penalty': 4,
        'goods_amount': 1,
        'goods_type': "contraband",
    },
    'silk': {
        'num_three_players': 9,
        'num_four_players': 12,
        'gold_value': 8,
        'penalty': 4,
        'goods_amount': 1,
        'goods_type': "contraband",
    },
    'crossbow': {
        'num_three_players': 5,
        'num_four_players': 5,
        'gold_value': 9,
        'penalty': 4,
        'goods_amount': 1,
        'goods_type': "contraband",
    },
    'green_apple': {
        'num_three_players': 2,
        'num_four_players': 2,
        'gold_value': 4,
        'penalty': 3,
        'goods_amount': 2,
        'goods_type': "apple",
    },
    'golden_apple': {
        'num_three_players': 1,
        'num_four_players': 2,
        'gold_value': 6,
        'penalty': 4,
        'goods_amount': 3,
        'goods_type': "apple",
    },
    'gouda_cheese': {
        'num_three_players': 2,
        'num_four_players': 2,
        'gold_value': 6,
        'penalty': 4,
        'goods_amount': 2,
        'goods_type': "cheese",
    },
    'blue_cheese': {
        'num_three_players': 0,
        'num_four_players': 1,
        'gold_value': 9,
        'penalty': 5,
        'goods_amount': 3,
        'goods_type': "cheese",
    },
    'rye_bread': {
        'num_three_players': 0,
        'num_four_players': 2,
        'gold_value': 6,
        'penalty': 4,
        'goods_amount': 2,
        'goods_type': "bread",
    },
    'pumpernickel_bread': {
        'num_three_players': 0,
        'num_four_players': 1,
        'gold_value': 9,
        'penalty': 5,
        'goods_amount': 3,
        'goods_type': "bread",
    },
    'royal_rooster': {
        'num_three_players': 1,
        'num_four_players': 2,
        'gold_value': 8,
        'penalty': 4,
        'goods_amount': 2,
        'goods_type': "chicken",
    },
};


// Function to create a player card
function createPlayerCard(playerNumber) {
    const playerDiv = document.createElement('div');
    playerDiv.className = 'player';
    playerDiv.id = `player${playerNumber}`;
    
    playerDiv.innerHTML = `
        <h2 contenteditable="true">Player ${playerNumber}</h2>
        <div>
            <div class="goods_type" id="legal_goods_${playerNumber}">
                <div class="legal_good">
                    <span class="item">
                        <img src="./icons/apple.svg" alt="apple">
                        <label>Apples</label>
                    </span>
                    <input type="number" name="num_apples" min="0" class="apple">
                </div>
                <div class="legal_good">
                    <span class="item">
                        <img src="./icons/cheese.svg" alt="cheese">
                        <label>Cheese</label>
                    </span>    
                        <input type="number" name="num_cheese" min="0" class="cheese">
                </div>
                <div class="legal_good">
                    <span class="item">
                        <img src="./icons/bread.svg" alt="bread">
                        <label>Bread</label>
                    </span>    
                        <input type="number" name="num_bread" min="0" class="bread">
                </div>
                <div class="legal_good">
                    <span class="item">
                        <img src="./icons/chicken.svg" alt="chicken">
                        <label>Chicken</label>
                    </span>    
                        <input type="number" name="num_chicken" min="0" class="chicken">
                </div>
            </div>
            <div class="goods_type" id="contraband_goods_${playerNumber}">
                <div class="contraband_good">
                    <span class="item">
                        <img src="./icons/pepper.svg" alt="pepper">
                        <label>Peppers</label>
                    </span>    
                        <input type="number" name="num_Peppers" min="0" class="contraband">
                </div>
                <div class="contraband_good">
                    <span class="item">
                        <img src="./icons/mead.svg" alt="mead">
                        <label>Meads</label>
                    </span>    
                        <input type="number" name="num_Meads" min="0" class="contraband">
                </div>
                <div class="contraband_good">
                    <span class="item">
                        <img src="./icons/silk.svg" alt="silk">
                        <label>Silks</label>
                    </span>    
                        <input type="number" name="num_Silks" min="0" class="contraband">
                </div>
                <div class="contraband_good">
                    <span class="item">
                        <img src="./icons/crossbow.svg" alt="crossbow">
                        <label>Crossbows</label>
                    </span>    
                        <input type="number" name="num_Crossbows" min="0" class="contraband">
                </div>
            </div>
            <div class="goods_type" id="royal_goods_${playerNumber}">
                <div class="royal_good">
                    <span class="item">
                        <img src="./icons/green_apple.svg" alt="green apple">
                        <label>Green apples</label>
                    </span>    
                        <input type="number" name="num_Green_apples" min="0" class="apple">
                </div>
                <div class="royal_good">
                    <span class="item">
                        <img src="./icons/golden_apple.svg" alt="golden apple">
                        <label>Golden apples</label>
                    </span>    
                        <input type="number" name="num_Golden_apples" min="0" class="apple">
                </div>
                <div class="royal_good">
                    <span class="item">
                        <img src="./icons/gouda_cheese.svg" alt="gouda cheese">
                        <label>Gouda cheeses</label>
                    </span>    
                        <input type="number" name="num_Gouda_cheeses" min="0" class="cheese">
                </div>
                <div class="royal_good">
                    <span class="item">
                        <img src="./icons/blue_cheese.svg" alt="blue cheese">
                        <label>Blue cheeses</label>
                    </span>    
                        <input type="number" name="num_Blue_cheeses" min="0" class="cheese">
                </div>
                <div class="royal_good">
                    <span class="item">
                        <img src="./icons/rye_bread.svg" alt="rye bread">
                        <label>Rye breads</label>
                    </span>    
                        <input type="number" name="num_Rye_breads" min="0" class="bread">
                </div>
                <div class="royal_good">
                    <span class="item">
                        <img src="./icons/pumpernickel_bread.svg" alt="pumpernickel bread">
                        <label>Pumpernickel breads</label>
                    </span>    
                        <input type="number" name="num_Pumpernickel_breads" min="0" class="bread">
                </div>
                <div class="royal_good">
                    <span class="item">
                        <img src="./icons/royal_rooster.svg" alt="royal rooster">
                        <label>Royal Roosters</label>
                    </span>    
                        <input type="number" name="num_Royal_Roosters" min="0" class="chicken">
                </div>
            </div>
            <div class="goods_type" id="coins_${playerNumber}">
                <div class="coin">
                    <span class="item">
                        <img src="./icons/black_coin.svg" alt="one gold coin">
                        <label>1 gold coin</label>
                    </span>    
                        <input type="number" name="one_gold" min="0" class="">
                </div>
                <div class="coin">
                    <span class="item">
                        <img src="./icons/copper_coin.svg" alt="5 gold coin">
                        <label>5 gold coin</label>
                    </span>    
                        <input type="number" name="five_gold" min="0" class="">
                </div>
                <div class="coin">
                    <span class="item">
                        <img src="./icons/silver_coin.svg" alt="20 gold coin">
                        <label>20 gold coin</label>
                    </span>    
                        <input type="number" name="twenty_gold" min="0" class="">
                </div>
                <div class="coin">
                    <span class="item">
                        <img src="./icons/gold_coin.svg" alt="50 gold coin">
                        <label>50 gold coin</label>
                    </span>    
                        <input type="number" name="fifty_gold" min="0" class="">
                </div>
            </div>
            <div>
                <label>Total score</label>
                <span class="score" id="score_${playerNumber}">0</span>
            </div>
        </div>
    `;
    
    return playerDiv;
}

// Initialize players when page loads
document.addEventListener('DOMContentLoaded', function() {
    const playersContainer = document.getElementById('playersContainer');
    
    // Clear any existing content
    playersContainer.innerHTML = '';
    
    // Create 5 players
    for (let i = 1; i <= 5; i++) {
        const playerCard = createPlayerCard(i);
        playersContainer.appendChild(playerCard);
    }

    // Add event delegation for all inputs
    playersContainer.addEventListener('input', function(event) {
        if (event.target.type === 'number') {
            // Get the player number from the closest player div
            const playerDiv = event.target.closest('.player');
            const playerNumber = playerDiv.id.replace('player', '');
            calculateTotal(playerNumber);
        }
    });
});

// Calculate totals
function calculateTotal(playerNumber) {
    const player = document.getElementById(`player${playerNumber}`);
    const player_cards = player.querySelectorAll('input[type="number"]');

    const num_apple = parseInt(player_cards[0].value) || 0;
    const num_cheese = parseInt(player_cards[1].value) || 0;
    const num_bread = parseInt(player_cards[2].value) || 0;
    const num_chicken = parseInt(player_cards[3].value) || 0;
    const num_peppers = parseInt(player_cards[4].value) || 0;
    const num_meads = parseInt(player_cards[5].value) || 0;
    const num_silks = parseInt(player_cards[6].value) || 0;
    const num_crossbows = parseInt(player_cards[7].value) || 0;
    const num_green_apples = parseInt(player_cards[8].value) || 0;
    const num_golden_apples = parseInt(player_cards[9].value) || 0;
    const num_gouda_cheeses = parseInt(player_cards[10].value) || 0;
    const num_blue_cheeses = parseInt(player_cards[11].value) || 0;
    const num_rye_breads = parseInt(player_cards[12].value) || 0;
    const num_pumpernickel_breads = parseInt(player_cards[13].value) || 0;
    const num_royal_roosters = parseInt(player_cards[14].value) || 0;
    const num_one_gold = parseInt(player_cards[15].value) || 0;
    const num_five_gold = parseInt(player_cards[16].value) || 0;
    const num_twenty_gold = parseInt(player_cards[17].value) || 0;
    const num_fifty_gold = parseInt(player_cards[18].value) || 0;


    const total =
    (num_apple * cards.apple.gold_value) + 
    (num_cheese * cards.cheese.gold_value) + 
    (num_bread * cards.bread.gold_value) + 
    (num_chicken * cards.chicken.gold_value) + 
    (num_peppers * cards.pepper.gold_value) + 
    (num_meads * cards.mead.gold_value) + 
    (num_silks * cards.silk.gold_value) + 
    (num_crossbows * cards.crossbow.gold_value) +
    (num_green_apples * cards.green_apple.gold_value) +
    (num_golden_apples * cards.golden_apple.gold_value) +
    (num_gouda_cheeses * cards.gouda_cheese.gold_value) +
    (num_blue_cheeses * cards.blue_cheese.gold_value) +
    (num_rye_breads * cards.rye_bread.gold_value) +
    (num_pumpernickel_breads * cards.pumpernickel_bread.gold_value) +
    (num_royal_roosters * cards.royal_rooster.gold_value) +
    (num_one_gold * 1) +
    (num_five_gold * 5) +
    (num_twenty_gold * 20) +
    (num_fifty_gold * 50);

    document.getElementById(`score_${playerNumber}`).textContent = total;
    return total;

};

// Reset input boxes
function reset () {
    const player_cards = document.querySelectorAll('input[type="number"]');
    player_cards.forEach(card => card.value = "");
    const scores = document.querySelectorAll('span[class="score"]');
    scores.forEach(score => score.textContent = 0);
};

// Calculate King and Queen Bonuses
function calculateBonus() {
    const king_queen_bonus = {
        'apple': [20, 10],
        'cheese': [15, 10],
        'bread': [15, 10],
        'chicken': [10, 5],
    }

    // Get amounts for each type of good for each player
    const amount_apples = []
    const amount_cheese = []
    const amount_bread = []
    const amount_chicken = []

    for (let i = 1; i <= 5; i++) {
        const player = document.getElementById(`player${playerNumber}`);
        const player_cards = player.querySelectorAll('input[type="number", "goods_type=]');
    }

    // For each type of good
    

    for (const i of goods_type) {
        console.log(i)
            for (let i = 1; i <= 5; i++) {
            
            // Sum amount of each player (must be >0)
        }
    }
    
    

    return 0
}