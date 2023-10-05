const fs = require('fs')
const inquirer = require('./node_modules/inquirer')
const {triangle, circle, square} = require('./lib/shapes')
const svgobj = {

}
function test(){
    inquirer.prompt({
        name:'running',
        message: 'Type up to 3 letters'
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
        
        inquirer.prompt({

            name: 'shape',
            message: 'choose your shape',
            type: 'list',
            choices:['square','circle','triangle']
        }).then((e) =>{
                let logo1 = ""
            switch(e.shape){
                case 'square':
                    console.log('square')
                    logo1 = new square(svgobj.bgcolor, svgobj.txtclr,svgobj.title)
                    break;
                case 'circle':
                    console.log('circle')
                    logo1 = new circle(svgobj.bgcolor, svgobj.txtclr,svgobj.title)
                    break;
                case 'triangle':
                    logo1 = new triangle(svgobj.bgcolor, svgobj.txtclr,svgobj.title)
                    break;


            }
            const svg = logo1.render()
            fs.writeFile('logo.svg',svg, (err) =>{
            if(err) throw err;  
            console.log('svg generated')
            });


        })
       
    
        
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

