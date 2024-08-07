<script>
  const cards = [
    { title: 'Github', img: 'https://img.icons8.com/plasticine/100/github.png', text: 'Projects', link: 'https://github.com/PrashantBtkl' },
    { title: 'Medium', img: 'https://img.icons8.com/?size=100&id=XVNvUWCvvlD9&format=png&color=000000', text: 'Bug Bounty blog', link: 'https://prashantbhatkal2000.medium.com' },
    { title: 'LinkedIn', img: 'https://img.icons8.com/?size=100&id=Pz213it3TQxp&format=png&color=000000', text: 'Experience', link: 'https://linkedin.com/in/prashant-bhatkal' },
  ];
</script>

<div class="container">
  {#each cards as card}
    <a href={card.link} target="_blank" rel="noopener noreferrer">
		<div class="card">
    	  <h2>{card.title}</h2>
    	  <img src={card.img} alt="" width="100" height="100"> 
    	  <p>{card.text}</p>
    	</div>
    </a>
  {/each}
</div>

<style>
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 20px;
  }

  .card {
    background-color: #f0f0f0;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin: 10px;
    padding: 20px;
    width: 200px;
    text-align: center;
  }

  h2 {
    color: #333;
    margin-bottom: 10px;
  }

  p {
    color: #666;
    margin-bottom: 15px;
  }

  a {
    display: inline-block;
    color: white;
    text-decoration: none;
    transition: background-color 0.3s ease;
    border-radius: 8px;
    margin: 1px;
    padding: 2px;
  }

  a:hover {
    background-color: #cedaed;
  }
</style>
