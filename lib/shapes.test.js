const {triangle, circle, square} = require('./shapes')
// const jest = require('jest')

describe('shape test',( )=>{
    it('triangle test',() =>{
        const nwtr = new triangle('blue')
        // nwtr.setfill('blue')
        // console.log( nwtr.setfill('blue'))
        // console.log(nwtr.render())
        expect(nwtr.render()).toEqual(`<polygon points="100,24 50,200 150,200" class="triangle" fill = "blue"/>`)
    })
    it('square test',() =>{
        const nwsqr = new square('red')
        expect(nwsqr.render()).toEqual(`<rect width="300" height="100" fill="red" />`)

    })
    it('circle test',()=>{
        nwcirc = new  circle('green')
        expect(nwcirc.render()).toEqual(`<circle cx="100" cy="100" r="100" stroke="black" stroke-width="3" fill="green" />`)

    })

})