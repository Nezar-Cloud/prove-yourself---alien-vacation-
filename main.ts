let ship = sprites.create(img`
    ........feebbbef........
    ........f24bdb2e........
    .......ce2222222e.......
    ......cbc22bb22e6cf.....
    ......b962e99e2b6dc.....
    ......c6b2e69e2e6bf.....
    ...cccee222ab222eeeccc..
    .fbbbddddb4eeebbbbbbbbcf
    febbddbcdddbbdddbcbbbbbf
    fe2bddcbdddcbddddccbb42f
    .f24bddddddbbdddbbbb42f.
    ..ff24bddddddddbbbb22f..
    ....fee244bbbb4444ee....
    .....fbbe2222e22ebbf....
    ......ffffbbbbfffff.....
    ..........fffff.........
`, SpriteKind.Player)
let speed = -40 
ship.setPosition(0, 60)
controller.moveSprite(ship)
ship.setFlag(SpriteFlag.StayInScreen, true)
game.onUpdateInterval(1000, function() {
    let projectile = sprites.createProjectileFromSide(img`
        . . . . . . . c c c a c . . . .
        . . c c b b b a c a a a c . . .
        . c c a b a c b a a a b c c . .
        . c a b c f f f b a b b b a . .
        . c a c f f f 8 a b b b b b a .
        . c a 8 f f 8 c a b b b b b a .
        c c c a c c c c a b c f a b c c
        c c a a a c c c a c f f c b b a
        c c a b 6 a c c a f f c c b b a
        c a b c 8 6 c c a a a b b c b c
        c a c f f a c c a f a c c c b .
        c a 8 f c c b a f f c b c c c .
        . c b c c c c b f c a b b a c .
        . . a b b b b b b b b b b b c .
        . . . c c c c b b b b b c c . .
        . . . . . . . . c b b c . . . .
    `, speed, 0) 
    projectile.setPosition(160, randint(0, 120)) 
    projectile.setFlag(SpriteFlag.AutoDestroy, true)
}) 
sprites.onDestroyed(SpriteKind.Projectile, function(sprite: Sprite) {
   info.changeScoreBy(1)
})   
game.onUpdate(function() {
    if(info.score() <= 10 ){
    speed = -40
    }
})