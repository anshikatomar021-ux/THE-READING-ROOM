// 1. DATA: The Master Library (40 Books)
const books = [
    // --- ROMANCE (34-40) ---
    { id: 34, title: "Funny Story", author: "Emily Henry", genre: "romance", trope: "enemies to lovers", image: "images/book (34).jpeg", desc: "Roommates and opposites attract in this sparkling romantic comedy." },
    { id: 35, title: "Jane Eyre", author: "Charlotte Brontë", genre: "romance", trope: "slow burn", image: "images/book (35).jpeg", desc: "A gothic masterpiece featuring a brooding hero and a slow-burn mystery." },
    { id: 36, title: "Pride and Prejudice", author: "Jane Austen", genre: "romance", trope: "enemies to lovers", image: "images/book (36).jpeg", desc: "The gold standard for enemies-to-lovers and social commentary." },
    { id: 37, title: "To All the Boys I’ve Loved Before", author: "Jenny Han", genre: "romance", trope: "fake dating", image: "images/book (37).jpeg", desc: "Secret love letters lead to a charming high school fake dating scheme." },
    { id: 38, title: "Twisted Love", author: "Ana Huang", genre: "romance", trope: "grumpy x sunshine", image: "images/book (38).jpeg", desc: "A dark contemporary romance featuring a brother's best friend." },
    { id: 39, title: "The Love Hypothesis", author: "Ali Hazelwood", genre: "romance", trope: "fake dating", image: "images/book (39).jpeg", desc: "A scientist and a grumpy professor enter a fake relationship for research." },
    { id: 40, title: "Icebreaker", author: "Hannah Grace", genre: "romance", trope: "opposites attract", image: "images/book (40).jpeg", desc: "A competitive figure skater and a hockey captain share the ice." },

    // --- THRILLER (26-33) ---
    { id: 26, title: "The Girl in Room 105", author: "Chetan Bhagat", genre: "thriller", trope: "revenge", image: "images/book (26).jpeg", desc: "An un-love story involving a murder investigation and political angles." },
    { id: 27, title: "The Housemaid", author: "Freida McFadden", genre: "thriller", trope: "Isolation and madness", image: "images/book (27).jpeg", desc: "Suburban secrets and gaslighting unfold in this domestic suspense." },
    { id: 28, title: "The Woman in the Window", author: "A.J. Finn", genre: "thriller", trope: "Isolation and madness", image: "images/book (28).jpeg", desc: "A claustrophobic thriller about an agoraphobic woman witnessing a crime." },
    { id: 29, title: "And Then There Were None", author: "Agatha Christie", genre: "thriller", trope: "survival", image: "images/book (29).jpeg", desc: "Strangers trapped on an island are killed off one by one." },
    { id: 30, title: "None of This is True", author: "Lisa Jewell", genre: "thriller", trope: "Isolation and madness", image: "images/book (30).jpeg", desc: "A psychological thriller involving a podcast and a stalking victim." },
    { id: 31, title: "A Good Girl's Guide to Murder", author: "Holly Jackson", genre: "thriller", trope: "revenge", image: "images/book (31).jpeg", desc: "Small-town secrets are unraveled by a teen determined to find the truth." },
    { id: 32, title: "Behind Closed Doors", author: "B.A. Paris", genre: "thriller", trope: "Isolation and madness", image: "images/book (32).jpeg", desc: "A perfect marriage façade hiding a dark, controlling secret." },
    { id: 33, title: "Dark Matter", author: "Blake Crouch", genre: "thriller", trope: "survival", image: "images/book (33).jpeg", desc: "A mind-bending sci-fi thriller exploring the multiverse and stolen identity." },

    // --- FANTASY (19-21, 22-25) ---
    { id: 19, title: "A Game of Thrones", author: "George R. R. Martin", genre: "fantasy", trope: "revenge", image: "images/book (19).jpeg", desc: "Epic fantasy featuring reluctant heroes and a brutal fight for power." },
    { id: 20, title: "The Palace of Illusions", author: "Chitra Banerjee Divakaruni", genre: "fantasy", trope: "revenge", image: "images/book (20).jpeg", desc: "A mythological retelling of the Mahabharata from Draupadi's perspective." },
    { id: 21, title: "The Hunger Games", author: "Suzanne Collins", genre: "fantasy", trope: "survival", image: "images/book (21).jpeg", desc: "A dystopian survival competition with a high-stakes love triangle." },
    { id: 22, title: "Twelve Months", author: "Jim Butcher", genre: "fantasy", trope: "survival", image: "images/book (22).jpeg", desc: "A fairy tale allegory about greed and punishment." },
    { id: 23, title: "The Poet Empress", author: "Shen Tao", genre: "fantasy", trope: "love triangle", image: "images/book (23).jpeg", desc: "A historical fantasy drama of forbidden love and a rise to power." },
    { id: 24, title: "The Alchemist", author: "Paulo Coelho", genre: "fantasy", trope: "found family", image: "images/book (24).jpeg", desc: "A philosophical journey of self-discovery and following your personal legend." },
    { id: 25, title: "The Name of the Wind", author: "Patrick Rothfuss", genre: "fantasy", trope: "survival", image: "images/book (25).jpeg", desc: "A gifted protagonist’s journey to becoming a legend in a magic academy." },

    // --- HORROR (13-18) ---
    { id: 13, title: "Yakshini", author: "Neil D'Silva", genre: "horror", trope: "Isolation and madness", image: "images/book (13).jpeg", desc: "Mythological horror involving supernatural entities and small-town mystery." },
    { id: 14, title: "This House Will Feed", author: "Maria Tureaud", genre: "horror", trope: "Isolation and madness", image: "images/book (14).jpeg", desc: "Gothic horror centered on a cursed house and generational trauma." },
    { id: 15, title: "Night Terror", author: "Vincent Ralph", genre: "horror", trope: "survival", image: "images/book (15).jpeg", desc: "A psychological survival thriller involving a stalker threat." },
    { id: 16, title: "Funeral Song", author: "Carly Racklin", genre: "horror", trope: "Isolation and madness", image: "images/book (16).jpeg", desc: "Grief-driven haunting and dark family secrets in a gothic setting." },
    { id: 17, title: "X Marks the Haunt", author: "Lindsay Currie", genre: "horror", trope: "found family", image: "images/book (17).jpeg", desc: "A middle-grade ghost story featuring a haunted location and hidden treasure." },
    { id: 18, title: "Better the Devil", author: "Erik J. Brown", genre: "horror", trope: "revenge", image: "images/book (18).jpeg", desc: "Crime horror following a serial killer's legacy and dark secrets." },

    // --- MYSTERY (7-12) ---
    { id: 7, title: "A Gift Before Dying", author: "Malcolm Kempt", genre: "mystery", trope: "revenge", image: "images/book (7).jpeg", desc: "A dark mystery involving a serial killer hunt and detective work." },
    { id: 8, title: "A Killer Kind of Romance", author: "Letizia Lorini", genre: "mystery", trope: "love triangle", image: "images/book (8).jpeg", desc: "Romantic suspense with hidden identities and murder investigation." },
    { id: 9, title: "How to Commit a Postcolonial Murder", author: "Nina McConigley", genre: "mystery", trope: "revenge", image: "images/book (9).jpeg", desc: "A literary mystery exploring cultural tension and identity conflict." },
    { id: 10, title: "No One Aboard", author: "Emy McGuire", genre: "mystery", trope: "survival", image: "images/book (10).jpeg", desc: "A maritime mystery set in an isolated location with suspicious passengers." },
    { id: 11, title: "The Rozabal Line", author: "Ashwin Sanghi", genre: "mystery", trope: "revenge", image: "images/book (11).jpeg", desc: "A historical conspiracy thriller involving religious secrets." },
    { id: 12, title: "Tidespeaker", author: "Sadie Turner", genre: "mystery", trope: "survival", image: "images/book (12).jpeg", desc: "A coastal mystery centered on family secrets and a missing person case." },
    { id: 41, title: "A Pretender's Murder", author: "Christopher Huang", genre: "mystery", trope: "revenge", image: "images/book (12).jpeg", desc: "Historical detective fiction featuring aristocratic impersonation." },

    // --- FICTION/HISTORY (1-4) ---
    { id: 1, title: "Midnight's Children", author: "Salman Rushdie", genre: "history", trope: "found family", image: "images/book (1).jpeg", desc: "Magical realism exploring nation-building and destiny." },
    { id: 2, title: "The Book Thief", author: "Markus Zusak", genre: "history", trope: "found family", image: "images/book (2).jpeg", desc: "A story of survival and war narrated by Death himself." },
    { id: 3, title: "The Kite Runner", author: "Khaled Hosseini", genre: "history", trope: "revenge", image: "images/book (3).jpeg", desc: "An emotional journey of guilt and redemption set against a war backdrop." },
    { id: 4, title: "The White Tiger", author: "Aravind Adiga", genre: "history", trope: "survival", image: "images/book (4).jpeg", desc: "A social fiction about the rise from poverty and an anti-hero's journey." }
];

// 2. DOM SELECTION
const recommendBtn = document.getElementById('recommendBtn');
const bookContainer = document.getElementById('bookContainer');

// 3. FILTERING LOGIC
recommendBtn.addEventListener('click', () => {
    const selectedGenre = document.getElementById('genre').value;
    const selectedTrope = document.getElementById('trope').value;

    const filteredBooks = books.filter(book => {
        const matchesGenre = !selectedGenre || book.genre === selectedGenre;
        const matchesTrope = !selectedTrope || book.trope === selectedTrope;
        return matchesGenre && matchesTrope;
    });

    displayBooks(filteredBooks);
});

// 4. RENDERING FUNCTION
function displayBooks(results) {
    bookContainer.innerHTML = ""; // Clear current display

    if (results.length === 0) {
        bookContainer.innerHTML = `<p class="placeholder">No books match that combo! Try another selection.</p>`;
        return;
    }

    results.forEach(book => {
        const card = document.createElement('div');
        card.className = 'book-card';
        card.innerHTML = `
            <img src="${book.image}" alt="${book.title} cover">
            <h3>${book.title}</h3>
            <p class="author">By ${book.author}</p>
            <p class="description">${book.desc}</p>
        `;
        bookContainer.appendChild(card);
    });
}