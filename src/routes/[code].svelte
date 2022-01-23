<script context="module">
    import { searchData } from '../supabase/db'
    export async function load({ params }) {
        let id = params.code
        let data = await searchData('code', 'code_id', id) 
        data = data[0]
        return { props: { data }}
    }
</script>

<script>
    export let data

    import Prism from '../components/Prism.svelte'
</script>

<svelte:head>
    <title>Piece of { data.lang } code - QuickCode</title>
</svelte:head>

{#if data != undefined}
    <Prism language={ data.lang } code={ data.code }/>
{:else}
    <p>No code at this URL. <a href="../">Go Home</a></p>
{/if}

<style>
</style>