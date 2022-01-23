<script>
    import GithubCorner from '../components/GithubCorner.svelte'
</script>

<GithubCorner />

<div class="container">
    <nav>
        <a href="../" class="home">👨‍💻</a>

        <button><a href="./new">New</a></button>
    </nav>

    <slot></slot>
</div>

<style>
    .container {
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: start;
    }

    .container nav {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .home {
        font-size: 30px;
        text-decoration: none;
        margin-bottom: 20px;
    }

    .container button {
        padding: 5px;
        font-size: 25px;
        outline: none;
        border: none;
        background: #30475a;
        color: #fff;
        border-radius: 2px;
        transition: all .5s ease;
    }
    
    .container button a {
        text-decoration: none;
    }

    .container button:hover {
        transform: scale(0.9);
    }
</style>