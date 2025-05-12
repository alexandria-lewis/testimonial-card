const peeps = [
	{
		i: "https://images.unsplash.com/photo-1635685296916-95acaf58471f?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		n: "Samanta Chen",
		u: "samantaeats",
		c: "Food blogger and amateur chef exploring Asian fusion cuisine from my tiny Brooklyn kitchen. 🍜 Documenting my messy cooking adventures, restaurant reviews, and family recipes. Always looking for the perfect dumpling!"
	},
	{
		i: "https://images.unsplash.com/photo-1521336575822-6da63fb45455?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		n: "Marcus Rodriguez",
		u: "marcusthewanderer",
		c: "Adventure photographer | Backpacked through 47 countries 🎒📸 Currently based in Denver. Sharing stories from the road and tips for budget travel. Next stop: Patagonia!"
	},
	{
		i: "https://images.unsplash.com/photo-1678559612446-2bb33661007c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		n: "Priya Patel",
		u: "priyacreates",
		c: "UX Designer by day, watercolor artist by night 🎨✨ Mumbai-born, Bay Area-based. Creating digital experiences and painting the world around me. Available for freelance projects!"
	},
	{
		i: "https://images.unsplash.com/photo-1550870557-801db737a407?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		n: "Jordan Thompson",
		u: "jordanvibes22",
		c: "Music producer | Coffee enthusiast | Dog parent to Luna 🎵☕🐕 Dropping beats from my home studio in Nashville. Check out my latest track in my bio!"
	},
	{
		i: "https://images.unsplash.com/photo-1514894780887-121968d00567?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		n: "Elena Volkov",
		u: "elenadreams",
		c: "Bookworm | Night sky photographer | Dreamer 📚⭐ Based in Prague. Sharing book recommendations, astrophotography, and thoughts on life. Currently reading: sci-fi classics"
	}
];

let imagesLoaded = false;


const preloadImages = () => {
  console.log('Starting image preload...');
	button.style.display = "none";
  
  const promises = peeps.map(person => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        console.log(`Loaded: ${person.n}`);
        resolve();
      };
      img.onerror = reject;
      img.src = person.i;
    });
  });
  
  return Promise.all(promises).then(() => {
    imagesLoaded = true;
    console.log('All images preloaded!');
		button.style.display = "block";
  });
};
	
let randomPerson;
const img = document.querySelector(`div[h] img`);
const name = document.querySelector(`div[m] p`);
const alias = document.querySelector(`div[m] span`);
const content = document.querySelector(`p[c]`);
const button = document.querySelector('button[b]');

const hydratePerson = () => {
	randomPerson = peeps[Math.floor(Math.random() * peeps.length)];
	img.src = randomPerson.i;
	name.innerHTML = randomPerson.n;
  alias.innerHTML = "&#64;"+randomPerson.u;
	content.innerHTML = randomPerson.c;
}

button.addEventListener('click', (event) => {
	hydratePerson();
});

window.onload = function() {
	hydratePerson();
	preloadImages();
};