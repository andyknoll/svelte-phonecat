<script>
	export let app;         // external prop

    const onFilterChange = (e) => {
        app.views.setFilterStr(e.target.value);
    }

    const onSelectChange = (e) => {
        const prop = e.target.value;
        app.models.sortPhonesByProp(prop);
        app.refreshViews();
    }

</script>

<!-- ignore the warning about the <select> change event (Stack Overflow)-->
<div class="phone-search-box">
    <div class="field-pair">
        <div class="field-name">Filter by:</div> 
        <input on:input={(e) => onFilterChange(e)} />
    </div> 
    <div class="field-pair">
        <div class="field-name">Sort by:</div> 
        <select on:change={(e) => onSelectChange(e)}>
            <option value="tattleRating" selected>Tattle rating</option>
            <option value="age">Newest</option>
            <option value="name">Alphabetical</option>
        </select>
    </div> 
</div>

<style>
    .phone-search-box {
        position: fixed;
        width: 1200px;
        max-width: 1200px;
        top: 50px;
        padding: 20px 0px 15px 0px;
        background-color: #ffffff;
        display: flex;
    }

    .field-pair {
        display: flex;
        margin: 0px 40px 5px 0px;
    }

    .field-name {
        margin-left: 10px;
        margin-right: 10px;
        font-size: 1.2em;
    }

    .phone-search-box input, select {
        width: 200px;
        font-size: 1.1em;
    }

    .phone-search-box select {
        width: 207px;
        padding: 2px;
    }

</style>
