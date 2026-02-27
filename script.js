//==================
//  ARRAY STORING THE DATA OF BOOKS
//==================

const books = [
    // --- ROMANCE ---
    { title: "Jane Eyre", author: "Charlotte Brontë", genre: "romance", trope: "slow burn", image: "images/book (35).jpeg", desc: "A gothic masterpiece featuring a brooding hero and a slow-burn mystery." },
    { title: "Funny Story", author: "Emily Henry", genre: "romance", trope: "opposites attract", image: "images/book (34).jpeg", desc: "Roommates and opposites attract in this sparkling romantic comedy." },
    { title: "Twisted Love", author: "Ana Huang", genre: "romance", trope: "grumpy x sunshine", image: "images/book (38).jpeg", desc: "A dark contemporary romance featuring a brother's best friend." },
    { title: "Pride and Prejudice", author: "Jane Austen", genre: "romance", trope: "enemies to lovers", image: "images/book (36).jpeg", desc: "The gold standard for enemies-to-lovers and social commentary." },
    { title: "To All the Boys I’ve Loved Before", author: "Jenny Han", genre: "romance", trope: "fake dating", image: "images/book (37).jpeg", desc: "Secret love letters lead to a charming high school fake dating scheme." },
    { title: "The Love Hypothesis", author: "Ali Hazelwood", genre: "romance", trope: "fake dating", image: "images/book (39).jpeg", desc: "A scientist and a grumpy professor enter a fake relationship." },
    { title: "Icebreaker", author: "Hannah Grace", genre: "romance", trope: "grumpy x sunshine", image: "images/book (40).jpeg", desc: "A competitive figure skater and a hockey captain share the ice." },

    // --- THRILLER ---
    { title: "The Girl in Room 105", author: "Chetan Bhagat", genre: "thriller", trope: "revenge", image: "images/book (26).jpeg", desc: "An un-love story involving a murder investigation and political angles." },
    { title: "The Housemaid", author: "Freida McFadden", genre: "thriller", trope: "survival", image: "images/book (27).jpeg", desc: "Suburban secrets and gaslighting unfold in this domestic suspense." },
    { title: "The Woman in the Window", author: "A.J. Finn", genre: "thriller", trope: "isolation and madness", image: "images/book (28).jpeg", desc: "An agoraphobic woman witnesses a crime from her window." },
    { title: "And Then There Were None", author: "Agatha Christie", genre: "thriller", trope: "survival", image: "images/book (29).jpeg", desc: "Strangers trapped on an island are killed off one by one." },
    { title: "Dark Matter", author: "Blake Crouch", genre: "thriller", trope: "survival", image: "images/book (33).jpeg", desc: "A mind-bending sci-fi thriller exploring the multiverse." },
    { title: "None of This is True", author: "Lisa Jewell", genre: "thriller", trope: "isolation and madness", image: "images/book (30).jpeg", desc: "A psychological thriller involving a podcast and stalking." },
    { title: "A Good Girl's Guide to Murder", author: "Holly Jackson", genre: "thriller", trope: "revenge", image: "images/book (31).jpeg", desc: "Small-town secrets are unraveled by a determined teen." },
    { title: "Behind Closed Doors", author: "B.A. Paris", genre: "thriller", trope: "isolation and madness", image: "images/book (32).jpeg", desc: "A perfect marriage hiding a dark, controlling secret." },

    // --- FANTASY ---
    { title: "A Game of Thrones", author: "George R. R. Martin", genre: "fantasy", trope: "revenge", image: "images/book (19).jpeg", desc: "Epic fantasy featuring reluctant heroes and a fight for power." },
    { title: "The Palace of Illusions", author: "Chitra Banerjee Divakaruni", genre: "fantasy", trope: "revenge", image: "images/book (20).jpeg", desc: "The Mahabharata from Draupadi's perspective." },
    { title: "The Hunger Games", author: "Suzanne Collins", genre: "fantasy", trope: "survival", image: "images/book (21).jpeg", desc: "A dystopian survival competition with high stakes." },
    { title: "Twelve Months", author: "Jim Butcher", genre: "fantasy", trope: "survival", image: "images/book (22).jpeg", desc: "A fairy tale allegory about greed and punishment." },
    { title: "The Poet Empress", author: "Shen Tao", genre: "fantasy", trope: "love triangle", image: "images/book (23).jpeg", desc: "Historical drama of forbidden love and rise to power." },
    { title: "The Alchemist", author: "Paulo Coelho", genre: "fantasy", trope: "found family", image: "images/book (24).jpeg", desc: "A journey of self-discovery and following your legend." },
    { title: "The Name of the Wind", author: "Patrick Rothfuss", genre: "fantasy", trope: "survival", image: "images/book (25).jpeg", desc: "A gifted protagonist’s journey in a magic academy." },

    // --- HORROR ---
    { title: "Yakshini", author: "Neil D'Silva", genre: "horror", trope: "isolation and madness", image: "images/book (13).jpeg", desc: "Mythological horror involving supernatural entities." },
    { title: "This House Will Feed", author: "Maria Tureaud", genre: "horror", trope: "isolation and madness", image: "images/book (14).jpeg", desc: "Gothic horror centered on a cursed house." },
    { title: "Night Terror", author: "Vincent Ralph", genre: "horror", trope: "survival", image: "images/book (15).jpeg", desc: "Psychological survival thriller involving a stalker." },
    { title: "Funeral Song", author: "Carly Racklin", genre: "horror", trope: "isolation and madness", image: "images/book (16).jpeg", desc: "Grief-driven haunting and dark family secrets." },
    { title: "X Marks the Haunt", author: "Lindsay Currie", genre: "horror", trope: "found family", image: "images/book (17).jpeg", desc: "A middle-grade ghost story with hidden treasure." },
    { title: "Better the Devil", author: "Erik J. Brown", genre: "horror", trope: "revenge", image: "images/book (18).jpeg", desc: "Crime horror following a serial killer's legacy." },

    // --- MYSTERY ---
    { title: "A Gift Before Dying", author: "Malcolm Kempt", genre: "mystery", trope: "revenge", image: "images/book (7).jpeg", desc: "A dark mystery involving a serial killer hunt." },
    { title: "A Killer Kind of Romance", author: "Letizia Lorini", genre: "mystery", trope: "love triangle", image: "images/book (8).jpeg", desc: "Romantic suspense with murder investigation." },
    { title: "How to Commit a Postcolonial Murder", author: "Nina McConigley", genre: "mystery", trope: "revenge", image: "images/book (9).jpeg", desc: "Literary mystery exploring cultural tension." },
    { title: "No One Aboard", author: "Emy McGuire", genre: "mystery", trope: "survival", image: "images/book (10).jpeg", desc: "A maritime mystery set in an isolated location." },
    { title: "The Rozabal Line", author: "Ashwin Sanghi", genre: "mystery", trope: "revenge", image: "images/book (11).jpeg", desc: "A historical conspiracy involving religious secrets." },
    { title: "Tidespeaker", author: "Sadie Turner", genre: "mystery", trope: "survival", image: "images/book (12).jpeg", desc: "Coastal mystery centered on family secrets." },
    { title: "A Pretender's Murder", author: "Christopher Huang", genre: "mystery", trope: "revenge", image: "images/book (41).jpeg", desc: "Historical detective fiction with impersonation." },

    // --- FICTION ---
    { title: "Midnight's Children", author: "Salman Rushdie", genre: "fiction", trope: "found family", image: "images/book (1).jpeg", desc: "Magical realism exploring nation-building." },
    { title: "The Book Thief", author: "Markus Zusak", genre: "fiction", trope: "found family", image: "images/book (2).jpeg", desc: "Survival and war narrated by Death himself." },
    { title: "The Kite Runner", author: "Khaled Hosseini", genre: "fiction", trope: "revenge", image: "images/book (3).jpeg", desc: "An emotional journey of guilt and redemption." },
    { title: "The White Tiger", author: "Aravind Adiga", genre: "fiction", trope: "survival", image: "images/book (4).jpeg", desc: "Rise from poverty and an anti-hero's journey." }
];
// DOM SELECTION//
const recommendBtn = document.getElementById('recommendBtn');
const bookContainer = document.getElementById('bookContainer');
const themeToggle = document.getElementById('themeToggle'); // Added this for the button

// ==========================================
// 3. THE DARK MODE SWITCH 
// ==========================================
themeToggle.addEventListener('click', function() {
    // Logic: Target the body and "Toggle" (add if missing, remove if present) the class
    document.body.classList.toggle('dark-mode');

    // Change the button text to know what's happening
    if (document.body.classList.contains('dark-mode')) {
        themeToggle.textContent = '☀️ Light Mode';
    } else {
        themeToggle.textContent = '🌙 Dark Mode';
    }
});

// ==========================================
// 4. FILTERING LOGIC 
// ==========================================
recommendBtn.addEventListener('click', function() {
    const selectedGenre = document.getElementById('genre').value;
    const selectedTrope = document.getElementById('trope').value;

    let matches = [];//empty space for selected books

    for (let i = 0; i < books.length; i++) {
        let currentBook = books[i];

        let genreIsRight = (selectedGenre === "" || currentBook.genre === selectedGenre);
        let tropeIsRight = (selectedTrope === "" || currentBook.trope === selectedTrope);

        if (genreIsRight && tropeIsRight) {
            matches.push(currentBook);
        }
    }

    displayBooks(matches);
});

// 5. RENDERING FUNCTION (Showing the cards)
function displayBooks(bookList) {
    bookContainer.innerHTML = "";

    if (bookList.length === 0) {
        bookContainer.innerHTML = `<p class="placeholder">No books match that combo! Try another selection.</p>`;
        return;
    }

    for (let j = 0; j < bookList.length; j++) {
        let book = bookList[j];

        const card = document.createElement('div');
        card.className = 'book-card';
        
        card.innerHTML = `
            <img src="${book.image}" alt="${book.title} cover">
            <h3>${book.title}</h3>
            <p class="author">By ${book.author}</p>
            <p class="description">${book.desc}</p>
        `;
        
        bookContainer.appendChild(card);
    }
}
