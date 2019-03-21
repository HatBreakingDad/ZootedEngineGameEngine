var x_inc = 0
function player(x,y,radius,color,health)
{
    this.x = x
    this.y = y  
    this.gravity = 0.098
    this.gravitySpeed = 0 
    this.color = color
    this.health = health
    this.draw = function() {
        ctx.beginPath();
        ctx.arc(x,y,radius,0,Math.PI*2)
        //ctx.fillStyle = color
        if(inverted)
        {
        ctx.fillStyle = "rgb(37,126,71)"
        }
        else
        {
        ctx.fillStyle = "rgb(218,129,184)"
        }
        ctx.fill();
        if(inverted)
        {
        ctx.strokeStyle = "rgb(0,0,0)"
        }
        else
        {
        ctx.strokeStyle = "rgb(255,255,255)"
        }
        ctx.stroke();
        ctx.closePath();    
        health_bar(x-30,y-radius*1.5-15,60,15,this.health)
    }
    this.movement = function() {
        if(leftPressed && x - radius * uni_mult > 0)
        {
            x-=radius/4 * uni_mult
            this.x-=radius/4 * uni_mult
            x_inc = -1
        }
        else if(x + radius * uni_mult < canvas.width && rightPressed)
        {   
            x+=radius/4 * uni_mult
            this.x+=radius/4 * uni_mult
            x_inc = 1
        }
        else
        {
            x_inc = 0
        }
    }
}
function bulletController()
{
    if(projectiles.length < limit)
    {
        createBullet()
    }
    if(drop_health == true)
    {
        setTimeout(createHealth,7500)
        drop_health = false
    }
    function createHealth() {
        projectiles.push(new health_drop(rand(16,canvas.width-16),rand(-128,-16),12,incremental_id))
        incremental_id++
        drop_health = true
    }
    function createBullet() {
        projectiles.push(new bullet(rand(5,canvas.width-5),rand(-128,-16),0,0,5,incremental_id,color_generator()))
        incremental_id++
    }
}
function enemyController()
{
    if(enemy_projectiles.length < 5)
    {
        create_enemy()
    }
    function create_enemy() {
        enemy_projectiles.push(new enemy_bullet(rand(5,canvas.width-5),rand(-32,-16),0,0,10,enemy_id,"rgb(255,255,255)"))
        enemy_id+=1
    }
}
function bullet(x,y,xvel,yvel,radius,id,color)
{
    this.alive = true
    this.multiplier = 0.5
    this.id = id
    this.radius = radius
    this.switch_color = false
    this.x = x
    this.y = y
    this.yvel = yvel
    this.destroy = 0
    this.xvel = xvel
    this.gravity = 0.098
    this.gravitySpeed = 1
    this.index = 0
    this.collision = false
    this.destroy = true
    this.time = new Date()
    this.draw = function() {
        if(this.alive == true)
        {
            ctx.lineWidth = 1
            ctx.beginPath();
            ctx.arc(x,y,radius,0,Math.PI*2)
            ctx.closePath();
            if(inverted)
            {
                ctx.fillStyle = "rgb(19,143,142)"
            }
            else
            {
                ctx.fillStyle = "rgb(236,112,113)"
            }
            ctx.fill()
            if(this.switch_color == true)
            {
                ctx.linewidth = 5
                if(inverted)
                {
                ctx.strokeStyle = "rgb(0,0,0)"
                }
                else
                {
                ctx.strokeStyle = "rgb(255,255,255)"
                }
                ctx.stroke()
                line(x,y,player_objects[0].x,player_objects[0].y)
                //ctx.lineWidth = 1
            }
            else
            {
            if(inverted)
            {
            ctx.strokeStyle = "rgb(0,155,32)"
            }
            else
            {
            ctx.strokeStyle = "rgb(255,100,223)"
            }
            ctx.stroke()
            }
        }
    }
    this.movement = function() {
        if(x  + xvel* uni_mult > canvas.width-radius || x + xvel < radius) {
            xvel = -xvel/2
        }
        this.gravitySpeed += this.gravity*gravity_mult
        y+=this.gravitySpeed*uni_mult
        if(distance(x+xvel* uni_mult,y+this.gravitySpeed* uni_mult,player_objects[0].x,player_objects[0].y) <= canvas.width/24+this.radius+1)
        {
            if(this.collision == false)
            {
                if(game_over == false)
                {
                score += this.multiplier*2
                }
                this.multiplier += 1
                this.gravitySpeed = -this.gravitySpeed/1.1
                xvel = xvel+rand(-3,3)
                this.collision = true
                if(x_inc == 1)
                {
                    xvel = 4
                }
                else if(x_inc == -1)
                {
                    xvel = -4
                }
            }
        }
        else
        {
            this.collision = false
        }
        if(distance(x+xvel* uni_mult,y+this.gravitySpeed* uni_mult,player_objects[0].x,player_objects[0].y) <= 200)
        {
            this.switch_color = true
        }
        else
        {
            this.switch_color = false
        }
        if(y + 5* uni_mult > canvas.height && this.alive == true)
        {
            this.alive = false
            for(i = 0; i < projectiles.length; i++)
            {
                if(projectiles[i].id == this.id)
                {
                    projectiles.splice(i,1)
                    break;
                }
            }
        }
        x += xvel*uni_mult
    }
}
function enemy_bullet(x,y,xvel,yvel,radius,id,color)
{
    this.alive = true
    this.id = id
    this.radius = radius
    this.switch_color = false
    this.x = x
    this.y = y
    this.yvel = yvel
    this.destroy = 0
    this.xvel = xvel
    this.gravity = 0.098
    this.gravitySpeed = 1
    this.index = 0
    this.destroy = true
    this.collision = false
    this.draw = function() {
        if(this.alive == true)
        {
            ctx.lineWidth = 1
            ctx.beginPath();
            ctx.arc(x,y,radius,0,Math.PI*2)
            if(inverted)
            {
            ctx.fillStyle = "rgb(255,255,255)"
            }
            else
            {
            ctx.fillStyle = "rgb(0,0,0)"
            }
            ctx.fill()
            if(this.switch_color == true)
            {
            ctx.linewidth = 5
            if(inverted)
            {
            ctx.strokeStyle = "rgb(0,0,0)"
            }
            else
            {
            ctx.strokeStyle = "rgb(255,255,255)"
            }
            line(x,y,player_objects[0].x,player_objects[0].y)
            //ctx.lineWidth = 1
            }
            else
            {
                if(inverted)
                {
                ctx.strokeStyle = "rgb(0,155,32)"
                }
                else
                {
                ctx.strokeStyle = "rgb(255,100,223)"
                }
            }
            ctx.stroke()
            ctx.closePath()
            ctx.beginPath()
            ctx.arc(x,y,radius/2,0,Math.PI*2)
            if(inverted)
            {
            ctx.strokeStyle = "rgb(255,0,0)"
            }
            else
            {
            ctx.strokeStyle = "rgb(0,255,255)"
            }
            ctx.stroke()
            ctx.closePath();
        }
    }
    this.movement = function() {
        if(x  + xvel* uni_mult > canvas.width-radius || x + xvel < radius) {
            xvel = -xvel/2
        }
        this.gravitySpeed += this.gravity*gravity_mult
        y+=this.gravitySpeed*uni_mult
        if(distance(x+xvel* uni_mult,y+this.gravitySpeed* uni_mult,player_objects[0].x,player_objects[0].y) <= canvas.width/24+this.radius+1)
        {
            if(this.collision == false)
            {
                player_objects[0].health -= 5
                this.collision = true
                this.gravitySpeed = -this.gravitySpeed/1.1
                xvel = rand(-3,3)
                if(x_inc == 1)
                {
                    xvel = 4
                }
                else if(x_inc == -1)
                {
                    xvel = -4
                }
            }
        }
        else
        {
            this.collision = false
        }
        if(distance(x+xvel* uni_mult,y+this.gravitySpeed* uni_mult,player_objects[0].x,player_objects[0].y) <= 100)
        {
            this.switch_color = true
            if(inverted)
            {
            create_text(x,y+radius*1.5,"Close!","25px Arial","rgb(32,54,127)")
            }
            else
            {
                create_text(x,y+radius*1.5,"Close!","25px Arial","rgb(223,201,128)") 
            }
        }
        else
        {
            this.switch_color = false
        }
        if(y + 5* uni_mult > canvas.height && this.alive == true)
        {
            this.alive = false
            for(i = 0; i < enemy_projectiles.length; i++)
            {
                if(enemy_projectiles[i].id == this.id)
                {
                    enemy_projectiles.splice(i,1)
                    break;
                }
            }
        }
        x += xvel*uni_mult
    }
}
function health_drop(x,y,radius,id)
{
    this.alive = true
    this.gravity = 0.098
    this.gravitySpeed = 0
    this.id = id
    this.x = x
    this.y = y
    this.radius = radius
    this.draw = function() {
        ctx.beginPath()
        if(inverted)
        {
        ctx.strokeStyle = "rgb(0,0,0)"
        ctx.fillStyle = "rgb(255,255,255)"
        }
        else
        {
        ctx.strokeStyle = "rgb(255,255,255)"
        ctx.fillStyle = "rgb(0,0,0)"
        }
        ctx.arc(x,y,radius,0,Math.PI*2)
        ctx.fill()
        ctx.stroke()
        ctx.closePath()
        cross(x,y,radius,radius/5)
    }
    this.movement = function() {
        if(this.alive == true)
        {
        this.gravitySpeed += this.gravity*gravity_mult
        y+=this.gravitySpeed*uni_mult
        }
        if(distance(x,y+this.gravitySpeed * uni_mult,player_objects[0].x,player_objects[0].y) <= canvas.width/24+radius+1)
        {
            if(player_objects[0].health <= 50)
            {
            player_objects[0].health += 50
            }
            else
            {
            player_objects[0].health += 100-player_objects[0].health
            }
            this.alive = false
            for(i = 0; i < projectiles.length; i++)
            {
                if(projectiles[i].id == this.id)
                {
                    projectiles.splice(i,1)
                    break;
                }
            }
        }
        if(y + 5* uni_mult > canvas.height && this.alive == true)
        {
            this.alive = false
            for(i = 0; i < projectiles.length; i++)
            {
                if(projectiles[i].id == this.id)
                {
                    projectiles.splice(i,1)
                    break;
                }
            }
        }
        
    }
}
function health_bar(x,y,w,h,health)
{

    ctx.beginPath()
    if(inverted)
    {
    ctx.strokeStyle = "rgb(0,0,0)"
    ctx.fillStyle = "rgb(0,255,0)"
    }
    else
    {
    ctx.strokeStyle = "rgb(255,255,255)"
    ctx.fillStyle = "rgb(255,0,255)"  
    }
    ctx.rect(x,y,w,h)
    ctx.fill()
    ctx.stroke()    
    ctx.closePath()

    ctx.beginPath()
    if(inverted)
    {
    ctx.strokeStyle = "rgb(0,0,0)"
    ctx.fillStyle = "rgb(255,0,0)"
    }
    else
    {
    ctx.strokeStyle = "rgb(255,255,255)"
    ctx.fillStyle = "rgb(0,255,255)"
    }
    if(health >= 0)
    {
    ctx.rect(x+w,y,w/100*(health-100),h)
    }
    else
    {
    ctx.rect(x,y,w,h)
    }
    //ctx.rect(x,y,(w/100)*health,h)
    ctx.fill()
    ctx.stroke()
    ctx.closePath()
}
function cross(x,y,radius,thickness)
{
    ctx.beginPath()
    ctx.lineWidth = thickness
    if(inverted)
    {
    ctx.strokeStyle = "rgb(255,0,0)"
    }
    else
    {
    ctx.strokeStyle = "rgb(0,255,255)"
    }
    ctx.moveTo(x-radius/1.25,y)
    ctx.lineTo(x+radius/1.25,y)
    ctx.moveTo(x,y-radius/1.25)
    ctx.lineTo(x,y+radius/1.25)
    ctx.stroke()
    ctx.closePath()
}
function distance(x1,y1,x2,y2)
{
    this.x1 = x1
    this.y1 = y1
    this.x2 = x2
    this.y2 = y2
    return Math.sqrt((y1-y2) * (y1-y2) + (x1-x2) * (x1-x2))
}
function create_text(x,y,text,style,color,text_pos)
{
    ctx.textAlign = text_pos
    ctx.font = style
    ctx.fillStyle = color
    ctx.fillText(text,x,y)
}
function restart()
{
    document.location.reload()
}
function color_generator()
{
    var color = "rgb(" + rand(0,255) + "," + rand(0,255) + "," + rand(0,255) + ")"
    return color
}
function rand(min,max)
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function line(startx,starty,endx,endy)
{
    ctx.beginPath();
    ctx.lineWidth = 0.1
    ctx.moveTo(startx,starty)
    ctx.lineTo(endx,endy)
    if(inverted)
    {
    ctx.strokeStyle = "rgb(40,255,30)"
    }
    else
    {
    ctx.strokeStyle = "rgb(215,0,225)"
    }
    ctx.stroke();
    ctx.closePath();
}
function goto_site()
{
    window.location.href = "https://disnut.tk/index"
}