<script>
  const cards = [
    { title: 'Github', img: 'https://img.icons8.com/plasticine/100/github.png', text: 'Projects', link: 'https://github.com/PrashantBtkl' },
    { title: 'Medium', img: 'https://img.icons8.com/?size=100&id=XVNvUWCvvlD9&format=png&color=000000', text: 'Bug Bounty blog', link: 'https://prashantbhatkal2000.medium.com' },
    { title: 'LinkedIn', img: 'https://img.icons8.com/?size=100&id=Pz213it3TQxp&format=png&color=000000', text: 'Experience', link: 'https://linkedin.com/in/prashant-bhatkal' },
  ];
</script>

<svelte:head>
  <link href="https://fonts.googleapis.com/css?family=Gelasio" rel="stylesheet">
</svelte:head>
<h1>Prashant Bhatkal</h1>
<body>
<div class="about">
I build software with Golang, Elixir, Python and Svelte. Use the links below to connect with me or view my work!
 
</div>

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
</body>

<style>
:global(body) {
    font-size: 16px;
    line-height: 1.5;
    color: #333;
  }


h1 {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

.about {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    min-height: 20vh;
    max-width: 100%;
    padding: 20px;
    text-align: center;
	position: relative;
}

.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    min-height: 20vh;
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
