function game() {
    if(!menu_exists)
    {
        if(escapePressed)
        {
            escape = true
            menu_exists = true
            switch_state = true
        //     projectiles = []
        //     enemy_projectiles = []
        //     score = 0
        //     health = 100
        //     player_objects[0].x = canvas.width/2
        //     player_objects[0].y = canvas.height-canvas.width/24 - 1
        //     (new player(canvas.width/2,canvas.height-canvas.width/24 - 1,canvas.width/24,"rgb(37,126,71)",100))
        }
        else
        {
            escape = false
        }
        if(!pPressed && escape == false)
        {
            ctx.clearRect(0,0,canvas.width,canvas.height)
            ctx.rect(0,0,canvas.width,canvas.height)
            if(inverted)
            {
                ctx.fillStyle = "rgb(209,225,174)"
            }
            else
            {
                ctx.fillStyle = "rgb(46,30,81)"
            }
            ctx.fill()
            ctx.lineWidth = 1
            for(i = 0; i < player_objects.length; i++)
            {
                player_objects[i].draw();
                player_objects[i].movement();
                if(player_objects[0].health > 0)
                {
                if(inverted)
                {
                create_text(canvas.width/2-160,25,"Score: " + score,"30px Arial","rgb(32,127,54)","left")
                }
                else
                {
                create_text(canvas.width/2-160,25,"Score: " + score,"30px Arial","rgb(223,128,201)","left")   
                }
                ctx.font = "10px Arial"
                ctx.fillText("Friendly Balls: " + projectiles.length,canvas.width-90,10)
                ctx.fillText("Enemy Balls: " + enemy_projectiles.length,canvas.width-90,20)
                }
            }
            bulletController()
            enemyController()
            for(i = 0; i<projectiles.length; i++)
            {
                if(projectiles[i].alive == true)
                {
                projectiles[i].draw()
                projectiles[i].movement()
                }
            }
            for(i = 0; i<enemy_projectiles.length; i++)
            {
                if(enemy_projectiles[i].alive == true)
                {
                enemy_projectiles[i].draw()
                enemy_projectiles[i].movement()
                }
            }
            if(player_objects[0].health < 1 && repos < canvas.height/2)
            {

                if(repos == 0) 
                {
                limit=100
                game_over = true
                uni_mult = -0.05
                highscores.push(score)
                }
                if(inverted)
                {
                create_text(canvas.width/2,repos,"Game Over","50px Arial","rgb(127,54,32)","center")
                }
                else
                {
                create_text(canvas.width/2,repos,"Game Over","50px Arial","rgb(128,201,223)","center")
                }
                repos+=1
                uni_mult-=0.0005
            }
            else if(player_objects[0].health < 1)
            {
                new_date = new Date()
                if(date_difference == false)
                {
                    old_date = new_date.getSeconds()
                    difference = old_date + 5
                    if(difference > 59)
                    {
                        difference = difference - 60
                    }
                    date_difference = true
                }
                thou_date = difference - new_date.getSeconds()
                if(inverted)
                {
                create_text(canvas.width/2,repos+40,"Game Restarts In: " + thou_date,"10px Arial","rgb(0,0,0)","center")
                }
                else
                {
                create_text(canvas.width/2,repos+40,"Game Restarts In: " + thou_date,"10px Arial","rgb(255,255,255)","center")
                }
                if(new_date.getSeconds() == difference)
                {
                    restart()
                }
                uni_mult = 0.1
                gravity_mult = 0.1
                if(inverted)
                {
                create_text(canvas.width/2,repos,"Game Over","50px Arial","rgb(127,54,32)","center")
                create_text(canvas.width/2,repos+25,"Your Score: " + highscores[0],"20px Calibri","rgb(127,54,32)","center")
                }
                else
                {
                create_text(canvas.width/2,repos,"Game Over","50px Arial","rgb(128,201,23)","center")
                create_text(canvas.width/2,repos+25,"Your Score: " + highscores[0],"20px Calibri","rgb(128,201,23)","center")
                }
            }

        }
        else
        {
            if(pPressed)
            {
                if(inverted)
                {
                create_text(canvas.width/2,canvas.height/2-50,"Game Paused","30px Arial","rgb(27,156,45)","center")
                create_text(canvas.width/2,canvas.height/2-25,"Press 'p' to Continue","15px Calibri","rgb(27,156,45","center")
                }
                else
                {
                    create_text(canvas.width/2,canvas.height/2-50,"Game Paused","30px Arial","rgb(228,109,210)","center")
                    create_text(canvas.width/2,canvas.height/2-25,"Press 'p' to Continue","15px Calibri","rgb(228,109,210","center")
                }
            }
        }

    }
    else {menu()}
}