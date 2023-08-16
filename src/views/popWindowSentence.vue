<template>
    <div class="containerPop">
        <h1> {{ textEnglish }} ==> {{ textSpanish }}</h1>

        <div class="all_icons">
            <img :src="speak" alt="" class="icons">
            <img :src="microphone" alt="" class="icons">
        </div>

        <div class="container_middle">

        </div>
        <h3>qualification</h3>
        <hr>
        <div class="allcalif">
            <div class="calif">
                <img :src="star" alt="" class="iconcalif">
                <span>Malo</span>
            </div>
            <div class="calif">
                <img :src="star" alt="" class="iconcalif">
                <span>bueno</span>
            </div>
            <div class="calif">
                <img :src="star" alt="" class="iconcalif">
                <span>Muy bueno</span>
            </div>
            <div class="calif">
                <img :src="star" alt="" class="iconcalif">
                <span>Excelente</span>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    props: {
        textEnglish: String,
        textSpanish: String,
    },
    data() {
        const speak = '../../public/bocina.png';
        const microphone = '../../public/microfonno.png';
        const star = '../../public/Estrella.png';
        return {
            speak,
            microphone,
            star
        }
    }
}
</script>

<style scoped>
.allcalif {
    margin: 0 auto;
    width: 80%;
    display: flex;
    flex-direction: row;
}

.iconcalif {
    margin: 0 auto;
    width: 50%;
}

.calif {
    margin: 0 auto;
    width: 15%;
    height: 20%;
    display: flex;
    flex-direction: column;
}

.calif span {
    font-size: 20px;
    color: white;
}

.all_icons {
    margin: 0 auto;
    width: 70%;
    height: 15%;
    display: flex;
    flex-direction: row;
    padding: 1%;
    margin-bottom: 5%;
}

.icons {
    width: 13%;
    margin: 0 auto;
    background-color: rgb(110, 170, 222);
    padding: 1%;
    border-radius: 15%;

}

.icons:hover {
    box-shadow: 2px 2px 8px rgb(17, 17, 17);
}

.containerPop {
    position: absolute;
    background-color: rgb(15, 38, 86);
    border-radius: 20px;
    width: 50%;
    height: 70%;
    padding: 2%;
    text-align: center;
    margin-left: 22%;
    margin-top: 3%;
    box-shadow: 10px 5px 16px rgb(46, 46, 46);
}
</style>