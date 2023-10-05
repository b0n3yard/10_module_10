class shapes{
    constructor(background,txtclr,txt){
        this.background = background
        this.txtclr = txtclr
        this.txt = txt

    }
    setfill= () => {}
        setparm =() => {if(this.background === undefined){
            return ""
        }
        if(this.txt === undefined){
            return ""
        }
        if(this.txtclr === undefined){
            return ""
        }
        return `<svg version = "1.1" height="300" width="200" xmlns = "http://www.w3.org/2000/svg">`}
        
        settxt = () =>{}
        
        render = () =>{ return this.setparm() + this.setfill() + this.settxt()}
        
    }
    
class triangle extends shapes{

    constructor(background,txtclr,txt){
        super(background,txtclr,txt)
    }

    setfill= () => {if(this.background === undefined){
        return ""
    } 
    return  `<polygon points="100,24 50,200 150,200" class="triangle" fill = "${this.background}"/>`}
    settxt = () =>{ if(this.txtclr === undefined){
        return ""
    }
    if(this.txt ===undefined){
        return ""
    }
        return `<text x = "100" y="160" font-size="60" text-anchor="middle" fill="${this.txtclr}">${this.txt}</text></svg>`}
    
}


class circle extends shapes{

    constructor(background,txtclr,txt){
        super(background,txtclr,txt)
    }
    
    setfill= () => {if(this.background === undefined){
        return ""
    } 
    return  `<circle cx="100" cy="100" r="100" stroke="black" stroke-width="3" fill="${this.background}" />`}
    settxt = () =>{ if(this.txtclr === undefined){
        return ""
    }
    if(this.txt ===undefined){
        return ""
    }
        return `<text x = "100" y="120" font-size="60" text-anchor="middle" fill="${this.txtclr}">${this.txt}</text></svg>`}
}

class square extends shapes{

    constructor(background,txtclr,txt){
        super(background,txtclr,txt)
    }

setfill= () => {if(this.background === undefined){
    return ""
} 
return  `<rect width="300" height="100" fill="${this.background}" />`}
settxt = () =>{ if(this.txtclr === undefined){
    return ""
}
if(this.txt ===undefined){
    return ""
}
    return `<text x = "75" y="70" font-size="60" text-anchor="middle" fill="${this.txtclr}">${this.txt}</text></svg>`}
}
module.exports = {triangle,circle,square}