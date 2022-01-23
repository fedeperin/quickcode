<script>
    import { insertToDb } from '../supabase/db'
    import { newId } from '../newId'

    let language = 'javascript'
    let code
    let created = false
    let codeId

    const addCode = () => {
        codeId = newId()
        insertToDb('code', {
            code: code,
            lang: language,
            code_id: codeId
        }).then(() => {
            created = true
        })
    }
</script>

<svelte:head>
    <title>New - QuickCode</title>
</svelte:head>

{#if !created}
     <form on:submit|preventDefault={addCode}>
         <h1>Create a QuickCode: </h1>
         <h3>Your code: </h3>
         <p>NOTE: Your code will be highlighted when created</p>
         <textarea bind:value={code} required></textarea>
         
         <h3>Select programming language: </h3>
         <select bind:value={ language } >
             <option value="javascript">JavaScript</option>
             <option value="json">JSON</option>
             <option value="c">C</option>
             <option value="css">CSS</option>
             <option value="php">PHP</option>
             <option value="python">Python</option>
             <option value="rust">Rust</option>
             <option value="r">R</option>
             <option value="sql">SQL</option>
         </select>
     
         <button type="submit">Create</button>
     </form>
{:else}
    <p>Created! <a href="./{codeId}">Visit your new QuickCode</a></p>
{/if}

<style>
    h1 {
        margin-bottom: 20px;
    }

    h3 {
        margin-bottom: 7px;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: start;
    }

    textarea {
        padding: 10px;
        outline: none;
        width: 250px;
        border: none;
        resize: vertical;
        min-height: 90px;
        max-height: 800px;
        margin-bottom: 30px;
    }

    button {
        padding: 5px;
        font-size: 30px;
        margin-top: 20px;
        outline: none;
        border: none;
        background: #30475a;
        color: #fff;
        border-radius: 2px;
        cursor: pointer;
        transition: all .5s ease;
    }

    button:hover {
        transform: scale(0.9);
    }

    p {
        margin-bottom: 5px;
    }

    select {
        padding: 5px;
        cursor: pointer;
    }

    option {
        padding: 5px;
    }
</style>