import getRandomAddress from "./randomAddress"
import { nanoid } from "nanoid"
import './styles/main.scss'
import mainImage from './assets/image.jpg'

console.log('hi sdf')
console.log(getRandomAddress())
console.log(nanoid())

class A{
    #b
    get(){
        return this.#b;
    }
}

console.log(new A().get())

function test(){
    return new Promise((res)=>{
        setTimeout(()=>{
            res(10)
        },1000)
    })
}

test().then(console.log)
const img = document.getElementById('mainImage')
img.src = mainImage