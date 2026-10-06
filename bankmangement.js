class bank{
    constructor(accountNo,holderName,balance){
        this.accountNo=accountNo;
        this.holderName=holderName;
        this.balance=balance
    }

    deposit(amount){
        this.balance+=amount;
        console.log(`Deposit amount:${amount}`)

    }
    Withdraw(amount){
        if(amount<=this.balance){
            this.balance-=amount;
         console.log(`Withdrawn:${amount}`)

        }
        else{
            console.log(`Insufficent Balance!`)
        }

    }
    displaybalance(){
        console.log("Account No:", this.accountNo);
        console.log("Holder Name:", this.holderName);
        console.log("Balance:", this.balance)
    }

     static bankInfo() {
        console.log("Bank Name: ABC Bank");
        console.log("General Information: Safe and Secure Banking");
    }   

}
bank.bankInfo();

let S1=new bank(101,"Abhay",5777)
let S2=new bank(147,"Rahul",40000)


S1.deposit(400)
S1.Withdraw(789)
S1.displaybalance() 

