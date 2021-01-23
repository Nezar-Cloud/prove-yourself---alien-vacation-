sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false)
})
sprites.onDestroyed(SpriteKind.Projectile, function (sprite) {
    info.changeScoreBy(1)
})
let projectile: Sprite = null
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
let shipSpeed = 100
let timeInterval = 1000
ship.setPosition(0, 60)
controller.moveSprite(ship, 0, shipSpeed)
ship.setFlag(SpriteFlag.StayInScreen, true)
game.onUpdateInterval(timeInterval, function () {
    projectile = sprites.createProjectileFromSide(img`
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
    if (info.score() <= 10) {
        shipSpeed = 100
        speed = -40
        timeInterval = 1000
    }
    if (info.score() > 10 && info.score() <= 20) {
        shipSpeed = 150
        speed = -60
        timeInterval = 800
    }
    if (info.score() > 20 && info.score() <= 30) {
        shipSpeed = 200
        speed = -80
        timeInterval = 300
    }
    if (info.score() > 30 && info.score() <= 40) {
        shipSpeed = 250
        speed = -100
        timeInterval = 200
    }
    if (info.score() > 40 && info.score() <= 50) {
        shipSpeed = 300
        speed = -120
        timeInterval = 100
    }
    if (info.score() > 50) {
        shipSpeed = 350
        speed = -140
        timeInterval = 50
    }
})
