// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Player Data
const players = [
    {
        name: "TR1 Phantom",
        role: "Valorant - Duelist",
        image: "images/players/phantom.jpg",
        socials: {
            twitter: "#",
            twitch: "#",
            instagram: "#"
        }
    },
    {
        name: "TR1 Warden",
        role: "CS2 - IGL",
        image: "images/players/warden.jpg",
        socials: {
            twitter: "#",
            twitch: "#",
            instagram: "#"
        }
    },
    {
        name: "TR1 Monarch",
        role: "League - Mid Lane",
        image: "images/players/monarch.jpg",
        socials: {
            twitter: "#",
            twitch: "#",
            instagram: "#"
        }
    },
    {
        name: "TR1 Regent",
        role: "Dota 2 - Carry",
        image: "images/players/regent.jpg",
        socials: {
            twitter: "#",
            twitch: "#",
            instagram: "#"
        }
    }
];

// Tournament Data
const tournaments = [
    {
        date: "June 2023",
        title: "VCT Masters Tokyo",
        result: "Champions",
        description: "Defeated Team Liquid 3-1 in the finals"
    },
    {
        date: "April 2023",
        title: "ESL Pro League Season 17",
        result: "Finalists",
        description: "Lost to Faze Clan in overtime"
    },
    {
        date: "February 2023",
        title: "LEC Winter Split",
        result: "Semi-Finalists",
        description: "Strong showing in first season"
    }
];

// Sponsor Data
const sponsors = [
    "images/sponsors/hyperx.png",
    "images/sponsors/nvidia.png",
    "images/sponsors/redbull.png",
    "images/sponsors/secretlab.png"
];

// Render Players
const playerGrid = document.querySelector('.player-grid');
players.forEach(player => {
    playerGrid.innerHTML += `
        <div class="player-card">
            <img src="${player.image}" alt="${player.name}" class="player-image">
            <div class="player-info">
                <h3 class="player-name">${player.name}</h3>
                <p class="player-role">${player.role}</p>
                <div class="player-socials">
                    <a href="${player.socials.twitter}"><i class="fab fa-twitter"></i></a>
                    <a href="${player.socials.twitch}"><i class="fab fa-twitch"></i></a>
                    <a href="${player.socials.instagram}"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
    `;
});

// Render Tournaments
const timeline = document.querySelector('.timeline');
tournaments.forEach((tournament, index) => {
    const position = index % 2 === 0 ? 'left' : 'right';
    timeline.innerHTML += `
        <div class="timeline-item ${position}">
            <div class="timeline-content">
                <div class="timeline-date">${tournament.date}</div>
                <h3 class="timeline-title">${tournament.title}</h3>
                <p><strong>${tournament.result}</strong></p>
                <p>${tournament.description}</p>
            </div>
        </div>
    `;
});

// Render Sponsors
const sponsorCarousel = document.querySelector('.sponsor-carousel');
sponsors.forEach(sponsor => {
    sponsorCarousel.innerHTML += `
        <img src="${sponsor}" alt="Sponsor" class="sponsor-logo">
    `;
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// GSAP Animations
document.addEventListener('DOMContentLoaded', () => {
    // Simple fade-in animation for sections
    gsap.from(".hero-overlay h1", {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.5
    });

    gsap.from(".hero-buttons", {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 1,
        stagger: 0.2
    });

    // Animate player cards on scroll
    gsap.utils.toArray(".player-card").forEach(card => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 80%"
            },
            opacity: 0,
            y: 50,
            duration: 0.8
        });
    });
});