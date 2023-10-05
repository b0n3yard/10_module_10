const fs = require('fs')
const inquirer = require('./node_modules/inquirer')
const {triangle, circle, square} = require('./lib/shapes')
// import { prompt } from 'inquirer';
// import inquirer from 'inquirer';
const svgobj = {

}
function test(){
    inquirer.prompt({
        name:'running',
        message: 'is this working?'
    }).then((e)=>{
        if (e.running.length > 3){
            console.log('too many letters, try agin')
            test()
        }else{
        svgobj.title = e.running
        mainmenu()
    }
})
}
function testfunc(){

    console.log(svgobj.title)
}
function backcolor(){
    inquirer.prompt({
        name:'bgcolor',
        message: 'choose background color'
    }).then((e)=>{
      
        svgobj.bgcolor = e.bgcolor;
        // `<polygon points="100,24 50,200 150,200" class="triangle" fill = "${e.bgcolor}"/> `  ;
        mainmenu()
        
    })

}
function txtcolors(){

    inquirer.prompt({
        
        name: 'text',
        message: 'type what color text'
    }).then((e)=>{
        svgobj.txtclr = e.text;
        mainmenu()

    })
}
function Show(){
        // console.log(svgobj)
        inquirer.prompt({

            name: 'shape',
            message: 'choose your shape',
            type: 'list',
            choices:['square','circle','triangle']
        }).then((e) =>{
            switch(e.shape){
                case 'square':
                    console.log('square')
                    const sqre1 = new square(svgobj.bgcolor, svgobj.txtclr,svgobj.title)
                    const svg = sqre1.render()
                    fs.writeFile('square.svg',svg, (err) =>{
                        if(err) throw err;  
                        console.log('svg generated')
                    });
                    break;
                case 'circle':
                    console.log('circle')
                    const crcl1 = new circle(svgobj.bgcolor, svgobj.txtclr,svgobj.title)
                    const svg2 = crcl1.render()
                    fs.writeFile('circle.svg',svg2, (err) =>{
                        if(err) throw err;  
                        console.log('svg generated')
                    });
                    break;
                case 'triangle':
                    const trngle1 = new triangle(svgobj.bgcolor, svgobj.txtclr,svgobj.title)
                    const svg3 = trngle1.render()
                    console.log(svg3)
                    fs.writeFile('triangle.svg',svg3, (err) =>{
                        if(err) throw err;  
                        console.log('svg generated')
                    });
                    break;


            }


        })
       
    
        // console.log(sqre1)
}

function mainmenu(){
    console.log('hi')

    inquirer.prompt({

        name:'menuitems',
        message: 'choose one',
        type: 'list',
        choices: ['image-color','image-text','text color','done'],
    }).then((e) => {
            console.log(e)
        switch(e.menuitems){
            case 'image-color':
                backcolor();
                break;
            case 'image-text':
                test()
                break;
            case 'text color':
                txtcolors()
                break;
            default:
                Show()
        }
    })
}
mainmenu()
// backcolor()
// test()
