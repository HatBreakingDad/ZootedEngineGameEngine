function menu() {
    if(sub_menu == 0)
    {
        ctx.clearRect(0,0,canvas.width,canvas.height)
        ctx.beginPath()
        ctx.rect(canvas.width/2-100,50,200,80)
        ctx.rect(canvas.width/2-100,150,200,80)
        ctx.rect(canvas.width/2-100,250,200,80)
        if(inverted)
        {
        ctx.fillStyle = 'rgb(83,127,56)'
        }
        else
        {
        ctx.fillStyle = 'rgb(172,128,199)'
        }
        ctx.fill()
        if(inverted)
        {
        ctx.strokeStyle = 'rgb(255,255,255)'
        }
        else
        {
        ctx.strokeStyle = 'rgb(0,0,0)'
        }
        ctx.lineWidth = 5
        ctx.stroke()
        ctx.closePath()

        ctx.beginPath()
        //ctx.drawImage(img,canvas.width/2-100,50)
        if(switch_state)
        {
            if(inverted)
            {
            create_text(canvas.width/2,100,"Resume Game","25px Arial","rgb(56,83,127)","center")
            }
            else
            {
            create_text(canvas.width/2,100,"Resume Game","25px Arial","rgb(199,172,128","center")
            }
        }

        else
        {
            if(inverted)
            {
            create_text(canvas.width/2,100,"Start Game","30px Arial","rgb(56,83,127)","center")
            }
            else
            {
            create_text(canvas.width/2,100,"Start Game","30px Arial","rgb(199,172,128)","center")
            }
        }
        if(inverted)
        {
        create_text(canvas.width/2,200,"Options","30px Arial","rgb(56,83,127)","center")
        create_text(canvas.width/2,300,"About","30px Arial","rgb(56,83,127)","center")
        }
        else
        {
        create_text(canvas.width/2,200,"Options","30px Arial","rgb(199,172,128)","center")
        create_text(canvas.width/2,300,"About","30px Arial","rgb(199,172,128)","center") 
        }
        if(mouse_x >= 537.5 && mouse_x <= 742.5 && mouse_y <= 127.5 && mouse_y >= 52.5 && mouse_click == true && menu_exists == true)
        { 
            menu_exists = false
            switch_state = false
            mouse_click = false
        }
        else if(mouse_x >= 537.5 && mouse_x <= 742.5 && mouse_y <= 227.5 && mouse_y >= 152.5 && mouse_click == true && menu_exists == true)
        { 
            //Options Menu
            mouse_click = false 
            sub_menu = 1
        }
        else if(mouse_x >= 537.5 && mouse_x <= 742.5 && mouse_y <= 327.5 && mouse_y >= 252.5 && mouse_click == true && menu_exists == true)
        { 
            //Options Menu
            mouse_click = false 
            sub_menu = 2
        }
        else
        {
            mouse_click = false
        }
    }
    else if(sub_menu == 1)
    {
        console.log(difficulty+gravity_mult)
        ctx.clearRect(0,0,canvas.width,canvas.height)
        ctx.beginPath()
        ctx.rect(canvas.width/2-100,100,200,80)
        ctx.rect(canvas.width/2-100,225,200,80)
        ctx.rect(canvas.width/2-100,350,200,80)
        ctx.rect(canvas.width/2-100,475,200,80)
        if(inverted)
        {
        ctx.fillStyle = 'rgb(56,83,127)'
        ctx.strokeStyle = 'rgb(255,255,255)'
        }
        else
        {
        ctx.fillStyle = 'rgb(199,172,128)' 
        ctx.strokeStyle = 'rgb(0,0,0)'
        }
        ctx.fill()
        ctx.lineWidth = 5
        ctx.stroke()
        ctx.closePath()
        if(inverted)
        {
            create_text(canvas.width/2,40,"Options","35px Arial Black","rgb(35,186,199)","center")
            create_text(canvas.width/2,87.5,"Game Speed","25px Bauhaus","rgb(154,76,83)","center")
            create_text(canvas.width/2,210,"Ball Speed","25px Bauhaus","rgb(154,76,83)","center")
            create_text(canvas.width/2,332.5,"Inverted Colours","25px Bauhaus","rgb(154,76,83)","center")
            create_text(canvas.width/2,522.5,"Back","25px Arial Black","rgb(96,172,83)","center")
        }
        else
        {
            create_text(canvas.width/2,40,"Options","35px Arial Black","rgb(220,69,56)","center")
            create_text(canvas.width/2,87.5,"Game Speed","25px Bauhaus","rgb(101,179,172)","center")
            create_text(canvas.width/2,210,"Ball Speed","25px Bauhaus","rgb(101,179,172)","center")
            create_text(canvas.width/2,332.5,"Inverted Colours","25px Bauhaus","rgb(101,179,172)","center")
            create_text(canvas.width/2,522.5,"Back","25px Arial Black","rgb(159,83,172)","center") 
        }
        if(difficulty == 1)
        {
            if(inverted)
            {
            create_text(canvas.width/2,147.5,"Slow","25px Arial Black","rgb(96,172,83)","center")
            }
            else
            {
            create_text(canvas.width/2,147.5,"Slow","25px Arial Black","rgb(159,83,172)","center")
            }
            gravity_mult = 0.5
        }
        else if(difficulty == 2)
        {
            if(inverted)
            {
            create_text(canvas.width/2,147.5,"Medium","25px Arial Black","rgb(96,172,83)","center")
            }
            else
            {
            create_text(canvas.width/2,147.5,"Medium","25px Arial Black","rgb(159,83,172)","center")
            }
            gravity_mult = 0.98
        }
        else if(difficulty == 3)
        {
            if(inverted)
            {
            create_text(canvas.width/2,147.5,"Fast","25px Arial Black","rgb(96,172,83)","center")
            }
            else
            {
            create_text(canvas.width/2,147.5,"Fast","25px Arial Black","rgb(159,83,172)","center")
            }
            gravity_mult = 2
        }

        if(uni_select == 1)
        {
            if(inverted)
            {
            create_text(canvas.width/2,272.5,"Slow","25px Arial Black","rgb(96,172,83)","center")
            }
            else
            {
            create_text(canvas.width/2,272.5,"Slow","25px Arial Black","rgb(159,83,172)","center")
            }
        }
        else if(uni_select == 2)
        {
            if(inverted)
            {
            create_text(canvas.width/2,272.5,"Medium","25px Arial Black","rgb(96,172,83)","center")
            }
            else
            {
            create_text(canvas.width/2,272.5,"Medium","25px Arial Black","rgb(159,83,172)","center")
            }
        }
        else if(uni_select == 3)
        {
            if(inverted)
            {
            create_text(canvas.width/2,272.5,"Fast","25px Arial Black","rgb(96,172,83)","center")
            }
            else
            {
            create_text(canvas.width/2,272.5,"Fast","25px Arial Black","rgb(159,83,172)","center")
            }
        }
        if(mouse_x >= 537.5 && mouse_x <= 742.5 && mouse_y <= 177.5 && mouse_y >= 102.5 && mouse_click == true && menu_exists == true)
        {   
            difficulty ++
            if(difficulty > 3)
            {
                difficulty = 1
            }
            mouse_click = false
        }
        else if(mouse_x >= 537.5 && mouse_x <= 742.5 && mouse_y <= 302.5 && mouse_y >= 227.5 && mouse_click == true && menu_exists == true)
        {
            if(uni_mult < 0.5)
            {
                uni_mult+=0.25
                uni_select = 2
            }
            else if(uni_mult == 1)
            {
                uni_mult = 0.25
                uni_select = 1
            }
            else
            {
                uni_mult += 0.5
                uni_select = 3
            }
            mouse_click = false
        }
        else if(mouse_x >= 537.5 && mouse_x <= 742.5 && mouse_y <= 427.5 && mouse_y >= 352.5 && mouse_click == true && menu_exists == true)
        {
            if(inverted)
            {
                inverted = false
            }
            else
            {
                inverted = true
            }
            mouse_click = false
        }
        else if(mouse_x >= 537.5 && mouse_x <= 742.5 && mouse_y <= 552.5 && mouse_y >= 477.5 && mouse_click == true && menu_exists == true)
        {
            sub_menu = 0
            mouse_click = false
        }
        else
        {
            mouse_click = false
        }

    }
    else if(sub_menu == 2)
    {
        ctx.clearRect(0,0,canvas.width,canvas.height)
        ctx.beginPath()
        ctx.rect(0,0,canvas.width,canvas.height)
        if(inverted)
        {
        ctx.fillStyle = 'rgb(27,143,89)'
        }
        else
        {
        ctx.fillStyle = 'rgb(228,112,166)'
        }
        ctx.fill()
        ctx.closePath()
        ctx.beginPath()
        if(inverted)
        {
        ctx.fillStyle = 'rgb(56,83,127)'
        ctx.strokeStyle = 'rgb(255,255,255)'
        }
        else
        {
        ctx.fillStyle = 'rgb(199,172,128)'
        ctx.strokeStyle = 'rgb(0,0,0)'
        }
        ctx.rect(canvas.width/2-118,240,236,20)
        //ctx.rect(canvas.width/2,canvas.height/2,200,80)
        ctx.fill()
        ctx.closePath()
        ctx.beginPath()
        ctx.rect(canvas.width/2-100,350,200,80)
        ctx.stroke()
        ctx.fill()
        ctx.closePath()
        if(inverted)
        {
        create_text(canvas.width/2,canvas.height/2-115,"This program was created as a result","15px Arial Black","rgb(0,0,0)","center")
        create_text(canvas.width/2,canvas.height/2-95,"of a partnership between","15px Arial Black","rgb(0,0,0)","center")
        create_text(canvas.width/2,canvas.height/2-75,"SpiralEngineGameEngine, ZootedEngineGameEngine,","10px Arial Black","rgb(0,0,0)","center")
        create_text(canvas.width/2,canvas.height/2-55,"GenieEngineGameEngine and PollockEngineGameEngine","10px Arial Black","rgb(0,0,0)","center")
        create_text(canvas.width/2,canvas.height/2-30,"Go to disnut.tk for more info.","15px Arial Black","rgb(0,0,0)","center")
        create_text(canvas.width/2,397.5,"Back","25px Arial Black","rgb(96,172,83)","center")
        }
        else
        {
        create_text(canvas.width/2,canvas.height/2-115,"This program was created as a result","15px Arial Black","rgb(255,255,255)","center")
        create_text(canvas.width/2,canvas.height/2-95,"of a partnership between","15px Arial Black","rgb(255,255,255)","center")
        create_text(canvas.width/2,canvas.height/2-75,"SpiralEngineGameEngine, ZootedEngineGameEngine,","10px Arial Black","rgb(255,255,255)","center")
        create_text(canvas.width/2,canvas.height/2-55,"GenieEngineGameEngine and PollockEngineGameEngine","10px Arial Black","rgb(255,255,255)","center")
        create_text(canvas.width/2,canvas.height/2-30,"Go to disnut.tk for more info.","15px Arial Black","rgb(255,255,255)","center")
        create_text(canvas.width/2,397.5,"Back","25px Arial Black","rgb(159,83,172)","center")   
        }
        if(mouse_x >= 522 && mouse_x <= 757 && mouse_y <= 260  && mouse_y >= 240 && mouse_click && menu_exists)
        {
            window.location.href = "https://disnut.tk/index"
            mouse_click = false
            loading_sequence = true
        }
        else if(mouse_x >= 537.5 && mouse_x <= 742.5 && mouse_y <= 427.5 && mouse_y >= 352.5 && mouse_click == true && menu_exists == true)
        {
            sub_menu = 0
            mouse_click = false
        }
        //ctx.rect(canvas.width/2-100,250,200,80) 220 317.5
        if(mouse_click == true)
        {
            console.log(mouse_x)
            //One dimension is 758
            mouse_click = false
        }
        else
        {
            mouse_click = false
        }
        if(loading_sequence)
        {
            var d = new Date()
            ctx.beginPath()
            if(inverted)
            {
            create_text(canvas.width/2-20,canvas.height/2,"Loading","15px Arial Black","rgb(255,255,255)","centre")
            }
            else
            {  
            create_text(canvas.width/2-20,canvas.height/2,"Loading","15px Arial Black","rgb(0,0,0)","centre")
            }
            ctx.arc(canvas.width/2+30,canvas.height/2-2.5,10,d.getSeconds()+d.getMilliseconds()/1000,Math.PI*2)
            ctx.strokeStyle = "rgb(255,255,255)"
            ctx.stroke()
            ctx.closePath()
        }
    }

}