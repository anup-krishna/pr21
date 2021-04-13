function hasCollided(obj1,obj2) {
    if(obj1.x+obj1.width > obj2.x){
     obj1.collide(obj2);
     obj1.velocityX =0; 
     return true;
    }
    else {
        return false;
    }
   }
   