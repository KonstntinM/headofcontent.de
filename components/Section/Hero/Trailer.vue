<template>
          <div class="relative w-full px-5 rounded-lg lg:w-1/2 xl:px-0 ">
            <div class="absolute top-0 left-0 w-11/12 -mt-20 opacity-50 trailer-bg">
                <svg class="w-full h-full ml-4 text-blue-100" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M45,-78C58.3,-70.3,69,-58.2,75.2,-44.4C81.3,-30.7,82.9,-15.3,83.5,0.4C84.2,16,83.8,32.1,76.5,43.9C69.2,55.7,55.1,63.3,41.2,69.4C27.3,75.4,13.6,80,-0.7,81.2C-15.1,82.5,-30.1,80.3,-41.2,72.6C-52.2,64.9,-59.2,51.6,-67.1,38.5C-75.1,25.5,-83.9,12.8,-83.8,0C-83.8,-12.7,-74.9,-25.4,-65.8,-36.4C-56.7,-47.4,-47.4,-56.7,-36.4,-65.7C-25.4,-74.7,-12.7,-83.5,1.6,-86.2C15.9,-89,31.8,-85.7,45,-78Z" transform="translate(100 100)"></path></svg>
            </div>
            <div class="relative wrapper trailer relative overflow-hidden rounded-md shadow-2xl cursor-pointer">
                <div class=" py-option-wrapper">
                <div class="absolute right-0 top-0 opacity-0 hover:opacity-100 animation bg-blue-400 py-option-wrapper z-10 object-cover flex items-center justify-center w-full h-full">
                    <span class="flex items-center justify-center w-20 h-20">
                            <h1 class="text-3xl font-extrabold text-white leading-none xl:text-4xl sm:text-center ">
                                COMING SOON
                            </h1>
                        </span>
                </div>
                
                <div class="absolute right-0 top-0 ">
                    <div class="absolute flex items-center justify-center w-full h-full">
                        <span class="flex items-center justify-center w-20 h-20 bg-blue-500 rounded-full shadow-2xl">
                            <svg class="w-auto h-8 ml-1 text-white fill-current" viewBox="0 0 52 66" xmlns="http://www.w3.org/2000/svg"><path d="M50 30.7L4.1.6C2.6-.4.8.9.8 2.9v60.3c0 2 1.8 3.3 3.3 2.3L50 35.3c1.5-1 1.5-3.6 0-4.6z" fill-rule="nonzero"></path></svg>
                        </span>
                    </div>
                    <img src="~/assets/HOC_Hero_Image-01_Platzhalter.png" alt="Vorschaubild des Head of Content Kanaltrailers" class="z-10 object-cover w-full h-full">
                </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.py-option-wrapper {
    padding-top: 10rem;
    padding-bottom: 8.5rem;
}

.animation {
    transition-property: opacity;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 200ms;
}

@media (min-width: 1024px) {
    .trailer-bg {
        transform: translatex(6.5%);
    }

    .trailer {
    transform: perspective(1000px) rotateY(-5deg) rotateX(0deg) rotateZ(0deg) scaleY(0.95) translatex(6.5%);
    transition: transform .2s; /* Animation */
    }

    .trailer:hover {
        transform: perspective(1000px) rotateY(-0deg) rotateX(0deg) rotateZ(0deg) scaleY(0.95) scale(1.1) translatex(12.5%);
    }
}
</style>