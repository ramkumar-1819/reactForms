import React, { Component } from 'react';
import './forms.css'
import Display from './Display.jsx'

let currency="United States of America(US Dollars)";//currency value by default
let type_acc="personal_beneficiary";//initial acccout type and this hold now user in which page

class Form extends React.Component{
    constructor(){
        super();
        this.state={            
                    type_00:"personal_beneficiary",//decide the type of account and page(beneficiary,bankdetail,address)
                    bname:"",
                    fname:"",
                    lname:"",
                    email:"",
                    phone:"",
                    acc_num:"",
                    ifsc:"",
                    country:"",
                    city:"",
                    pincode:"",
                    address:""
                }
    }
    display=(val)=>{      //when one section is correct then make some changes then set the state back based on the change
        document.getElementById("one").innerHTML="1";
        document.getElementById("two").innerHTML="2";
        document.getElementById("three").innerHTML="3";
       if(val==="Bussiness"){ 
        document.getElementById("personl").style.color="black";
        document.getElementById("bussness").style.color="blue";
        document.getElementsByClassName("line")[0].style.left="260px";
        type_acc="bussiness_beneficiary";
        this.setState({type_00:type_acc,
            bname:"",
            fname:"",
            lname:"",
            email:"",
            phone:"",
            acc_num:"",
            ifsc:"",
            country:"",
            city:"",
            pincode:"",
            address:""
          })
       }
       else{
        document.getElementById("personl").style.color="blue";
        document.getElementById("bussness").style.color="black";
        document.getElementsByClassName("line")[0].style.left="40px";
        type_acc="personal_beneficiary";
        this.setState({type_00:type_acc,
            bname:"",
            fname:"",
            lname:"",
            email:"",
            phone:"",
            acc_num:"",
            ifsc:"",
            country:"",
            city:"",
            pincode:"",
            address:""
          })
       }
    }
    
   submitting_personal_benificiary=(e)=>{   //when beneficiary of personal account is set then check the inputed values the set the state to go to the next section
           const fname=document.getElementById("fname").value;
           const lname=document.getElementById("lname").value;
           const email=document.getElementById("email").value;
           const phone=document.getElementById("phone").value;

           const regex_fname_lname=/^[A-Za-z]{1,15}$/
           const regex_email=/^[a-z]+[\d]*@[a-z]+\.[a-z]+/
           const regex_phone=/^[987][\d]{9}/

           if(!regex_fname_lname.test(fname)){
               alert("Invalid First Name")
           }
           else if(!regex_fname_lname.test(lname)){
            alert("Invalid Last Name")
           }
           else if(!regex_email.test(email)){
               alert("Invalid Email")
           }
           else if(!regex_phone.test(phone)){
            alert("Invalid Phone")
           }
           else{
            document.getElementById("one").innerHTML="✔";
            this.setState({type_00:"personal_bankdetails",
            fname:fname,
            lname:lname,
            email:email,
            phone:phone
           })
           }
           
           e.preventDefault()
   }
   submitting_bussiness_benificiary=(e)=>{          //when beneficiary of bussiness account is set then check the inputed values the set the state to go to the next section
    const bname=document.getElementById("bname").value;
    const email=document.getElementById("email").value;
    const phone=document.getElementById("phone").value;

    const regex_email=/^[a-z]+[\d]*@[a-z]+\.[a-z]+/
    const regex_phone=/^[987][\d]{9}/
    const regex_bname=/^[\w]{3,50}$/
    
    if(!regex_bname.test(bname)){
        alert("Invalid Bussiness Name")
    }
    else if(!regex_email.test(email)){
        alert("Invalid Email")
    }
    else if(!regex_phone.test(phone)){
     alert("Invalid Phone")
    }
    else{
        document.getElementById("one").innerHTML="✔";
     this.setState({type_00:"personal_bankdetails",
     bname:bname,
     email:email,
     phone:phone
    })
    }
    e.preventDefault()
   }

   submitting_bankdetails=(e)=>{      //when bank detail of the account is set then check the inputed values the set the state to go to the next section
       const acc_num=document.getElementById("accnum").value;
       const ifsc=document.getElementById("ifsc").value;

       const regex_accnum=/^[\d]{9,15}$/
       const regex_ifsc=/^[\d\w]{6,15}$/

       if(!regex_accnum.test(acc_num)){
           alert("Invalid Account Number")
       }
       else if(!regex_ifsc.test(ifsc)){
           alert("Invalid IFSC Number")
       }
       else{
        document.getElementById("two").innerHTML="✔";
           this.setState({type_00:"personal_address",
                          acc_num:acc_num,
                          ifsc:ifsc})
       }
       e.preventDefault()
   }
   submitting_address=(e)=>{//when address of account is set then check the inputed values the set the state to go to the next section
       const country=document.getElementById("address_country").value;
       const city=document.getElementById("city").value;
       const pincode=document.getElementById("pincode").value;
       const address=document.getElementById("add_address").value;

       const regex_city=/^[a-zA-Z]{3,15}$/
       const regex_pincode=/^[\d]{4,10}$/
       const regex_address=/^[\w\W]{10,50}$/

       if(!regex_city.test(city)){
          alert("Invalid City Name") 
       }
       else if(!regex_pincode.test(pincode)){
           alert("Invalid Pincode")
       }
       else if(!regex_address.test(address)){
           alert("Invalid Address")
       }
       else{
        document.getElementById("three").innerHTML="✔";
           this.setState({type_00:"finish",
                          country:country,
                           city:city,
                           pincode:pincode,
                           address:address
                        })
       }
       e.preventDefault()
   }

   change=(e)=>{ //multiple options in the currency field is change then make some neccessary changes
       if(e.target.value==="India"){
        document.getElementById("currency").innerHTML="India(Rupees)"
       }
       else{
        document.getElementById("currency").innerHTML="United States of America(US Dollars)";
       }
   }
   previous_bankdetails=()=>{
    document.getElementById("one").innerHTML="1";
       this.setState({type_00:type_acc,
                      acc_num:document.getElementById("accnum").value,
                      ifsc:document.getElementById("ifsc").value
                    })
   }
   previous_address=()=>{
    document.getElementById("two").innerHTML="2";
       this.setState({type_00:"personal_bankdetails",
                      country:document.getElementById("address_country").value,
                      city:document.getElementById("city").value,
                      pincode:document.getElementById("pincode").value,
                      address:document.getElementById("add_address").value
                    })
   }
    render(){
        let account=""//hold the type of account
        console.log(this.state)
        if(type_acc==="personal_beneficiary"){
            account="Personal";
        }
        else{
            account="Bussiness";
        }
        return(<>
            {(this.state.type_00==="finish") &&
                <div>
                    <Display value={account} detail={this.state}/>
                </div>
            }

            {(this.state.type_00!=="finish") &&
            <div className="form">
                <div className="header">
                    <div id="one">1</div>
                    <div></div>
                    <div id="two">2</div>
                    <div></div>
                    <div id="three">3</div>
                </div>

                <div id="header_detail">
                <div>Benificiary</div>
                <div>BankDetails</div>
                <div>Address</div>
                </div>

                <div className="details">
                <div id="personl" onClick={()=>this.display("Personal")}>Personal</div>
                <div id="bussness" onClick={()=>this.display("Bussiness")}>Bussiness</div>
                </div>
                <div className="line"></div>

                {(this.state.type_00==="personal_beneficiary") && 
                <div>
                      <form className="beneficiary" onSubmit={this.submitting_personal_benificiary}>
                          <input type="text" id="fname" defaultValue={this.state.fname} placeholder="First Name"></input>
                          <input type="text" id="lname" defaultValue={this.state.lname} placeholder="Last Name"></input>
                          <input type="email" id="email" defaultValue={this.state.email} placeholder="Email"></input>
                          <input type="number" id="phone" defaultValue={this.state.phone} placeholder="Phone"></input>
                          <button type="submit" id="submit">Next</button>
                      </form>
                  </div>
                }

                {(this.state.type_00==="bussiness_beneficiary") && 
                <div>
                      <form className="beneficiary" onSubmit={this.submitting_bussiness_benificiary}>
                          <input type="text" id="bname" defaultValue={this.state.bname} placeholder="Bussiness Name"></input>
                          <input type="email" id="email" defaultValue={this.state.email} placeholder="Email"></input>
                          <input type="number" id="phone" defaultValue={this.state.phone} placeholder="Phone"></input>
                          <button type="submit" id="submit">Next</button>
                      </form>
                  </div>
                }

                {(this.state.type_00==="personal_bankdetails") &&
                      <form className="bank" onSubmit={this.submitting_bankdetails}>
                          <div>
                          <div><b>Country</b></div>
                          <select id="country" name="countr" onChange={this.change}>
                              <option value="USA">United States of America</option>
                              <option value="India">India</option>
                          </select>
                          </div>
                          <div>
                          <div><b>Currency</b></div>
                          <div id="currency">{currency}</div>
                          </div>
                          <input id="accnum" type="number" defaultValue={this.state.acc_num} placeholder="Account Number"></input>
                          <input id="ifsc" type="text" defaultValue={this.state.ifsc} placeholder="IFSC Number"></input>
                          <div className="buttons"> 
                          <button onClick={this.previous_bankdetails}>Previous</button>
                          <button type="submit">Next</button>
                          </div>
                      </form>
                }

                {(this.state.type_00==="personal_address") && 
                     <form id="address" onSubmit={this.submitting_address}>
                        <div>
                            <div><b>Country</b></div>
                            <select id="address_country">
                                <option value="IN">INDIA</option>
                                <option value="USA">USA</option>
                            </select>
                        </div>
                        <input type="text" id="city" placeholder="City"defaultValue={this.state.city}></input>
                        <input type="number" id="pincode" placeholder="PinCode" defaultValue={this.state.pincode}></input>
                        <input type="text" id="add_address" placeholder="Address" defaultValue={this.state.address}></input>
                        <div className="buttons">
                        <button onClick={this.previous_address}>Previous</button>
                        <button type="submit">Submit</button>
                        </div>
                    </form>
                }
            </div>
            }
            </>
        )
    }
}
export default Form 