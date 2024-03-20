class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}ayesha`
    }

    set password(value){
        this._password = value
    }
}

const ayesha = new User("a@ayesha.ai", "abc")
console.log(ayesha.email);