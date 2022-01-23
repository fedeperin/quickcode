<svelte:head>
    <title>Home - QuickCode</title>
</svelte:head>

<h1>QuickCode</h1>
<p>Create, Share and view different pieces of code quickly.</p>
<button><a href="./new">Create</a></button>

<style>
    h1 {
        margin-bottom: 10px;
    }

    button {
        margin-top: 10px;
        padding: 5px;
        font-size: 25px;
        background: #33547a;
        outline: none;
        border: none;
        border-radius: 2px;
        transition: all .5s ease;
    }
    
    button:hover {
        transform: scale(0.95);
    }

    button a {
        text-decoration: none;
    }
</style>
