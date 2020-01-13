namespace SpriteKind {
    export const Object = SpriteKind.create()
}
function score () {
    info.changeScoreBy(1)
}
function raindrop () {
    rain = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 9 . . . . . . . . 
. . . . . . 9 9 9 . . . . . . . 
. . . . . . 9 9 9 9 . . . . . . 
. . . . . 9 9 9 9 9 9 . . . . . 
. . . . . 9 9 9 9 9 9 9 . . . . 
. . . . 9 9 9 9 9 9 9 9 . . . . 
. . . . 9 9 9 9 9 9 1 9 . . . . 
. . . . 9 9 9 9 9 1 1 9 . . . . 
. . . . 9 9 9 9 1 1 9 9 . . . . 
. . . . . 9 9 9 9 9 9 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, cloud2, 50, 0)
    rain.x += 2
    rain.y += Math.randomRange(50, 50)
}
function ball () {
	
}
function hero3 () {
    hero = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . . 
. . . . . . . . . . . f f f f f f f f f . . . . . . . . . . . . 
. . . . . . . . . . f f f f f f f f f f f . . . . . . . . . . . 
. . . . . . . . . . f e e e e e e e e e f . . . . . . . . . . . 
. . . . . . . . . . f e e 1 f e e 1 f e f . . . . . . . . . . . 
. . . . . . . . . . f e e e e e e e e e f . . . . . . . . . . . 
. . . . . . . . . . f e e e e e f e e e f . . . . . . . . . . . 
. . . . . . . . . . f e e e e e e f e e f . . . . . . . . . . . 
. . . . . . . . . . . f e e e e e e f f . . . . . . . . . . . . 
. . . . . . . . . . . f e e e e e f f f . . . . . . . . . . . . 
. . . . . . . . . . . . e e e e e . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 1 1 1 1 1 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 1 1 1 1 1 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 1 1 1 1 1 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 1 1 e 1 1 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 1 1 e 1 1 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 1 1 e 1 1 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 1 1 1 1 1 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 8 8 8 8 8 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 8 8 8 8 8 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 8 8 8 8 8 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 8 8 8 8 8 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 8 8 8 8 8 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 1 1 1 1 1 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 1 1 1 1 1 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    hero.setPosition(126, 89)
    controller.moveSprite(hero, 100, 0)
}
function cloud () {
    cloud2 = sprites.createProjectileFromSide(img`
. . . b b b b b b b b b b . . . 
. b b 1 1 1 1 1 1 1 1 1 1 b . . 
b 1 1 f f f 1 1 1 f f f 1 1 b . 
1 1 1 1 1 f 1 1 1 f 1 1 1 1 b . 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 b . 
1 1 1 1 1 f f f f f 1 1 1 1 1 b 
1 1 1 1 f f 1 1 1 f 1 1 1 1 1 1 
1 1 1 1 f 1 1 1 1 f 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, -35, 0)
    cloud2.setPosition(134, 27)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 5 5 5 5 5 5 . . . . . . 
. . . 5 5 5 5 5 5 5 5 5 . . . . 
. 5 5 5 5 5 5 5 5 5 5 5 . . . . 
. 5 5 5 5 5 5 5 5 5 5 5 . . . . 
. . 2 2 2 2 2 2 2 2 2 2 . . . . 
. . 7 7 7 7 7 7 7 7 7 . . . . . 
. 7 7 7 7 7 7 7 7 7 7 . . . . . 
. e e e e e e e e e e e . . . . 
. e e e e e e e e e e e . . . . 
. . 5 5 5 5 5 5 5 5 5 . . . . . 
. . . 5 5 5 5 5 5 5 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, hero, 0, -50)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(true)
})
let projectile: Sprite = null
let hero: Sprite = null
let cloud2: Sprite = null
let rain: Sprite = null
hero3()
raindrop()
cloud()
ball()
score()
