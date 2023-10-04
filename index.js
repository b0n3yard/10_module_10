const fs = require('fs')
const inquirer = require('./node_modules/inquirer')
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
        console.log(svgobj)
}

function mainmenu(){
    console.log('hi')

    inquirer.prompt({

        name:'menuitems',
        message: 'choose one',
        type: 'list',
        choices: ['image-color','image-text','caption','text color','done'],
    }).then((e) => {
            console.log(e)
        switch(e.menuitems){
            case 'image-color':
                backcolor();
                break;
            case 'image-text':
                test()
                break;
            case 'caption':
                test()
            case 'text color':
                txtcolors()
            default:
                Show()
        }
    })
}
mainmenu()
// backcolor()
// test()
