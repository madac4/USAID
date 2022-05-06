import * as flsFunctions from './modules/functions.js'

flsFunctions.isWebp();

document.addEventListener('DOMContentLoaded', () =>{
    const burger = document.querySelector('.burger');
    const header = document.querySelector('.header');
    const menu = document.querySelector('.header-nav');
    flsFunctions.burger(burger, menu, header)
    flsFunctions.fixedHeader(header)
})