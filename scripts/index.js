let car1 = new Car('Volvo',120,12,14,220);
car1.beep();
console.log(`Значение X = ${car1.x}, значение Y = ${car1.y}`);
car1.move(21,22);
console.log(`новое значение X = ${car1.x}, значение Y = ${car1.y}`);

function Vehicle(name,speed,x,y){
    if(!new.target){
        throw new Error('invalid inizialization. Operator \'new\' expected');
    }
    this.name = name;
    this.speed = speed;
    this.x = x;
    this.y = y;
    this.move = function(x,y){
        this.x = x;
        this.y = y;
    }
}

function Car(name,speed,x,y,horsePower){
    if(!new.target){
        throw new Error('invalid inizialization. Operator \'new\' expected');
    }    
    this.horsePower = horsePower;
    this.beep = function(){
        console.log("Биииииип");
    };
    this.__proto__ = new Vehicle(name,speed,x,y);
}
