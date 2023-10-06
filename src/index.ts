function hi(hi: string){
    return hi
}

console.log('ts hi', hi('hi'))
function test(): Promise<number>{
    return new Promise((res)=>{
        setTimeout(()=>{
            res(10)
        },1000)
    })
}

test().then(console.log)

class A{
    #asdf = ''
    gets(){
        return this.#asdf;
    }
}

console.log(new A().gets())