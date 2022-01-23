<svelte:head>
    <link rel="stylesheet" href="https://tutsplus.github.io/syntax-highlighter-demos/highlighters/Prism/prism_okaidia.css">
</svelte:head>

<script>
    import { onMount } from 'svelte'
    export let language
    export let code
    onMount(() => {
        let script = document.createElement('script')
        script.src = 'https://tutsplus.github.io/syntax-highlighter-demos/highlighters/Prism/prism.js'
        document.head.append(script)
        script.onload = () => {
            let lang_script
            let lang_module
            switch (language) {
                case 'javascript':
                    lang_module = 'https://prismjs.com/components/prism-javascript.js'
                    break
                case 'json':
                    lang_module = 'https://prismjs.com/components/prism-json.js'
                    break
                case 'c':
                    lang_module = 'https://prismjs.com/components/prism-c.js'
                    break
                case 'css':
                    lang_module = 'https://prismjs.com/components/prism-css.js'
                    break
                case 'php':
                    lang_module = 'https://prismjs.com/components/prism-php.js'
                    break
                case 'python':
                    lang_module = 'https://prismjs.com/components/prism-python.js'
                    break
                case 'rust':
                    lang_module = 'https://prismjs.com/components/prism-rust.js'
                    break
                case 'r':
                    lang_module = 'https://prismjs.com/components/prism-r.js'
                    break
                case 'sql':
                    lang_module = 'https://prismjs.com/components/prism-sql.js'
                    break
            }
            lang_script = document.createElement('script')
            lang_script.src = lang_module
            lang_script.async = true
            document.head.append(lang_script)
            lang_script.onload = () => {
                Prism.highlightAll()
            }
        }
    })
</script>

<div>
    <pre><code class="language-{ language }">{ code }</code></pre>
</div>