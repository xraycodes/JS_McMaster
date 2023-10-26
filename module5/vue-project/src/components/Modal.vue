<template>
    <div class="backdrop">
        <div class="modal">
            <p>modal contens</p>
        </div>
    </div>
</template>

<style>
.modal {
    width: 400px;
    background: white;
    padding:20px;
    border-radius: 10px;
    margin: 100px auto;

}

.backdrop {
    top:0;
    position:fixed;
    background: rgba(red, green, blue, alpha);
    width:100px;
    height:100px
}
</style>