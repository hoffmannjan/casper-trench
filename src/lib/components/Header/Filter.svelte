<script>
    import NavbarChevron from "$lib/icons/NavbarChevron.svelte";
    import SearchIcon from "$lib/icons/SearchIcon.svelte";

    export let value = "";
</script>

<div class="filter">
    <div class="filter-dropdown">
        <div class="text">
            Filter
        </div>
        <div class="chevron">
            <NavbarChevron />
        </div>
    </div>

    <input type="text" name="filter" placeholder="Search by Address / Txn Hash / Block / Token / Ens" bind:value>

    <div class="search">
        <div class="search-icon">
            <SearchIcon />
        </div>
    </div>
</div>

<style lang='postcss'>
    .filter {
        @apply flex items-center;
        @apply w-[clamp(100px,34.58vw,34.58vw)] h-[clamp(10px,2.5vw,2.5vw)] bg-[#09145A];
        @apply text-[clamp(10px,0.83vw,0.83vw)] text-white;
        border-radius: 0 0.24vw 0.24vw 0;
    }

    .filter-dropdown {
        @apply w-[20%] h-full bg-[#091872] flex items-center justify-center cursor-pointer;
    }

    input {
        @apply bg-transparent w-full flex-grow px-[clamp(16px,0.95vw,0.95vw)];
        -webkit-appearance: none;
        outline: none;
    }

    .chevron {
        @apply h-[clamp(14px,0.95vw,0.95vw)] w-[clamp(14px,0.95vw,0.95vw)] ml-[clamp(4px,0.36vw,0.36vw)];
    }

    .search {
        @apply h-full w-[clamp(20px,3.36vw,3.36vw)] flex items-center justify-center cursor-pointer;
        background: linear-gradient(90deg, #173FA2 -0.83%, #0C8D94 100%);
        border-radius: 0px 4px 4px 0px;
    }

    .search-icon {
        @apply w-[clamp(10px,0.95vw,0.95vw)] h-[clamp(10px,0.95vw,0.95vw)];
    }
</style>