<template>
  <section class="relative flex flex-col items-center justify-center w-full pb-12 bg-white bg-cover lg:pt-4 min-w-screen">
    <div class="flex flex-col items-center justify-center mx-auto sm:p-6 xl:p-8 lg:flex-row lg:max-w-6xl lg:p-0">
        <div class="container relative z-20 flex flex-col w-full px-5 pb-1 pr-12 mb-16 text-2xl text-gray-700 lg:w-1/2 sm:pr-0 md:pr-6 md:pl-0 lg:pl-5 xl:pr-10 sm:items-center lg:items-start lg:mb-0">
            <h1 class="relative z-20 text-5xl font-extrabold leading-none xl:text-6xl sm:text-center lg:text-left">
                <span class="accent">Junge, unabhänige</span><br>
                <span class="mt-1 text-gray-800 lg:mt-0">Fehler aus der Hauptstadt</span>
            </h1>
            <p class="relative z-20 block mt-6 text-base text-gray-500 xl:text-xl sm:text-center lg:text-left">Es tut uns leid, aber irgendetwas hat nicht so geklappt, wie es sollte. Bitte versuche es etwas später noch einmal.</p>
            <div class="relative flex mt-4">
                <a href="/" class="flex items-center self-start justify-center px-5 py-2 mt-5 text-base font-medium leading-tight text-white transition duration-150 ease-in-out bg-blue-500 border border-transparent rounded-full shadow lg:py-4 hover:bg-blue-600 focus:outline-none focus:border-blue-600 focus:shadow-outline-blue md:text-lg xl:text-xl md:px-5 xl:px-10">Zur Startseite</a>
            </div>
        </div>
        <div class="relative w-full px-5 rounded-lg lg:w-1/2 group xl:px-0">
            <div class="trailer relative overflow-hidden rounded-md shadow-2xl cursor-pointer group cursor-pointer">
                <img src="~/assets/Lost-Connection.png" class="z-10 object-cover w-full h-full">
            </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.accent {
    background-image: linear-gradient(90deg, rgb(184, 53, 60) 0%, rgb(196, 86, 141) 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

@media (min-width: 1024px) {
    .trailer-bg {
        transform: translatex(6.5%);
    }

    .trailer {
    transform: perspective(1000px) rotateY(-5deg) rotateX(0deg) rotateZ(0deg) scaleY(0.95) translatex(6.5%);
    transition: transform .2s; /* Animation */
    }
}
</style>